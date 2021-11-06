import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Scss */
import './Assets/Scss/reset.scss';

//Custom Imports
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';

function App() {
  return (
	  
	  <Router>
		  <Header/>
	<Routes>
		<div>
		
		<Route path='/' element={<Body/>} />
		
		<Route path='/sobre' element={<About/>} />
		</div>
	</Routes>
	</Router>
  );
}

export default App;
