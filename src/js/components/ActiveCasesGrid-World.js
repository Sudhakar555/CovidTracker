import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import ShowDetail from './Loader'
import { PageHeader } from 'antd';
import './styles.css'
export default class ActiveGridWorld extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columnDefs: [{
                headerName: "Countries",
                   field: "country",
                   cellStyle: {textAlign: "left"},
                   editable: false,
                   sortable: true,
                   filter: true,
                   resizable: true,
                   suppressSizeToFit:true,
                   width:140,
                 },
               {
                headerName: "Cases",
                field: "cases",
                cellStyle: {textAlign: "left"},
                editable: false,
                sortable: true,
                filter: true,
                width: 111
                },
                {
                  headerName: "TodayCases",
                  field: "todayCases",
                  cellStyle: {textAlign: "left"},
                  editable: false,
                  sortable: true,
                  filter: true,
                  width: 130
                  },
                    {
                        headerName: "Deaths",
                        field: "deaths",
                        cellStyle: {textAlign: "left"},           
                        editable: false,
                        sortable: true,
                        filter: true,
                        width: 111
                        },
                        {
                            headerName: "TodayDeaths",
                            field: "todayDeaths",
                            cellStyle: {textAlign: "left"},           
                            editable: false,
                            sortable: true,
                            filter: true,
                            width: 135
                            },
                            {
                                headerName: "Recovered",
                                field: "recovered",
                                cellStyle: {textAlign: "left"},           
                                editable: false,
                                sortable: true,
                                filter: true,
                                width: 190
                                },
                                
                                        {
                                            headerName: "TotalTests",
                                            field: "totalTests",
                                            cellStyle: {textAlign: "left"},           
                                            editable: false,
                                            sortable: true,
                                            filter: true,
                                            width: 190
                                            },
                                            
                                                
                            
                           ],
                           enableBrowserTooltips: true,
          rowSelection: "single",
      rowData: [],
      defaultColDef: { resizable: true },
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
            this.loadData();
        }
        
        
        loadData = () => {
            
            return axios
              .get(
                `https://coronavirus-19-api.herokuapp.com/countries`
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
          };
        
    render(){
        return(
            
            <div>
                <PageHeader
    className="site-page-header"
    
    title="Covid19 Cases- World"
    
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

