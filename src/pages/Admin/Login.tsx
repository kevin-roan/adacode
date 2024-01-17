import { Link } from "react-router-dom"

function Login() {
  const handleSubmit =() =>{
    window.alert('Invalid User')
  }
  return (
        <form onClick={(e)=>e.preventDefault()}>
    <div className="login_container">
      <div className="login_form_wrapper">
        <label>Admin Login</label>
      <input placeholder="Enter Email Address" type="email" name="emailaddress" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required/>
      <input placeholder="Enter Password" type="password" name="password" required/>
      <button className="button_light" onClick={handleSubmit}>
            <Link to="/admin/dashboard">Login</Link></button>
      </div>
    </div>
        </form>
  )
}

export default Login
