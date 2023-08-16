import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap-icons';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import ContentContainer from './Components/ContentContainer';

function App() {
    return (
        <>
            <NavigationBar />
           <ContentContainer />
        </>
    );
}

export default App;
