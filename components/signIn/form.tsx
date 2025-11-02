"use client"

import { useForm, SubmitHandler } from "react-hook-form";
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

   return (
      <section>
         <Link href={"/"}>
            <Image 
               src={"../assets/signIn/icons/keyboard_arrow_down.svg"}
               alt=""
               width={24}
               height={24}
            />
            <p>Back to dashboard</p>
         </Link>
         <div className="forContainer">
            <div className="header">
               <h2>Sign In</h2>
               <p>Enter your email and passwordto sign in!</p>
               <button>
                  <Image 
                     src={"../assets/signIn/icons/Google__G__Logo 1.svg"}
                     alt=""
                     width={24}
                     height={24}
                  />
                  <p>Sign in with Google</p>
               </button>
            </div>
            <div className="divider">
               <span>or</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="email">
                  <input
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
               <div>

                  <label htmlFor="password">
                     <input
                        type="password"
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
                  <button className="eye-icon">
                     <Image 
                        src={"../assets/signIn/icons/remove_red_eye.svg"}
                        alt=""
                        width={20}
                        height={20}
                     />
                  </button>
               </div>
               <div className="form-options">
                  <label>
                     <input type="checkbox" {...register("remember")} />
                     Keep me logged in
                  </label>
                  <Link href={"/"}>
                     Forgot password?
                  </Link>
               </div>
               <button type="submit">Sign In</button>
               <p>Not registered yet? <Link href={"/"}>Create an Account</Link></p>
            </form>
         </div>

      </section>
   )
}