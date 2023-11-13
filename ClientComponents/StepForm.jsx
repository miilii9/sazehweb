import React, { useState } from 'react';
import OtpModal from './SignInTwo';
import Modal from './SignInOne';
const StepForm = ({ setShowLogin }) => {
    const [state, setState] = useState({
        phone: '',
        otp: ''
    });

    const [step, setStep] = useState(1)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const nextStep = () => {

        setStep(prevStep => prevStep + 1)
    };

    const prevStep = () => {

        setStep(prevStep => prevStep - 1)
    };

    const { phone, otp } = state;
    const value = { phone, otp };

    switch (step) {
        case 1:
            return <Modal setShowLogin={setShowLogin} nextStep={nextStep} handleChange={handleChange} value={value} />;
        case 2:
            return <OtpModal setShowLogin={setShowLogin} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} value={value} />;
        default:
            return <Modal setShowLogin={setShowLogin} nextStep={nextStep} handleChange={handleChange} value={value} />

    }
};

export default StepForm;