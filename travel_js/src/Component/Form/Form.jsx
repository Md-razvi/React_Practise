import { FaEyeSlash } from "react-icons/fa";
import React from 'react'
import Button from "../Button/Button";
import './form.css'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Form = () => {
  return (
    <div id='formbody'>
      <h2>Travling!</h2> 
      <form>
           <div>
              <h3>
                  Masuk
             </h3>
             <p>
                 Daftar
             </p>
          </div>
         <input type="text" placeholder='Nomor Ponsel atau Email'/>
         <div>
           <input type="text" placeholder='Kata Sandi'/>
           <FaEyeSlash />
         </div>

         <input type="submit" value="Masuk"/>
        <h6>
        Lupa kata sandi? <a href=''>Klik disini</a>
      </h6>
      </form>
     <div className="line">
      <hr/>atau masuk dengan<hr/>
     </div>
     <Button name="Google" icons={<FaGoogle />} style={{width:'100%'}}/>
     <Button name="Faceboook"icons={<FaFacebookF />} style={{width:'100%'}}/>
     <p>© 2021 Travling. All Rights Reserved</p>
     
    </div>
  )
}

export default Form
