import React from 'react'
import '../screens/SignIn/Login.css'
const FormContainer = ({ children }) => {
  return (
    <>
      <div className='formElement'>
        <div className='loginContainer'>{children}</div>
      </div>
    </>
  )
}

export default FormContainer
