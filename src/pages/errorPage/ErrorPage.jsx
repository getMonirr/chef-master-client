import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/404.png";

const ErrorPage = () => {
  const err = useRouteError();
  const {
    error: { message },
    status,
    statusText,
  } = err;

  return (
    <section className="bg-orange-200 dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex h-screen justify-center items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {status || 404}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {statusText || "Something's missing."}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {message ||
              "Sorry, we can't find that page. You'll find lots to explore on the home page."}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-primary hover:bg-secondary-focus focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </Link>
        </div>
        <div>
          <img src={errorImage} alt="error image" />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
