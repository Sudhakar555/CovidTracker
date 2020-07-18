import React from 'react';
import { Layout, Menu, Breadcrumb ,} from 'antd';
import {  
  BarChartOutlined,
  
  BulbOutlined ,
  WarningOutlined ,
  PhoneOutlined 
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import Appbar from './Appbar.js';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import About from './About'
import ActiveGrid from './ActiveCasesGrid.js';
import ActiveGridWorld from './ActiveCasesGrid-World.js';
import Helplinenumbers from './Helplinenumbers'
import { FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare,FaHandHoldingHeart } from 'react-icons/fa';
import Prevention from './Prevention'
import HomeTabs from './SymptomsPrevention';
const { Header, Content, Footer, Sider } = Layout;

export default class Homepage extends React.Component{

    render(){
        return(
          <Router>
            <section>
              <Appbar />

              
                <Layout>
    
    
    <Layout>
    <Sider
      style={{
       
        height: '100vh',
        position: 'fixed',
        
      }}
      theme="light"
    >
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<BulbOutlined  />}>
          About Corona
          <Link to="/about" />
        </Menu.Item>
        <Menu.Item key="2" icon={<WarningOutlined    />}>
          Symptoms & Prevention
          <Link to="/prevention" />
        </Menu.Item>
        <Menu.Item key="3" icon={<BarChartOutlined   />}>
          Active Cases-India
          <Link to="/grid" />
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined   />}>
          Active Cases-World
          <Link to="/activeworld" />
        </Menu.Item>
        
        
        <Menu.Item key="5" icon={<PhoneOutlined   />}>
          Helpline Numbers
          <Link to="/contact" />
        </Menu.Item>
        
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>     
    <Content style={{ margin: '0', padding: 24, background: '#fff', minHeight: 0 }}>
            <Route exact path={`/`} component={About} /> 
           <Route  path="/grid" component={ActiveGrid}/>
            <Route  path="/activeworld" component={ActiveGridWorld}/>
            <Route path="/about"component={About}/>
            <Route path="/contact"component={Helplinenumbers}/>
            <Route path="/prevention"component={HomeTabs}/>


    </Content>
      <Footer style={{ textAlign: 'center' }}> Created by Sudhakar with Love <FaHandHoldingHeart/></Footer>
    </Layout>
  </Layout>
  </Layout>
            </section>
            </Router>
        )
    }

}