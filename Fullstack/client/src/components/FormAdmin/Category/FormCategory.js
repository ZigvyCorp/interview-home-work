import { useFormik } from "formik";
import * as Yup from "yup";

import React, { memo, useCallback, useEffect, useState } from "react";
import Input from "components/Input/Input";
import FormSelect from "components/FormSelect/FormSelect";
import { useSelector } from "react-redux";
import { productService } from "services/productService";
import Button from "components/Button/Button";
import { icons } from "utils/icons";
import Markdown from "components/Markdown/Markdown";
import { toastError, toastSucess } from "utils/helpers";
import FormCheckbox from "components/FormCheckbox/FormCheckbox";
import { categoryService } from "services/categoryService";


const FormCategory = ({
    setIsModal,
    data,
    handleGetAllCategories,
    type,
}) => {
    const [imageAsset, setImageAsset] = useState(null);
    const [brands, setBrands] = useState([]);
    const { MdCloudUpload, MdDelete, MdKeyboardArrowDown } = icons
    const formik = useFormik({
        initialValues: {
            title: data ? data.title : "",
            brand: [],
            image: data ? data.image : imageAsset,

        },
        validationSchema: Yup.object({
            title: Yup.string().required("You must fill in this section!"),

            image: Yup.string().required("You must choose image!"),

        }),
        enableReinitialize: true,
        onSubmit: async (values) => {

            const formData = new FormData();

            for (let i of Object.entries(values)) {

                formData.append(i[0], i[1])
            }

            setIsModal(false);

            try {
                let res;
                if (type === "create") {
                    res = await categoryService.handleCreateCategory(formData);
                } else {

                    res = await categoryService.handleUpdateCategory(data?._id, formData);
                }

                if (res?.success) {
                    toastSucess(res?.msg)
                    handleGetAllCategories({ sort: "-createdAt" })
                } else {
                    toastError(res?.msg)
                }
            } catch (error) {
                console.log("error: ", error);
            }
        },
    });

    const fechBrands = async () => {
        const response = await productService.handleGetAllBrands()
        setBrands(response?.brands)
    }

    useEffect(() => {
        fechBrands()
    }, [])

    useEffect(() => {
        data && setImageAsset(data.image);
        return () => {
            setImageAsset(null);
        };
    }, [data]);

    useEffect(() => {
        return () => {
            imageAsset && URL.revokeObjectURL(imageAsset.preview);
        };
    }, [imageAsset]);

    return (
        <div className="w-full mt-5">
            <div className="w-full flex justify-center">
                <div className="w-full my-3 text-xl text-gray-900 font-semibold">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="w-full  border border-sub rounded-lg p-4 flex flex-col  gap-4"
                    >
                        <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-2">
                                <Input
                                    type="text"
                                    name="title"
                                    handleChange={formik.handleChange}
                                    value={formik.values.title}
                                    errors={formik.errors.title}
                                    touched={formik.touched.title}
                                />
                            </div>

                            <div className="flex items-center justify-between cursor-pointer px-3 py-2 border-2 rounded-lg border-sub relative mt-5 group  ease-in duration-300 after:absolute after:right-0 after:bottom-[-15px] after:w-full after:h-[20px]">

                                <p>Brand</p>

                                <MdKeyboardArrowDown
                                    className="rotate-[270deg] group-hover:rotate-[360deg] ease-in duration-300"
                                // style={{ transform: "rotate(270deg)" }} 
                                />



                                <div className="z-50 w-full px-3  hidden group-hover:grid grid-cols-3 absolute  border right-[0px] top-[50px] bg-white rounded-lg shadow-lg ">


                                    <FormCheckbox
                                        errors={formik.errors.brand}
                                        touched={formik.touched.brand}
                                        data={brands} name="brand" onChange={formik.handleChange} />

                                </div>


                            </div>
                        </div>

                        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-sub w-full h-225 md:h-[30vh] cursor-pointer rounded-lg">
                            <>
                                {!imageAsset ? (
                                    <>
                                        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                                <p className="text-gray-500 hover:text-gray-700">
                                                    Click here to upload
                                                </p>
                                            </div>
                                            <input
                                                type="file"
                                                name="image"
                                                accept="image/*"
                                                onChange={(e) => {



                                                    const file = e.target.files[0];
                                                    file.preview = URL.createObjectURL(file);

                                                    setImageAsset(file);

                                                    return formik.setFieldValue(
                                                        "image",
                                                        e.target.files[0]
                                                    );
                                                }}
                                                className="w-0 h-0"
                                            />
                                        </label>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative h-full">
                                            <img
                                                src={
                                                    imageAsset?.preview
                                                        ? imageAsset.preview
                                                        : `${imageAsset}`
                                                }
                                                alt="uploaded image"
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                                                onClick={() => setImageAsset(null)}
                                            >
                                                <MdDelete className="text-white" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        </div>
                        {formik.errors.image && formik.touched.image && (
                            <p className="text-red-500 text-sm italic">
                                {formik.errors.image}
                            </p>
                        )}

                        <div className="flex items-center w-full">
                            <Button name={type === "create" ? "Create" : "Save"} type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default memo(FormCategory);
