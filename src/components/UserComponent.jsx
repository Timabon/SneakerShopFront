import React, { useState } from 'react'
import { createUser } from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

const UserComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();    

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: ''
  })

    function handleUsername(e){
        setUsername(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function saveUser(e){
        e.preventDefault();
        
        if(validateForm()){
        const user = {name: username, password, email}
        console.log(user);

        createUser(user).then((response) => {
            console.log(response.data);
            navigator('/');
        })
    }
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(username.trim()){
            errorsCopy.username = '';
        }else{
        errorsCopy.username = 'Username is required.';
        valid = false;
    }
        if(password.trim()){
            errorsCopy.password = '';
        }else{
        
            errorsCopy.password = 'Password is required.';
            valid = false;
        }
        if(email.trim()){
            errorsCopy.email = '';
        }else{
            errorsCopy.email = 'Email is required.';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    return (
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Register</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'></div>
                        <label className='form-label'>Username</label>
                        <input 
                        type="text"
                        placeholder='Enter username'
                        name='username'
                        value={username}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        onChange={handleUsername} 
                        />
                        {errors.username && <div className='invalid-feedback'>{ errors.username}</div>}
                    </form>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'></div>
                        <label className='form-label'>Password</label>
                        <input 
                        type="text"
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        onChange={handlePassword}
                         />
                         {errors.password && <div className='invalid-feedback'>{ errors.password}</div>}
                    </form>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'></div>
                        <label className='form-label'>Email</label>
                        <input 
                        type="text"
                        placeholder='Enter email'
                        name='email'
                        value={email}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        onChange={handleEmail} 
                        />
                        {errors.email && <div className='invalid-feedback'>{ errors.email}</div>}
                    </form>
                </div>
                <button className='btn btn-success' onClick={saveUser}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default UserComponent