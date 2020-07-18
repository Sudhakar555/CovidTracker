import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import loading from '../assets/loading.gif'

import axios from 'axios';
import ShowDetail from './Loader'
import { PageHeader } from 'antd';
import './styles.css'
export default class ActiveGrid extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columnDefs: [{
                headerName: "States",
                   field: "state",
                   cellStyle: {textAlign: "left"},
                   editable: false,
                   sortable: true,
                   filter: true,
                   resizable: true,
                   suppressSizeToFit:true,
                   width:400,
                   filter: 'agTextColumnFilter',
          filterParams: {
            filterOptions: ['contains', 'notContains'],
            textFormatter: function(r) {
              if (r == null) return null;
              return r
                .toLowerCase()
                .replace(/\s/g, '')
                .replace(/[àáâãäå]/g, 'a')
                .replace(/æ/g, 'ae')
                .replace(/ç/g, 'c')
                .replace(/[èéêë]/g, 'e')
                .replace(/[ìíîï]/g, 'i')
                .replace(/ñ/g, 'n')
                .replace(/[òóôõö]/g, 'o')
                .replace(/œ/g, 'oe')
                .replace(/[ùúûü]/g, 'u')
                .replace(/[ýÿ]/g, 'y')
                .replace(/\W/g, '');
            },
            debounceMs: 0,
            suppressAndOrCondition: true,
          },
                 },
               {
                headerName: "No of  Cases",
                field: "noOfCases",
                cellStyle: {textAlign: "left"},
                editable: false,
                sortable: true,
                filter: true,
                width: 200
                },
                {
                  headerName: "Cured",
                  field: "cured",
                  cellStyle: {textAlign: "left"},
                  editable: false,
                  sortable: true,
                  filter: true,
                  width: 200
                  },
                    {
                        headerName: "Death",
                        field: "deaths",
                        cellStyle: {textAlign: "left"},           
                        editable: false,
                        sortable: true,
                        filter: true,
                        width: 200
                        },
                            
                           ],
                           enableBrowserTooltips: true,
          rowSelection: "single",
      rowData: [],
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

        }
        this.onGridReady = this.onGridReady.bind(this);
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
      }
      
      

        componentDidMount() {
            return axios
            .get(
              `https://covid-india-cases.herokuapp.com/states`
            )
            .then(result => {
              console.log(result);
              this.setState({
                rowData: result.data,
              },
            () => console.log(this.state.rowData));
            })
            .catch(error => {
              console.error("error: ", error);
            });
        }
        
        
        
    render(){
        return(
            
            <div>
                     
                <PageHeader
    className="site-page-header"
    
    title="Covid19 Cases- India"
    
  />
                {this.state.rowData.length === 0 ? (
                <ShowDetail/>
            ) : (
               
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
                 >
               </AgGridReact>
               </div>
            )}
            
                   </div>
        )
    }

}