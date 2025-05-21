// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;


// import signuppic from "../../assets/signup.png";
// import Navbar from "../Navbar";
// import Footer from "../Footer";


function Signup() {
  return (
    <>
      {/* <Navbar /> */}

      {/* <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div> */}


      <div className="w-full flex flex-col mt-20 p-28 justify-center container">
        <div className="row p-5 mt-5 mb-5">
          <div className="fs-2 text-center">
            <img src="media/images/signup.png" alt="Zerodha clone by ram" className="w-5/6" />
          </div>
          <div className="container text-center">
            <h1 className="text-4xl font-medium text-slate-500 mt-5 ">Signup now</h1>
            <h3 className="text-slate-700 mt-3 ">
              Or track your existing application.
            </h3>
            <form action="" className="flex flex-col mt-5 gap-3">
              <label htmlFor="fname">Mobile Number</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="+91 xxxxxxxxxx"
                className="px-4 py-2 rounded border-2 w-3/5"
              />
              <i className="text-xs text-slate-500"> <br/>
                You will recive an OTP on your number<br/>
              </i>
              <button
          className="p-2 btn btn-primary fs-5 mt-2"
          style={{ width: "10%", margin: "0 auto" }}
        >
          Continue
        </button>
              <a href="/" className="text-blue-600 text-sm"><br/>
                Open to open an NRI account?
              </a>
            </form>
          </div>
        </div>
        <div className="w-full mt-2">
          <p className="text-xs text-slate-500 mt-5 text-center">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit this article to know more.
          </p>
          <p className="text-xs text-slate-500 text-center">
            By submitting your contact details, you authorize Zerodha to contact
            you even if you are registered on DND & conduct online KYC for
            trading & demat account opening as per KRA regulations and PMLA
            guidelines.
          </p>
          <p className="text-xs text-slate-500  text-center">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the offline forms. For help, click here.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Signup;
