import React, { useState } from "react";
import SocialLogin from "../../components/SocialLogin";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { googleLogin, user, githubLogin, loginWithEmailAndPassword } =
    useAuth();

  // location
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  // console.log(location,from);

  // handle google log in
  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        toast.success("login successful");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // handle git hub login
  const handleGitHubLogin = () => {
    setError("");
    githubLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("login successful");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // handle email and password login
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("login successful");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Welcome back
            </h1>
            <p className="text-base font-bold leading-tight tracking-tight text-red-500 md:text-md dark:text-white">
              {error}
            </p>
            <div className="flex gap-2">
              <SocialLogin
                handleClick={handleGoogleLogin}
                icon={<FcGoogle size={15} />}
              >
                Log in with google
              </SocialLogin>
              <SocialLogin
                handleClick={handleGitHubLogin}
                icon={<FaGithub size={15} />}
              >
                Log in with google
              </SocialLogin>
            </div>
            <div className="flex justify-evenly items-center gap-6">
              <div className="h-[2px] bg-slate-600 w-full"></div>
              <div className="">or</div>
              <div className="h-[2px] bg-slate-600 w-full"></div>
            </div>
            <form
              onSubmit={handlePasswordLogin}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-red-400 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
              {user && <Navigate to={from || "/"} replace={true} />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
