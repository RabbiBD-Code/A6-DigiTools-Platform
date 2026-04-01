
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Carts from './components/Carts/Carts'
import Models from './components/Models/Models'
import Navbar from './components/Navber/Navbar'
import Ratting from './components/Ratting/Ratting'
import Toggle from './components/ToggleSection/Toggle'
import { ToastContainer } from 'react-toastify'
import StepsCard from './components/StepsCard/StepsCard'
import PricingOption from './components/PricingOption/PricingOption'
import Footer from './components/Footer/Footer'
import ReadySection from './components/ReadySection/ReadySection'


const getCards = async () =>{
  const res = await fetch('/cardData.json')
  return res.json()
}

const pricingPromise = fetch("/pricingData.json").then(res => res.json())
  


const modelsPromise = getCards()

function App() {
const [activeCard, setActiveCard] = useState('model');
const [carts, setCarts] = useState([])


console.log(carts)
  return (
    <>
      <div className='w-11/12 mx-auto'>
        <Navbar carts={carts} />
        <Banner />
      </div>
      <Ratting />
      <Toggle/>
      {/* name of each tab group should be unique */}
            <div className="tabs tabs-box my-7 border-none flex justify-center bg-transparent">
                <input type="radio" 
                name="my_tabs_1" 
                className={`tab rounded-full px-5 bg-slate-200 font-bold text-gray-600 ${activeCard === 'model'&& 'text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6]'}`} 
                aria-label="Products" 
                onClick={()=> setActiveCard('model')}
                defaultChecked/>

                <input type="radio" 
                name="my_tabs_1" 
                className={`tab rounded-full px-5 bg-slate-200 font-bold text-gray-600 ${activeCard === 'carts'&& 'text-white bg-linear-to-r from-[#9514FA] to-[#4F39F6]'}`} 
                aria-label={`Carts(${carts.length})`} 
                onClick={()=> setActiveCard('carts')}
                 />

            </div>
            {
              activeCard === 'model'? <Models carts={carts} setCarts = {setCarts} modelsPromise = {modelsPromise}/>:<Carts carts={carts} setCarts = {setCarts}/>
            }
            {

              activeCard === 'model'&& (
                <> 
                <StepsCard/>
                <PricingOption pricingPromise = {pricingPromise}/>
                <ReadySection/>
                <Footer/> 
                </>
              )
            }
            
            
            
            

    <ToastContainer/>
    </>
  )
}

export default App
