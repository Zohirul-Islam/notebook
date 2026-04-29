import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/user/login", formData);

      // Save token
      localStorage.setItem("token", response.data.token);

      alert("Login successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-screen sm:flex justify-center items-center">
      <div className="border border-gray-300 mt-10 sm:mt-0 px-2 py-2 max-w-2xs">
        <h1 className="text-center text-2xl font-medium text-gray-800 my-2">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            className="border border-gray-200 px-2 py-1 text-xs outline-0 w-full rounded my-2"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            className="border border-gray-200 px-2 py-1 text-xs outline-0 w-full rounded my-2"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            className="block bg-orange-500 w-full rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
        <Link className="text-sm font-semibold block my-2" to="/register">
          Create account
        </Link>
      </div>
    </div>
  );
};

export default Login;
