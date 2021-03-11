'use strict';
// libraries:
import Link from 'next/link'
import Head from 'next/head';
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import Header from '../components/header'
import Footer from '../components/footer'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//==============================================================================


import {info} from '../content/homepage'

function Home() {
    return (
        <div className='w-screen h-screen'>
            <div className='h-full mx-10'>
                <div
                    className='
                h-full
                flex flex-col
                '>
                    <div className='
                w-full
                z-10 p-8 relative z-20'>
                        <Header/>
                    </div>
                    <div className='
                h-full
                xl:w-1/2
                relative z-20
                mx-4
                lg:mx-20
                container-scrollbar overflow-y-scroll
                '
                         style={{direction: "rtl"}}
                    >
                        {
                            info.map(function createInfoSections(info, i) {
                                return <Section
                                    key={i}
                                    heading={info.heading}
                                    listOfSections={info.listOfSections}
                                />
                            })
                        }
                    </div>
                    <div className='
                lg:mx-20
                xl:w-1/2 py-2 relative z-20'
                    >
                        <Footer/>
                    </div>
                </div>
                <img
                    src='/medusa/images/sleeping_blue.png'
                    className='fixed object-contain top-0 h-screen md:right-8 z-0'
                />
            </div>
        </div>
    )
}

function Section(props) {
    return (
        <div className='mx-4 md:mx-10 mt-5 mb-80' style={{direction: 'ltr'}}>
            <div
                className='
                    text-yellow-stroke
                    text-6xl md:text-8xl 2xl:text-xxl
                '
                dangerouslySetInnerHTML={{__html: props.heading}}>
            </div>
            {
                props.listOfSections.map(function (value, i) {
                        return (
                            <div key={i}>
                                <div className='
                                p-3
                                text-3xl md:text-5xl
                                font-crimson
                                italic'
                                     dangerouslySetInnerHTML={{__html: value.title}}
                                />
                                <Link href='/about'>
                                    <a className='
                                    p-3
                                    font-poppins
                                    text-2xl
                                    text-blue-400 hover:text-blue-200
                                    tracking-widest hover:tracking-superwide
                                   '
                                       dangerouslySetInnerHTML={{__html: value.button}}/>
                                </Link>
                                {
                                    function subtitleCondition() {
                                        if (value.subtitle !== '') {
                                            return (
                                                <div
                                                    className='
                                                    p-3
                                                    xs:text-2xl md:text-xl lg:text-xl xl:text-3xl
                                                    font-crimson
                                                    italic'
                                                    dangerouslySetInnerHTML={{__html: value.subtitle}}/>
                                            )
                                        }
                                    }()
                                }

                                <div className='
                                xs:p-0 sm:p-3
                                md:text-md xl:text-lg
                                font-poppins
                                text-justify'
                                     dangerouslySetInnerHTML={{__html: value.text}}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Home;
