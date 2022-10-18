import Bullet from './Bullet'
import { v4 as uuid } from 'uuid'

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