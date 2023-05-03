import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const [error, setError] = useState("");
  const { createNewUser, user, setUser } = useAuth();

  const location = useLocation();
  const from = location?.state?.location?.state?.from?.pathname || "/";

  // update name and photo url

  // handle handleFormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (password.length < 6) {
      setError("Password must be 6 char long");
      return;
    }

    if (password && email) {
      const loggedUser = await createNewUser(email, password)
        .then((result) => {
          console.log(result.user);
          return result.user;
        })
        .catch((err) => {
          setError(err.message);
        });

      await updateProfile(loggedUser, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then(() => {
          console.log("Profile updated successfully");
          setUser(loggedUser);
          // for update header user image and name. without it i cannot update header without reload
          window.location.reload(true);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <p className="text-base font-bold leading-tight tracking-tight text-red-500 md:text-md dark:text-white">
              {error}
            </p>
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name (optional)
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email<sup className="text-red-500">*</sup>
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
                  Password<sup className="text-red-500">*</sup>
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
              <div>
                <label
                  htmlFor="photo url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo url (optional)
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an Account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-red-400 hover:underline dark:text-primary-500"
                >
                  Log in
                </Link>
              </p>
            </form>
            {user && <Navigate to={from} replace />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
