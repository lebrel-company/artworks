import Link from 'next/link'


function Footer() {
    return (
        <div>
            {
                listOfLinks.map(function createLinks(element, i) {
                        if (listOfLinks.length != (i - 1)) {
                            return (
                                <span className='font-crimson'>
                                    <span className='xs:mx-5 md:mx-10'>
                                    <Link href={element.href}>
                                    <a>{element.name}</a>
                                    </Link>
                                    </span>
                                    <span className='text-2xl font-thin'>|</span>
                                </span>
                            )
                        } else {
                            return (
                                <span className='font-crimson text-base'>
                                    <span className='xs:mx-0 md:mx-10'>
                                    <Link href={element.href}>
                                    <a>{element.name}</a>
                                    </Link>
                                    </span>
                                </span>
                            )

                        }
                    }
                )

            }
        </div>
    )
}

var listOfLinks = [
    {
        'name': 'Contact us',
        'href': '/contact'
    },
    {
        'name': 'FAQ',
        'href': '/faq'
    },
    {
        'name': 'Cookies policy',
        'href': '/contact'
    },
    {
        'name': 'Legal terms',
        'href': '/contact'
    },
    {
        'name': 'Privacy policy',
        'href': '/contact'
    },
]

export default Footer