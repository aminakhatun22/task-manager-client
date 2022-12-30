import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl text-primary mt-6'>Welcome</h1>
            <Link to="/login"><Button>View Details</Button></Link>
            <img className='mt-6 w-50 mx-auto'

                src="https://i.ibb.co/FhWMDZ2/task-management-abstract-concept-illustration-335657-2127.webp" alt="" />
        </div>
    );
};

export default Home;