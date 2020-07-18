import React from 'react';
import { Spin, Alert } from 'antd';
import loading from '../assets/loading.gif'


function ShowDetail() {
  return (
    <div className="example">
    <Spin tip="Loading Data! Please Wait!">

    </Spin>
                  {/* {<img src={loading} alt="AtosSyntel" className='logo1' />} */}

    </div>
  );
}

export default ShowDetail;


