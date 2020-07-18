import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import axios from 'axios';
import ShowDetail from './Loader'
import { PageHeader } from 'antd';
import './styles.css'
export default class Helplinenumbers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columnDefs: [
              {
                headerName: "S.No",
                field: "no",
                cellStyle: {textAlign: "left"},           
                editable: false,
                sortable: true,
                filter: true,
                width: 200
                },
                {
                headerName: "States",
                   field: "state",
                   cellStyle: {textAlign: "left"},
                   editable: false,
                   sortable: true,
                   filter: true,
                   resizable: true,
                   suppressSizeToFit:true,
                   width:400,
         
          },                                       
                   {
                        headerName: "Helpline-Number",
                        field: "Helpline",
                        cellStyle: {textAlign: "left"},           
                        editable: false,
                        sortable: true,
                        filter: true,
                        width: 200
                        },
                            
                           ],
                           enableBrowserTooltips: true,
          rowSelection: "single",
      
      defaultColDef: {
        flex: 1,
        sortable: true,
        filter: true,
        floatingFilter: true,
      },
      context: { componentParent: this },
      localeText: {
        noRowsToShow: 'Loading...please wait...',
      },
      rowData: [{
        no: "1", state: "Andhra Pradesh", Helpline: 2410978
      },{
        no: "2", state: "Arunachal Pradesh", Helpline: 9436055743
      },{
        no: "3", state: "Assam ", Helpline: 6913347770 
      },
      ,{
        no: "4", state: "Bihar", Helpline: 104 
      },
      ,{
        no: "5", state: "Chhattisgarh ", Helpline: 104 
      },
      {
        no: "6", state: "Goa", Helpline: 104
      },{
        no: "7", state: "Gujarat", Helpline: 104
      },{
        no: "8", state: "Haryana", Helpline: 8558893911 
      },
      ,{
        no: "9", state: "Himachal Pradesh", Helpline: 104 
      },
      ,{
        no: "10", state: "Jharkhand", Helpline: 104 
      },
      {
        no: "11", state: "Karnataka", Helpline: 104
      },{
        no: "12", state: "Kerala", Helpline: 2552056
      },{
        no: "13", state: "Madhya Pradesh", Helpline: 104 
      },
      ,{
        no: "14", state: "Maharashtra", Helpline: 26127394
      },
      ,{
        no: "15", state: "Manipur", Helpline: 3852411668 
      },
      {
        no: "16", state: "Meghalaya ", Helpline: 108
      },{
        no: "17", state: "Mizoram", Helpline: 102
      },{
        no: "18", state: "Nagaland", Helpline: 7005539653 
      },
      ,{
        no: "19", state: "Odisha", Helpline: 9439994859 
      },
      ,{
        no: "20", state: "Punjab", Helpline: 104 
      },
      {
        no: "21", state: "Rajasthan", Helpline: 2225624
      },{
        no: "22", state: "Sikkim", Helpline: 104
      },{
        no: "23", state: "Tamil Nadu", Helpline: 2225624 
      },
      ,{
        no: "24", state: "Telangana", Helpline: 35000 
      },
      ,{
        no: "25", state: "Tripura", Helpline: 2315879
      },
      {
        no: "26", state: "Uttarakhand", Helpline: 104
      },{
        no: "27", state: "Uttar Pradesh", Helpline: 18001805145
      },{
        no: "28", state: "West Bengal", Helpline: 1800313444222
      },
      ,{
        no: "", state: "Union Territory", Helpline: ''
      },
      ,{
        no: "1", state: "Andaman and Nicobar Islands", Helpline: 232102 
      },
      {
        no: "2", state: "Chandigarh", Helpline: 9779558282
      },{
        no: "3", state: "Dadra and Nagar Haveli and Daman & Diu", Helpline: 104
      },{
        no: "4", state: "Delhi", Helpline: 22307145 
      },
      ,{
        no: "5", state: "Jammu & Kashmir", Helpline: 2440283 
      },
      {
        no: "6", state: "Ladakh", Helpline: 256462 
      },
      {
        no: "7", state: "Lakshadweep", Helpline: 104 
      },
      {
        no: "8", state: "Puducherry", Helpline: 104 
      },
      
      
    ]
    

        }
        this.onGridReady = this.onGridReady.bind(this);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      }
      
      onFirstDataRendered(params) {
          params.api.sizeColumnsToFit();
        }

        
        
       
        
    render(){
        return(
            
            <div>
                     
                <PageHeader
    className="site-page-header"
    
    title="Helpline Numbers-Statewise"
    
  />      
  <summary className="hlpline">
          Central Helpline Number for corona-virus:{<h2 className='contact'>+91-11-23978046</h2>}
          </summary>   
                <div className="ag-theme-alpine"
                style={{height: '500px', width: '1000px' ,marginTop:'30px', marginLeft:'25px' }}>
               <AgGridReact
                ref="agGrid"
                 onGridReady={this.onGridReady}
                 columnDefs={this.state.columnDefs}
                 rowData={this.state.rowData}
                 rowSelection={this.state.rowSelection}
                 enableRangeSelection={true}
                 autoGroupColumnDef={this.state.autoGroupColumnDef}         
                 localeText={this.state.localeText}
                 context={this.state.context}
                 frameworkComponents={this.state.frameworkComponents}
                 onFirstDataRendered={this.onFirstDataRendered.bind(this)}
                 >
               </AgGridReact>

               <p>*please add STD code before</p>
               </div>
          
            
                   </div>
        )
    }

}