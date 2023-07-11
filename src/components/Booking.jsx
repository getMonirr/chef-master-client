import React from "react";

const Booking = () => {
  return (
    <div className="px-3">
      <div className="my-20 text-center space-y-3">
        <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400">
          Booking
        </h2>
        <p>
          Here is our most Chines Chef. All chef most popular for their recipe.{" "}
          <br /> Just explore
        </p>
      </div>
      <div className="mx-auto container pb-20 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <h3 className="font-bold text-2xl ">Online Booking table</h3>
          <div className="divider"></div>
          <p className="text-lg text-gray-500 my-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
            dignissimos asperiores consectetur error quam provident earum
            voluptates explicabo sequi neque, cupiditate nisi, reprehenderit
            omnis voluptate totam quaerat libero minima, iusto id! Ducimus rem,
            atque in aperiam tenetur doloremque vitae eum animi, eaque quos
            consequuntur assumenda qui nam id accusantium iure nulla blanditiis
            vel aspernatur consectetur unde illum dolorum nihil optio! Minus
            dolore delectus praesentium, molestiae cupiditate ipsum ut. Atque,
            quaerat!
          </p>
          <ul className="list-disc list-inside my-8 space-y-4">
            <li>Availability management</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Multi-branch supported</li>
            <li>Confirmation email template</li>
          </ul>
          <button className="btn btn-primary bg-orange-400 border-orange-300">
            See details
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <form className="w-full max-w-xl space-y-4">
            <h3 className="font-bold text-2xl ">Booking form</h3>
            <div className="form-control w-full max-w-5xl">
              <label className="label">
                <span className="label-text">Booking Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full max-w-5xl"
              />
            </div>
            <div className="form-control w-full max-w-5xl">
              <label className="label">
                <span className="label-text">Booking Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full max-w-5xl"
              />
            </div>
            <div className="form-control w-full max-w-5xl">
              <label className="label">
                <span className="label-text">How many Guest</span>
              </label>
              <input
                type="number"
                placeholder="enter guest number"
                className="input input-bordered w-full max-w-5xl"
              />
            </div>
            <div className="form-control w-full max-w-5xl">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="enter guest number"
                className="input input-bordered w-full max-w-5xl"
              />
            </div>
            <div className="form-control w-full max-w-5xl">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                placeholder="enter guest number"
                className="input input-bordered w-full max-w-5xl"
              />
            </div>
            <button className="btn btn-primary w-full bg-orange-400 border-orange-300">
              Book a Table
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
