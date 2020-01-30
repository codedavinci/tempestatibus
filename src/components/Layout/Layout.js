import React from 'react'
import PropTypes from 'prop-types'
import { Layout as ThemeLayout } from 'antd'

import Header from './Header'
import Sidebar from './Sidebar'

import './layout.css'

const { Content } = ThemeLayout

const Layout = ({
  children,
  handleTopCities,
  handleClickLogo,
  collapsed,
  setCollapsed,
  isMobile
}) => {

  return (
    <ThemeLayout className="container">
      <Sidebar
        collapsed={collapsed}
        handleTopCities={handleTopCities}
        handleClickLogo={handleClickLogo}
      />
      <ThemeLayout className="content-wrapper">
        <Header
          collapsed={collapsed}
          handleToggle={setCollapsed}
          handleClickLogo={handleClickLogo}
          isMobile={isMobile}
        />
        <Content className="content">
          {children}
        </Content>
      </ThemeLayout>
    </ThemeLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
