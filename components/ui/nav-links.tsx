'use client'
// Importation des dépendances nécessaires depuis Next.js et d'autres bibliothèques
import Link from 'next/link';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Tableau des liens à afficher dans la navigation latérale
const links = [
  { name: 'Accueil', href: '/Casino', icon: HomeIcon },
  { name: 'Historique', href: '/Casino/historique', icon: DocumentDuplicateIcon },
  { name: 'Paiement', href: '/Casino/paiement', icon: UserGroupIcon },
];

// Composant pour le rendu des liens de navigation
export default function NavLinks() {
  // Obtention du chemin d'accès actuel à l'aide du hook usePathname de Next.js
  const pathname = usePathname();

  // Rendu des liens de navigation
  return (
    <>
      {links.map((link) => {
        // Destructuration des valeurs de l'objet 'link'
        const { name, href, icon: LinkIcon } = link;

        return (
          // Utilisation du composant Link de Next.js pour la navigation côté client
          <Link
            key={name}
            href={href}
            // Utilisation de clsx pour appliquer conditionnellement des classes en fonction de certaines conditions
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
              {
                'bg-sky-100 text-blue-600': pathname === href,
              },
            )}
          >
            {/* Rendu de l'icône associée au lien */}
            <LinkIcon className="w-6" />
            {/* Rendu du nom du lien */}
            <p>{name}</p>
          </Link>
        );
      })}
    </>
  );
}
