import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image'
import Header from '../components/header'
import Medusa from '../components/medusa'
import Footer from '../components/footer'

import {info} from '../content/homepage'

function Home() {
    return (
        <div className='
        '>
            <div className='z-10 w-screen h-20 mx-10 top-10 fixed'>
                <Header/>
            </div>
            {/*<div className='*/}
            {/*    bg-white*/}
            {/*    opacity-50*/}
            {/*    fixed*/}
            {/*    sm:hidden md:inline-block lg:inline-block*/}
            {/*    sm:w-0 md:w-0.5*/}
            {/*    h-1/2*/}
            {/*    top-96*/}
            {/*    sm:left-5 md:left-10 lg:left-20*/}
            {/*'/>*/}
            <div className='
                top-40
                h-3/5
                w-screen
                mt-40
                px-10
                z-10
                fixed'
            >
                <div className='
                grid
                h-full
                w-full
                xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4
                '>
                    <div className='
                    overflow-y-scroll
                    overflow-y-hidden
                    h-full
                    xs:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-2
                    sm:left-0 lg:left-10
                '>
                        {
                            info.map(function createInfoSections(info, i) {
                                return <Section
                                    key={i}
                                    title={info.title}
                                    subtitle={info.subtitle}
                                    text={info.text}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='
                    fixed
                    z-0
                    sm:right-0 md:right-20 lg:right-10 xl:right-32
                    xs:top-1/4 lg:top-20 xl:top-20
                    sm:h-full md:h-3/6 xl:h-3/4
                '>
                <Medusa/>
            </div>
            <div className='fixed bottom-5 xs:left-0 md:left-10 lg:left-20'>
                <Footer/>
            </div>
        </div>
    )
}

function Section(props) {
    function _purify(dirtyHtml) {
        return dirtyHtml
    }

    return (
        <div className='mt-5 mb-60'>
            <div
                className='
                    xs:text-8xl sm:text-8xl lg:text-9xl
                    font-source
                    text-yellow-stroke
                    sm:font-black
                '
                dangerouslySetInnerHTML={{__html: props.title}}
            />
            <div
                className='
                    p-3
                    md:text-xl xl:text-2xl
                    font-crimson
                    italic
                '
                dangerouslySetInnerHTML={{__html: props.subtitle}}
            />
            <div
                className='
                    p-3
                    md:text-md xl:text-lg
                    font-poppins
                    text-justify
                '
                dangerouslySetInnerHTML={{__html: props.text}}
            />
        </div>
    )
}


export default Home;
