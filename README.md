# React Table Lite

A lightweight easy to use and easily customizable React Component for rendering a table from JSON with minimal code.

### Features:

 - **Fully Customizable:**
    Style props and classes can be overridden easily to customize table.

 - **JSON data array:**
    Accepts data array and renders them in respective table headers.
    
 - **Sort data by header:**
    Accepts array of keys which matches with headers for displaying sorted table data.    

 - **Searchable:**
    Data can be searched by providing comma separated search strings. Specify columns to be searched using 'searchBy' props. 

 - **Data limit:**
    Limit data rows for better performance.

 - **Download Table Data:**
    Use ‘download’ prop to enable a button that exports table data as .csv, button is also customizable, default is false.

#### `New!`

- **Row Actions:**
    Use ‘showAction’ prop to append a column in the end of the table which will enable user to use row operations (CRUD) like view, edit and delete, default is false.

- **Custom Actions:**
    If ‘showAction’ prop is enabled, use ‘actionTypes’ to provide which actions to display. If not provided, will display all actions.

- **Actions Callback:**
    If ‘showAction’ prop is enabled, use ‘onRowDelete’,‘onRowEdit’ and ‘onRowView’ to provide respective action callbacks. The last two args of callback will return event and row Object.

- **Customize no data message:**
    Use ‘noDataMessage’ prop to provide empty data message.

### Preview:  
 
*Default View*

<img src="https://1hvwng.dm.files.1drv.com/y4mKkLste69u9HLEPbqBxtQiSohJoLUeaOFHSqACla5g2p89YcZ1iRhIuO2Rtxcg1G27Cjg9xk3trgYpNwHvPul3683kDwtSFFb-rxEChStH-Q97DmH5KaJXEP-CWFkbnVzKNAzbXWPX8OzZ18Y4YBRmmRjxXtA_ggQHnh1jMXBfNZZLUsIcwIr06YnIveG_GOHN3bmvPm8N16eJFxhC_VICw?width=1439&height=429&cropmode=none" alt="react-table-lite-preview-1"/>

*Default View with Customized No Message*

<img src="https://1hxcca.dm.files.1drv.com/y4mW8steaXrZS01mZwkXeVmFVltWTMDUsbGHRniaNMj3ADqBnz7IE5c9zkAMzaUBw5j9U1_7MyQx13VtSgkOUp-CCVU0xNox_wsVZ5QoxaPPhBme3cA5RujT4WM493RnbjtymDZATLtmDI1JYlS1mA_wW7u3Ze4WMDEuLuA-h4GCfcqCS1I0yH7HWJEUl2ANmJfSbTRF377XInSgX1Q60C4iQ?width=1386&height=119&cropmode=none" alt="react-table-lite-preview-5" />

*Default View with Actions*

<img src="https://1hx4wq.dm.files.1drv.com/y4mQd3Rh6pTL13_ZbAjZhTYgbwLgRwcThxRWifiGFvve_ESDxsYo31nEzLcLvLaEqMd1rSMKpubDMUGHjc9A63ttjNOrkvyTYdR2Ev1FSqOuPXurKRs0dcPynMkbG4CyUhawkm6Ba8WkF0731kor9-13Q-NKRXwHhzm8NXe9Xrgs8SG1DcYjc9W3pU4-hg1_YiFFD_bOnRcD7wLKJqV4LQuHQ?width=1386&height=450&cropmode=none" alt="react-table-lite-preview-3" />

*Custom Styling*

<img src="https://1hvkla.dm.files.1drv.com/y4mwtm17SHzMOgaB4IeaIQRjoiaX6hEtI5otNi1uckH2yVMQ0WxVFfDCBNHzWzFQn4JtHzisDnbQLSjCyPIbFWKk40MBeP4rpDe5zJ0aGwSsAIdfI67PV35aIu90OuTUN1z6DYQ8N0QKyIu4O1jfM52UbDy_o9ttf85yQA0Z5FXCEwmHzQ8QJluZCZYQJVk58Zb9ck_uUh4zHjSbBfnd3Z5OQ?width=1439&height=241&cropmode=none" alt="react-table-lite-preview-2" />

*Custom Styling and Actions*

<img src="https://1hunqa.dm.files.1drv.com/y4mBTaCZHenK-IEH4nut36JXKm0lZlH_IFLXC1ItJ-DnbboszwoEQRfgrRo--0qO51WaU6ulpQPQ9agbuPbhtTGEMVkQn5ngHphLYdX6bi4Hxx4QtPk377RtAu8wMpLlf_Qaa4465ZYBQ1-bihNPh9O5hWP2muTdrcwxrhzzORmPg4-CXMHY-OI7MvPJNa9w6Xm__tRyY5nlC9EJF3rh2rAVQ?width=1258&height=339&cropmode=none" alt="react-table-lite-preview-4" />

### Example:
```js  
    import React from 'react';
    import Table from "react-table-lite";
    
    function UserData(props){
      let Users = 
       [
         {id:1 , name:"John Doe", age:"25", email:"JohnDoe@gmail.com"},
         {id:2 , name:"Kazuki Yashiro", age:"35", email:"Y_Kazuki@gmail.com"},
         {id:3 , name:"Eddie Memon", age:"22", email:"Eddie254@gmail.com"},
         {id:4 , name:"Barood Khan", age:"45", email:"BK5454@gmail.com"},
       ];
	
      return(
        <Table
           data = {Users}		
           //Array of JSONObjects(required)
           header = {["id","name","age","email"]}  
           // Headers should be same as data JSON Object's keys (required)
           sortBy = {["name", "age"]}
           // keys for sorting should be present in header array
           searchable={true}
           //Enable table search field
           searchBy={["name", "email"]}
           // keys for sorting should be present in header array
           download = {true}
           //Downloadable data 
           fileName = {"Table_Data"}
           //Default name of downloaded csv file
           noDataMessage={"my custom no data"}
           //Custom no data string.            
           limit = {10}
           //No of rows to display at a time
           containerStyle = {}
           //Customize table container style           
           headerStyle = {}
           //Customize table header style
           rowStyle = {}
           //Customize table row style
           dataStyle = {}
           //Customize table data cell style
           showActions = {true}
           //Enable Row Operation
           actionTypes={["edit","delete","view"]} 
           //Type of Row Operation (case insensitive)
           onRowDelete={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
           onRowEdit={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
           onRowView={(args, event, row)=>{
            // 'row' returns row object
            // any arguments passed will be before 'event' and 'row'
           }}
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
