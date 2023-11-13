"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import OtpInput from 'react-otp-input';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useMutation } from "react-query";
import http from "@/Services/httpService";
const requestOTP = async (phoneNumber) => {
  return http.post('auth/check-otp', { phoneNumber });
};

function OtpModal({ value, setShowLogin }) {
  axios.defaults.withCredentials = true;

  const { isLoading, isError, isSuccess, mutateAsync } = useMutation({ mutationFn: requestOTP });
  const phoneNumber = value.phone
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState({
    error: '',
    success: ''
  });

  const otpRef = useRef(null);
  useOutsideAlerter(otpRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowLogin(false)

        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = async () => {
    try {
      const { data } = await mutateAsync(phoneNumber)
    } catch (error) {
      console.log(error);
    }
    setMinutes(1);
    setSeconds(30);
  };


  const confirmOtp = () => {
    if (otp.length === 6) {
      axios
        .post('http://localhost:3000/verifyOTP', {
          phone: `${value.phone}`,
          otp: `${otp}`,
          withCredentials: true
        })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
          setError({ ...error, error: error.message });
          toast.error("خطایی رخ داده دوباره تلاش کنید.")

        });
    } else {
      toast.error("کد ارسال شده را وارد کنید")

    }
  };

  return (
    <div id="sign-in-form">
      <div className="sign-in-2">
        <div className="blur active">
          <div className="blur-p">
            <div ref={otpRef} className="sign-in">
              <p>ورود با رمز یکبار مصرف</p>
              <span className="message">
                رمز ارسال شده به شماره {value.phone} را وارد کنید
              </span>
              <div>
                <form dir="ltr" autoComplete="off" className="pin-wrapper">
                  <OtpInput
                    name="otp"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>{""}</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </form>
              </div>
              <span>
                <button onClick={confirmOtp} type="button">
                  ورود
                </button>
              </span>
              <button
                onClick={resendOTP}
                disabled={seconds > 0 || minutes > 0}
                className="timer"
                style={{
                  backgroundColor:
                    seconds > 0 || minutes > 0 ? "#C7C7C7" : "#4285F4",
                }}
              >
                <p>ارسال مجدد رمز</p>
                <div>
                  {seconds > 0 || minutes > 0 ? (
                    <p>
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : null}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpModal;


