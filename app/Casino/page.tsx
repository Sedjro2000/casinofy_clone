'use client'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import RandomNumberGenerator from "@/components/RandomNumberGenerator";

interface SelectProps {
  
  id?: string; 
 }


  
  

const Casino = () => {



 
  return (
    <div>
    
 {/*Les entree du joueur  */}
  <div className="container mx-auto p-4">
    <div>
      <div className="mb-4">
      <label  htmlFor="Mise" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Mise:</label>
      </div>
  
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="100 FCFA" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Mise</SelectLabel>
          <SelectItem value="100">100 FCFA</SelectItem>
          <SelectItem value="200">200 FCFA</SelectItem>
          <SelectItem value="500">500 FCFA</SelectItem>
          <SelectItem value="1000">1000 FCFA</SelectItem>
          <SelectItem value="2000">2000 FCFA</SelectItem>
          <SelectItem value="5000">5000 FCFA</SelectItem>
          <SelectItem value="10000">10000 FCFA</SelectItem>
          <SelectItem value="20000">20000 FCFA</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    
        {/*Les entree du joueur  */}
        <div className="mb-4">
        <label htmlFor="nombreDeChiffres" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Nombre de chiffres:</label>
        </div>
       
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="2 → Gains: Mise*10%" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Nombre de chiffres</SelectLabel>
          <SelectItem value="2">2 → Gains: Mise*10%</SelectItem>
          <SelectItem value="3">3 → Gains: Mise*15%</SelectItem>
          <SelectItem value="4">4 → Gains: Mise*20%</SelectItem>
          <SelectItem value="5">5 → Gains: Mise*25%</SelectItem>
          <SelectItem value="6">6 → Gains: Mise*30%</SelectItem>
          <SelectItem value="7">7 → Gains: Mise*40%</SelectItem>
          <SelectItem value="8">8 → Gains: Mise*60%</SelectItem>
          <SelectItem value="9">9 → Gains: Mise*90%</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        {/*Les entree du joueur  */}
        <div className="mb-4">
        <label htmlFor="VitesseDesAnneaux" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Vitesse des anneaux:</label>
        </div>
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="1 chiffre/seconde → -98%*Gains" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vitesse des anneaux</SelectLabel>
          <SelectItem value="1">1 chiffre/seconde → -98%*Gains</SelectItem>
          <SelectItem value="2">2 chiffres/seconde → -85%*Gains</SelectItem>
          <SelectItem value="3">3 chiffres/seconde → -60%*Gains</SelectItem>
          <SelectItem value="4">4 chiffres/seconde → +/-0%*Gains</SelectItem>
          <SelectItem value="5">5 chiffres/seconde → +30%*Gains</SelectItem>
          <SelectItem value="6">6 chiffres/seconde → +90%*Gains</SelectItem>
          <SelectItem value="7">7 chiffres/seconde → +200%*Gains</SelectItem>
          <SelectItem value="8">8 chiffres/seconde → +300%*Gains</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <div className="mb-4">
      <label  htmlFor="Mise" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Gains:</label>
      </div>

      <Input type="text" placeholder="Entrer un nombre"  className="w-60"/>
      
      <div className="flex  flex-col">
      <div className='flex items-center justify-center'>
        <p>ou</p>
      </div>
        
        <RandomNumberGenerator  />
       
        
  <Button className="  bg-rose-500 text-white mt-4">Faire tourner les anneaux</Button>

</div>






      

      
    

      

    </div>
  </div>

      

        
    </div>
  )
}

export default Casino