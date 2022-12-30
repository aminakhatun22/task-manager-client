import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleAddTask = data => {
        console.log(data);




        const task = {
            task: data.task,
        }
        console.log(task);
        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged
                ) {

                    toast.success('is added a product');
                    navigate('/mytask')
                }

            })





    }
    return (

        <div>
            <form onSubmit={handleSubmit(handleAddTask)}>
                <div className="form-control w-50 mx-auto mt-6">

                    <input type="text" placeholder='AddTask'{...register("task", {
                        required: "Task is Required"
                    })} className="input input-bordered w-full text-black text-center " />

                </div>

                <input className='btn btn-primary w-50 mt-4' value="Add Task" type="submit" />
            </form>
            <img className='mx-auto mt-6' src="https://i.ibb.co/TMTsjJp/images.png" alt="" />
        </div>
    );
};

export default AddTask;