import React from "react";
// import RunningBus from "../../assets/images/Trips/loading.gif";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {/* <img className="w-1/6" src={RunningBus} alt="Loading..." /> */}
      <h5 className="text-center -mt-8">
        Please be willing to wait for us in a second... 🚌
      </h5>
    </div>
  );
};

export default Loader;
