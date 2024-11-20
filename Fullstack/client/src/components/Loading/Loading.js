import React, { memo } from 'react'
import Lottie from "lottie-react";
import loading from "assets/img/loading.json";


const Loading = ({ isLoading, children, fullscreen }) => {
    return (
        <>
            {isLoading ? <div className={`${fullscreen && "z-[1000] absolute bg-sub top-0 left-0 right-0 bottom-0 opacity-70"} w-full h-full flex justify-center items-center`}>
                <Lottie
                    style={{ width: "5%" }}
                    animationData={loading}
                    loop={true}
                />
            </div> : children}
        </>



    )
}

export default memo(Loading)