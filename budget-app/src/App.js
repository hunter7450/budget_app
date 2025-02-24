import cover from './cover.svg';
import './App.css';
import { useForm } from "react-hook-form";
import React from 'react';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();
  
  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData){
      if (userData.password === data.password) {
        console.log(userData.name + "You Are Successfully Logged In");
      } else {
          console.log("Email or Password is not matching with our record");
      }
    } else {
        console.log("Email or Password is not matching with our record");
    }
  };
  return (
    // React Fragments
    <>
    <div className="LoginContainer">
  <img src={cover} alt="Cover" className="Cover" />

  <form className="Login" onSubmit={handleSubmit(onSubmit)}>
    <input type="email" {...register("email", { required: true })} />
    {errors.email && <span style={{ color: "red" }}>Please enter email</span>}

    <input type="password" {...register("password")} />

    <input type="submit" value="Login" className="loginBtn" />
    <input type="submit" value="Register" className="registerBtn" />
  </form>
</div>


    </>
  );
}

export default App;
