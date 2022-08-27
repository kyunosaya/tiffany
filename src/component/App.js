import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

function App({children}){
    return (
        <div id="wrap">
            <Header />
            <Nav />
            <main>
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default App