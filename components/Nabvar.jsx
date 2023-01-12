import React from "react";

export default function Nabvar() {
  return (
    <div className="bg-amber-200 flex justify-between items-center w-full px-6 py-6">
      <div>
        <a href="#">
          <img src="../src/assets/cutting-board.png" alt="" />
        </a>
      </div>
      <div>
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
      </div>
    </div>
  );
}
