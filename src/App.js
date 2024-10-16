import React from "react";

//My Components
import Header from './components/Header';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Main Component
function App () {

return (


    <>   {/* Header component */}
        <Header />
        {/* Resume component that displays CV information */}
        <Resume />
        {/* Footer component */}
        <Footer />
    </>
)

}

export default App;
