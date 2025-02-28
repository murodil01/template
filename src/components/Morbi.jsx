import React from 'react'
import Group from "./assets/Group.svg"
import Frame from "./assets/Frame.svg"

function Morbi() {
  return (
    <div className='my-[100px] flex flex-col gap-y-[30px] text-center px-4 md:px-0'>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
        Vel pretium pellentesque enim morbi
      </h3>
      <p className="w-[416px] mx-auto border-2 border-blue-700 py-[20px] px-[40px] text-gray-600 text-lg md:text-xl">
        Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa.
      </p>
      
      <div className='flex flex-col md:flex-row gap-[24px] justify-center'>

        <div className='w-full md:w-[416px] h-auto md:h-[261px] py-[32px] bg-blue-700 text-center text-white'>
            <img className='mx-auto' src={Group} alt=""/>
            <p className='font-bold text-lg md:text-[24px] leading-[33.6px] px-[40px] md:px-[70px] pt-[20px] md:pt-[31px]'>
              Enim ac sagittis tempus iaculis blandit. Tellus.
            </p>
        </div>

        <div className='w-full md:w-[416px] h-auto md:h-[261px] py-[32px] bg-blue-700 text-center text-white'>
            <img className='mx-auto' src={Frame} alt="" />
            <p className='font-bold text-lg md:text-[24px] leading-[33.6px] px-[40px] md:px-[70px] pt-[20px] md:pt-[31px]'>
              Ultricies erat sagittis est dictum leo est nibh a.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Morbi
