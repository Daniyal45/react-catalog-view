import React from "react";
import Catalog from './catalog/Catalog';


export default class Main extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      rawData:[],
      size:'sm',
      loading:0,
	  };
  }

  contentKeys = 
    {             
      imgKey:"image",
      cardTitleKey:"title",
      cardDescriptionKey:"description",
      priceKey:"price",
      discountedPriceKey:"discounted",
      priceCurrencyKey:"currency",
      discountCurrencyKey:"currency",
    }
    // {
    //   imgKey: "product_img",
    //   cardTitleKey: "name",
    //   cardDescriptionKey: "summary",
    //   priceKey: "weight",
    //   discountedPriceKey: "weight",
    //   priceCurrencyKey:"currency",
    //   discountCurrencyKey:"currency",
    // }

  componentDidMount = () => {
    this.getLocalApiData();
    // this.getLiveApiData();
  }

  someFunction(arg1,e,data){
    console.log("arg1",arg1);
    console.log("e",e);
    console.log("row",data);
  }

  getLocalApiData(){
    this.setState({loading:5});   
    const url = "http://localhost:3000/api/testData";
		fetch(url,{method:"GET"})
			.then(response => response.json())
			.then((result)=>{				
					this.setState({
            rawData:result.data, 
            loading: 0
          });
				}
			)
    }

  getLiveApiData() {
    this.setState({ loading: 5 });
    const url = "http://api.tvmaze.com/shows";    
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then((result) => {
        let custom = [];
        result.forEach((element,index) => {						
        	if (index > 3){
        		return;
        	}
        	else{
            element["product_img"] = element.image["original"];
            element["currency"] = "$";
            custom.push(element);
          }
        });
        this.setState({ 
          rawData: custom, 
          loading: 0 
        });
      }
      )
  }

    handleSizeChange(e){
      this.setState({ size: e });
    }
    
    
  DumpCatalogView() {
    return (
      <div>
        <label htmlFor="card-size" style={{ margin: "5px 5px" }}>Size:</label>
        <button className={this.state.size === "sm" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("sm") }} value="sm">small</button>
        <button className={this.state.size === "md" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("md") }} value="md">medium</button>
        <button className={this.state.size === "lg" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("lg") }} value="lg">large</button>
        <Catalog
          data={this.state.rawData}
          cardSize={this.state.size}
          btnOneHandler={this.someFunction.bind(this, 78)}
          btnTwoHandler={this.someFunction.bind(this, 79)}
          btnOneText="View"
          btnTwoText="Purchase Now"
          skeleton={this.state.loading}
          contentKeys={this.contentKeys}
        />
      </div>
    )
  }


  TestEcommerceView() {
    return (
      <div className="test-view-withnav" style={{ height: "100%" }}>
        <div style={{ width: "100%", height: "50px", background: "#9b4dca", display: "flex", alignItems: 'center', color: "white" }}>
          <div style={{ fontSize: "1.3em", padding: "0 5px", marginLeft: "20px" }}>Ecommerce Store </div>
        </div>
        <div style={{ display: "flex" }}>
          <div id='sidenav' style={{ width: "170px", height: "calc(100vh-50px)" }}>
            <ul>
              <li> Home </li>
              <li> View Cart </li>
              <li> About Us </li>
              <li> Contact </li>
            </ul>
          </div>
          <div style={{ height: "400px", width: "calc(100% - 170px)", overflow: "auto", padding: '0 10px ' }}>
            {this.DumpCatalogView()}
          </div>
        </div>
      </div>
    )
  }
    render(){
      return(
        <>
          {this.TestEcommerceView()}
        </>
      )
    }
  }
 