"use client"

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"

type Inputs = {
   email: string,
   password: string,
   remember: boolean,
};

export default function Form() {
   const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);
   const [showPassword, setShowPassword] = useState<boolean>(false)

   return (
      <section id="signIn" className="bg-white text-(--primary) text-sm relative md:px-20">
         <button className="p-5 rounded-full fixed bottom-[30px] right-[30px] border border-[#6A53FF]" style={{ background: "linear-gradient(90deg, #868CFF 0%, #4318FF 100%)" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_101_9074)">
               <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z" fill="white"/>
               </g>
               <defs>
               <clipPath id="clip0_101_9074">
               <rect width="18" height="18" fill="white"/>
               </clipPath>
               </defs>
            </svg>
         </button>
         <Link href={"/"} className="flex items-center text-(--secondary) mt-5">
            <Image 
               src={"../assets/signIn/icons/keyboard_arrow_down.svg"}
               alt=""
               width={24}
               height={24}
            />
            <p className="leading-[30px] font-medium">Back to dashboard</p>
         </Link>
         <div className="forContainer">
            <div className="mb-6 mt-10">
               <h2 className="text-[36px] font-bold">Sign In</h2>
               <p className="text-(--secondary) font-normal mb-5 text-base mt-2">Enter your email and password to sign in!</p>
               <button className="flex gap-2.5 w-full bg-(--main-bg) rounded-2xl justify-center">
                  <Image 
                     src={"../assets/signIn/icons/Google__G__Logo 1.svg"}
                     alt=""
                     width={24}
                     height={24}
                  />
                  <p className="font-medium py-[15px]">Sign in with Google</p>
               </button>
            </div>
            <div className="[&_span]:bg-(--toggle-off) [&_span]:h-px [&_span]:w-full [&_span]:block flex items-center gap-4">
               <span></span>
               <p className="text-(--secondary)">or</p>
               <span></span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-[26px] font-medium [&_span]:text-(--primary-blue) [&_label:not(:last-child)]:grid grid gap-6 [&_input]:rounded-2xl [&_input]:pt-[17px] [&_input]:pb-[19px] [&_input]:border [&_input]:border-(--toggle-off) [&_input]:pl-6">
               <label htmlFor="email">
                  <p className="mb-[13px]">Email<span>*</span></p>
                  <input
                     className="font-normal border-2 pl-6"
                     id="email"
                     placeholder="mail@simmmple.com"
                     {...register("email", {
                        required: "Email is required",
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: "Please enter a valid email address",
                        },
                     })}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
               </label>
               <div className="relative">
                  <label htmlFor="password" className="">
                     <p className="mb-[13px]">Password<span>*</span></p>
                     <input
                        className="font-normal w-full"
                        type={showPassword === false ? "password" : "text"}
                        id="password"
                        placeholder="Min. 8 characters"
                        {...register("password", {
                           required: "Password is required",
                           minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters long",
                           },
                           pattern: {
                              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                              "Password must include uppercase, lowercase, number, and special character",
                           },
                        })}
                     />
                     {errors.password && <p>{errors.password.message}</p>}
                  </label>
                  <button onClick={() => setShowPassword(prev => !prev)} className="absolute top-[51px] right-5">
                     <Image 
                        src={"../assets/signIn/icons/remove_red_eye.svg"}
                        alt=""
                        width={20}
                        height={20}
                     />
                  </button>
               </div>
               <div className="font-normal leading-5 flex justify-between my-2.5">
                  <label className="flex! items-center gap-2.5 cursor-pointer">
                     <input type="checkbox" className="accent-(--primary-blue)" {...register("remember")} />
                     Keep me logged in
                  </label>
                  <Link href={"/"} className="text-(--primary-blue) font-medium">
                     Forgot password?
                  </Link>
               </div>
               <button type="submit" className="bg-(--primary-blue) text-(--component-bg) py-[15px] w-full rounded-2xl">Sign In</button>
               <p className="font-normal leading-[26px] text-(--primary)">Not registered yet? <Link href={"/"} className="text-(--primary-blue) font-bold">Create an Account</Link></p>
            </form>
         </div>
      </section>
   )
}