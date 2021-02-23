import Image from 'next/image'

function Logo(props){
    return(
        <div>
            <Image
                src='/logos/artworks.png'
                alt='Artworks logo'
                layout='fill'
            />
        </div>
    )
}

export default Logo
