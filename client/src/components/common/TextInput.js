import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({ name, label, onChange, placeholder, value, error, min }) => {
  let wrapperClass = 'form-group'
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error'
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        min={min}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  min: PropTypes.string
}

export default TextInput
