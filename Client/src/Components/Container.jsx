import React from 'react'
import './Container.css'
import BottomContainer from "./BottomContainer";
import Carousel from './Carousel';


const Container = () => {
  return (

    <>
    <div className='container'>
      <Carousel/>
      <BottomContainer/>
    </div>
    

    </>
  )
}

export default Container