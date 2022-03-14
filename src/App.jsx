import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/* Scss */
import './Assets/Scss/reset.scss';
import './Assets/Scss/mixin.scss';

//Custom Imports
import Loading from './Components/Loading';


const Body = lazy(()=>import('./Components/Body'));
const About = lazy(()=>import('./Components/About'));
const Stores = lazy(()=>import('./Components/Stores'));
const NotFound = lazy(()=>import('./Components/NotFound'));
const Domains = lazy(()=>import('./Components/Domains'));
//const Contact = lazy(()=>import('./Components/Contact'));



function App() {
  return (
	  
	  <Router>
		<Suspense fallback={<Loading/>}>
		<Routes>
		

			
			<Route exact path='/' element={<Body/>} />
			
			<Route exact path='/sobre' element={<About/>} />

			<Route exact path='/loja-virtual' element={<Stores/>} />

			<Route exact path='/dominios' element={<Domains/>} />

			<Route exact path='/load' element={<Loading/>} />

			<Route path='*' element={<NotFound/>}></Route>

		</Routes>
		
		</Suspense>
	</Router>
  );
}

export default App;
