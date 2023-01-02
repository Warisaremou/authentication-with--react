import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authentication";
import toast, { Toaster } from "react-hot-toast";

const schema = z
  .object({
    email: z.string().email("email invalid"),
    password: z.string().min(8, "8 caractere minimum"),
  })
  .required();

function Login() {
  const { setLocalStorage } = useLocalStorage();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    login(data.email, data.password)
      .then((res) => {
        toast.success("Logged in successfully !");
        setLocalStorage("userAccount", data);
        navigate("/acceuil");
        console.log(res);
      })
      .catch((error) => {
        toast.error("User Not Found !");
        console.log(error);
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Sign In</h1>
        <div className="inputs">
          <label>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className="input"
          />
          {errors.email && (
            <small className="text-xs text-red-600 mt.5">{errors.email?.message}</small>
          )}
          <div>
            <label>
              Password <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="pass">
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="input"
              required
            />
          </div>
          {errors.password && (
            <small className="text-xs text-red-600 mt.5">{errors.password?.message}</small>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <button className="signIn-btn">Sign In</button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default Login;
