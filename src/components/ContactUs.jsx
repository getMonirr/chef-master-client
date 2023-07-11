import React from "react";

const ContactUs = () => {
  return (
    <div className="py-20">
      <div className="my-20 text-center space-y-3">
        <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400">
          Booking
        </h2>
        <p>
          Here is our most Chines Chef. All chef most popular for their recipe.{" "}
          <br /> Just explore
        </p>
      </div>

      <div className="container mx-auto px-3 flex justify-center items-center ">
        <form className="w-full max-w-4xl space-y-6 bg-gray-300 rounded-xl p-8 lg:p-20">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </div>
          <button className="btn btn-primary bg-orange-400 border-orange-300">
            Send your message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
