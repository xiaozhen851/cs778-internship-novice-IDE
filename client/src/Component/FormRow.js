import React from 'react'

const FormRow = ({type,name,value,handleChange,label}) => {
  return (
    <div className='form-row'>
        <label htmlFor= {name} className = "form-label">
            {label || name}
        </label>
        <input
        value={value}
        type={type}
        name={name}
        onChange={handleChange}
        className="form-input"
        >
        </input>

      
    </div>
  )
}

export default FormRow
