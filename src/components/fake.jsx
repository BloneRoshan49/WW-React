import React from 'react'


function Fake({userdata}) {
    
  return (
    <div>
        <div className='w-60 h-72 bg-zinc-600 rounded-[45px] flex flex-col justify-center items-center'>
            <span>{`Name:${userdata.name}`}</span>
            <span>{`Age:${userdata.age}`}</span>
            <span>{`Gender:${userdata.gender}`}</span>
            <span>{`Profession:${userdata.profession}`}</span>
        </div>
    </div>
  )
}

export default Fake