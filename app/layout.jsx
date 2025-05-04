import '@styles/globals.css'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import GoTop from '@components/GoTop'

export const metadata = {
    metadataBase: new URL('https://steredapharmacy.netlify.app/'),
    title: 'Stereda Pharmacy Home: Providing top-quality healthcare services in Ghana.',
    description: 'Stereda Pharmacy Website',
    openGraph: {
        images: '/logo.jpg',
    },
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>

                <main className="app">
                    <Header />
                    {children}
                    <GoTop />
                    <Footer />
                </main>
            </body>
        </html>
    );
}

export default RootLayout;