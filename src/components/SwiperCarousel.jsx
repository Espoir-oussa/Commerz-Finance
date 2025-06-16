import { useEffect } from 'react';

export default function SwiperCarousel() {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      navigation: false,
      pagination: false,
      // Empêche le scroll horizontal indésirable
      preventInteractionOnTransition: true,
      // Désactive le défilement par molette
      mousewheel: false,
      // Désactive le défilement tactile (optionnel)
      touchReleaseOnEdges: true,
    });
  }, []);

  return (
    <div className="swiper-container py-3 overflow-hidden"> {/* Ajout de overflow-hidden */}
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none"> {/* Ajout de select-none */}
          <img
            src="/assets/woman1.jpg"
            alt="Slide 1"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
            Bonjour! Grâce a ce programme de financement du FMI, 
            j'ai obtenu une subvention de 15000€ qui me permet de rentrer dans la phase active de la réalisation 
            de mon projet. Vous pouvez les contacter si vous êtes dans le besoin de financement pour diverses raisons 
            personnelles.N'hésitez pas à souscrire à votre demande.
          </p>
          <div className="mt-3">
            <h3 className="font-bold">Martine Delaporte</h3>
            <p className="text-sm text-gray-600 ">Paris, France</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none">
          <img
            src="/assets/woman2.jpg"
            alt="Slide 2"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
            Je n'en pouvais plus, la maladie de ma fille nous avait tous abattu. Grâce au financement du Groupe SIFNR, 
            je peux respirer sans aucun souci, et ma fille n'a plus rien à craindre.
          </p>
          <div className="mt-3">
            <h3 className="font-bold">Pascale Rousselot</h3>
            <p className="text-sm text-gray-600">Québec, Canada</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none">
          <img
            src="/assets/woman3.jpg"
            alt="Slide 2"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
            L’aide financière dont nous avons bénéficié nous a grandement aidés à régler les frais lors de nos
             déplacements à plus de 700 km de notre résidence pour obtenir des traitements médicaux pour ainsi 
             avoir une meilleure qualité de vie
          </p>
          <div className="mt-3">
            <h3 className="font-bold">Martine Dubois</h3>
            <p className="text-sm text-gray-600">Val de Marne, France</p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none">
          <img
            src="/assets/woman4.jpg"
            alt="Slide 2"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
            Mon cas a été traité avec rapidité et sincérité. Grâce au financement que j'ai obtenu, 
            j'ai pu refinancer mon entrepise et éviter la chute.
          </p>
          <div className="mt-3">
            <h3 className="font-bold">Ariane Meunier</h3>
            <p className="text-sm text-gray-600">Nouvelle Calédonie</p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none">
          <img
            src="/assets/man1.jpg"
            alt="Slide 2"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
           Je viens partager avec vous ma joie. J'ai obtenu la subvention non remboursable de 70.000€ au bout de 3 jours.
           Faites confiance à ce programme de financement non remboursable et vous ne serez pas déçu
          </p>
          <div className="mt-3">
            <h3 className="font-bold">Philippe St-patrick</h3>
            <p className="text-sm text-gray-600">Guadeloupe</p>
          </div>
        </div>

        {/* Slide 6 */}
        <div className="swiper-slide flex flex-col items-center px-4 select-none">
          <img
            src="/assets/man2.jpg"
            alt="Slide 2"
            className="w-32 h-32 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
          />
          <p className="text-center text-sm font-medium max-w-md">
            Je m'appelle Luc et aujourd'hui, j'ai eu la chance de recevoir 
            un financement non remboursable de 9000€ de la part de FMI FINANCEMENT, qui m'a 
            permis de régler mes dettes. Je tiens à exprimer ma profonde gratitude 
            envers cette entreprise et je vous encourage vivement à faire appel à leurs 
            services pour réaliser vos projets.
          </p>
          <div className="mt-3 justify-center">
            <h3 className="font-bold">Luc</h3>
            <p className="text-sm text-gray-600">Toulouse/France</p>
          </div>
        </div>
      </div>

      {/* Style global pour masquer la scrollbar */}
      <style jsx global>{`
        .swiper-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .swiper-container::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
        .swiper-wrapper {
          -webkit-user-select: none; /* Safari */
          -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* IE10+/Edge */
          user-select: none; /* Standard */
        }
      `}</style>
    </div>
  );
}