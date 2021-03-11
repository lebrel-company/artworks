'use strict';
// libraries:
import Link from 'next/link'
import Head from 'next/head'
import {useRef} from 'react'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//==============================================================================


function Home() {
    return (
        <div className='w-screen h-screen'>
            <div className='h-full md:mx-10'>
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
                        <Section/>
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
                    className='fixed object-cover md:object-contain top-0 h-screen md:right-8 z-0'
                />
            </div>
        </div>
    )
}


export default Home;
