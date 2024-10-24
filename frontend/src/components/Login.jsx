import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const {register,handleSubmit,formState: { errors }} = useForm();

  const submitHandler = async (data) => {
    try{  
      
      const response = await axios.post('http://localhost:8000/api/login', {
        id: data.id,
        pass: data.pass, 
      },{
        withCredentials: true
      }); 
      
      console.log("Data is: ", response.data);
    }catch(error){
      console.log("ERROR:" , error);
    }
  }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="id">ID</label>
                <input type="text" name="id" id="id" 
                {...register("id", {
                  required: "ID is required",
                  minLength: {
                    value: 10,
                    message: "ID must be at least 10 characters long"
                  }
                })}
                />
                {errors.id && <p style={{ color: 'red' }}>{errors.id.message}</p>}
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" 
                {...register("pass", {
                  required: "Password is required",
                })}
                />
                {errors.pass && <p style={{ color: 'red' }}>{errors.pass.message}</p>}
            </div> 
            <div>
                <input type="submit" value="Submit" className="btn btn-dark"/>
            </div>
        </form>
        <Link to="/api/login/changepassword">Forgot password</Link>
    </div>
  )
}

export default Login
