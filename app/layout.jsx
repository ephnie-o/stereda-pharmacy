import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export const metadata = {
    metadataBase: new URL('https://steredapharmacy.com'),
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
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}

export default RootLayout;