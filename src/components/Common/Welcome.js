import React from 'react'
import { Icon, Result } from 'antd'

import './common.css'

const Welcome = () => (
  <Result
    icon={
      <Icon
        type="heart"
        theme="twoTone"
        twoToneColor="#eb2f96"
        style={{ fontSize: 130 }}
      />}
    title={
      <h1 className="welcome">let's rock<br /> this weather!</h1>}
  />
)

export default Welcome
