import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head
                    title='Artworks Entertainment'
                >

                    <link
                        href={
                            `https://fonts.googleapis.com/css2?
                            family=Crimson+Text&
                            family=Poppins&
                            family=Source+Serif+Pro:weight@900&
                            family=Ballet&
                            display=swap`
                        }
                        rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link
                            href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Poppins:wght@300&family=Source+Sans+Pro:wght@300&display=swap"
                            rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
    )
    }
    }

    export default MyDocument