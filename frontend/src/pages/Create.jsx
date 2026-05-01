import React from "react";
import { useForm } from "react-hook-form";
const Create = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex justify-center ">
      <div className="max-w-2xl p-4 border border-gray-500">
        <h1 className="text-2xl font-medium underline mb-5">
          Create Notes here to memorization
        </h1>
        <form>
          <div>
            <input
              {...register("title", {
                required: "Title is required !",
                minLength: {
                  value: 3,
                  message: "Minimum 3 charactes",
                },
              })}
              type="text"
              placeholder="Enter title"
              className="border border-gray-300 outline-0 rounded text-sm px-4 w-full py-1"
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
