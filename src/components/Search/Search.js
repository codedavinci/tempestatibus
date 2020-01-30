import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

import './search.css'

const { Search: S } = Input

const Search = ({ handleSubmit, searchValue, handleChange }) => {
  return (
    <div className="search">
      <S
        placeholder="Ex: Vancouver.."
        onSearch={handleSubmit}
        size="large"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  )
}

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Search
