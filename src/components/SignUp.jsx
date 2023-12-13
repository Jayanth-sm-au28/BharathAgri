import React, { useState } from "react";
import bharathagrilogotrans from "../Assets/bharathagrilogotrans.png";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  function onHandleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError("");

    
  }

  function onSubmit(e) {
    e.preventDefault();
    
    if (credentials.userName === "bharathagri" && credentials.password === "1234") {
      // Redirect to the dashboard page after successful form submission
      navigate('/dashboard');
    } else {
      setError("Please Enter Valid User Name or Password");
      
      setCredentials({password:"", userName:""})
      

      console.log(credentials,"credentials")
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 drop-shadow-2xl ">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="items-center justify-center flex pt-3">
          <img src={bharathagrilogotrans} alt="user" width={200} height={200} />
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            LogIn
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                id="name"
                value={credentials.userName}

                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   outline-green-500 "
                placeholder="Enter your Name"
                onChange={onHandleChange}
              />
            </div>

            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                placeholder="••••••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:text-white outline-green-500 "
                onChange={onHandleChange}
              />
            </div>
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full text-white  bg-green-400 hover:bg-primary-700  focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
