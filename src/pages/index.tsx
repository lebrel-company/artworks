// libraries:
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Cross as Hamburger } from 'hamburger-react';
import Image from 'next/image'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import Footer from "../components/footer";
import Sections from "../components/Sections";
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
import {colors} from '../shared/theme'
import useWindowSize from '../hooks/useWindowSize';
// @ts-ignore
import data from '../data/sections.yml'
//= =============================================================================

const VideoContainer = styled.div`
  video{
    object-fit: cover; 
    position: fixed;
    z-index: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
  }
`

const menuGradient = `linear-gradient(90deg, ${colors.dark + '00'} 0%, ${colors.dark} 90%);`

const MenuContainer = styled.div`
  top: 0;
  position: relative;
  z-index: 30;
  .header{
    width: 100vw;
    display: flex;  
    justify-content: space-between;
    padding: 2rem 3rem;
    z-index: 1;
    align-items: center;
  }
  .bg-menu{
    transform-origin: top right;
    z-index: -1;
    position: fixed;
    background: ${(props) => props.showMenu ? menuGradient : ''};
    height: 100vh;
    width: ${(props) => props.showMenu ? "40%" : ''};
    position: fixed;
    top: 0;
    right: 0;
    @media(max-width:1200px){ 
      width: ${(props) => props.showMenu ? "100%" : ''};
      background: ${colors.dark + 'CC'};
    }
  }
  .menu-sections-buttons {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }
`

const MenuButton = styled(motion.div)`
  font-size: 1.3rem; 
  font-family: 'Gza', sans-serif;
  font-style: normal;
  color: #FFF;
  padding: .5rem 1.2rem;
  letter-spacing: .5rem;
  cursor: pointer;
  text-transform: uppercase;
  :hover{
    border-bottom: 2px solid;
  }
`

const SectionsContainer = styled.div`
  position: relative;
  z-index: 20;  
  height: 80vh;
  scroll-behavior: smooth;
  width: 50vw;
  @media(max-width: 1200px){
    width: 70vw;
  }
  @media(max-width: 900px){
    width: 90vw;
  }
  @media(max-width: 600px){
    width: 100vw;
  }
`

const ScrollDownIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
`
const ScrollDownIcon = ()=>{
  return <ScrollDownIconContainer>  
    <div className="scroll-downs">
      <div className="mousey">
        <div className="scroller"></div>
      </div>
    </div>
  </ScrollDownIconContainer>
}


export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const size = useWindowSize();
  const [iconSize, setIconSize] = useState(120);

  useEffect(() => {
    console.log(size)
    if (size.width < 400) {
      setIconSize(100);
    }
  }, [size.width, size.height]);

  return (
    <div className="">
      <div className="">
        <MenuContainer showMenu={showMenu}>
          <div className='header'>
            <div>
              <Image
                width={iconSize}
                height={iconSize}
                src="/logos/artworks.png"
                alt="Artworks logo"
              />
            </div>
            <Hamburger 
              size={48}
              toggled={showMenu}
              toggle={setShowMenu}
            />
          </div>
    {
      showMenu ?
      <motion.div 
        className='bg-menu'
        animate={{
          opacity: [0, 1],
            scaleX: [0.9, 1.02, 1]
        }}
      >
        <div className='menu-sections-buttons'>
          {
            data.map((d)=>{
              return <MenuButton
                key={uuid()}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <a href={`#${d.id}`}>{d.title}</a>
              </MenuButton>
              })
          }
        </div>
      </motion.div>
      : null
    }
  </MenuContainer>
    <SectionsContainer>
      {
        size.width > 600 ? <ScrollDownIcon/> : null
      }
      <Sections />
    </SectionsContainer>

  <div className="lg:mx-20 xl:w-1/2 py-4 relative z-20">
    <Footer />
  </div>
</div>
<VideoContainer>
  <video autoPlay muted loop>
    <source src="/videos/medusa_01.webm" type="video/webm"/>
  </video>
</VideoContainer>
      </div>
    );
}
