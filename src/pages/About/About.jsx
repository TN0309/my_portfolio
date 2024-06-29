import React from 'react'
import './About.scss'
import HeaderContent from '../../Components/Header/Header'
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from 'react-simple-animate'
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDatabase, FaDev, } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'


const personalDefault = [
  {
    label: 'Name :',
    value: 'Nurmuhammad',
  },
  {
    label: 'Age :',
    value: '18',
  },
  {
    label: 'Address :',
    value: 'Uzbekistan, Andijon',
  },
  {
    label: 'Email :',
    value: 'tojiddinovmurmuhammad003@gmail.com',
  },
  {
    label: 'Contact :',
    value: '+998994383706',
  },
]

const jobSummary = 'Hello, I am a front-end programmer with 1 year of experience, my name is Nurmuhammad, I am 18 years old, I live in Andijan, Uzbekistan, I want to go to Germany after perfecting the German language and programming, and I want to work there as a web designer and web developer. Ive worked on many websites and Ive had a hard time with all of them, I want to learn more programming and keep going. Currently I am interested and working in web developer, web design and trading fields I want to explore a lot in the field of programming and create new ideas'

function About()
 {
  const navigate = useNavigate();
console.log(navigate);


const ResumePage = () => {


  navigate('/skills')}
  
  return (
    <div className='container'>
      <section id='About' className='About'>

        <HeaderContent
          headerText='About Me'
          icon={<BsInfoCircleFill cursor={"pointer"} size={40} />}
        />
        <div className='about_content'>
          <div className='about_content_personalWrapper'>
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: 'translateX(-900px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >

              <h3>Front-end Devoloper </h3>
              <p>{jobSummary}</p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: 'translateX(500px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >
              <h3 className='personalInformationHeaderText'>Personal Information</h3>
              <ul>{
                personalDefault.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className='value'>{item.value}</span>

                  </li>
                ))
              }</ul>
            </Animate>
          </div>
          <div className='about_content_servicesWrapper'>
            <Animate
              play
              duration={1.5}
              delay={0}
              start={{
                transform: 'translateX(500px)'
              }}
              end={{
                transform: 'translateX(0px)'
              }}
            >
              <div className='about_content_servicesWrapper_innerContent'>
                <div>
                  <FaDev size={60} color='var(--yellow-main-thema)' /></div>
                <div>
                  <DiAndroid size={60} color='var(--yellow-main-thema)' />
                </div>
                <div>
                  <FaDatabase size={60} color='var(--yellow-main-thema)' /></div>
                <div>
                  <DiApple size={60} color='var(--yellow-main-thema)' /></div>
              </div>
              <button onClick={ResumePage} className='next1'>next page</button>
            </Animate>
          </div>


        </div>
      </section>
    </div>
  );
};

export default About
