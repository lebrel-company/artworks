import Hamburger from './hamburguer'

function Header(props) {
    return (
        <div className='
            grid
            xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7'
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
        </div>
    )
}

export default Header