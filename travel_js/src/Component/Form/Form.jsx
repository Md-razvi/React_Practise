import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div id='formbody'>
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
        <input type="text" placeholder='Kata Sandi'/>
        <input type="submit" value="Masuk"/>
      </form>
      <h6>
        Lupa kata sandi? Klik disini
      </h6>
    </div>
  )
}

export default Form
