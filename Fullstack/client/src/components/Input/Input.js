import React, { memo } from 'react'

const Input = ({
    name, errors, touched, value, handleChange, type, disabled

}) => {

    return (
        <div className="w-full relative">
            <input
                disabled={disabled}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder=" "
                type={type}
                className={`${disabled && "bg-gray-300"} py-2 px-3 mt-5 rounded-md w-full border-2 border-blue-500 outline-blue-500`}

            />
            {errors && touched && (
                <p className="text-red-500 text-sm italic">{errors}</p>
            )}

            <span className="absolute text-gray-500 pointer-events-none top-[30px] bg-white left-[14px] px-1 text-sm italic transition duration-300 input-text">
                {name?.slice(0, 1).toUpperCase() + name?.slice(1)}
            </span>
        </div>
    )
}

export default memo(Input)