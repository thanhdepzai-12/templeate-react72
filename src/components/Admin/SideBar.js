import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaBars } from 'react-icons/fa';
import sidebarBg from '../../assets/starBG.jpg';
import { IntlProvider, useIntl } from 'react-intl';
const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
 
    const intl = useIntl();
    return (
      <div className='mainSideBar'>
<ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'Thanh_bieeng' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaHeart />}>
            daskboard
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
                            icon={<FaGem />}
                            title="Features"
            >
            <MenuItem>User manage</MenuItem>
            <MenuItem>Quiz manage</MenuItem>
            <MenuItem>Question manage</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
             <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                            View source  
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </div>
  )
}

export default SideBar
