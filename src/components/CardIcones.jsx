import React from 'react';

const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Ordinateur / Téléphone / Connexion",
    description:
      "Vous devez disposer d'un ordinateur portable ou d'un téléphone portable suivi d'une connexion Internet pour effectuer votre demande de financement non remboursable en ligne."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Pages de demande de Financements',
    description:
      'À présent, vous devez vous rendre sur notre page de demande de financement soit en cliquant plus bas sur : Demandez votre financement, ou tous simplement en cliquant sur le Menu pour vous rendre sur notre page : Demande de financement .'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Remplissement / Acceptation",
    description:
      "Pour maximiser vos chances d'obtenir votre aide non remboursable, vous devez remplir vos informations et acceptez la condition de fournir des informations personnelles à votre propos."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Soumettre votre demande de financement',
    description:
      "Soumettez à présent votre demande de financement en ligne. Un retour vous sera envoyé par E-mail dans les prochains 72H au plus ."    
  }
];

const Card = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 hover:animate-shake"
          >
            <a href="Demandefinance">
            <div className="p-4 flex justify-center ">
              <div className="bg-yellow-100 p-4 rounded-full">
                {card.icon}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow text-center">
              <h3 className="text-yellow-500 font-bold text-sm uppercase mb-2">{card.title}</h3>
              <p className="text-white text-sm flex-grow">{card.description}</p>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;