import React, { useState } from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import HeaderContent from '../../Components/Header/Header'
import img1 from '../../assets/imgg/Blog Banner (42).png'
import img2 from '../../assets/imgg/Top-8-Software-Development-Models.jpg'
import img3 from '../../assets/imgg/desarrollador-programacion-empleo-ti.jpg'
import img4 from '../../assets/imgg/experiencia-programacion-persona-que-trabaja-codigos-computadora-1024x683.jpg'
import img5 from '../../assets/imgg/istockphoto-1356364287-612x612.jpg'
import img6 from '../../assets/imgg/pexels-photo-577585.jpeg'
import './Portfolio.scss'
import { Animate } from 'react-simple-animate'
import { Link } from 'react-router-dom'


const portfolioData = [
  {
    id: 2,
    name: 'view',
    image: img1,
    link: 'https://food-react-phi.vercel.app'
  },
  {
    id: 3,
    name: 'view',
    image: img2,
    link: 'https://darklight-ashy.vercel.app/'
  },
  {
    id: 2,
    name: 'view',
    image: img3,
    link: 'https://coffe-six-kappa.vercel.app/'
  },
  {
    id: 2,
    name: 'view',
    image: img4,
    link: 'https://myshop-ochre.vercel.app/'
  },
  {
    id: 3,
    name: 'view',
    image: img5,
    link: 'https://o-yinlar.vercel.app/'
  },
  {
    id: 2,
    name: 'view',
    image: img6,
    link: 'https://movies-theta-neon.vercel.app/'
  }
]

const filterData = [
  {
    filterId: 1,
    label: 'All'
  },
  {
    filterId: 2,
    label: 'Devolopment'
  },
  {
    filterId: 3,
    label: 'Design'
  },
]

function Portfolio() {


  const [filteredvalue, setFilterdValue] = useState(1)
  const [hoveredVaule, setHoveredValue] = useState(null)
  function handleFilter(currentId) {
    setFilterdValue(currentId)
  };

  function handleHover(index) {
    setHoveredValue(index)
  }

  console.log(hoveredVaule);

  const filteredItems = filteredvalue === 1 ? portfolioData :
    portfolioData.filter(item => item.id === filteredvalue)

  console.log(filteredItems);

  return (
    <div className='container'>
      <section id='Portfolio' className='Portfolio'>
        <HeaderContent
          headerText='Portfolio'
          icon={<BsInfoCircleFill cursor={"pointer"} size={40} />}
        />
          <Animate
                  play
                  duration={1}
                  delay={0}
                  start={{
                    transform: 'translateX(400px)'
                  }}
                  end={{
                    transform: 'translateX(0px)'
                  }}
                >
        <div className='portfolio_content'>

          <ul className='portfolio_content_filter'>

            {
              filterData.map(item => (
                <li className={item.filterId === filteredvalue ? 'active' : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
              ))}
          </ul>
          <div className='portfolio_content_cards'>
            {
              filteredItems.map((item, index) => (
                <div className='portfolio_content_cards_item' key={`cardItem${item.name.trim()}`}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHover(null)}

                >

                  <div className='portfolio_content_cards_item_img-wrapper'>
                    <a>
                      <img alt='dummy data' src={item.image} />
                    </a>
                  </div>
                  <div className='overlay'>

                    {
                      index === hoveredVaule && (
                        <div>
                          <p>{item.name}</p>
                          <button><Link to={item.link}> Visit</Link></button>
                        </div>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
              </Animate>
      </section>
    </div>
  )
}

export default Portfolio
