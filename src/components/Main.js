import React from "react";
import Catalog from './catalog/Catalog';
import './Main.css';
// import Catalog from './../../dist/catalog.esm'; // test build

let data = [
  {
    id: 1,
    title: "Canvas",
    description: "High quality canvas shoes.",
    price: "20",
    discounted: "15",
    currency: "$",
    image: "http://domain.com/images/1.jpg",
  },
  {
    id: 2,
    title: "Sport shoes",
    description: "Sporty shoes, durable at affordable ranges.",
    price: "25",
    currency: "$",
    discounted: "15",
    image: "Shoe 3.jpg",
  },
  {
    id: 3,
    title: "Heels",
    description: "Fashionable trendy heels.",
    currency: "$",
    price: "30",
    image: "Shoe 2.jpg",
  },
  {
    id: 4,
    title: "Sneakers",
    description: "Red sneakers shoes.",
    currency: "$",
    price: "22",
    image: "Shoe 1.jpg",
  },
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: [],
      selectedImage: '',
      size: 'sm',
      loading: 0,
      showNav: true
    };
  }

  contentKeys1 =
    {
      imgKey: "image",
      cardTitleKey: "title",
      cardDescriptionKey: "description",
      priceKey: "price",
      discountedPriceKey: "discounted",
      priceCurrencyKey: "currency",
      discountCurrencyKey: "currency",
    }
  contentKeys2 =
    {
      imgKey: "product_img",
      cardTitleKey: "name",
      cardDescriptionKey: "summary",
      priceKey: "weight",
      discountedPriceKey: "weight",
      priceCurrencyKey: "currency",
      discountCurrencyKey: "currency",
    }
    contentKeys3 =
    {
      imgKey: "product_img"
    }

  componentDidMount = () => {
    // this.getLocalApiData();
    this.getLiveApiData();
  }

  someFunction(arg1, e, data) {
    console.log("arg1", arg1);
    console.log("e", e);
    console.log("row", data);
  }

  remove(e, objectData) {
    // console.log("data",data);
    data = data.filter(project => project.id !== objectData.id);
    let rawData = this.state.rawData.filter(project => project.id !== objectData.id);
    this.setState({
      rawData: rawData
    });
  }

  getLocalApiData() {
    this.setState({ loading: 5 });
    const url = "http://localhost:3000/api/testData";
    fetch(url, { method: "GET" })
      .then(response => response.json())
      .then((result) => {
        this.setState({
          rawData: result.data,
          loading: 0
        });
      }
      )
  }

  getLiveApiData() {
    this.setState({ loading: 5 });
    const url = "http://api.tvmaze.com/shows";
    setTimeout(() => {

      fetch(url, { method: "GET" })
        .then(response => response.json())
        .then((result) => {
          let custom = [];
          result.forEach((element, index) => {
            if (index > 4) {
              return;
            }
            else {
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

    }, 5000);

  }

  handleSizeChange(e) {
    this.setState({ size: e });
  }


  DumpCatalogView() {
    const CUSTOM_INPUTS = (dataObj) =>
      <div>
        {dataObj.title === 'Sport shoes'
          ? <div style={{ color: 'tomato' }}> Out Of Stock 
             <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <button
                disabled
                style={{
                  color: 'white',
                  margin: '5px 0',
                  cursor: 'pointer',
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  borderRadius: "0.25rem",
                  backgroundColor: '#007bff',
                  opacity:'0.6',
                  padding: "0.375rem 0.75rem",
                  border: "1px solid transparent",
                  width: '100%'
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  style={{ verticalAlign: "middle", marginRight: '8px' }}
                  display="inline-block"
                >
                  <g>
                    <g>
                      <path d="M52.2 39.993a2.997 2.997 0 002.536-1.763l9-20-.006-.002c.17-.375.27-.789.27-1.228a3 3 0 00-3-3H16.578l-1.747-4.991-.011.004A2.99 2.99 0 0012 7H3a3 3 0 100 6h6.872l11.55 33H16a6 6 0 106 6h28a6 6 0 106-6H27.778l-1.497-4.279L52.2 39.993zm-27.976-4.147L18.679 20h37.68l-6.356 14.127-25.779 1.719z"></path>
                    </g>
                  </g>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
            </div>
          : <>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
              <input
                placeholder="Qty"
                type='number'
                min={1}
                onChange={e => console.log('EVENT', e, '\nDATA', dataObj)}
                style={{
                  padding: '0 0.2rem',
                  fontSize: '1rem',
                  width: '100%',
                  lineHeight: '1.5',
                }}
              />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <button
                onClick={e => console.log('EVENT', e, '\nDATA', dataObj)}
                style={{
                  color: 'white',
                  margin: '5px 0',
                  cursor: 'pointer',
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  borderRadius: "0.25rem",
                  backgroundColor: '#007bff',
                  padding: "0.375rem 0.75rem",
                  border: "1px solid transparent",
                  width: '100%'
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 64 64"
                  style={{ verticalAlign: "middle", marginRight: '8px' }}
                  display="inline-block"
                >
                  <g>
                    <g>
                      <path d="M52.2 39.993a2.997 2.997 0 002.536-1.763l9-20-.006-.002c.17-.375.27-.789.27-1.228a3 3 0 00-3-3H16.578l-1.747-4.991-.011.004A2.99 2.99 0 0012 7H3a3 3 0 100 6h6.872l11.55 33H16a6 6 0 106 6h28a6 6 0 106-6H27.778l-1.497-4.279L52.2 39.993zm-27.976-4.147L18.679 20h37.68l-6.356 14.127-25.779 1.719z"></path>
                    </g>
                  </g>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </>
        }
      </div>;

    return (
      <div>
        <label htmlFor="card-size" style={{ margin: "5px 5px" }}>Size:</label>
        <button className={this.state.size === "sm" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("sm") }} value="sm">small</button>
        <button className={this.state.size === "md" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("md") }} value="md">medium</button>
        <button className={this.state.size === "lg" ? "red" : "blue"} onClick={(e) => { this.handleSizeChange("lg") }} value="lg">large</button>
        <h2> Normal Catalog </h2>
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
        <h2> Custom Input Catalog </h2>
        <Catalog
          data={data}
          cardSize={this.state.size}
          skeleton={this.state.loading}
          contentKeys={this.contentKeys1}
          cardControls={CUSTOM_INPUTS}
          cardControlsChangeHandler={(e, data) => console.log('EVENT', e, '\nDATA', data)}
          cardControlsSubmitHandler={(e, data) => console.log('EVENT', e, '\nDATA', data)}
        />
        <div style={{display: 'flex', alignItems:'center'}}> <h2> Catalog As Gallery </h2>  <span style={{margin: '0px 10px'}}>(Click on Image)</span> </div>
        <Catalog
          data={this.state.rawData}
          cardSize={this.state.size}
          skeleton={this.state.loading}
          contentKeys={this.contentKeys3}
          imageClickHandler={(e, data) => { 
            console.log('EVENT', e, '\nDATA', data);
            this.setState({ selectedImage: data.product_img });
          }}
        />        
      </div>
    )
  }


  TestEcommerceView() {
    return (
      <div className="test-view-withnav" style={{ height: "100%" }}>
        <div style={{ width: "100%", height: "50px", background: "#9b4dca", display: "flex", alignItems: 'center', color: "white" }}>
          <div style={{ padding: "5px" }} onClick={() => { this.setState({ showNav: !this.state.showNav }); }}>
            <div style={{ width: "7px", backgroundColor: "white", border: "solid 1px white", padding: "0px 7px", margin: "4px" }} />
            <div style={{ width: "7px", backgroundColor: "white", border: "solid 1px white", padding: "0px 7px", margin: "4px" }} />
            <div style={{ width: "7px", backgroundColor: "white", border: "solid 1px white", padding: "0px 7px", margin: "4px" }} />
          </div>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.3em", padding: "0 5px", marginLeft: "20px" }}>Ecommerce Store </div>
            <div
              style={{ display: "flex", marginRight: "15px" }}
            >
              <div style={{ marginRight: "10px", marginTop: "2px" }}>
                <div
                  style={{
                    height: "12px",
                    width: "12px",
                    border: "2px solid white",
                    borderRadius: "100px",
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
          <div id='sidenav' style={{ display: this.state.showNav ? "unset" : "none", width: "170px", height: "calc(100vh-50px)" }}>
            <ul>
              <li> Home </li>
              <li> View Cart </li>
              <li> About Us </li>
              <li> Contact </li>
            </ul>
          </div>
          <div style={{ width: this.state.showNav ? "calc(100% - 170px)" : "100%", overflow: "auto", padding: '0 10px ' }}>
            {this.DumpCatalogView()}
          </div>
        </div>
        {this.state.selectedImage &&
            <div id="myModal" className="modal">
              {/* Modal content */}
              <div className="modal-content">
                <div style={{position:'relative'}}>
                  <span className="close" onClick={()=> this.setState({ selectedImage: '' })} > × </span>
                  <img src={this.state.selectedImage} style={{width: '100%'}}/>
                 </div> 
              </div>
            </div>
          }
      </div>
    )
  }
  render() {
    return (
      <>
        {this.TestEcommerceView()}
      </>
    )
  }
}
