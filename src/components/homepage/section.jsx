import {useState} from 'react'
import Link from 'next/link'
import {v4 as uuid} from 'uuid'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {colors} from '../../utils/theme'
// -------------------------------------

const BulletLayout = styled.div`
  .title{
    font-family: 'Poppins';
    font-size: 1.7rem;
    color: ${colors.orange};
    opacity: 0.8;
    font-style: normal;
    margin-top: .5rem;
    &:hover{
      cursor: pointer;
      opacity: 1;
    }
  }
  .bullet-content{
    transform-origin: top left;
    background-color: #FFFFFF11;
    border-radius: 5px;
    padding: 1.5rem 1rem;
    margin-left: .5rem;
  }
`

function BulletContents({data, ...rest}){
  return <motion.div 
      {...rest}
      animate={{
        opacity: [0, 1],
        rotate: [-6, 3, 0],
        scaleX: [0, 0.1, 1.1, 1],
        scaleY: [0, 0.1, 1.1, 1]
      }}
    >
      <div>{data.content}</div>
      {
        data?.button?.visibility 
          ? <div
            className={`
              text-right 
              text-xl 
              text-lime-500
            `}
          >
            <Link href={data.button.href} disabled={!data.button.enabled}>
              <button type="button" className={`hover:cursor-pointer`}>
                {data?.button?.text ? data.button.text : 'N/A'}
              </button>
            </Link>
          </div>
          : null
      }
    </motion.div>
}


function Bullet({data, ...rest}){
  const [showDetails, setShowDetails] = useState(false)

  const openDetails = (e)=>{
    e.preventDefault() 
    setShowDetails(!showDetails)
  }

  return <BulletLayout {...rest}>
    <button type="button" className='title' onClick={openDetails}>
      {data.title}
    </button>
    {
      showDetails
        ?<BulletContents 
          className='bullet-content'
          data={data} 
          isVisible={showDetails}
        />
        : null
    }
  </BulletLayout>
}

// -------------------------------------

export function Content({data, ...rest}){
  if(data?.type === "bullets" && !Array.isArray(data?.content)){
    throw new Error({
      name: "Invalid content configuration",
      message: "Bullet list type section content must be an array"
    })
  }

  if (data?.type === "bullets"){
    return <div {...rest}>
      {
        data.content.map((el)=>(
          <Bullet data={el}  key={uuid()}/>
        ))
      } 
    </div>
  }

  return <div {...rest}>
    <div
      className="title"
      dangerouslySetInnerHTML={{
        __html: data.title,
      }}
    />
    <div
      className="sub-button"
      dangerouslySetInnerHTML={{
        __html: data.buttonText,
      }}
    />
    <div
      className="font-poppins text-justify"
      dangerouslySetInnerHTML={{
        __html: data.content,
      }}
    />
  </div>
}

// -----------------------------------------

const YellowTitle = styled.div`
  color: ${colors.yellow + 40};
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: ${colors.yellow};
  text-transform: uppercase;
  font-size: 9rem;
  font-family: Crimson serif;
  font-weight: bold;
  line-height: .9;
`

export default function Section({data, ...rest}){
  return <div {...rest}>
    <YellowTitle>{data.title}</YellowTitle>
    {
      data.sections.map(
        (s)=>(<Content key={uuid()} data={s}/>)
      )
    }
  </div> 
}
