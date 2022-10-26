import {v4 as uuid} from 'uuid'
import styled from 'styled-components'
import {colors} from '../../utils/theme'

import Content from './Content'

const YellowTitle = styled.div`
  color: ${colors.yellow + 40};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${colors.yellow};
  text-transform: uppercase;
  font-size: 5rem;
  font-family: 'Gza', serif;
  font-weight: bold;
  line-height: .9;
  @media(max-width:1200px){
    font-size: 5rem;
  }
  @media(max-width:900px){
    font-size: 4rem;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${colors.yellow};
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
