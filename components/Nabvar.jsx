import React from "react";

export default function Nabvar() {
  return (
   <header className="bg-amber-50 flex justify-around w-full px-6 py-6 font ">
         <div className="flex justify-start ">
          <a href="#">
            <img src="../src/assets/cutting-board.png" alt="" />
          </a>
        </div>
      <nav className="flex justify-end">
        <ul className="flex gap-12 mx-3">
          <a className="hover:text-stone-400 " href="#">
            Recetas
          </a>
          <a className="hover:text-stone-400 " href="#">
            Blog
          </a>
          <a className="hover:text-stone-400 " href="#">
            Contacto
          </a>
        </ul>
        
      </nav> 
      
    </header>
    
    
  );
}
