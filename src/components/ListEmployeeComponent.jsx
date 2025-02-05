import React, {useEffect, useState} from 'react'
import { listEmployees } from '../../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

function ListEmployeeComponent() {

  const [employees, setEmployees] =  useState([])

  const navigator = useNavigate();

useEffect(()=>{
    listEmployees().then((response) => {
        setEmployees(response.data);
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
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent