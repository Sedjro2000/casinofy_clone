"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const RandomNumberGenerator = () => {
  // État local pour suivre si le bouton a été cliqué et le nombre généré
  const [nombreGenere, setNombreGenere] = useState<number | null>(null);


  // Fonction pour générer un nombre aléatoire et mettre à jour l'état
  const genererNombre = () => {
    const nouveauNombre = Math.floor(Math.random() * 100) + 1; // Remplacez 100 par la plage souhaitée
    setNombreGenere(nouveauNombre);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {nombreGenere === null ? (
        <>
         
          <Button
            className="bg-blue-500 text-white mt-4"
            onClick={genererNombre}
          >
            Générer un nombre
          </Button>
          <p className=" text-4xl mt-6 mb-8 ">NOMBRE</p>
        </>
      ) : (
        <div className="mt-4 flex flex-col ">
         
          <Button
            className="bg-blue-500 text-white mt-6"
            onClick={genererNombre}
          >
            Générer un autre nombre
          </Button>
          <p className="font-bold text-6xl mt-6 text-center">{nombreGenere}</p>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
