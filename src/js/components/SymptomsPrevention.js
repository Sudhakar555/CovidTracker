import React from 'react';
import Symptoms from './Symptoms'
import Prevention from './Prevention'
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import {GiMedicines } from 'react-icons/gi';

const { TabPane } = Tabs;

export default function HomeTabs(){

    return(
        <section>
<Tabs defaultActiveKey="">
    <TabPane
      tab={
        <span>
          <GiMedicines />
          Symptoms
        </span>
      }
      key="1"
    >
      <Symptoms/>
    </TabPane>
    <TabPane
      tab={
        <span>
          <GiMedicines />
         Prevention
        </span>
      }
      key="2"
    >
     <Prevention/>
    </TabPane>
  </Tabs>
        </section>
    )
}
