import React, { useRef } from 'react'
import Card from './card'
import Data from '../data/data.json'

function Foreground() {
    const ref = useRef(null)
  return (
    <>
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 p-5 flex-wrap'>
        {
            Data.map((elem)=>{
                return(
                    <Card userdata={elem} refrence={ref}/>
                )
            })
        }
      </div>
    </>
  )
}

export default Foreground