import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CompletedTask = () => {

    return (
        <div>
            <table className="table-fixed mx-auto mt-6">
                <thead >
                    <tr>
                        <th className='ml-6 mr-6'>Task</th>

                        <th><Button className='ml-2 mr-2'>Delete</Button></th>
                        <th><Link to='/mytask'><Button>Not Completed</Button></Link></th>
                    </tr>
                </thead>

            </table>
        </div>
    );
};

export default CompletedTask;