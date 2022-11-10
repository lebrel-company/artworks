import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from '../../shared/theme';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  justify-content: space-between;
  font-family: Avenir, serif;
  transform: translate(0px, 0px);
  padding: 2% 5%;
  @media (max-width: 1600px){
    padding: 2rem 1rem;
  } 
  @media (max-width: 1400px){
    flex-direction: column;
  }
`

export const BgImageContainer = styled.div`
  width: 100vw;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  margin: 0px;
  img { 
    width: 100vw;
    height: 40rem;
    object-fit: cover;
  }
  @media(max-width: 1400px){
    img { 
      height: 37rem;
      object-fit: cover;
    }
  }
  @media(max-width: 1200px){
    left: 0px;
    bottom: 0px;
    img { 
      width: 100vw;
      height: 50rem;
      object-fit: cover;
    }
  }
  @media(max-width: 900px){
    img { 
      width: 100vw;
      height: 70rem;
      object-fit: cover;
    }
  }
  @media(max-width: 600px){
    img { 
      width: 100vw;
      height: 72rem;
      object-fit: cover;
    }
  }
`

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  .contents > * {
    padding: 1rem;
  }
  @media(max-width: 1400px){
    flex-direction: row;
    align-items: center;
    hr {
      display: none;
    }
    .contents > * {
      padding: 2rem .2rem 2.5rem 0.2rem;   
      margin: 0rem;
    }
  }
  @media(max-width: 1200px){
    flex-direction: column;
    text-align: center;
    .contents > * {
      padding: .5rem;   
      margin: .5rem;
    }
  }
`
export const BigTitle = styled.div`
  font-size: 3.5rem;
  line-height: 3.5rem;
  font-family: Gza, serif;
  text-shadow: #FFF 0px 0px 6px;
  min-width: 30rem;
  @media(max-width: 1400px){
    font-size: 2.8rem;
  }
  @media(max-width: 1200px){
    font-size: 2.8rem;
    min-width: 30rem;
  }
`
export const XSDiv = styled.hr`
  width: 30px;
  @media (max-width: 1400px){
    margin: auto;
  }
`

export const RightCol = styled.div`
  display: flex;
  flex-direction: row;
  margin: 160px 0px 0px 0px;
  font-family: GzaRegular, serif;
  @media(max-width: 1400px){
    margin: 1.2rem 0rem;
    justify-content: center;
  }
  @media(max-width: 900px){
    flex-direction: column;
  }
`

export const LinksSection = styled.div`
  border-top: solid 1px;
  margin: 0rem 2rem;
  min-width: 15rem;
  .title {
    text-align: left;
    padding: 1rem;
    font-size: 1.3rem;
    font-style: normal;
    color: ${colors.blue};
    text-transform: uppercase;
    letter-spacing: 1rem;
    line-height: 1.2rem;
  }
  .links {
    text-align: left;
    padding: 0rem 1rem;
    font-size: 1rem;
    font-style: normal;
    display: flex;
    flex-direction: column;
    a {
      padding: .5rem 0px;
      margin: 0px;
    }
  }
  @media(max-width: 1700px){
    margin: 0rem 1rem;
    .title {
      letter-spacing: .5rem;
    }
    .links {
      font-size: 1.1rem;
    }
  }
  @media(max-width: 1400px){
    margin: 0rem 4rem;
    .title{
      text-align: center;
    }
    .links{
      text-align: center;
    }
  }
  @media(max-width: 1200px){
    margin: 1rem 2rem;
    padding: 1rem;
    .title{
      padding: 0px;
      font-size: 1rem;
      letter-spacing: .3rem;
    }
    .links{
      padding: 0px;
      font-size: 1rem;   
    }
  }
  @media(max-width: 900px){
    margin: 0rem 0rem;
    padding: 1rem;
    margin: auto;
    .title{
      font-size: 1rem;
      letter-spacing: .3rem;
    }
    .links{
      padding: 0px;
      font-size: 1rem;   
    }
  }
`
