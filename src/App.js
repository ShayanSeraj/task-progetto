import './App.css';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'

import SideBar from './components/SideBar';
import Inventory from './pages/Inventory';
import NewInventory from './pages/NewInventory';
import ViewInventory from './pages/ViewInventory';




function App() {

  return (
    <BrowserRouter>
      <div className='grid grid-cols-12 bg-mainBg'>
        <div className='col-span-1 md:col-span-2 bg-white'>
            <SideBar/>
        </div>
        <div className='col-span-11 md:col-span-10 overflow-y-auto h-screen'>
          <Routes>
              <Route path='/inventory' element={<Inventory />}/>
              <Route path='/' element={<Navigate to='/inventory'/>} />
              <Route path='/inventory/new-inventory' element={<NewInventory />}/>
              <Route path='/inventory/view-inventory/:id' element={<ViewInventory />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;