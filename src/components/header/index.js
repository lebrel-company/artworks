import Hamburger from './hamburguer'

function Header(props) {
    return (
        <div className='flex'
        >
            <div className='
                md:col-span-1 lg:col-span-1 xl:col-span-1
                '>
                <img
                    src='/logos/artworks.png'
                    alt='Artworks logo'
                    height={100}
                    width={100}
                    layout='responsive'
                />

            </div>
            <div className='flex-grow'></div>
            <div className=''>
                <Hamburger/>
            </div>
        </div>
    )
}

export default Header