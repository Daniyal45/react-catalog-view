import React, { Component } from "react";
// import PropTypes from 'prop-types';
import "./Catalog.css";

import PLACEHOLDER from './../../utils/svgs/placeholder.svg';
//const PLACEHOLDER = require("./../../utils/svgs/placeholder.svg");
let CARD_CLASS = {
	sm: "rcv-catalog-card rcv-catalog-card-custom rcv-card-sm rcv-catalog-card-custom",
	md: "rcv-catalog-card rcv-catalog-card-custom rcv-card-md rcv-catalog-card-custom",
	lg: "rcv-catalog-card rcv-catalog-card-custom rcv-card-lg rcv-catalog-card-custom"
};

const OBJECT_CLASS = {
	sm: "rcv-object rcv-object-sm rcv-object-sm-custom",
	md: "rcv-object rcv-object-md rcv-object-md-custom",
	lg: "rcv-object rcv-object-lg rcv-object-lg-custom"
};

let btnOneHandler = () => { return; }
let btnTwoHandler = () => { return; }

const PACKAGE_DOCUMENT_PAGE  = "https://www.npmjs.com/package/react-table-lite";

export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productArray:[],
			contentKeys:{},
			cardSize:"md",
			skeletonCards : 0,
			btnOneText: "",
			btnTwoText: "",
			btnOneStyle : {},	
			btnTwoStyle: {}		
		}
	}

	componentDidMount = () => {
		this.getProps();
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps !== this.props) {
			this.getProps();
		}
	}

	getProps = () => {
		let data = [];
		let cardSize = "md";
		let btnOneText = "";
		let btnTwoText = "";
		let contentKeys = {};
		let skeletonCards = 0;
		let btnOneStyle, btnTwoStyle = {};
		if (this.props.data === undefined || !Array.isArray(this.props.data)){
			data = [];
			console.warn("'data' is a required prop. For more details \n "+ PACKAGE_DOCUMENT_PAGE);
		}
		else
			data = this.props.data;

		if( this.props.cardSize !== undefined && typeof this.props.cardSize !== 'string' ){
			console.warn("'cardSize' should be valid string. For more details \n "+ PACKAGE_DOCUMENT_PAGE);
		}
		else
			cardSize = this.props.cardSize===undefined?cardSize:this.props.cardSize;			
		
		btnOneText = this.props.btnOneText === undefined || typeof this.props.btnOneText !== 'string' ? btnOneText : this.props.btnOneText;
		btnTwoText = this.props.btnTwoText === undefined || typeof this.props.btnTwoText !== 'string' ? btnTwoText : this.props.btnTwoText;
		btnOneHandler = this.props.btnOneHandler === undefined ? btnOneHandler : this.props.btnOneHandler;
		btnTwoHandler = this.props.btnTwoHandler === undefined ? btnTwoHandler : this.props.btnTwoHandler;
		contentKeys = this.props.contentKeys === undefined ? {} : this.props.contentKeys;
		skeletonCards = this.props.skeletonCards === undefined || isNaN(this.props.skeletonCards) ? 0 : this.props.skeletonCards;		
		btnOneStyle = this.props.btnOneStyle === undefined ? {} : this.props.btnOneStyle;
		btnTwoStyle = this.props.btnTwoStyle === undefined ? {} : this.props.btnTwoStyle;

		this.setState( { 
				productArray: data,
				cardSize: cardSize,	
				btnOneText:btnOneText,
				btnTwoText:btnTwoText,
				contentKeys:contentKeys,
				skeletonCards:skeletonCards,
				btnOneStyle: btnOneStyle,
				btnTwoStyle: btnTwoStyle
		});
	}

	GenerateProductCard = (data_object,index) => {		
		return(
			<div className={CARD_CLASS[this.state.cardSize]}>
				<div className="rcv-card-content">
					<div className="rcv-product-image-container rcv-product-image-container-custom">
						<img 
							src={
								data_object[this.state.contentKeys.imgKey]===undefined || data_object[this.state.contentKeys.imgKey].trim()===""?
								PLACEHOLDER
								:
								data_object[this.state.contentKeys.imgKey]
							} 
							onError={(e)=>{this.onError=null; e.target.src = PLACEHOLDER;}} 
							alt={"product-"+index} />
					</div>
					<div className="rcv-card-text">
						<div className="rcv-product-text rcv-product-text-custom">
							<h4 
								className="rcv-product-name-custom"
							>
								{data_object[this.state.contentKeys.cardTitleKey]}
							</h4>
							<div className="rcv-product-description rcv-product-description-custom">
								{data_object[this.state.contentKeys.cardDescriptionKey]}
							</div>
						</div>
						<div className="rcv-product-price">
							<div 
								className={
									data_object[this.state.contentKeys.discountedPriceKey] === undefined || 
									data_object[this.state.contentKeys.discountedPriceKey] ==="" ?
									"rcv-original rcv-original-price-custom" : "rcv-original rcv-original-price-custom rcv-strike"
								}
							>
								{
									(data_object[this.state.contentKeys.priceKey])  +  
										(this.state.contentKeys.priceCurrencyKey === undefined || this.state.contentKeys.priceCurrencyKey===""?
										""
										:
										data_object[this.state.contentKeys.priceCurrencyKey])
								}
							</div>
							{data_object[this.state.contentKeys.discountedPriceKey] === undefined || 
							 data_object[this.state.contentKeys.discountedPriceKey] ==="" ?
								""
							:
								<div className="rcv-discount rcv-discount-price-custom">
									{
										(data_object[this.state.contentKeys.discountedPriceKey]) +
										(this.state.contentKeys.discountCurrencyKey === undefined || this.state.contentKeys.discountCurrencyKey===""?
										""
										:
										data_object[this.state.contentKeys.discountCurrencyKey])
									}
								</div>	
							}						
						</div>
						<div className="rcv-product-buttons">
							{this.state.btnOneText.trim().length?
								<button 
									style={this.state.btnOneStyle}
									className="rcv-btn-one rcv-btn-one-custom"
									onClick={(e,...args)=>{btnOneHandler(...args,e,data_object)}}
								> 
									{this.state.btnOneText} 
								</button>
							:
								""
							}
							{this.state.btnTwoText.trim().length?
								<button
									style={this.state.btnTwoStyle}
									className="rcv-btn-two rcv-btn-two-custom"
									onClick={(e,...args)=>{btnTwoHandler(...args,e,data_object)}}
								> 
									{this.state.btnTwoText}
								</button>
							:
								""
							}
						</div>
					</div>
				</div>
			</div>
		)
	}

	GenerateSkeletonCard = () => {
		return (
			<div className={CARD_CLASS[this.state.cardSize]}>
				<div className="rcv-card-content">
					<div className="rcv-product-image-container">
						<div className="skeleton sk-img">
							<div className="skeleton-animate"></div>
						</div>
					</div>
					<div className="rcv-card-text">
						<div className="rcv-product-text rcv-product-text-custom">
							<h4 className="skeleton">
								<div className="skeleton-animate"></div>
								Skeleton Header
							</h4>
							<div className="rcv-product-description skeleton">
								<div className="skeleton-animate"></div>
								Skeleton Description
							</div>
						</div>
						<div className="rcv-product-price skeleton">
							<div className="skeleton-animate"></div>
								Skeleton Price
						</div>
						<div className="rcv-product-buttons">
						</div>
					</div>
				</div>
			</div>
		)
	}

	GenerateCatalogView = () => {
		return (
			<div className="rcv-container rcv-container-custom">
				{this.state.productArray.length ?
					this.state.productArray.map((product, index) => (
						<div className={OBJECT_CLASS[this.state.cardSize]} key={index}>							
							{this.GenerateProductCard(product, index)}
						</div>
					))
					:
					""
				}
			</div>
		)
	}

	GenerateSkeletonView = () => {
		let numberOfCards = this.state.skeletonCards;
		const cards = Array.apply(null, Array(numberOfCards))
		return (
			<div className="rcv-container rcv-container-custom">
				{cards.map((element) => (
					<div className={OBJECT_CLASS[this.state.cardSize]} key={numberOfCards--}>
						{this.GenerateSkeletonCard()}
					</div>
				))
				}
			</div>
		)
	}

	MasterCatalogView = () => {
		return(
			<>
				{this.state.skeletonCards ?
					this.GenerateSkeletonView()
					:
					this.GenerateCatalogView()
				}
			</>
		)
	}

	render() {
		return (
			<>
				{this.MasterCatalogView()}
			</>
		)
	}
}

