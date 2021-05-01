import Hamburger from './hamburguer'
import Link from 'next/link'

function Header(props) {
    return (
        <div className='
        flex justify-between items-center w-full
        '>
            <div className='
                md:col-span-1 lg:col-span-1 xl:col-span-1 header-logo
                '>
                <img
                    width={120}
                    height={120}
                    src='/logos/artworks.png'
                    alt='Artworks logo'
                    layout='responsive'/>
            </div>
            <div className='font-crimson text-lg'>
                <Link href='/showreel'>
                    <a className='
                    hover:underline
                    '
                    >Showreel</a>
                </Link>
            </div>
            <div className=''>
                <Hamburger/>
            </div>
        </div>
    )
}

export default Header