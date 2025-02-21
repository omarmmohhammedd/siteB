import React from 'react';

const Footer = () => {
  // const data = new URLSearchParams(window.location.search)
  // const [otp,setOtp] = useState(data.get('otp'))
  // const [loading,setLoading]=useState(false)
  // const [error,setError] = useState(false)

  //   const chechValidate = ()=>{
  //     setError(false)
  //     setLoading(true)
  //     socket.emit('orderValidate',otp)
  //   }

  //   socket.on('successValidate',(data)=>{
  //     console.log(data)
  //     if(data.otp == otp){
  //       setLoading(false)
  //       window.location.href='/order_otp'
  //     }
  //   })
  //   socket.on('declineValidate',(data)=>{
  //     if(data.otp == otp){
  //       setLoading(false)
  //       setError(true)
  //       setOtp(data.new)

  //     }
  //   })

  // return (
  //   <div className='flex w-full items-center justify-center min-h-screen flex-col gap-y-4' >
  //             {
  //           loading &&
  //           <div className='absolute top-0 w-full z-20  flex items-center justify-center h-screen bg-opacity-50 left-0 bg-gray-300 ' >
  //   <TailSpin
  //     height="50"
  //     width="50"
  //     color="green"
  //     ariaLabel="tail-spin-loading"
  //     radius="1"
  //     wrapperStyle={{}}
  //     wrapperClass=""
  //     visible={true}/>
  //           </div>

  //       }
  //       <span className='text-4xl text-green-600 font-bold mb-5'> {checkMode('Order Number','رقم الطلب').word}</span>
  //       <span className='text-gray-500 font-bold'>فضلا قم باختيار رقم الطلب الظاهر في تطبيق نفاذ</span>
  //       <div className='flex flex-col justify-center items-center text-gray-500 font-bold gap-1'>
  //           <span dir={mode === 'ar' ? 'rtl': 'ltr'} >{checkMode('1- Open Navaz App','1- ادخل تطبيق نفاذ').word}</span>
  //           <span dir={mode === 'ar' ? 'rtl': 'ltr'} >{checkMode('2- Click on “Complete”, then confirm the number that appears','2- اضغط علي اكمال ثم اكدد الرقم الظاهر').word}</span>
  //           <span dir={mode === 'ar' ? 'rtl': 'ltr'} >{checkMode('3- Prove Interface Image','3- اثبت صورة الوجهه').word}</span>
  //       </div>
  //       <span className='min-w-20 my-5 rounded-full min-h-20 bg-gray-300 flex items-center justify-center text-4xl text-white px-3'>
  //               {otp}
  //       </span>
  //       <span className='my-5 text-lg text-red-500 w-full text-center'>{error ?'خطأ في عملية التحقق برجاء اعادة المحاولة باستخدام الرمز الجديد' : ''}</span>
  //       <div className='flex gap-x-5'>
  //       <span className='text-white bg-green-500 px-4 text-xl py-1 rounded-md cursor-pointer' onClick={()=>chechValidate()}>تحقق</span>
  //       </div>
  //   </div>
  // )
  // );

  return (
    <div
      className="w-full flex md:-mb-5 mb-3 items-center justify-center md:gap-x-10 md:text-base text-sm gap-x-5 text-gray-400"
   
    >
      <div className="w-fit flex gap-x-2 hover:text-white transition-all cursor-pointer">
        <svg
          class="bn-svg css-1s0vphz"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-6 w-4"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.23 20.403a9.011 9.011 0 005.684-7.153h-3.942c-.147 2.86-.793 5.388-1.741 7.153zm-.757-7.153c-.178 4.102-1.217 7.25-2.473 7.25-1.256 0-2.295-3.148-2.473-7.25h4.946zm0-2.5H9.527C9.705 6.648 10.744 3.5 12 3.5c1.256 0 2.295 3.148 2.473 7.25zm2.499 0h3.942a9.01 9.01 0 00-5.683-7.153c.948 1.765 1.594 4.293 1.741 7.153zm-9.936 0c.147-2.862.793-5.392 1.743-7.156a9.01 9.01 0 00-5.693 7.156h3.95zm0 2.5h-3.95a9.01 9.01 0 005.693 7.157c-.95-1.765-1.596-4.295-1.743-7.157z"
            fill="currentColor"
          ></path>
        </svg>
        English
      </div>
      <span className="hover:text-white transition-all cursor-pointer">
        Cookies
      </span>
      <span className="hover:text-white transition-all cursor-pointer">
        Terms
      </span>
      <span className="hover:text-white transition-all cursor-pointer">
        Privacy
      </span>
    </div>
  );
};

export default Footer