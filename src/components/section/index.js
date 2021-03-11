'use strict';
// libraries:
import Link from "next/link"
import {useRef, useState} from 'react'
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Contexts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// layouts:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// components:
// -- -- -- -- -- -- -- -- -- -- -- -- -- --
// project:
//==============================================================================


export default function Section(props) {
    let oneBullet = useRef()
    let [oneHovering, setOneHovering] = useState(false)
    let oneContent = useRef()
    let twoBullet = useRef()
    let [twoHovering, setTwoHovering] = useState(false)
    let twoContent = useRef()
    let threeBullet = useRef()
    let [threeHovering, setThreeHovering] = useState(false)
    let threeContent = useRef()
    let fourBullet = useRef()
    let [fourHovering, setFourHovering] = useState(false)
    let fourContent = useRef()

    function handleOnHover(setter, element) {
        setter(true)
    }

    function handleLeave(setter, element) {
        setter(false)
    }

    return (
        <div className='md:my-10 mx-10' style={{direction: 'ltr'}}>
            <div className=''>
                <div className='text-yellow-stroke'
                     dangerouslySetInnerHTML={{__html: info.ourHistory.heading}}
                />
                <div className='title'
                     dangerouslySetInnerHTML={
                         {__html: info.ourHistory.section01.title}
                     }
                />
                <div className='sub-button'
                     dangerouslySetInnerHTML={
                         {__html: info.ourHistory.section01.button}
                     }
                />
                <div className='font-poppins text-justify'
                     dangerouslySetInnerHTML={
                         {__html: info.ourHistory.section01.text}
                     }
                />
            </div>
            <div className='my-40'>
                <div className='text-yellow-stroke'
                     dangerouslySetInnerHTML={{__html: info.whoWeAre.heading}}
                />
                <div className='title'
                     dangerouslySetInnerHTML={
                         {__html: info.whoWeAre.section01.title}
                     }
                />
                <div className='sub-button'
                     dangerouslySetInnerHTML={
                         {__html: info.whoWeAre.section01.button}
                     }
                />
                <div className='font-poppins text-justify'
                     dangerouslySetInnerHTML={
                         {__html: info.whoWeAre.section01.text}
                     }
                />
            </div>
            <div className='my-40'>
                <div className='text-yellow-stroke'
                     dangerouslySetInnerHTML={{__html: info.whatWeDo.heading}}
                />
                <div className='title'
                     dangerouslySetInnerHTML={
                         {__html: info.whatWeDo.section01.title}
                     }
                />
                <div className='sub-button'
                     dangerouslySetInnerHTML={
                         {__html: info.whatWeDo.section01.button}
                     }
                />
                <div className='font-poppins text-justify'
                     dangerouslySetInnerHTML={
                         {__html: info.whatWeDo.section01.text}
                     }
                />
                <div className='flex'>
                    <div className='grid grid-flow-col my-10 flex-auto'>
                        <div ref={oneBullet}
                             onMouseOver={() => handleOnHover(setOneHovering, oneHovering)}
                             onMouseLeave={() => handleLeave(setOneHovering, oneHovering)}
                             className='bullet row-start-1 col-start-1'>
                            {info.whatWeDo.bullets.one.header}
                        </div>
                        <div ref={twoBullet}
                             onMouseOver={() => handleOnHover(setTwoHovering, twoHovering)}
                             onMouseLeave={() => handleLeave(setTwoHovering, twoHovering)}
                             className='bullet row-start-2 col-start-1'>
                            {info.whatWeDo.bullets.two.header}
                        </div>
                        <div ref={threeBullet}
                             onMouseOver={() => handleOnHover(setThreeHovering, threeHovering)}
                             onMouseLeave={() => handleLeave(setThreeHovering, threeHovering)}
                             className='bullet row-span-3 col-start-1'>
                            {info.whatWeDo.bullets.three.header}
                        </div>
                        <div ref={fourBullet}
                             onMouseOver={() => handleOnHover(setFourHovering, fourHovering)}
                             onMouseLeave={() => handleLeave(setFourHovering, fourHovering)}
                             className='bullet row-start-4 col-start-1'>
                            {info.whatWeDo.bullets.four.header}
                        </div>
                    </div>
                    <div className='container my-auto w-1/2 p-2'>
                        {
                            oneHovering && (
                                <div
                                    ref={oneContent}
                                    className='
                                    font-poppins
                                    text-sm text-justify'>
                                    <div
                                        className=''>{info.whatWeDo.bullets.one.title}</div>
                                    <div
                                        className=''>{info.whatWeDo.bullets.one.text}</div>
                                </div>
                            )
                        }
                        {
                            twoHovering && (
                                <div
                                    ref={twoContent}
                                    className='
                                    font-poppins
                                    text-sm text-justify'>
                                    <div
                                        className=''>{info.whatWeDo.bullets.two.title}</div>
                                    <div
                                        className=''>{info.whatWeDo.bullets.two.text}</div>
                                </div>
                            )
                        }
                        {
                            threeHovering && (
                                <div
                                    ref={threeContent}
                                    className='
                                    font-poppins
                                    text-sm text-justify'>
                                    <div
                                        className=''>{info.whatWeDo.bullets.three.title}</div>
                                    <div
                                        className=''>{info.whatWeDo.bullets.three.text}</div>
                                </div>
                            )
                        }
                        {
                            fourHovering && (
                                <div
                                    ref={fourContent}
                                    className='
                                    font-poppins
                                    text-sm text-justify'>
                                    <div
                                        className=''>{info.whatWeDo.bullets.four.title}</div>
                                    <div
                                        className=''
                                        dangerouslySetInnerHTML={{__html: info.whatWeDo.bullets.four.text}}/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

var info = {
    ourHistory: {
        heading: `Our<br>History`,
        section01: {
            title: 'Bringing entertainment to the world',
            button: 'NICE TO MEET YOU',
            subtitle: '',
            text:
                `Our story begins in 2011 when Artworks Brands was established in California as a
                distributor of TV and Film content. As the entertainment world evolved, so did our
                ability to look to the future of producing original content and in-house management of
                all creative and business aspects that make a property successful. We became
                Artworks Entertainment in 2015 after consolidating our core business areas and
                moving our headquarters to the vibrant metropolis of Mexico City. Today, with
                affiliated offices in Mexico, Sao Paulo, Seattle, Tokyo, Hong Kong and Brussels, we are
                a company with a global reach that offers a wide array of entertainment options across
                various genres and generations.`

        }
    },
    whoWeAre: {
        heading: `Who we<br>are today`,
        section01: {
            title: 'An entertainment company with multiple talents',
            button: 'ABOUT US',
            subtitle: '',
            text:
                `Like any true artist, we believe in the individuality and
                creative power behind each project we undertake. We are
                proud to provide unified creative, business and successful
                communications solutions with the highest standards. With
                our Film and Television, Localization, Licensing and
                Merchandising and Business Development units, we have a
                comprehensive business approach paired with effective and
                creative ideas developed by a passionate team. Bolstered
                by our status as a single company with multiple talents,
                Artworks Entertainment is proud to have unbeatable and
                established business relationships with a number of global
                leading companies in the entertainment, production, film,
                television, digital content and licensing industries.`
        },
    },
    whatWeDo: {
        heading: 'What<br>we do',
        section01: {
            title: 'Our areas of expertise work seamlessly together',
            button: 'OUR BUSINESS',
            subtitle: '',
            text:
                `We cover all areas of creative entertainment in-house, which enables us to
                act as a one stop shop servicing all areas that are necessary for our clients.
                We are content distributors, licensors and managers. We create localized
                versions of original and external content at our post-production facilities
                and we market and sell the final product as digital media or tangible
                formats. We identify areas of opportunity, whether traditional or novel,
                and we partner with companies who are seeking focused strategies for
                their portfolio.`
        },
        bullets: {
            one: {
                header: '01.FILM AND TELEVISION',
                subtitle: 'Media Content & Film Distribution',
                text: `
                We handle the acquisitions, distribution, and/or representation of
                live action and animation movies and series, as well as documentaries
                and formats for all systems.
                `
            },
            two: {
                header: '02.LOCALIZATION BUSINESS',
                subtitle: 'Dubbing and Post-production',
                text: `
                We operate our own post-production facilities thus ensuring high
                quality and speed of our dubbing and material distribution. As
                experts in the field, we also work with external partners offering
                the same level of exceptional quality.
                `
            },
            three: {
                header: '03.LICENSING BUSINESS',
                subtitle: 'Licensing & Merchandising',
                text: `
                We work as dedicated brand ambassadors opening an endless
                world of opportunities. Making products come to life and
                connecting these with the target consumers.
                `
            },
            four: {
                header: '04.BUSINESS DEVELOPMENT',
                subtitle: '',
                text: `
                <div class="text-lg">Strategic Planning and Marketing</div>
                We think ahead the game and create tailored-strategies for the
                brands we represent. Combining local know-how with worldwide
                thinking.
                <div class="text-lg">DIGITAL MEDIA AND PR</div>
                We manage Social and Digital Media platforms driving sales and
                revenue through use of new outlets. We build a solid reputation
                that people believe in.
                `
            }
        }
    }
}
