import Bullet from './Bullet';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { colors } from '../../shared/theme'


const textPadding = '.7rem'
const Title = styled.div`
  color: ${colors.magenta};
  font-family: TimesNewRoman, serif;
  font-style: italic;
  font-size:1.8rem;
  padding: 0rem 0rem ${textPadding} 0rem;
`
const BlueText = styled.div`
  color: ${colors.blue};
  text-transform: uppercase;
  text-family: Avenir, sans-serif;  
  letter-spacing: .5rem;
  font-size: 1.2rem;
  padding: 0rem 0rem ${textPadding} 0rem;
`
const Parragraph = styled.div`
  text-family: Avenir, sans-serif;  
  font-size: 1rem;
  letter-spacing: .1rem;
`


export default function Content({data, ...rest}){
  if(data?.type === "bullets" && !Array.isArray(data?.content)){
    throw new Error("Bullet list type section content must be an array")
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
    <Title
      className="title"
      dangerouslySetInnerHTML={{
        __html: data.title,
      }}
    />
    <BlueText
      dangerouslySetInnerHTML={{
        __html: data.buttonText,
      }}
    />
    <Parragraph
      className="font-poppins text-justify"
      dangerouslySetInnerHTML={{
        __html: data.content,
      }}
    />
  </div>
}
