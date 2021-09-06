import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    console.log(props);
    const {user, signOut} = props;
    
    return(
        <div className="layout">
            <Header signOut={signOut} user={user} />
            {/* TOT CE PRIMESTE INTRE TAGURILE DE HEADER DIN HOME SAU PESTE TOT PE UNDE L AM BAGAT */}
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout;