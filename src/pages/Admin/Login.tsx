import {signIn, signOutCurrentUser ,user} from '../../Helpers/firebaseAuth.js'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:'',
    password:'',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault(); 
  }
const handleSignIn = () => {
  signIn(formData.email, formData.password)
    .then((response) => {
      if (response.ok) {
        navigate('/admin/dashboard');
      } else {
        console.log('Login failed. Please check your credentials.');
      }
    })
    .catch((error) => console.log(error.message));
};
  return (
    <>
    <form onClick={handleSubmit}>
    <div className="login_container">
      <div className="login_form_wrapper">
        <label>Admin Login</label>
      <input placeholder="Enter Email Address" type="email" name="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required value={formData.email} onChange={handleChange}/>
      <input placeholder="Enter Password" type="password" name="password" required value={formData.password} onChange={handleChange}/>
      <input type="submit" className="button_light" value="submit" onClick={handleSignIn}/>
      { user ?
<button onClick={()=>signOutCurrentUser()} className='button_light'>Log Out</button> : null
            }
      </div>
    </div>
</form>
</>
  )
}

export default Login
