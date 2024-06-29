import React from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

function Home() {

  const navigate = useNavigate();
  console.log(navigate);


  const ContactMePage = () => {


    navigate('/about')
  }
  return (


    <div className='container'>
      <section id='home' className='home'>
        <div className='home_text-wrapper'>
          <h1>
            Hello, I'm Nurmukhammad
            <br />
            Front-end  devoloper
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={0}
          start={{
            transform: 'translateY(-400px)'
          }}
          end={{
            transform: 'translateY(0px)'
          }}
        >
          <div className='home_contact_me'>
            <button onClick={ContactMePage}>Hire Me</button>
          </div>
        </Animate>

      </section>
    </div>

  )
}

export default Home
