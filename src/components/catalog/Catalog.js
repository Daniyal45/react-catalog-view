import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Catalog.css";


const cardClass = "rcv-catalog-card rcv-card-lg";
const objectClass = "rcv-object rcv-object-lg";
export default class Catalog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rawData:[]
		}
	}
	componentDidMount = () => {
		this.getData();
	}

	getData(){
		const url = "http://api.tvmaze.com/shows";
		fetch(url,{method:"GET"})
			.then(response => response.json())
			.then((result)=>{
					let custom = [];
					result.forEach((element,index) => {						
						if (index > 10){
							return;
						}
						else
							custom.push(element);
					});
					this.setState({rawData:custom});
					console.log(custom);
				}
			)
		}
	GenerateProductCard = (data,index) => {
		return(
			<div className={cardClass}>
				<div className="rcv-card-content">
					<div className="rcv-product-image-container">
						<img src={data.image.original} alt={"product-"+index} />
					</div>
					<div className="rcv-card-text">
						<div className="rcv-product-title">
							<h4>{data.name}</h4>
							<div className="rcv-product-description">
								{data.summary.replace("<p>","").replace("</p>","")}
							</div>
						</div>
						<div className="rcv-product-price">
							<div className="rcv-original">
								{Math.floor(Math.random()*100) + "$"}
							</div>
						</div>
						<div className="rcv-product-buttons">
							<button> View </button>
							<button> Add to Card </button>
						</div>
					</div>
				</div>
			</div>
		)
	}


	GenerateCatalogView = () => {
		return (
			<div className="rcv-container">

				{this.state.rawData.length ?
					this.state.rawData.map((product,index) => (
						<div className={objectClass} key={index}>
							{this.GenerateProductCard(product,index)}
						</div>
					))
					:
					""
				}
			</div>
		)
	}
	render() {
		return (
			<>
				{this.GenerateCatalogView()}
			</>
		)
	}
}

