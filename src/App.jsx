import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route,Routes } from 'react-router-dom'
import MobilesPage from './stores/pages/MobilesPage'
import KitchenPage from './stores/pages/KitchenPage'
import MensPage from './stores/pages/MensPage'
import WomansPage from './stores/pages/WomansPage'
import FurnituresPage from './stores/pages/FurnituresPage'
import ComputersPage from './stores/pages/ComputersPage'
import AcPage from './stores/pages/AcPage'
import WatchesPage from './stores/pages/WatchesPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import ComputerSingle from './stores/singles/ComputerSingle'
import MenSingle from './stores/singles/MenSingle'
import WomanSingle from './stores/singles/WomanSingle'
import WatcheSingle from './stores/singles/WatcheSingle'
import AcSingle from './stores/singles/AcSingle'
import Sigin from './stores/Sigin'
import Signup from './stores/Signup'
import KitchenSingle from './stores/singles/KitchenSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import ForgotPassword from './stores/ForgotPassword'
import PaymentPage from './stores/pages/PaymentPage'
const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/signin' element={<Sigin/>}  />
      <Route path='/signup' element={<Signup/>}  />
      <Route path='/forgotPassword' element={<ForgotPassword/>}  />
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/mobiles' element={<MobilesPage/>}/>
       <Route path='/kitchens' element={<KitchenPage/>}/>
       <Route path='/mens' element={<MensPage/>}/>
       <Route path='/womans' element={<WomansPage/>}/>
       <Route path='/computers' element={<ComputersPage/>}/>
       <Route path='/furnitures' element={<FurnituresPage/>}/>
       <Route path='/ac' element={<AcPage/>}/>
        <Route path='/watches' element={<WatchesPage/>}/>
           <Route path='/mobiles/:id' element={<MobileSingle/>}/>
           <Route path='/computers/:id' element={<ComputerSingle/>}/>
           <Route path='/mens/:id' element={<MenSingle/>}/>
           <Route path='/womans/:id' element={<WomanSingle/>}/>
           <Route path='/watches/:id' element={<WatcheSingle/>}/>
           <Route path='/ac/:id' element={<AcSingle/>}/>
           <Route path='/kitchens/:id' element={<KitchenSingle/>}/>
             <Route path='/furnitures/:id' element={<FurnitureSingle/>}/>

           <Route path='/cart' element={<UserCart/>}/>



      </Routes>
      </div>
      
  )
}

export default App