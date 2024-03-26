import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({userdata, refrence}) {
  console.log(userdata);
  return (
    <>
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.1}} dragElastic={0.2} className='relative w-60 h-72 rounded-[45px] bg-zinc-800/80 text-white py-10 px-8 overflow-hidden'>
        <FaFileAlt />
        <p className='text-xm mt-5 font-semibold leading-tight'>{userdata.desc}</p>
        <div className='footer w-full absolute bottom-0 left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{userdata.filesize}</h5>
                <span className='bg-white rounded-full w-5 h-5 flex justify-center items-center'>
                  {
                    userdata.close ? <IoCloseSharp size="0.7em" color='#000'/> : <LuDownload size="0.7em" color='#000' />
                  }
                </span>
            </div>
            {
              userdata.tag.isOpened && (<div className={`tag w-full py-4 ${userdata.tag.tagColor} flex justify-center items-center`}>
              <h3 className='text-sm font-semibold'>{userdata.tag.tagtitle}</h3>
          </div>)
            }
        </div>
        </motion.div>
    {/* <div className='relative w-60 h-72 rounded-[45px] bg-zinc-800 text-white py-10 px-8 overflow-hidden'>
        <FaFileAlt />
        <p className='text-xm mt-5 font-semibold leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer w-full absolute bottom-0 left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>0.5mb</h5>
                <span className='bg-white rounded-full w-5 h-5 flex justify-center items-center'><LuDownload size="0.7em" color='#000' /></span>
            </div>
            <div className='tag w-full py-4 bg-green-600 flex justify-center items-center'>
                <h3 className='text-sm font-semibold'>Download Now</h3>
            </div>
        </div>
        </div> */}
    </>
  )
}

export default Card