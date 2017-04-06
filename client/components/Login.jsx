import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
        <form className="login">
        Fullname: <input type="text" className="name" /><br />
        Email: <input type="text" className="email" /><br />
        Child ID: <input type="text" className="child_id" /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
