
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (

    <div className='text-xs bg-gray-950'>
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
  )
}
