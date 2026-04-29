import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      await API.post("/user/register", formData);

      alert("Registration successful");

      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full h-screen sm:flex justify-center items-center">
      <div className="border border-gray-300 mt-10 sm:mt-0 px-2 py-2 max-w-2xs">
        <h1 className="text-center text-2xl font-medium text-gray-800 my-2">
          Register
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            className="border border-gray-200 px-2 py-1 text-xs outline-0 w-full rounded my-2"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            type="email"
            className="border border-gray-200 px-2 py-1 text-xs outline-0 w-full rounded my-2"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            className="border border-gray-200 px-2 py-1 text-xs outline-0 w-full rounded my-2"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button
            className="block bg-orange-500 w-full rounded cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </form>

        <Link className="text-sm font-semibold block my-2" to="/">
          Already have an account?
          <span className="underline font-medium text-blue-800 px-2">
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
