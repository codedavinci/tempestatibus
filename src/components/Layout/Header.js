import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'

const { Header: H } = Layout

const Header = ({ collapsed, handleToggle, handleClickLogo, isMobile }) => {


  return (
    <H className="header">
      <div className="center trigger">
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={handleToggle}
          style={{ fontSize: '2.1em', color: "#FFF" }}
        />
      </div>
      {!collapsed && isMobile ? null :
        <div className="center logo" onClick={handleClickLogo}>
          <Icon type="ant-cloud" style={{ fontSize: '5em', color: '#FFF' }} />
        </div>
      }
    </H>
  )
}

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default Header
