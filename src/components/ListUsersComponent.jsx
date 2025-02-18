import React, {useEffect, useState} from 'react'
import { listUsersLocal } from '../../services/UserService';
import { useNavigate } from 'react-router-dom'

function ListUsersComponent() {

  const [Users, setUsers] =  useState([])

  const navigator = useNavigate();

useEffect(()=>{
    listUsersLocal().then((response) => {
        setUsers(response.data);
    }).catch(error => {console.error(error);
})

}, [])

function createUser(){
    navigator('/create-user')
}

  return (
    <div className='container'>

        <h2 className='text-center'>List of Users</h2>
        <button className='btn btn-primary mb-2' onClick={createUser}>Add User</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Username id </th>
                    <th>Username </th>
                    <th>Email </th>
                </tr>
            </thead>
            <tbody>
                {
                    Users.map(User =>
                        <tr key={User.id}>
                            <td>{User.id}</td>
                            <td>{User.name}</td>
                            <td>{User.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListUsersComponent