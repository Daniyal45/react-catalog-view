import React, { Component } from "react";
// import PropTypes from 'prop-types';
import "./Catalog.css";

const PLACEHOLDER = require("./../../utils/svgs/placeholder.svg");
let CARD_CLASS = {
	sm: "rcv-catalog-card rcv-card-sm",
	md: "rcv-catalog-card rcv-card-md",
	lg: "rcv-catalog-card rcv-card-lg"
};

const OBJECT_CLASS = {
	sm: "rcv-object rcv-object-sm",
	md: "rcv-object rcv-object-md",
	lg: "rcv-object rcv-object-lg"
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
			btnOneText: "View",
			btnTwoText: "Add to Cart",			
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
		let btnOneText = "View";
		let btnTwoText = "Add to Cart";
		let contentKeys = {};
		let skeletonCards = 0;
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
		
		this.setState( { 
				productArray: data,
				cardSize: cardSize,	
				btnOneText:btnOneText,
				btnTwoText:btnTwoText,
				contentKeys:contentKeys,
				skeletonCards:skeletonCards	
		});
	}

	GenerateProductCard = (data_object,index) => {		
		return(
			<div className={CARD_CLASS[this.state.cardSize]}>
				<div className="rcv-card-content">
					<div className="rcv-product-image-container">
						<img 
							src={
								data_object[this.state.contentKeys.imgKey]===undefined || data_object[this.state.contentKeys.imgKey].trim()===""?
								PLACEHOLDER
								:
								data_object[this.state.contentKeys.imgKey]
							} 
							alt={"product-"+index} />
					</div>
					<div className="rcv-card-text">
						<div className="rcv-product-title">
							<h4>{data_object[this.state.contentKeys.cardTitleKey]}</h4>
							<div className="rcv-product-description">
								{data_object[this.state.contentKeys.cardDescriptionKey]}
							</div>
						</div>
						<div className="rcv-product-price">
							<div 
								className={
									data_object[this.state.contentKeys.discountedPriceKey] === undefined || 
									data_object[this.state.contentKeys.discountedPriceKey] ==="" ?
									"rcv-original" : "rcv-original rcv-strike"
								}
							>
								{data_object[this.state.contentKeys.priceKey]}
							</div>
							{data_object[this.state.contentKeys.discountedPriceKey] === undefined || 
							 data_object[this.state.contentKeys.discountedPriceKey] ==="" ?
								""
							:
								<div className="rcv-discount">
									{data_object[this.state.contentKeys.discountedPriceKey] - 5}
								</div>	
							}						
						</div>
						<div className="rcv-product-buttons">
							{this.state.btnOneText.trim().length?
								<button 
									onClick={(e,...args)=>{btnOneHandler(...args,e,data_object)}}
								> 
									{this.state.btnOneText} 
								</button>
							:
								""
							}
							{this.state.btnTwoText.trim().length?
								<button
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
						<div className="rcv-product-title">
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
			<div className="rcv-container">
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
			<div className="rcv-container">
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

