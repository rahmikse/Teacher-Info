import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "./useForm";
import validateInfo from "./ValidateInfo";

const SignUp = (submitForm) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validateInfo
  );
  const notify = () =>
    toast.success("Geçerli E-Mail!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Geçerli E-Mail");
    } else {
      setEmailError("Lütfen geçerli bir E-Mail girin!");
    }
  };
  return (
    <form
      className="  border-2 border-solid border-stone-400 shadow-xl w-full max-w-sm mt-20 m-auto item p-1  rounded-md "
      style={{ backgroundColor: "rgb(237 233 254)" }}
      onSubmit={handleSubmit}
    >
      <div className=" mb-2 mt-2 ">
        <img
          src="https://mehmetakif.edu.tr/upload/makuv5/0-icerik-icerik-id-43566355-big-maku-logo.jpg"
          alt="..."
          className=" mb-10 shadow-xl rounded-full max-w-full h-auto align-middle border-none"
        />
      </div>
      <div className="  md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-blue-900 font-bold md:text-right mb-1 md:mb-0 pr-4 "
            htmlFor="inline-height"
          >
            E-Mail
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className=" shadow-xl bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="email"
            onChange={(e) => validateEmail(e)}
            placeholder="E-Mail"
          />
          <br />
          <span style={{ color: "rgb(225 29 72)" }}>{emailError} </span>
        </div>
      </div>
      <div className="  md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-blue-900 font-bold md:text-right mb-1 md:mb-0 pr-4 "
            htmlFor="inline-height"
          >
            Kullanıcı Adı
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className=" shadow-xl bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="Kullanıcı Adı"
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-blue-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-weight"
          >
            Şifre
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className=" shadow-xl bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="password"
            name={"password"}
            placeholder={"Şifre Gir"}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-blue-900 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-weight"
          >
            Şifre Doğrula
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className=" shadow-xl bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="password"
            name={"password2"}
            placeholder={"Şifre Doğrula"}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <div className="md:w-1/3">
            <Link to="/login">
              <button className="shadow-xl mb-10 bg-indigo-300 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-2 rounded">
                Kayıt Ol
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
