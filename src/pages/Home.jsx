import React from 'react'
import ActionAreaCard from '../components/ActionAreaCard'
import Wild from '../components/Wild'
import Pets from '../components/Pets'
import PetsCard from '../components/PetsCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Wild/>
        <ActionAreaCard/>
        <Pets/>
        <PetsCard/>
        <Footer/>
    </div>
  )
}

export default Home