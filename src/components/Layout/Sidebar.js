import React from 'react'
import PropTypes from 'prop-types'

import { Layout } from 'antd'
import { TopCities } from '../Forecast'

const { Sider } = Layout





const Sidebar = ({ collapsed, setMobile, handleTopCities, handleClickLogo }) => {
  return (
    <Sider
      width={300}
      breakpoint="lg"
      collapsible
      collapsedWidth="0"
      collapsed={collapsed}
      onBreakpoint={setMobile}
      trigger={null}
      className="sidebar">
      <h1
        className="center heading"
        onClick={handleClickLogo}
      >{'tempestatibus'.toUpperCase()}</h1>
      <TopCities handleClick={handleTopCities} />
    </Sider>
  )
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired
}

export default Sidebar
