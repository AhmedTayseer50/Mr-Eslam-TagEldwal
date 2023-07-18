import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Navbar2 from '../Navbar2/Navbar2'; 




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_py174r7', 'template_6pz9wos', form.current, 'CMqerMrKjfw92PGWF')
      .then((result) => {
          console.log(result.text);
          alert("تم ارسال الرساله بنجاح")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
      <Navbar2 />
      <div className='parttt201'>
        <div className=' container parttt202' >

          <div className='parttt203'>
            <h2>الحق ابعت بياناتك دلوقتي </h2>
            <h4>علشان تحجز مكانك</h4>
            <div className='linkpp upp'>
              <Link to="https://www.facebook.com/EslamTagEldwal" target='_blank' >
                <FaFacebookSquare className='icon111' />
              </Link>
              <p >facebook</p>
              <Link to="https://wa.me/+2001551508166" target='_blank'>
                <ImWhatsapp className='icon111' />
              </Link>
              <p >whatsapp</p>
              <Link to="https://www.youtube.com/@Eslam-Tag-Eldwal" target='_blank'>
                <AiOutlineYoutube className='icon111' />
              </Link>
              <p >youtube</p>
              <BsFillTelephoneFill className='icon111' />
              <p>Call me</p>
              <p className='pargAB'>+01551508166</p>
            </div>
          </div>

          <div className='formA10'>
            <h1 className='text-center11'>أحجز حصتك</h1>


            <form ref={form} action="" onSubmit={sendEmail}>
              <label>
                <span className="label-text10">الأسم</span>
                <input type="text" name="from_name" />
              </label>
              <div>
                <label className="col-one-half_1">
                  <span className="label-text10 num10 ">رقم هاتف بديل</span>
                  <input type="text" name="mobile_two" className='mob' />
                </label>
                <label className="col-one-half_1">
                  <span className="label-text10">(whatsapp) رقم الهاتف</span>
                  <input type="text" name="whats_number" />
                </label>
              </div>

              <div>
                <label className="col-one-half_1">
                  <span className="label-text10 num10">المنطقة</span>
                  <input type="text" name="area" />
                </label>
                <label className="col-one-half_1">
                  <span className="label-text10">المحافظة</span>
                  <input type="text" name="governorate" />
                </label>
              </div>
              <div>

                <label for="">
                  <span className="label-text10">اختار السنة الدراسية</span><br />

                  <select name="classroom" id="" className="">
                  <option disabled>اختار الصف الدراسي</option>
                    <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
                    <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
                  </select>

                </label>
              </div>
              <div>
                <label htmlFor="">
                  <span className='label-text10'>ملاحظات</span>
                  <textarea name="massage" id="" cols="52" className='text' rows="4"></textarea>
                </label>
              </div>
              <br />
              <button type='submit' className="btttn butt">
                إرســـــال
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact