import {v4 as uuid} from 'uuid'
import data from '../../data/home.yml'
import Section from '../homepage/section'

export default function HomepageSections() {
  return (
    <div className="flex flex-row h-full pl-2 md:pl-12 py-4">
      <div className="relative z-20 h-full py-10 flex flex-col justify-between">
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
          xl:w-5/12 
          relative 
          z-20 
          lg:mx-4 
          h-full
          container-scrollbar 
          overflow-y-scroll
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
              <Section data={d} key={uuid()}/>
            ))
          }  
        </div>
      </div>
    </div>
  );
}
