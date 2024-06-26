import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

const LoginForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const refLoginForm = useRef(null);
  const togglePassword = function(){
    setPasswordShow(current => !current)
  };

  return(
    // <div className="modal fade show d-block" id="modal_login" data-bs-backdrop="false">
    //   <div className="modal-dialog modal-dialog-centered">
    //     <div className="modal-content">
    //       <div className="modal-body">
          <div className="d-flex justify-content-center align-items-center h-100">
            <form className="form-login" autoComplete="off" ref={refLoginForm}>
              <div className="text-center mb-4">
                <Image className="login-logo w-100 h-auto" src="/images/logo-login.png" width={200} height={200} alt=""/>
              </div>
              <div className="mb-2 form-group">
                <label className="form-label">Username</label>
                <input type="text" className="form-control username" placeholder="Enter Your Username" required/>
                <i className="bi bi-person-fill"></i>
              </div>
              <div className="mb-3 form-group">
                <label className="form-label">Password</label>
                <input type={passwordShow ? "text" : "password"} className="form-control password" placeholder="Enter Your Password" required/>
                <i className="bi bi-eye" onClick={togglePassword}></i>
              </div>
              <button type="submit" className="btn-login btn btn-primary rounded-pill btn-small mx-auto d-table">LOG IN</button>
              <div className="error-form text-center d-none">Incorrect username and password</div>
            </form>
          </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default LoginForm;