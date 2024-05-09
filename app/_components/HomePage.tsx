import React from "react";

const HomePage = () => {
  return (
    <div>
      <section className="bg-transparent text-white py-32 animate-pulse">
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-transparent text-blue-700 text-4xl font-bold">
              FLOW.
            </h1>
            <p className="mx-auto mt-4  max-w-xl text-white text-2xl">
              A web application for visualising and
              comparing pathfinding algorithms
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
