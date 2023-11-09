import React from 'react'
import Lottie from "lottie-react";
import notFound from "assets/img/not-found.json";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <Lottie
                style={{ width: "30%" }}
                animationData={notFound}
                loop={true}
            />
        </div>
    )
}

export default NotFound