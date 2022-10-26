import {v4 as uuid} from 'uuid'
import styled from 'styled-components'
import {colors} from '../../utils/theme'

import Content from './Content'

const YellowTitle = styled.div`
  color: ${colors.yellow};
  text-transform: uppercase;
  font-size: 7rem;
  font-family: 'Gza', serif;
  font-weight: bold;
  line-height: .9;
  text-shadow: ${colors.yellow} 0px 0px 6px;
  @media(max-width:1900px){
    font-size: 6rem;
  }
  @media(max-width:1600px){
    font-size: 4rem;
  }
  @media(max-width:1200px){
    font-size: 5rem;
  }
  @media(max-width:900px){
    font-size: 4rem;
  }
`

export default function Section({data, ...rest}){
  return <div {...rest}>
    <YellowTitle>{data.title}</YellowTitle>
    <YellowTitle>–</YellowTitle>
    {
      data.sections.map(
        (s)=>(<Content key={uuid()} data={s}/>)
      )
    }
  </div> 
}
