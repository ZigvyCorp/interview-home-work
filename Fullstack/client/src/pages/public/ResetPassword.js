
import React from "react";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import path from "routes/path";
import { userService } from "services/userService";
import { toastError, toastSucess } from "utils/helpers";

import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "components/Input/Input";
const ResetPassword = ({ email }) => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {

            password: "",
        },
        validationSchema: Yup.object({

            password: Yup.string()
                .min(6, "Your password must be at least 6 characters!")
                .required("You must fill in this section!"),
        }),
        onSubmit: async (values) => {

            const response = await userService.handleResetPassword({ ...values, email })
            if (response?.success) {
                toastSucess(response?.msg)
                navigate(`/${path.LOGIN}`)

            } else {
                toastError(response?.msg)


            }
        },

    });
    return (

        <form className="w-full" onSubmit={formik.handleSubmit}>


            <Input
                type="password"
                name="password"
                handleChange={formik.handleChange}
                value={formik.values.password}
                errors={formik.errors.password}
                touched={formik.touched.password}
            />
            <Button type="submit" name="Change password" />


        </form>




    )
}

export default ResetPassword