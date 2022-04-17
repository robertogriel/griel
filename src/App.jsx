import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Custom Imports
import Loading from './Components/Loading';

const Body = lazy(()=>import('./Components/Body'));
const About = lazy(()=>import('./Components/About'));
const Stores = lazy(()=>import('./Components/Stores'));
const NotFound = lazy(()=>import('./Components/NotFound'));
const Domains = lazy(()=>import('./Components/Domains'));
const PortfolioPage = lazy(()=>import('./Components/Portfolio'));


const Admin = lazy(()=>import('./Components/Admin'));
const Customers = lazy(()=>import('./Components/Admin/Contents/customers'));
const CustomerForm = lazy(()=>import('./Components/Admin/Contents/edit-customer'));
const ServiceForm = lazy(()=>import('./Components/Admin/Contents/edit-service'));
const Services = lazy(()=>import('./Components/Admin/Contents/services'));
const Contracts = lazy(()=>import('./Components/Admin/Contents/contracts'));
const ContractForm = lazy(()=>import('./Components/Admin/Contents/edit-contract'));
const Bills = lazy(()=>import('./Components/Admin/Contents/bills'));
const BillForm = lazy(()=>import('./Components/Admin/Contents/edit-bill'));
// const Contact = lazy(()=>import('./Components/Contact'));



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
			
			<Route exact path='/portfolio' element={<PortfolioPage />} />

			<Route exact path='/load' element={<Loading/>} />

			<Route exact path='/sistema' element={<Admin />} />

			<Route exact path='/sistema/clientes' element={<Customers  title="Clientes" />} />
			
			<Route exact path='/sistema/novo-cliente' element={<CustomerForm act="new" title="Criar Cliente" />} />
			
			<Route exact path='/sistema/editar-cliente-:id' element={<CustomerForm act="edit" title="Editar Cliente" />} />

			<Route exact path='/sistema/servicos' element={<Services  title="Serviços" />} />

			<Route exact path='/sistema/novo-servico' element={<ServiceForm act="new"  title="Novo Serviço" />} />

			<Route exact path='/sistema/editar-servico-:id' element={<ServiceForm act="edit"  title="Editar Serviço" />} />

			<Route exact path='/sistema/contratos' element={<Contracts  title="Contratos" />} />

			<Route exact path='/sistema/novo-contrato' element={<ContractForm act="new"  title="Novo Contrato" />} />
			
			<Route exact path='/sistema/faturas' element={<Bills  title="Faturas" />} />
			
			<Route exact path='/sistema/nova-fatura' element={<BillForm act="new" title="Nova Fatura" />} />

		</Routes>
		
		</Suspense>
	</Router>
  );
}

export default App;
