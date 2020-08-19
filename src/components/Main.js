import React from "react";
import Catalog from './catalog/Catalog';


export default class Main extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      rawData:[],
      size:'sm'
	  };
  }

  componentDidMount = () => {
      this.getData();
  }

  someFunction(arg1,e,data){
    console.log("arg1",arg1);
    console.log("e",e);
    console.log("row",data);
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
						else{
              element["product_img"] = element.image["original"];
              custom.push(element);
            }
					});
					this.setState({rawData:custom});
				}
			)
    }
    handleSizeChange(e){
      this.setState({ size: e.target.value });
    }
    render(){
      return(
        <div>
          <label htmlFor="card-size">Size:</label>
          <select id="card-size" onChange={(e)=>{this.handleSizeChange(e)}}>
              <option value="sm">small</option>
              <option value="md">medium</option>
              <option value="lg">large</option>
          </select>
          <Catalog 
            data={this.state.rawData}            
            cardSize={this.state.size}
            btnOneHandler = {this.someFunction.bind(this,78)}
            btnTwoHandler = {this.someFunction.bind(this,79)}            
            btnOneText="Details"
            btnTwoText="Purchase Now"
            skeletonCards={"tete"}
            contentKeys={{             
              imgKey:"product_img",
              cardTitleKey:"name",
              cardDescriptionKey:"summary",
              priceKey:"weight",
              discountedPriceKey:"weight"
            }}            
          />
        </div>
      )
    }
  }
 