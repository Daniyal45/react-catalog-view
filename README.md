# React Catalog View

React component to render catalog view for products, services or any other E-commerce applications. 

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
 
*Card Sizes*

<img src="https://s7.gifyu.com/images/rcv-demo-0.gif" alt="rcv-demo" />

*Responsive on small screens*

<img src="https://yvxw5g.dm.files.1drv.com/y4m7yt3c1-jLnu7C95UjGi-1uF2gb6d5xUvEg66oBxFs1tXC26lL2LbcugiRLQSO9WbMWkaVVNFiWqgDuYQWTurnEE4AR-Qvftf03QWOjxMATmLyHaJAYGQ_ZYh9NVx79g3DX5QO505dcUgOyJdsnPDFruhN8zh8HI0ARTftdinTY4lu1HDZBfOwN2xMfuUzIs3vmYV_e9GGXPXfTAopSYOeA?width=492&height=413&cropmode=none" alt="rcv-demo-2" />

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
           btnTwoHandleronRowView={(args, event, row)=>{
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
header      | Array | Array of string will be rendered as table headers (required)|
data        | Array | Array of JSON objects to be rendered in table, keys should match with table headers (required)|
sortBy      | Array | Array of string which matches the headers for sorting data in table body |
searchable  | Boolean | Pass ‘true’ to enable search field |
searchBy    | Array | Array of string which matches the headers for searching data in table body |
download    | Boolean | Pass ‘true’ to enable download csv button |
fileName    | String | String used as default filename for csv files when downloading 
noDataMessage   | String | String used for 'No data' message
limit       | Integer | Limit number of rows to display at a time
containerStyle | Style  | Style object for parent container
headerStyle | Style  | Style object for table header
rowStyle    | Style  | Style object for table rows
dataStyle   | Style  | Style object for table cells
showActions | Boolean | Enable to show actions column
actionTypes | Array | Name of action to enable and show array of string
onRowDelete | callback | Callback function on row delete
onRowEdit   | callback | Callback function on row edit
onRowView   | callback | Callback function on row view

### CSS Classes:

Default CSS classes for easy css customization.

ClassName | Description
---- | ----
react-table-lite-container | For parent container. 
react-table-lite-header    | For table header. 
rtl-table-search-form      | For search field. 
rtl-table-download-btn-css | For CSV download button. 
rtl-action-btn-container   | For action button container.
rtl-action-btn-delete-btn  | For delete action button. 
rtl-action-btn-edit-btn    | For edit action button.
rtl-action-btn-view-btn    | For view action button.
 

### Support:  
For support contact: adnanali17official@gmail.com, daniyal_09.2005@hotmail.com
