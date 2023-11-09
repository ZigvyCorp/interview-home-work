import React, { memo } from 'react'

const FormSelect = ({ name, options, className, value, setValue, handleChange, errors, touched, choose, valueTitle, type }) => {
    return (
        <div>
            <select value={value} onChange={handleChange ? handleChange : setValue} className={className} name={name}>
                {choose && <option value="">
                    Select {choose}
                </option>}
                {!type && options?.map((el) => {
                    return <option key={el?.id || el?._id} value={valueTitle ? el?.title : el?.value}>{el?.title.toUpperCase()}</option>
                })}

                {type === "province" &&
                    options?.map((option) => {
                        return (
                            <option key={option.province_id} value={option.province_id}>
                                {option.province_name}
                            </option>
                        );
                    })}
                {type === "district" &&
                    options?.map((option) => {
                        return (
                            <option key={option.district_id} value={option.district_id}>
                                {option.district_name}
                            </option>
                        );
                    })}
                {type === "ward" &&
                    options?.map((option) => {
                        return (
                            <option key={option.ward_id} value={option.ward_id}>
                                {option.ward_name}
                            </option>
                        );
                    })}
            </select>
            {errors && touched && <p className="text-red-500 text-sm italic">{errors}</p>}
        </div>
    )
}

export default memo(FormSelect)