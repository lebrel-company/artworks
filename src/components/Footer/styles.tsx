import styled from 'styled-components';
import {motion} from 'framer-motion';
import {colors} from '../../shared/theme';

export const Wrapper = styled(motion.div)`
  min-height: 20rem;
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  justify-content: space-between;
  padding: 2rem 10%;
  margin: 10% 0;
  font-family: Avenir, serif;
  /* From https://css.glass */
  background: rgba(164, 90, 255, 0.07);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.7px);
  -webkit-backdrop-filter: blur(9.7px);
  border: 1px solid rgba(164, 90, 255, 0.3);
  @media (max-width: 1600px){
    padding: 2rem 1rem;
  } 
  @media (max-width: 1400px){
    flex-direction: column;
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
      padding: 1rem;   
    }
  }
  @media(max-width: 1024px){
    flex-direction: column;
  }
`
export const BigTitle = styled.div`
  font-size: 3.2rem;
  line-height: 3.2rem;
  font-family: Gza, serif;
  text-shadow: #FFF 0px 0px 6px;
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
  margin: 200px 0px 0px 0px;
  font-family: GzaRegular, serif;
  @media(max-width: 1400px){
    margin: 0px;
    justify-content: center;
  }
  @media(max-width: 900px){
    flex-direction: column;
  }
`

export const LinksSection = styled.div`
  border-top: solid 1px;
  margin: 0rem 2rem;
  .title {
    text-align: left;
    padding: 1rem;
    font-size: 1.5rem;
    font-style: normal;
    color: ${colors.blue};
    text-transform: uppercase;
    letter-spacing: 1rem;
  }
  .links {
    text-align: left;
    padding: 0rem 1rem;
    font-size: 1.3rem;
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
`
