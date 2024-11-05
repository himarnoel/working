"use client";
import React, { useState } from "react";
import logo from "../../../images/logo.svg";
import Image from "next/image";
import { useLoginMutation } from "@/services/authApi";
import { useRouter } from "next/navigation";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [login, { data, error, isLoading }] = useLoginMutation();
  const router = useRouter();
  

  console.log(" error", error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password }).unwrap();

      router.push("/admin/dashboard");
      toast.success("Login successful");
    
    } catch (err) {
      console.error("Login failed:", err);
      toast.error(err?.data?.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen w-full">
      <Image src={logo} className="mx-auto object-contain" />
      <div className="flex flex-col mt-10 gap-4  rounded-lg bg-[#dbdfe6] shadow-inner sh p-8 pb-10 sm:p-10 sm:pb-12 w-11/12 max-w-md">
        <p className="text-xl md:text-3xl text-center text-[#161141] font-bold font-display ">
          Admin Login
        </p>
        <p className="text-sm font-body text-gray-700 text-center">
          Securely login to access the admin dashboard.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          {" "}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 pr-2 md:py-3 md:pr-4 rounded-lg bg-gray-100 text-gray-900 outline-none pl-3 md:pl-4"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              htmlFor="password"
              className="text-xs leading-loose mb-1 text-gray-700 font-bold font-display"
            >
              Password
            </label>
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-3 pr-2 md:py-3 md:pr-4  rounded-lg bg-gray-100 text-gray-900 outline-none pl-3 md:pl-4"
            />
            <button
              type="button"
              className="bottom-4 right-2 absolute text-xl"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {" "}
              {isVisible ? <LuEye /> : <LuEyeOff />}
            </button>
          </div>
          <button
            type="submit"
            className="  disabled:opacity-75 disabled:cursor-not-allowed text-center whitespace-no-wrap rounded-xl w-full flex flex-col md:flex-row items-center justify-center pt-4 py-3 px-10 font-display text-sm md:text-sm uppercase bg-[#161141] font-bold text-white hover:bg-primary-500 mt-8"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
