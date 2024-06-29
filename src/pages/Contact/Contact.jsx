import React from 'react'
import './Contact.scss'
import HeaderContent from '../../Components/Header/Header'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'

function Contact() {
  return (
    <div className='container'>
    <section id='Contact' className='Contact'>
    <HeaderContent
      headerText='My Contact'
      icon={<BsFillInfoCircleFill cursor={"pointer"} size={40} />}
    />

    <div className='contact_content'>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform : 'translateX(-200px)'
        }}

        end={{
          transform : 'translateY(0px)'
        }}
        
        >

          <h3 className='contact_content_header-text'>Let's Talk</h3>

        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform : 'translateX(200px)'
        }}

        end={{
          transform : 'translateX(0px)'
        }}

        
        >
           
         <div className='contact_content_form'>
          <div className='contact_content_form_controlswrapper'>
            <div>
              <input required name='name' className='inputName' type={'text'} />
              <label htmlFor='name' className='nameLabel'>Name</label>
            </div>
            <div>
            <input required name='email' className='inputEmail' type={'text'} />
              <label htmlFor='email' className='emailLabel'>Email</label>
            </div>
            <div>
            <textarea required name='description' className='inputDescription' type={'text'} rows={'5'}/>
              <label htmlFor='description' className='descriptionLabel'>Description</label>
            </div>
            <div className='text12'>
              <h5>contact : +998994383706</h5> 
              <h5>email : tojiddinovmurmuhammad003@gmail.com </h5>
              <h5>instagramm : @nt_germany </h5>
            </div>
          </div>
          <button>Sumbit</button>
         </div>
        </Animate>
    </div>

  </section>
  </div>
  )
}

export default Contact
