import React from "react";
import Catalog from './catalog/Catalog';

let data = [
  {
    id: 1,
    title: "Canvas",
    description: "High quality canvas shoes.",
    price: "20",
    discounted: "15",
    currency: "$",
    image: "http://domain.com/images/dsd1.jpg",
  },
  {
    id: 2,
    title: "Sport shoes",
    description: "Sporty shoes, durable at affordable ranges.",
    price: "25",
    currency: "$",
    discounted: "15",
    image: "http://domain.com/images/ds5.jpg",
  },
  {
    id: 3,
    title: "Heels",
    description: "Fashionable trendy heels.",
    currency: "$",
    price: "30",
    image: "http://domain.com/images/ds6.jpg",
  },
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      rawData:[],
      size:'sm',
      loading:0,
      showNav: true
	  };
  }

  contentKeys1 = 
  {             
    imgKey:"image",
      cardTitleKey:"title",
      cardDescriptionKey:"description",
      priceKey:"price",
      discountedPriceKey:"discounted",
      priceCurrencyKey:"currency",
      discountCurrencyKey:"currency",
    }
  contentKeys2 = 
    {
      imgKey: "product_img",
      cardTitleKey: "name",
      cardDescriptionKey: "summary",
      priceKey: "weight",
      discountedPriceKey: "weight",
      priceCurrencyKey:"currency",
      discountCurrencyKey:"currency",
    }

  componentDidMount = () => {
    // this.getLocalApiData();
    this.getLiveApiData();
  }

  someFunction(arg1,e,data){
    console.log("arg1",arg1);
    console.log("e",e);
    console.log("row",data);
  }
  
  remove(e,objectData){
    // console.log("data",data);
    data = data.filter(project=>project.id !== objectData.id);
    let rawData = this.state.rawData.filter(project=>project.id !== objectData.id);
    this.setState({
      rawData: rawData
    });
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
    setTimeout(()=>{

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

    },5000);    

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
          // data={this.state.rawData}
          data={data}
          cardSize={this.state.size}
          btnOneHandler={this.someFunction.bind(this, 78)}
          btnTwoHandler={this.remove.bind(this)}
          btnOneText="View"
          btnTwoText="Remove"
          skeleton={this.state.loading}
          contentKeys={this.contentKeys1}
        />
      </div>
    )
  }


  TestEcommerceView() {
    return (
      <div className="test-view-withnav" style={{ height: "100%" }}>
        <div style={{ width: "100%", height: "50px", background: "#9b4dca", display: "flex", alignItems: 'center', color: "white" }}>
          <div style={{padding:"5px"}} onClick={()=>{this.setState({showNav:!this.state.showNav});}}>
            <div style={{ width:"7px", backgroundColor:"white",  border:"solid 1px white", padding:"0px 7px" , margin: "4px"}}/>
            <div style={{ width:"7px", backgroundColor:"white",  border:"solid 1px white", padding:"0px 7px" , margin: "4px"}}/>
            <div style={{ width:"7px", backgroundColor:"white",  border:"solid 1px white", padding:"0px 7px" , margin: "4px"}}/>
          </div>
          <div style={{ display:"flex", width:"100%", justifyContent:"space-between" }}>
            <div style={{ fontSize: "1.3em", padding: "0 5px", marginLeft: "20px" }}>Ecommerce Store </div>
            <div 
              style={{ display:"flex", marginRight:"15px" }}
            >
              <div style={{marginRight:"10px", marginTop:"2px"}}>
                <div
                style={{ 
                  height:"12px",
                  width:"12px",
                  border:"2px solid white",
                  borderRadius:"100px",
                }}
                />            
                <div
                style={{ 
                  height: "8px",
                  borderLeft: "2px solid white",
                  position: "relative",
                  left: "13px",
                  transform: "rotate(-45deg)",
                  bottom: "9px"
                }}
                />
              </div>
              <input

                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  outline: "none",
                  border: "none",
                  borderBottom: "1px solid",
                  padding: "0 5px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
          <div id='sidenav' style={{ display: this.state.showNav? "unset": "none" , width: "170px", height: "calc(100vh-50px)" }}>
            <ul>
              <li> Home </li>
              <li> View Cart </li>
              <li> About Us </li>
              <li> Contact </li>
            </ul>
          </div>
          <div style={{ width: this.state.showNav? "calc(100% - 170px)" : "100%", overflow: "auto", padding: '0 10px ' }}>
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
 