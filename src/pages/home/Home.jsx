import React from "react";
import Hero from "./hero/Hero";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleChef from "../../components/SingleChef";
import { Dna } from "react-loader-spinner";

const Home = () => {
  // get data
  const chefs = useLoaderData();

  // loading
  const navigation = useNavigation();
  return (
    <>
      <Hero />
      <div className="pb-20 container mx-auto">
        <div className="my-20 text-center space-y-3">
          <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400">
            Our Chefs
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        {navigation.state === "loading" ? (
          <div className="mx-auto text-center container w-96">
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {chefs.map((c) => (
              <SingleChef key={c.id} chef={c} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
