import React from 'react'

export default function Input({ label, error, ...props }) {
  return (
    <>
      <label>{label}</label>
      <input {...props} />
      <div className={error ? 'hasError' : ''}>{error}</div>
    </>
  )
}
