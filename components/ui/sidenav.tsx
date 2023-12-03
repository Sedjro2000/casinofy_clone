'use client'
// Importation des bibliothèques React et les icônes nécessaires
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}



// Définition du composant Navbar
const SideNav = () => {
  // Obtention du chemin d'accès actuel à l'aide du hook usePathname de Next.js
  const pathname = usePathname();

  // État pour gérer l'ouverture et la fermeture du menu latéral
  const [isOpen, setIsOpen] = useState(false);

  // Liste des éléments du menu latéral
  const sideList = [
    { title: "Jouer" , href:'../Casino' },
    { title: "Historique", href:'../Casino/historique'},
    { title: "Paiement", href:'../Casino/paiement' },
    { title: "Deconnexion", href:'' },
  ];

  // Gestion du clic sur le bouton du menu latéral
  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // Rendu du composant Navbar
  return (
    <nav className="flex w-full items-center justify-between px-6 h-16 bg-blue-600 text-gray-700 border-b border-gray-200 z-10">
      {/* Partie gauche du Navbar avec le logo et le bouton du menu */}
      <div className="flex items-center">
        <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
          <span className="text-3xl text-white">☰</span>
        </button>
        <p className="text-white">Solde</p>
      </div>

      {/* Fond obscurci lorsque le menu latéral est ouvert */}
      {isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex={0}
          ></div>
        </div>
      )}

      {/* Menu latéral */}
      <aside
        className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* En-tête du menu latéral avec le logo */}
        <span className="flex w-full items-center p-4 border-b">
        <div className="avatar  placeholder">
        <div className="bg-blue-600 text-neutral-content rounded-full w-16 ml-2" >
            <span className="text-xl"></span>
            
  </div>
  <p className="mt-4 ml-2">Leonce</p>
  
</div>
        </span>
       

         {/* Éléments du solde Recharger Retirer */}

         <div className="bg-gray-200  flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded shadow">
          <div className="grid grid-cols-2 gap-x-8">
            <p className="mt-2 text-blue-600">Solde:</p>
            <Button asChild className="bg-blue-500 p-4">
               <Link href="">Recharger</Link>
            </Button>
            <p>73.150</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8">
            <p className="mt-2 text-blue-600">Gains:</p>
            <Button asChild className="bg-blue-500">
               <Link href="">Retirer</Link>
            </Button>
            <p>73.150</p>
          </div>
          </div>
        </div>


        {/* Éléments du menu latéral */}
        {sideList.map(({ title, href }, index) => (
          // Utilisation du composant Link pour la navigation côté client
          <Link key={index} href={href}>
            <div
              className={clsx(
                'flex h-[48px] grow items-center  ml-4 gap-2 rounded-md bg-gray-50 p-3 text-sm  text-blue-500 font-medium hover:bg-sky-100 hover:text-blue-600 cursor-pointer',
                {
                  'bg-sky-100 text-blue-600': pathname === href,
                },
              )}
              onClick={() => setIsOpen(false)} // Ferme le menu lorsqu'un lien est cliqué
            >
              <span>{title}</span>
            </div>
          </Link>
        ))}
      </aside>
    </nav>
  );
};

// Exportation du composant Navbar
export default SideNav;
