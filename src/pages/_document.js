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
                        href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Poppins&family=Source+Serif+Pro:weight@900&display=swap"
                        rel="stylesheet"></link>
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