import React from 'react';
import Banner from './Components/Banner';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';

const App = () => {
    return (
        <div>
            <Banner />
            <About />
            <Products />
            <Contact />
        </div>
    );
}

export default App;