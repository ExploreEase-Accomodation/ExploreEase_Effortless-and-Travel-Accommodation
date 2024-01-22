import React from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {
  const items =[
    {
     title:"abc",
      description:"hello hello",
      icon : require("./Media/undraw_undraw_undraw_undraw_undraw_completion_progress_1oxr_gag2_-1-_0h44_-1-_vov5_-1-_1amu.svg")
    },
    {
      title:"deg",
       description:"hello hello2",
       icon : require("./Media/undraw_undraw_undraw_undraw_undraw_completion_progress_1oxr_gag2_-1-_0h44_-1-_vov5_-1-_1amu.svg")
     },
     {
      title:"Hij",
       description:"hello hello3",
       icon : require("./Media/undraw_undraw_undraw_undraw_undraw_completion_progress_1oxr_gag2_-1-_0h44_-1-_vov5_-1-_1amu.svg")
     }

  ];
  return (
    <>
    <div className="carousel">
      <div className="inner">
        {items.map((item)=>{
          return (
    <CarouselItem item={item}/>

          )  
        })}
      </div>

    </div>
    </>
  )
}

export default Carousel