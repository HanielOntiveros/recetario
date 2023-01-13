import React from "react";

export default function Nabvar() {
  return (
   <header className="bg-white flex justify-around gap-4 px-6 py-6 font ">
         <div className="">
          <a href="#">
            <img src="../src/assets/cutting-board.png" alt="" />
          </a>
        </div>
      <nav className="flex justify-end w-full">
        <ul className="flex gap-24 mx-3">
          <a className="font text-hover" href="#">
            Recetas
          </a>
          <a className="font text-hover " href="#">
            Blog
          </a>
          <a className="font text-hover" href="#">
            Contacto
          </a>
        </ul>
        
      </nav> 
      
    </header>
    
    
  );
}
