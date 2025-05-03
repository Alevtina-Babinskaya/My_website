import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Header from './Header';
import { Outlet } from 'react-router-dom';



function Layout() {
  return (
    <div className="App">
      <div className="row">
        <Header/>
        <Outlet/>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/> }> 
          <Route index element={ <Portfolio/> }/>
          <Route path='resume' element={ <Resume/> } />
          <Route path="contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
