import Hamburger from './hamburguer'
import Image from 'next/image'

function Header(props){
    return(
        <div>
            <Image
                src='/logos/artworks.png'
                alt='Artworks logo'
                width={150}
                height={150}
            />
        </div>
    )
}

export default Header