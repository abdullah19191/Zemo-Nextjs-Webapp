import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Categories = () => {
  return (
    <section className='w-full'>
          <div className='px-8 mt-28'>
              <div className=" flex justify-between items-center">
                <h1 className='md:tracking-[.35rem] tracking-[.05rem] text-2xl md:text-3xl line font-normal'>OUR CATEGORIE:</h1>
                <div className=" flex justify-between md:w-[4%]">
                <ArrowBackIosIcon style={{ fontSize: 30 ,color:"gray"}}/>
                <ArrowForwardIosIcon style={{ fontSize: 30,color:"gray"}} />
                </div>
              </div>
          </div>
    </section>
  )
}

export default Categories
