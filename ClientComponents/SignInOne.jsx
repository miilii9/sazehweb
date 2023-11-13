import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import axios from "axios";
// import http from "@/Services/httpService";

const requestOTP = async (phoneNumber) => {
  return axios.post('http://localhost:4000/api/auth/get-otp', { phoneNumber });
};
function Modal({ nextStep, handleChange, value, setShowLogin }) {
  const { isLoading, isError, isSuccess, mutateAsync } = useMutation({ mutationFn: requestOTP });
  const [validPhone, setValidPhone] = useState(false)

  const phonePattern = /^09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}$/;
  const phoneNumber = value.phone

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);

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

  const submitHandler = async (e) => {
    setValidPhone(phonePattern.test(phoneNumber))
    e.preventDefault()
    if (validPhone) {
      try {
        const { data } = await mutateAsync(phoneNumber)
        nextStep();
      } catch (error) {
        toast.error("مشکلی پیش آمده دوباره امتحان کنید");
      }
    } else {
      toast.error("شماره تلفن نادرست وارد شده است.")
    }
  }

  return (
    <div id="sign-in-form">
      <div className="blur active">
        <div className="blur-p">
          <form onSubmit={submitHandler} autoComplete="off" ref={modalRef} className="sign-in">
            <p className="mb-3">ورود به سازه وب</p>
            <input
              value={value.phone}
              onChange={handleChange}
              id="phone"
              name="phone"
              type="tel"
              placeholder="شماره تلفن یا ایمیل یا نام کاربری"
            />
            <span >
              <button type="submit">ورود</button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
