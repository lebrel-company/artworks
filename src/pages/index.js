'use strict';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header'
import Footer from '../components/footer'

import {info} from '../content/homepage'

function Home() {
    return (
        <div className='w-screen h-screen'>
            <div className='z-10 p-8 relative z-20'>
                <Header/>
            </div>
            <div
                className='
                flex
                relative z-20
                p-4 xl:pl-28
                xl:w-1/2 h-3/4'>
                <div className='h-full hidden lg:inline-block'>
                   <div className='bg-white w-1 h-full opacity-50 rounded-sm'/>
                </div>
                <div className='overflow-y-scroll md:px-10 py-10'>
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
            </div>
            <div className='w-screen fixed bottom-0 z-20'>
                <div className='xl:w-1/2'>
                    <Footer/>
                </div>
            </div>
                <img
                    src='/medusa/images/sleeping_blue.png'
                    className='fixed object-contain top-0 h-screen md:right-8 z-0'
                />
        </div>
    )
}

function Section(props) {
    console.log(props)
    return (
        <div className='mt-5 mb-80'>
            <div
                className='
                    text-7xl lg:text-9xl
                    font-source
                    text-yellow-stroke
                    sm:font-black
                '
                dangerouslySetInnerHTML={{__html: props.heading}}>
            </div>
            {
                props.listOfSections.map(function (value, i) {
                        return (
                            <div key={i}>
                                <div className='
                                p-3
                                xs:text-xl md:text-2xl lg:text-2xl xl:text-5xl
                                font-crimson
                                italic'
                                     dangerouslySetInnerHTML={{__html: value.title}}
                                />

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
