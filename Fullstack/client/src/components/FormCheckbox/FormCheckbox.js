import React, { memo } from 'react'

const FormCheckbox = ({ data, onChange, name, errors, touched }) => {
    return (
        <>
            {data?.map((el) => {
                return (
                    <div key={name ? el?._id : el} className="flex items-center  pt-3 ">
                        <input
                            onChange={onChange}
                            className="mr-2 cursor-pointer"
                            type="checkbox"
                            name={name ? name : el}
                            value={name ? el?.title : el}
                        />
                        <label htmlFor={name ? el?.title : el}>{name ? el?.title : el}</label>
                    </div>
                );
            })}
            {/* {errors && touched && (
                <p className="text-red-500 text-sm italic">{errors}</p>
            )} */}
        </>
    )
}

export default memo(FormCheckbox)