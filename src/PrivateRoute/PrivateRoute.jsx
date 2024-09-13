import React from 'react'

const PrivateRoute = ({children}) => {
const user = true;
if(!user) return <div className='min-h-screen flex justify-center items-center'><h1 className='text-5xl'>Page not found!</h1></div>;
  return (
    <div className='min-h-screen'>{children}</div>
  )
}

export default PrivateRoute