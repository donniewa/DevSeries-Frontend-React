import React from 'react';
import Table from './components/Table/DynamicTable';
import GetOnlinePosts from './components/OnLinePosts/GetOnLinePosts';
import localJson from './components/LocalPosts/local.json';
import CONFIG from './config.json';

const onlineTable1Url = `${CONFIG.server}${CONFIG.api}`;
const onlineTable2Url = `${CONFIG.server_local}${CONFIG.api_local}`;
const onlineTable3Url = `${CONFIG.server_local}employees`;

export default function App() {
  return (
    <div className='App'>
      Hello, React
      <br /> Table 1 data
      <Table data={localJson} />
      <br /> Table 2 data
      <GetOnlinePosts url={onlineTable1Url} />
      <br /> Localhost 5000 data
      <GetOnlinePosts url={onlineTable2Url} />
      <br /> Localhost 5000 Employee data
      <GetOnlinePosts url={onlineTable3Url} useKey='project code' />
    </div>
  );
}
