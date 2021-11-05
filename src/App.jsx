import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Scss */
import './Assets/Scss/reset.scss';

function App() {
  return (
	  
	  <Router>
		  <Header/>
	<Routes>
		<div>
		
		<Route path='/' element={<Body/>} />
		</div>
	</Routes>
	</Router>
  );
}

export default App;
