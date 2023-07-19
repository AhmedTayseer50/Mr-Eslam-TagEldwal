

import React from 'react'
import './Section3.css'
import { HiBadgeCheck } from 'react-icons/hi';

const Section3 = () => {
  return (
    <div className='back1' id='action1'>
      <div className='container back2'>

        <div className='sec1'>
          <img src="/images/brwaz_1.png" alt="" />
          <div className='sec2'>
            <img src="/images/me.jpg" alt="" />
          </div>
        </div>

        <div className='text10'>
          <h5 className='welc'>أهلاً بكم في موقعي الخاص معكم</h5>
          <h1 className='Mr'>مستر إسلام  تاج الدول </h1>
          <h5 className='space'>حاصل علي درجة البكالريوس في العلوم و التربيه قسم فيزياء جامعة حلوان</h5>

          <div className='check lef'>
            <h5> خبرة واسعة في تدريس مواد الفيزياء على مستوى المدرسة الثانوية والجامعية</h5>
            <HiBadgeCheck className='check1 expe' />
          </div>

          <div className='check10'>
            <h5>استخدام أحدث التقنيات التعليمة لشرح مبسط و سهل لتحفيزكم علي التعلم و التطور</h5>
            <HiBadgeCheck className='check101' />
          </div>

          <div className='check'>
            <h5>الأهتمام بتطوير مهاراتكم في الفيزياء و تأهيلكم للحياه العملية و الأكاديمية المستقبلية </h5>
            <HiBadgeCheck className='check1001 expe1' />
          </div>

          <div className='check lef1'>
            <h5>توفير الدعم النفسي و التربوي و العلمي للوصول للنجاح و التفوق</h5>
            <HiBadgeCheck className='check1 ch2' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Section3