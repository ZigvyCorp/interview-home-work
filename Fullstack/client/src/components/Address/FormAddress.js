import React, { memo, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "utils/constants";
import { Input, Button } from "components";
import FormSelect from "components/FormSelect/FormSelect";
import { provinceApiService } from "services/provinceApiService";
import { userService } from "services/userService";
import { toastSucess } from "utils/helpers";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "redux/AsyncAction/user";

const FormAddress = ({ setIsModal, type, data }) => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [provinceId, setPovinceId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [wardId, setWardId] = useState(null);


  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      fullName: data ? data.fullName : "",
      mobile: data ? data.mobile : "",
      email: data ? data.email : "",
      province: data ? data.province?.id.toString() : "",
      district: data ? data.district?.id.toString() : "",
      ward: data ? data.ward?.id.toString() : "",
      street: data ? data.street : "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("You must fill in this section!"),
      province: Yup.string().required("You must fill in this section!"),
      district: Yup.string().required("You must fill in this section!"),
      ward: Yup.string().required("You must fill in this section!"),
      street: Yup.string().required("You must fill in this section!"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      mobile: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")

        .min(9, "Your phone number must be on 10 characters!")
        .max(11, "Your phone number must be under 11 characters!")
        .required("A phone number is required"),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsModal(false)
      let response
      if (type === "create") {
        response = await userService.handleAddAddress({

          ...values,
          province: provinceId,
          district: districtId,
          ward: wardId,
        })
      } else {
        response = await userService.handleUpdateAddress({

          ...values,
          province: provinceId,
          district: districtId,
          ward: wardId,
          id: data?._id
        })

      }

      if (response?.success) {
        toastSucess(response?.msg)
        dispatch(getCurrentUser())

      }
    },
  });
  const fetchProvince = async () => {
    const response = await provinceApiService.getProvince();
    if (response.status === 200) {
      setProvinces(response.data.results);
    }
  };
  const fetchDistrict = async (provinceId) => {
    const response = await provinceApiService.getDistrict(provinceId);
    if (response.status === 200) {
      setDistricts(response.data.results);
    }
  };
  const fetchWard = async (districtId) => {
    const response = await provinceApiService.getWard(districtId);
    if (response.status === 200) {
      setWards(response.data.results);
    }
  };

  useEffect(() => {
    data && setPovinceId(data?.province)
    data && setDistrictId(data?.district)
    data && setWardId(data?.ward)
  }, [data])

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    setWards(null);
    !data && setDistrictId(null);
    !data && setWardId(null);
    setDistricts(null);
    formik.values.district = "";
    formik.values.ward = "";

    if (provinceId?.id) {
      fetchDistrict(provinceId?.id);
    }
  }, [provinceId]);
  useEffect(() => {
    if (districtId?.id) {
      fetchWard(districtId?.id);
    }
  }, [districtId]);
  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="border-b-2 py-5">
        <Input
          type="text"
          name="fullName"
          handleChange={formik.handleChange}
          value={formik.values.fullName}
          errors={formik.errors.fullName}
          touched={formik.touched.fullName}
        />
        <div className="grid grid-cols-2 gap-5">
          <Input
            type="email"
            name="email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
          <Input
            type="text"
            name="mobile"
            handleChange={formik.handleChange}
            value={formik.values.mobile}
            errors={formik.errors.mobile}
            touched={formik.touched.mobile}
          />
        </div>
      </div>
      <div className="py-3">
        <h2 className="text-xl font-semibold">Address</h2>
        <div className="grid grid-cols-3 gap-5">
          <FormSelect
            name="province"
            value={formik.values.province}
            options={provinces}
            type="province"
            choose="Province"
            className="outline-none w-full text-base border-b-2 border-sub p-2 rounded-md cursor-pointer"
            errors={formik.errors.province}
            touched={formik.touched.province}
            handleChange={(e) => {
              setPovinceId({
                id: e.target.value,
                name: e.target[e.target.selectedIndex].text,
              });
              formik.handleChange(e);
            }}
          />
          <FormSelect
            name="district"
            type="district"
            value={formik.values.district}
            options={districts}
            choose="District"
            className="outline-none w-full text-base border-b-2 border-sub p-2 rounded-md cursor-pointer"
            errors={formik.errors.district}
            touched={formik.touched.district}
            handleChange={(e) => {
              setDistrictId({
                id: e.target.value,
                name: e.target[e.target.selectedIndex].text,
              });
              formik.handleChange(e);
            }}
          />
          <FormSelect
            name="ward"
            type="ward"
            value={formik.values.ward}
            options={wards}
            choose="Ward"
            className="outline-none w-full text-base border-b-2 border-sub p-2 rounded-md cursor-pointer"
            errors={formik.errors.ward}
            touched={formik.touched.ward}
            handleChange={(e) => {
              setWardId({
                id: e.target.value,
                name: e.target[e.target.selectedIndex].text,
              });
              formik.handleChange(e);
            }}
          />
        </div>
        <Input
          type="text"
          name="street"
          handleChange={formik.handleChange}
          value={formik.values.street}
          errors={formik.errors.street}
          touched={formik.touched.street}
        />
      </div>
      <Button name="Save" type="submit" />
    </form>
  );
};

export default memo(FormAddress);
