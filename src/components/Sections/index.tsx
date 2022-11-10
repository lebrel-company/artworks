import {v4 as uuid} from 'uuid'
import styled from 'styled-components'

import Section from './Section'
// @ts-ignore
import data from '../../data/sections.yml'

const ScreenBlank = styled.div`
  height: ${props=> props?.height? props.height : '2vh'};
`

export default function Sections() {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col justify-between py-2 md:py-12 uppercase">
        <div className="v-text">
          Our History
        </div>
        <div className="v-text">
          Who we are today
        </div>
        <div className="v-text">
          What we do
        </div>
        <div className="v-text">
          Where to Find Us
        </div>
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
