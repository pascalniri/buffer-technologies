import { MessagesSquare } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div 
    id='home'
    style={{ backgroundImage: `url('/heroBg.svg')`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    className="flex flex-col justify-center items-center text-center text-white bg-cover bg-no-repeat bg-center px-[5%]"
    >
        <p className='text-[20px]'>Welcome to</p>
      <h1 className='font-orbitron text-[30px] md:text-[60px] font-semibold'><span className='text-orange-500 animate-pulse'>Buffer</span> Technologies.</h1>
      <p className='md:w-[70%] mt-5 text-justify md:text-center'>We are a Rwandan-based IT solutions company delivering cutting-edge technology services across industries. With a passion for innovation and a team of experienced professionals, we bring world-class IT services to your doorstep—efficiently, securely, and affordably.</p>

      <div className='flex flex-wrap justify-center items-center mt-10 gap-5'>
        <button className='bg-orange-500 text-white px-[30px] py-[15px] rounded-full hover:bg-orange-600 transition duration-300'>Explore Our Services</button>
        <button className='flex flex-row items-center gap-2 bg-transparent border border-white text-white px-[30px] py-[15px] rounded-full hover:bg-white hover:text-black transition duration-300'>
        <MessagesSquare strokeWidth={1.5} />
           <p>Let's Talk</p>
        </button>

      </div>
    </div>
  )
}

export default HomePage
