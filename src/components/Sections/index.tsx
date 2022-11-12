import {v4 as uuid} from 'uuid'
import styled from 'styled-components'

import Section from './Section'
// @ts-ignore
import data from '../../data/sections.yml'

const ScreenBlank = styled.div`
  height: ${props=> props?.height? props.height : '2vh'};
`

const VText = styled.div`
  writing-mode: vertical-rl;
  font-size: .8rem;
  color: rgba(255,255,255, .7);
  font-family: Avenir, sans-serif;
  @media (max-height: 650px){
    font-size: .6rem;
  }
  @media (max-height: 550px){
    display: none;
  }
`

export default function Sections() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col justify-between py-2 md:py-12 uppercase">
        <VText>
          Our History
        </VText>
        <VText>
          Who we are today
        </VText>
        <VText>
          What we do
        </VText>
        <VText>
          Where to Find Us
        </VText>
      </div>
      <div
        className={`
          container-scrollbar 
          overflow-y-scroll
          scroll-smooth
        `}
        style={{ direction: "rtl" }}
      >
        <div className={`
          mx-4 
          md:mx-10 
          flex 
          flex-col 
          gap-32
          `} 
          style={{ direction: "ltr" }}
        >
          {
            data.map((d)=>( 
              <Section data={d} key={uuid()} id={d.id}/>
            ))
          }  
        </div>
      </div>
    </div>
  );
}
