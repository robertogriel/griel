import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';


//Custom Imports
import Loading from './Components/Loading';

const Body = lazy(()=>import('./Components/Body'));
const About = lazy(()=>import('./Components/About'));
const Stores = lazy(()=>import('./Components/Stores'));
const NotFound = lazy(()=>import('./Components/NotFound'));
const Domains = lazy(()=>import('./Components/Domains'));
const PortfolioPage = lazy(()=>import('./Components/Portfolio'));


const AdminLTE = lazy(()=>import('./Components/AdminLTE'));
const CustomersLTE = lazy(()=>import('./Components/AdminLTE/Contents/customers'));
const CustomerFormLTE = lazy(()=>import('./Components/AdminLTE/Contents/edit-customer'));
const ServiceFormLTE = lazy(()=>import('./Components/AdminLTE/Contents/edit-service'));
const ServicesLTE = lazy(()=>import('./Components/AdminLTE/Contents/services'));
const ContractsLTE = lazy(()=>import('./Components/AdminLTE/Contents/contracts'));
const ContractFormLTE = lazy(()=>import('./Components/AdminLTE/Contents/edit-contract'));
const BillsLTE = lazy(()=>import('./Components/AdminLTE/Contents/bills'));
const BillFormLTE = lazy(()=>import('./Components/AdminLTE/Contents/edit-bill'));
// const Contact = lazy(()=>import('./Components/Contact'));

const Admin = lazy(()=>import('./Components/Admin'));



function App() {
  return (
	  
	  <Router>
		<Header />
		<Suspense fallback={<Loading/>}>
		<Routes>
			
			<Route path='*' element={<NotFound/>}></Route>
			
			<Route exact path='/' element={<Body/>} />
			
			<Route exact path='/sobre' element={<About/>} />

			<Route exact path='/loja-virtual' element={<Stores/>} />

			<Route exact path='/dominios' element={<Domains/>} />
			
			<Route exact path='/portfolio' element={<PortfolioPage />} />

			<Route exact path='/load' element={<Loading/>} />

			<Route exact path='/admin' element={<Admin/>} >


			</Route>



				<Route exact path='/sistema' element={<AdminLTE />} />

				<Route exact path='/sistema/clientes' element={<CustomersLTE title="Clientes" />} />
				
				<Route exact path='/sistema/novo-cliente' element={<CustomerFormLTE act="new" title="Criar Cliente" />} />
				
				<Route exact path='/sistema/editar-cliente-:id' element={<CustomerFormLTE act="edit" title="Editar Cliente" />} />

				<Route exact path='/sistema/servicos' element={<ServicesLTE  title="Serviços" />} />

				<Route exact path='/sistema/novo-servico' element={<ServiceFormLTE act="new"  title="Novo Serviço" />} />

				<Route exact path='/sistema/editar-servico-:id' element={<ServiceFormLTE act="edit"  title="Editar Serviço" />} />

				<Route exact path='/sistema/contratos' element={<ContractsLTE  title="Contratos" />} />

				<Route exact path='/sistema/novo-contrato' element={<ContractFormLTE act="new"  title="Novo Contrato" />} />
				
				<Route exact path='/sistema/faturas' element={<BillsLTE  title="Faturas" />} />
				
				<Route exact path='/sistema/nova-fatura' element={<BillFormLTE act="new" title="Nova Fatura" />} />

		</Routes>
		</Suspense>
		<Footer />
	</Router>
  );
}

export default App;
