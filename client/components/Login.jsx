import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
        <form>
        <label>Fullname:</label><br /><input type="text" className="name" /><br />
        <label>Email:</label><br /><input type="text" className="email" /><br />
        <label>Child ID:</label><br /><input type="text" className="child_id" /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login
