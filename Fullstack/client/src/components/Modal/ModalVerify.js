import React, { memo, useCallback, useEffect, useState } from 'react'
import { Modal } from 'antd';
import { formatTime, toastError, toastSucess } from '../../utils/helpers';
import { userService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import OtpInput from "react-otp-input";
import Button from 'components/Button/Button';

const ModalVerify = ({ open, setOpen, email, path, type, setIsVerifySuccess }) => {
    const [otp, setOtp] = useState("");

    const [remainingTime, setRemainingTime] = useState(60);
    const navigate = useNavigate();

    const handleVerifyOTP = useCallback(async () => {
        if (!otp || otp.length < 6) {
            toastError("Please enter OTP!");
            if (type === "verify-email") {
                await userService.handleVerifyOTP({
                    email,
                    otp,
                })
            }
        } else {


            let response
            if (type === "verify-email") {
                response = await userService.handleVerifyOTP({
                    email,
                    otp,
                });
            } else if (type === "reset-password") {

                response = await userService.handleVerifyOTPResetPassword({
                    email,
                    otp,
                });
            }

            if (response?.success) {
                setIsVerifySuccess && setIsVerifySuccess(true)
                setOpen(false);
                toastSucess(response?.msg);
                navigate(path);
            } else {
                setIsVerifySuccess && setIsVerifySuccess(false)
                setOpen(false);
                toastError(response?.msg);
            }
        }
    }, [otp]);

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                handleVerifyOTP();
                setOpen(false);
            }, 60000);

            const interval = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000); // Update remaining time every second

            return () => {
                clearTimeout(timer);
                clearInterval(interval);
                setOtp("");
                setRemainingTime(60);
            };
        }
    }, [open]);
    return (
        <Modal
            title="Verify OTP Email"
            centered
            open={open}
            onCancel={handleVerifyOTP}
            footer={null}
        >
            <p className=" text-lg">
                Please check email{" "}
                <span className=" font-semibold">{email} </span>
                and enter your OTP.
            </p>
            <p className=" text-lg">
                Time remaining <i>{formatTime(remainingTime)}</i>
            </p>
            <OtpInput
                containerStyle="justify-between mt-5"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputStyle="border-2 border- w-[50px] h-[50px] border-blue-500 outline-blue-500 text-lg"
            />
            <div>
                <Button name="Send" handleOnclick={handleVerifyOTP} />
            </div>
        </Modal>
    )
}

export default memo(ModalVerify)