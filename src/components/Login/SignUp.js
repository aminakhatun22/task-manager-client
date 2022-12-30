import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleGoogleSignIn, createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [googleRegisterError, setGoogleRegisterError] = useState('');
    const navigate = useNavigate();
    const handleSignUp = data => {

        setSignUpError('')
        createUser(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }



            })


            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });

        toast('User Created Successfully');
        navigate('/')
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-primary text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label"><span className="label-text ">Email</span> </label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className="text-red-600 " role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters or longer" }
                        })} />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                    </div>




                    <input className='btn btn-primary w-full mt-5 text-white' type="submit" />
                    <div>
                        {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    </div>
                </form>
                <p>Already have an account <Link className='text-pink-400' to='/login'>Please login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary text-white'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default SignUp;





