import React from 'react';

const cards = [
  {
    image: '/investir.jpg',
    title: 'Financement à Taux 0%',
    description:
      'Le financement non remboursable est ouvert à toutes personnes sans distinction de sexe, de race et de religion. Le bénéficiaire doit simplement remplir les conditions d’accès. 1 000€ jusqu’à 1 000 000€.'
  },
  {
    image: '/old.jpg',
    title: 'Aides aux personnes âgées',
    description:
      'Une aide financière qui contribue au financement de la prise en charge de la dépendance des personnes âgées, pour soutenir les personnes âgées aux faibles ressources. 1 000€ jusqu’à 50 000€.'
  },
  {
    image: '/création.jpg',
    title: 'Création d’entreprises innovantes',
    description:
      'Ce projet accompagne et finance les projets de création d’entreprises innovantes sous forme de subvention non remboursable jusqu’à 3 000 000€.'
  },
  {
    image: '/aide.jpg',
    title: 'Aides humanitaires',
    description:
      'Un financement sans remboursement qui intervient en matière de crise ou d’urgence pour aider les réfugiés, les plus délaissés et les personnes victimes de catastrophes. Elle varie de 1 000€ à 500 000€.'
  }
];

const card = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <a href="/">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border-4 border-gray-900 hover:animate-shake"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-36 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow text-center bg-gray-900">
              <h3 className="text-yellow-500 font-bold text-sm uppercase mb-2 ">{card.title}</h3>
              <p className="text-white text-sm flex-grow">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      </a>
    </div>
  );
};

export default card;
