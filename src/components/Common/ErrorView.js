import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'

const ErrorView = ({ handleError }) => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, place not found"
    extra={
      <Button
        type="primary"
        onClick={handleError}>
        Back Home
        </Button>
    }
  />
)
ErrorView.propTypes = {
  handleError: PropTypes.func.isRequired
}

export default ErrorView
