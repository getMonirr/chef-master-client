import React from "react";
import Hero from "./hero/Hero";
import { useLoaderData } from "react-router-dom";
import SingleChef from "../../components/SingleChef";

const Home = () => {
  // get data
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <>
      <Hero />
      <div className="py-28 container mx-auto">
        <h2 className="my-20 font-bold text-4xl text-center">Our Chefs</h2>
        <div className="grid grid-cols-3 gap-8">
          {chefs.map((c) => (
            <SingleChef key={c.id} chef={c} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
