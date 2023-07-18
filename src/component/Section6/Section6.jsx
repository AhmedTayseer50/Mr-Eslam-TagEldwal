import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Section6.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Section6 = () => {
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
        <div className='part201'>
            <div className=' container part202' >

                <div className='part203'>
                    <h2>الحق ابعت بياناتك دلوقتي </h2>
                    <h4>علشان تحجز مكانك</h4>
                    <div className='linkpp upp'>
                        <Link to="https://www.facebook.com/EslamTagEldwal" target='_blank' >
                            <FaFacebookSquare className='icon1' />
                        </Link>
                        <p >facebook</p>
                        <Link to="https://wa.me/+2001551508166" target='_blank'>
                            <ImWhatsapp className='icon1' />
                        </Link>
                        <p >whatsapp</p>
                        <Link to="https://www.youtube.com/@Eslam-Tag-Eldwal" target='_blank'>
                            <AiOutlineYoutube className='icon1' />
                        </Link>
                        <p >youtube</p>
                        <BsFillTelephoneFill className='icon1' />
                        <p className='phon'>Call me</p>
                        <p className='parg'>+01551508166</p>
                    </div>
                </div>

                <div className='form10'>
                    <h1 className='text-center'>أحجز حصتك</h1>

                    <form ref={form} action="" onSubmit={sendEmail}>
                        <label>
                            <span class="label-text">الأسم</span>
                            <input type="text" name="from_name" />
                        </label>
                        <div>
                            <label class="col-one-half">
                                <span class="label-text num n1">رقم هاتف بديل</span>
                                <input type="text" name="mobile_two" className='n2' />
                            </label>
                            <label class="col-one-half">
                                <span class="label-text">(whatsapp) رقم الهاتف</span>
                                <input type="text" name="whats_number" />
                            </label>
                        </div>

                        <div>
                            <label class="col-one-half">
                                <span class="label-text num">المنطقة</span>
                                <input type="text" name="area" />
                            </label>
                            <label class="col-one-half">
                                <span class="label-text"  >المحافظة</span>
                                <input type="text"  name="governorate" />
                            </label>
                        </div>
                        <div>

                            <label for="">
                                <span class="label-text">اختار السنة الدراسية</span><br />
                                <select name="classroom" id="" className="">
                                    <option disabled>اختار الصف الدراسي</option>
                                    <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
                                    <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="">
                                <span className='label-text'>ملاحظات</span>
                                <textarea className='text' name="massage" id="" cols="52" rows="4"></textarea>
                            </label>
                        </div>
                        <br />
                        <button type='submit' className="btttn butomm">
                            إرســـــال
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Section6

