
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from '../../assets/logo';

export default function Header() {
  const navItems = [
    { name: "Home", onClick: () => alert("Navigating to Home"), onHover: () => console.log("Hovered on Home") },
    { name: "Shop", onClick: () => alert("Navigating to Shop"), onHover: () => console.log("Hovered on Shop") },
    { name: "About Us", onClick: () => alert("Navigating to About Us"), onHover: () => console.log("Hovered on About Us") },
    { name: "News", onClick: () => alert("Navigating to News"), onHover: () => console.log("Hovered on News") },
    { name: "Contact Us", onClick: () => alert("Navigating to Contact Us"), onHover: () => console.log("Hovered on Contact Us") },
  ];
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
   
    <div className='text-xs bg-gray-950 px-25'>
      <div className="w-full flex justify-between items-center p-4 h-full">
        <nav className="flex space-x-6" aria-label="Header Secondary Menu">
          <ul className="flex space-x-4">
            <li><a className="text-zinc-500 hover:text-zinc-100">Showrooms</a></li>
            <li><a className="text-zinc-500 hover:text-zinc-100">Custom Work</a></li>
            <li><a className="text-zinc-500 hover:text-zinc-100">Gift Cards</a></li>
          </ul>
        </nav>

        <div className="flex space-x-4 ">
          <FontAwesomeIcon icon={faFacebook} size='lg' className="text-zinc-500 hover:text-zinc-100" />
          <FontAwesomeIcon icon={faInstagram} size='lg' className="text-zinc-500 hover:text-zinc-100" />
          <FontAwesomeIcon icon={faTwitter} size='lg' className="text-zinc-500 hover:text-zinc-100" />
          <FontAwesomeIcon icon={faWhatsapp} size='lg' className="text-zinc-500 hover:text-zinc-100" />
          <FontAwesomeIcon icon={faYoutube} size='lg' className="text-zinc-500 hover:text-zinc-100" />
        </div>
      </div>
    </div>

    <div className='px-25 h-20 bg-white p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'>
    <div className="w-full flex justify-between items-center p-4 h-full">
        <nav className="flex space-x-6" aria-label="Header Secondary Menu">
          <ul className="flex space-x-9">
            <li> <h1 className='text-gray-600 font-bold text-2xl'>Furniture</h1> </li>
            <li><div class="flex px-4 py-3 rounded-full border-2 border-b-neutral-500 overflow-hidden   font-[sans-serif]">
        <input type="email" placeholder="Search"
          class="w-xs outline-none  bg-transparent text-gray-600 text-sm" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </div></li>
            
          </ul>
        </nav>

        <div className="flex space-x-4 ">
        <ul className="flex space-x-6">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`text-gray-600 font-semibold cursor-pointer transition ${
              hoveredItem === item.name ? "text-blue-500" : ""
            }`}
            onClick={item.onClick}
            onMouseEnter={() => {
              item.onHover();
              setHoveredItem(item.name);
            }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name}
          </li>
        ))}
      </ul>
        </div>
      </div>  
    </div>


    </>
  )
}
