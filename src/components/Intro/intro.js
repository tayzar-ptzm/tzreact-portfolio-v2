import React from 'react'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'
import './intro.css';
import bg from '../../assets/manfat2.png';
import btnImg from '../../assets/hireme2.gif';
import downloadImg from '../../assets/download.gif';
import myCV from '../../assets/myCV.pdf';
import { Link } from 'react-scroll';

const Intro = () => {
  
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Phyoe Tay Zar Minn</span> <br />
            </span>
            <Typed strings={['Solution Architect', 'Software Developer', 'Freelancer']} typeSpeed={40} backSpeed={50} backDelay={2000} loop></Typed>
            <span className='typed' data-typed-items='Software Developer, Solution Architect'></span>
            <p className='introPara'>I am a result-driven, passionate and skilled software development expert</p>
            <div className='introBtnFrame'>
              <Link to='#'><button className='btn'onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                }}><img className='btnImg' src={btnImg} alt='Hire Me' />Hire Me</button></Link>
                <div className='split'></div>
              <a href={myCV} download>
                <button className='btn'><img className='btnImg' src={downloadImg} alt='Download CV' />Download CV</button>
              </a>
            </div>     
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro