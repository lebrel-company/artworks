import { motion } from 'framer-motion'
import {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../shared/theme'

const BulletLayout = styled.div`
  .title{
    background-color: ${colors.dark};
    padding: .1rem .4rem;
    font-family: 'Poppins', sans-serif;
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
    margin-left: .7rem;
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
              {
                !data.button.enabled ? null :
                <Link href={data.button.href}>
                  <button type="button" className={`hover:cursor-pointer`}>
                    {data?.button?.text ? data.button.text : 'N/A'}
                  </button>
                </Link>
              }
          </div>
          : null
      }
    </motion.div>
}


export default function Bullet({data, ...rest}){
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
