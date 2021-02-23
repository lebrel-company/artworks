import Image from 'next/image'

function Medusa(props) {
    return (
        <Image
            src='/medusa/images/sleeping_blue.png'
            width={697}
            height={1024}
            layout='intrinsic'
            className='object-fill'
        />
    )
}

export default Medusa
