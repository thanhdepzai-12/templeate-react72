import React, { useState } from 'react'
import SideBar from './SideBar'
import './Admin.scss';
import { IntlProvider } from 'react-intl';
import { FaBars } from 'react-icons/fa';
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='admin-container'>
      <div className='admin-sidebar'>
        <IntlProvider>
          <SideBar collapsed={collapsed} />
          </IntlProvider>
      </div>
      <div className='admin-content'>
        <FaBars onClick={()=> setCollapsed(!collapsed)} />
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default Admin