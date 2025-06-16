import React from 'react';
import { Link } from 'react-router-dom';

const cardFinance = [
  {
    id: 1,
    title: 'Subvention non remboursable en suisse',
    excerpt: 'Qu\'est-ce qu\'une subvention non remboursable en suisse ? La subvention non remboursable en suisse, communément appelé financement non remboursable en suisse est un don, un prêt sans remboursement accordé par le FMI en partenariat avec la banque mondiale, l\'UE, à toute personne résidant en suisse ayant ou non la nationalité.',
    link: '/subventionsuisse',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Bourse familiale non remboursable',
    excerpt: 'La bourse familiale non remboursable est une allocation familiale, un financement non remboursable, un prêt sans remboursement accordé par la FMI en collaboration avec l\'union européenne et la banque mondiale dans le cadre de venir en aide aux personnes dans le besoin.',
    link: '/boursefamiliale',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Aide non remboursable en Guadeloupe',
    excerpt: 'L\'aide non remboursable en Guadeloupe sera toujours un financement sans remboursement, une subvention non remboursable ou encore un prêt sans remboursement qui sera accordé aux citoyens en entreprise dans le besoin.',
    link: '/aideguadeloupe',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Financement non remboursable au Canada',
    excerpt: 'Le financement non remboursable au Canada est une forme d\'allocation non remboursable versée aux personnes qui dispose un projet de développement personnel au Canada.',
    link: '/financementcanada',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Financement non remboursable en polynésie française',
    excerpt: 'Le financement non remboursable en Polynésie française sera toujours une subvention non remboursable ; un prêt non remboursable ; ou encore un financement sans remboursement disponible pour les citoyens de la Polynésie Française.',
    link: '/financementpolynesie',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Besoin de financement',
    excerpt: 'Avez vous besoin de financement non remboursable ? Le besoin de financement non remboursable est la situation économique d\'une personne dont les dépenses d\'investissement sont au dessus de l\'épargne.',
    link: '/besoinfinancement',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-zoom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const CardNosfinances = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto rounded-4xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 rounded-4xl border-gray-300 ">
          {cardFinance.map((cardFinance) => (
            <Link 
              to={cardFinance.link} 
              key={cardFinance.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full border-4">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    {cardFinance.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-yellow-600 group-hover:text-yellow-300 transition-colors duration-300">
                    {cardFinance.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  {cardFinance.excerpt} <span className="text-blue-500 font-medium">Lire la suite</span>
                </p>
                <div className="mt-auto">
                  <div className="inline-flex items-center text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <span>En savoir plus</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardNosfinances;