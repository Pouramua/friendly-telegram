import React from 'react'

const Login = () => {
  return (
    <div className="register">
      <h1>Login</h1>
        <form>
        <label>Fullname: </label><input type="text" className="name" />
        <label>Email: </label><input type="text" className="email" />
        <label>Child ID: </label><input type="text" className="child_id" />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
