import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import HeaderContent from '../../Components/Header/Header'
import { skillsData } from "./util.js"
import './Skills.scss'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import { useNavigate } from 'react-router-dom'





function Skills() {
const navigate = useNavigate();
console.log(navigate);


const ResumePage = () => {


  navigate('/portfolio')
}
  return (
       <div className='container'> 
      <section id='Skills' className='Skills'>
        <HeaderContent
          headerText='My Skills'
          icon={<BsInfoCircleFill cursor={"pointer"} size={40} />}
        />
        <div className='skills_content-wrapper'>
          {
            skillsData.map((item, i) => (
              <div className='skills_content-wrapper_inner-content'>
                <Animate
                  play
                  duration={1}
                  delay={0}
                  start={{
                    transform: 'translateX(-250px)'
                  }}
                  end={{
                    transform: 'translateX(0px)'
                  }}
                >
                  <h3 className='skills_content-wrapper_inner-content_category-text'>{item.label}</h3>
                  <div>
                    {
                      item.data.map((skillItem, j) => (
                        <AnimateKeyframes

                          play
                          duration={1}
                          keyframes={['opacity : 2', 'opacity : 0']}
                          iterationCount='0'


                        >
                          <div className='progressbar-wrapper' key={j}>
                            <p>{skillItem.skillName}</p>
                            <Line 
                              percent={skillItem.percentage}
                              strokeWidth='4'
                              strokeColor='var(--yellow-main-thema)'
                              trailWidth={'4'}
                              strokeLinecap='square'
                              />
                          </div>

                        </AnimateKeyframes>
                      ))
                    }
                  </div>
                <button onClick={ResumePage} className='next'>next page</button>
                </Animate>
              </div>
            ))
          }
         
        </div>
      
      </section>
    </div>
  )
}

export default Skills
