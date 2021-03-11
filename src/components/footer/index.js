import Link from 'next/link'


function Footer() {
    return (
        <div className='text-center m-5'>
            {
            }
            {
                listOfLinks.map(function createLinks(element, i) {
                        if (listOfLinks.length - 1 !== (i)) {
                            return (
                                <span className='
                                mx-2
                                font-crimson hover:underline'
                                      key={i}>
                                    <span className=''>
                                    <Link href={element.href}>
                                        <a>{element.name} </a>
                                    </Link>
                                    </span>
                                <span className='
                                mx-4 transform scale-150
                                '>|</span>
                                </span>
                            )
                        } else {
                            return (
                                <span className='
                                mx-4
                                font-crimson hover:underline
                                ' key={i}>
                                    <span className=''>
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