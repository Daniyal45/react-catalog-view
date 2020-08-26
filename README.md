<p align="center">
   <img style="width:400px;" src="https://yvxpda.dm.files.1drv.com/y4mfy3VbPUfHHhYQQGq3lxpSlXI-K60pVH1qBXRb9uCW_helacCk7SZFYtS2TjYiXNKOc9GjhbCh6hRxvZEHbu8yAsPm8QvwO6wK3FvpQSzbsnSgOLK4xto3omoe8oXNbkCNt7bN0RywJMrOryFUPoDZDJaYCeQmlH2dAPy6fB3nq5IQZ06nLVSJAfUI7Ez0iMLhky4-AVegXqbnWQo0fpCcQ?width=572&height=520&cropmode=none" alt="logo"/>
</p>

# Introduction

React component to render catalog view for products, services or any other E-commerce applications.

<img src="https://s7.gifyu.com/images/rcv-demo-0.gif" alt="rcv-demo" />

### Features:

 - **JSON data array:**
    Accepts formatted JSON data array and renders them as cards in a catalog view.

 - **Fully Customizable:**
    Classes can be overridden easily to customize catalog view.
    
 - **Responsive FlexBox:**
    Based on CSS flexbox. Default view is responsive for all screens.    

 - **Card Sizes:**
    Cards are available in small, medium and large size.

 - **Custom Action Buttons:**
    Two action buttons with custom css, button text & custom callbacks on click event.
    
- **Skeleton Loading:**
    Show custom number of skeleton content cards while loading.    

 - **Lightweight:**
    No additional dependencies or CSS Framework required.

 

### Preview:  
 
*Responsive on small screens*
<p align="center">
   <img src="https://yvxw5g.dm.files.1drv.com/y4m7yt3c1-jLnu7C95UjGi-1uF2gb6d5xUvEg66oBxFs1tXC26lL2LbcugiRLQSO9WbMWkaVVNFiWqgDuYQWTurnEE4AR-Qvftf03QWOjxMATmLyHaJAYGQ_ZYh9NVx79g3DX5QO505dcUgOyJdsnPDFruhN8zh8HI0ARTftdinTY4lu1HDZBfOwN2xMfuUzIs3vmYV_e9GGXPXfTAopSYOeA?width=492&height=413&cropmode=none" alt="rcv-demo-2" />
</p>

*Skeleton loading*

<img src="https://s7.gifyu.com/images/rcv-demo-5.gif" alt="rcv-demo-3" />

*With Custom CSS*

<img src="https://yvxbra.dm.files.1drv.com/y4mkhaZ1MA1sFZI5MQFhBG08z6T1h9Wmp4n2FdrwKwnN5Q94VQHCLpChdr4IUblFVZnQvijjfvbovV4oHOSDujU926P3niBkyBud70CqbJ4Y4-qoKDt35pgsIV7bEmleFjYcGHi_fYJvj0A5fsac3XbiSoLnEAKLKHm9Jng5qDpM0JLf40RBd2zb9gw2CEuIHO4A32ehs-B8lltdTKOdLYcyQ?width=1334&height=355&cropmode=none" alt="rcv-demo-4" />

*E-Commerce Example*

<img src="https://yvzcua.dm.files.1drv.com/y4mhpXvOm_6wb8vy7w5quU5Lc0R2ghFBbEvCri6yMpgoxc3wrymFaKvJaMJh6718aAvFoIidrHVro11ONCkl5UHViKGL2GeN-mrjXXBmCLW70AvGOccGHhwJLcUaRhyRnJJlrl0UV43qHjllz0-3o-7hp98i06C8N0fRq7PUsGCRUFmmHH-UcI2vYTj7raju0OLi76-tHYyoIPzLZTG3UHSXA?width=1310&height=450&cropmode=none" alt="rcv-demo-5" />

### Example:
```js  
    import React from 'react';
    import Catalog from "react-catalog-view";
    
    function ProductData(props){
      let products = 
       [
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
            image: "http://domain.com/images/5.jpg",
         },
         {
            id: 3,
            title: "Heels",
            description: "Fashionable trendy heels.",
            currency: "$",
            price: "30",
            image: "http://domain.com/images/6.jpg",
         }
      ];

      const CONTENT_KEYS = 
      {             
         imgKey: "image",
         cardTitleKey: "title",
         cardDescriptionKey: "description",
         priceKey: "price",
         discountedPriceKey: "discounted",
         priceCurrencyKey: "currency",
         discountCurrencyKey: "currency"
      };
	
      return(
        <Catalog
           data = {products}		
           // Array of JSON Objects (required)
           contentKeys={CONTENT_KEYS}  
           // JSON Object defining the keys that will be 
           // used from the data array, keys should match. (required)
           cardSize="sm"
           // Card sizes, sm, md and lg for small, medium  and large
           btnOneText="View"
           // Enter text for action button one 
           // or pass empty string to hide.  
           btnTwoText="Purchase Now"
           // Enter text for action button two 
           // or pass empty string to hide.
           btnOneHandler={(args, event, objectData)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           btnTwoHandler={(args, event, row)=>{
            // 'objectData' returns object data
            // any arguments passed will be before 'event' 
            // and 'objectData'
           }}
           skeleton={0}
           // Any non zero number will override default cards
           // and will show that many skeleton cards.
        />
      )
  }
```
### Props:
Prop | Type | Description
---- | ---- | ----
data        | Array | Array of JSON objects to be rendered (required)|
contentKeys | JSON | JSON object which matches the keys in 'data' array (required) <pre>{ <br/> imgKey: "image", <br/> cardTitleKey: "title", <br/> cardDescriptionKey: "description", <br/> priceKey: "price", <br/> discountedPriceKey: "discounted", <br/> priceCurrencyKey: "currency",<br /> discountCurrencyKey: "currency" <br/>} </pre>
cardSize  | String | Card sizes, sm, md and lg for small, medium  and large |
btnOneText    | String | Enter text for action button one or pass empty string to hide |
btnTwoText    | String | Enter text for action button two or pass empty string to hide |
btnOneHandler | callback | Callback function for onClick
btnTwoHandler | callback | Callback function for onClick

### CSS Classes:

Default CSS classes for easy css customization.

ClassName | Description
---- | ----
rcv-container-custom | For parent container
rcv-object-sm-custom <br/> @media(max-width: 575px) | For container of small cards
rcv-object-md-custom <br/> @media(max-width: 575px) | For container of medium cards
rcv-object-lg-custom <br/> @media(max-width: 575px) | For container of large cards
rcv-catalog-card-custom | For customizing card 
rcv-product-image-container-custom | For product image container 
rcv-product-image-container-custom>img | For product image
rcv-product-text-custom | For product text
rcv-product-name-custom | For product name
rcv-product-description-custom | For product description
rcv-original-price-custom | For original price text
rcv-discount-price-custom | For discount price text
rcv-btn-one-custom | For button one 
rcv-btn-two-custom | For button two 

### Support:  
For support contact: adnanali17official@gmail.com, daniyal_09.2005@hotmail.com
