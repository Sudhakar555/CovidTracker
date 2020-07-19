import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from "./js/components/Home";
import 'antd/dist/antd.css'

export default class App extends React.Component {
render() {
return (
<div className="App" >
            <Router>
                <div>
                    
                    <Route    path="/" component={Homepage} />
                    
                </div>
            </Router>
</div>
       );
    }
}
