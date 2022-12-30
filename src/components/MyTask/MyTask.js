import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyTask = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(user?.email);
    fetch('http://localhost:5000/addTask', {


    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

        })


    return (
        <div>
            <table className="table-fixed mx-auto mt-6">
                <thead >
                    <tr>
                        <th className='ml-6 mr-6'>Task</th>
                        <th><Button className='mr-2 ml-2'>Update</Button></th>
                        <th><Button>Delete</Button></th>
                        <th><Link to='/completedtask'><Button className='mr-2 ml-2'>Completed</Button></Link></th>
                    </tr>
                </thead>

            </table>
        </div>
    );
};

export default MyTask;