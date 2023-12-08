import React from 'react';
import { Yeseva_One, Philosopher } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const font = Yeseva_One({ weight: "400", subsets: ["latin"] });
const fontThree = Philosopher({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      // Open WhatsApp directly on mobile
      window.location.href = "whatsapp://send?phone=14373458590";
    } else {
      // Display a message or instructions for desktop users
      alert("To chat on WhatsApp, open WhatsApp Web on your computer and scan the QR code.");
    }
  };


  return (
    <div>
    <div className='py-8 p-5 sm:px-8 xl:px-36 flex justify-center'>
      <div className='sm:px-8 lg:flex justify-around 2xl:w-3/4 2xl:px-38 w-full '>

        <div className='sm:p-10 flex flex-col items-center lg:items-center relative'>
          
          <div className='py-4'>
            <div className={`text-2xl lg:text-center text-center font-bold ${font.className}`}>Email</div>
            <div className={`text-center lg:text-center ${fontThree.className}`}>Sutharsan15@yahoo.com</div>
          </div>
          

          <div className='py-4'>
          <div className={`text-2xl lg:text-center text-center font-bold ${font.className}`}>Phone</div>
<a href="whatsapp://send?phone=14373458590" target="_blank" rel="noopener noreferrer">
  <div className={`text-center lg:text-center ${fontThree.className} flex flex-col items-center justify-center`}>
  <FontAwesomeIcon icon={faWhatsapp} className='w-24 h-24' /> +1 (437) 345-8590
  </div>
</a>

          </div>
        </div>

        <div className='flex flex-col sm:p-10 py-10 items-center justify-between'>
          <form>

            <label className="block">
              <input type="text" placeholder='Your Name' className="mt-1 block sm:w-96 px-3 py-2 my-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-black" />
            </label>

            <label className="block">
              <input type="text" placeholder='Your Email' className="mt-1 block sm:w-96 px-3 py-2 my-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  text-black" />
            </label>

            <label className="block">
              <input type="text" placeholder='Subject' className="mt-1 block sm:w-96 px-3 py-2 my-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  text-black" />
            </label>

            <label className="block">
              <textarea placeholder='Your Message' className="mt-1 block w-full sm:w-96 px-3 py-2 my-5 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400  text-black resize-none" />
            </label>

            <div className='m-auto text-center lg:text-start'>
              <button className=" bg-teal-500 hover:bg-teal-300 active:bg-teal-600 focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-md text-white">
                Send
              </button>
            </div>

          </form>
            
        </div>
      </div>

    </div>
    <div className="py-2 text-center text-gray-700 font-bold bg-slate-400 flex justify-center ">
    Copyright ©Neuronic System (Pvt) Ltd
    </div>
    </div>
  );
};


export default Footer;
