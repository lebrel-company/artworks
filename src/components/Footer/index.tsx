import Image from 'next/image';
import Link from 'next/link'
import {
  Wrapper,
  LeftCol,
  BigTitle,
  XSDiv, 
  RightCol,
  LinksSection
} from './styles'



export default function Footer(){

  return <>
  {
    <Wrapper>
      <LeftCol>
        <div className='contents'>
          <div>
            <Image height={110} width={110} src='/logos/artworks-white.png'/>
          </div>
          <div>
            <XSDiv/>
          </div>
          <BigTitle>a new beginning<br/>in entertainment</BigTitle>
          <div>
            <div>Ⓒ 2022 Artworks Entertainment SARL</div>
            <div>All trademarks are the property of their respective owners. All rights reserved.</div>
          </div>
        </div>
      </LeftCol>
      <RightCol>
        <LinksSection>
          <div className='title'>contact</div>
          <div className='links'>
            <Link href='https://matheuschami.wixsite.com/website/contact-8'>
              <a target="_blank">contact us</a>
            </Link>
            <Link href='/'>
              <a target="_blank">client login</a>
            </Link>
          </div>
        </LinksSection>
        <LinksSection>
          <div className='title'>business<br/>areas</div>
          <div className='links'>
            <Link href='/'>
              <a target="_blank">film and television</a>
            </Link>
            <Link href='/'>
              <a target="_blank">animation production</a>
            </Link>
            <Link href='/'>
              <a target="_blank">artworks digital studio</a>
            </Link>
            <Link href='/'>
              <a target="_blank">consumer products</a>
            </Link>
          </div>
        </LinksSection>
        <LinksSection>
          <div className='title'>
            help
          </div>
          <div className='links'>
            <Link href='/'>
              <a target="_blank">FAQ</a>
            </Link>
            <Link href='/'>
              <a target="_blank">terms of use</a>
            </Link>
            <Link href='/'>
              <a target="_blank">privacy policy</a>
            </Link>
            <Link href='/'>
              <a target="_blank">cookie policy</a>
            </Link>
          </div>
        </LinksSection>
      </RightCol>
    </Wrapper> 
  }
</>
}
