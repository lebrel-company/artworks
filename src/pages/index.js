'use strict';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Header from '../components/header'
import Medusa from '../components/medusa'
import Footer from '../components/footer'

import {info} from '../content/homepage'

function Home() {
    return (
        <div className='
        '>
            <div className='z-10 w-screen xs:px-10 md:px-20 h-20  top-10 fixed'>
                <Header/>
            </div>
            <div className='
                bg-white
                opacity-50
                fixed
                inset-y-1/4
                sm:hidden md:inline-block lg:inline-block
                sm:w-0 md:w-0.5
                h-1/2
                sm:left-5 md:left-10 lg:left-20
            '/>
            <div className='
                h-3/5
                top-1/4
                w-screen
                xs:px-5 md:px-32
                z-10
                overflow-y-scroll
                fixed'
            >
                <div className='
                grid
                w-full
                h-full
                xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4
                '>
                    <div className='
                    xs:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-2
                    sm:left-0 lg:left-10
                '>
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
            </div>
            <div className='
                pb-5
                fixed
                bottom-4
                md:col-span-1 lg:col-span-3 xl:col-span-3'>
                <Footer/>
            </div>
            <div className='
            h-screen
            fixed
            md:right-0
            md:top-1/5'>
                <Medusa/>
            </div>
        </div>
    )
}

function Section(props) {
    console.log(props)
    return (
        <div className='mt-5 mb-80'>
            <div
                className='
                    xs:text-6xl sm:text-8xl lg:text-9xl xl:text-9xl
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
                                xs:text-xl md:text-xl lg:text-xl xl:text-4xl
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
