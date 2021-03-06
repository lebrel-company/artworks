'use strict';
// libraries:
import Link from 'next/link'
import Head from 'next/head'
import {useRef, useEffect} from 'react'
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


export default function Home() {

    return (
        <div className='w-screen h-screen'>
            <div className='h-full md:mx-10'>
                <div className='flex flex-col h-full'>
                    <div className='md:p-6 relative z-20'>
                        <Header/>
                    </div>
                    <div className='h-3/4'>
                        <Section/>
                    </div>
                    <div className='lg:mx-20 xl:w-1/2 py-4 relative z-20'>
                        <Footer/>
                    </div>
                </div>
                <img
                    src='/medusa/images/sleeping_blue.png'
                    className='
                    fixed z-10 object-cover
                    md:object-contain top-0 h-screen md:right-8 z-0'
                />
            </div>
            <video autoPlay muted loop className="bg-video">
                <source src="/videos/abstract.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}


