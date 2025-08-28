import React from 'react'
import logo from '/assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className=' bg-white h-[10vh] w-full fixed z-10 flex items-center justify-between px-10'>
        <img onClick={() => navigate('/')} src={logo} className='h-full  cursor-pointer' alt="" />

        <ul className=' flex gap-10 text-orange-400'>
            <li onClick={() => navigate('/kids')} className=' hover:text-green-500 cursor-pointer'>Kids</li>
            <li onClick={() => navigate('/adults')} className=' hover:text-green-500 cursor-pointer'>Adults</li>
            <li className=' hover:text-green-500 cursor-pointer'>Corporate</li>
            <li className=' hover:text-green-500 cursor-pointer'>About Us</li>
            <li className=' hover:text-green-500 cursor-pointer'>Contact Us</li>
        </ul>

    </nav>
  )
}

export default Nav