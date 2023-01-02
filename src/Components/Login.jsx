import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { userData } from "./../data";
// import Authentication from "../services/authentication";

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
    // const userIsAuthaurize = Authentication.login(data.email, data.password);

    // console.log(userIsAuthaurize  )
    // if (userIsAuthaurize) {
    //   console.log("oui");

    //   // setLocalStorage("userAccount", data);
    //   // navigate("/acceuil");
    // } else {
    //   console.log("non");
    // }

    // return;
    // console.log(data);
    console.log(data.email);
    if (data.email == userData.email && data.password == userData.password) {
      setLocalStorage("userAccount", data);
      navigate("/acceuil");
    }
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
    </div>
  );
}

export default Login;
