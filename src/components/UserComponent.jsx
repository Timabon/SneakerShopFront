import React, { useState } from 'react'
import { use } from 'react';
import { createUser } from '../../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const UserComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigate();    

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

        const user = {name: username, password, email}
        console.log(user);

        createUser(user).then((response) => {
            console.log(response.data);
            navigator('/');
        })
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
                        className='form-control'
                        onChange={handleUsername} />
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
                        className='form-control'
                        onChange={handlePassword} />
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
                        className='form-control'
                        onChange={handleEmail} />
                    </form>
                </div>
                <button className='btn btn-success' onClick={saveUser}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default UserComponent