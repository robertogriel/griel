import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './Components/Admin/Contents/edit-customer';


//Custom Imports
import Loading from './Components/Loading';


const Body = lazy(()=>import('./Components/Body'));
const About = lazy(()=>import('./Components/About'));
const Stores = lazy(()=>import('./Components/Stores'));
const NotFound = lazy(()=>import('./Components/NotFound'));
const Domains = lazy(()=>import('./Components/Domains'));
const Admin = lazy(()=>import('./Components/Admin'));
const Customers = lazy(()=>import('./Components/Admin/Contents/customers'));
//const Contact = lazy(()=>import('./Components/Contact'));



function App() {
  return (
	  
	  <Router>
		<Suspense fallback={<Loading/>}>
		<Routes>
			
			<Route path='*' element={<NotFound/>}></Route>
			
			<Route exact path='/' element={<Body/>} />
			
			<Route exact path='/sobre' element={<About/>} />

			<Route exact path='/loja-virtual' element={<Stores/>} />

			<Route exact path='/dominios' element={<Domains/>} />

			<Route exact path='/load' element={<Loading/>} />

			<Route exact path='/admin' element={<Admin />} />

			<Route exact path='/admin/clientes' element={<Customers  title="Clientes" />} />
			
			<Route exact path='/admin/novo-cliente' element={<CustomerForm act="new" title="Criar Cliente" />} />
			
			<Route exact path='/admin/editar-cliente-:id' element={<CustomerForm act="edit" title="Editar Cliente" />} />


		</Routes>
		
		</Suspense>
	</Router>
  );
}

export default App;
