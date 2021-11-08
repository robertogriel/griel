import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/* Scss */
import './Assets/Scss/reset.scss';

//Custom Imports
//import Header from './Components/Header';
//import Body from './Components/Body';
//import About from './Components/About';
import Loading from './Components/Loading';
//import Stores from './Components/Stores';

const Header = lazy(()=>import('./Components/Header'));
const Body = lazy(()=>import('./Components/Body'));
const About = lazy(()=>import('./Components/About'));
const Stores = lazy(()=>import('./Components/Stores'));

const Footer = lazy(()=>import('./Components/Footer'));


function App() {
  return (
	  
	  <Router>
		<Suspense fallback={<Loading/>}>
		<Header/>
		<Routes>

			
			<Route path='/' element={<Body/>} />
			
			<Route path='/sobre' element={<About/>} />

			<Route path='/loja-virtual' element={<Stores/>} />

			<Route path='/load' element={<Loading/>} />

		</Routes>
		<Footer/>
		</Suspense>
	</Router>
  );
}

export default App;
