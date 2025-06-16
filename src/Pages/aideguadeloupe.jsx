import React from 'react';
import { Link } from 'react-router-dom';

const Aideguadeloupe = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-10 text-sm text-justity">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Aide non remboursable en Guadeloupe</h1>
        </header>

        {/* Featured Image */}
        <img 
          src="guadeloupe.jpg" 
          alt="Aide non remboursable en Guadeloupe" 
          className="w-full h-auto rounded-lg mb-8"
        />

        {/* Content */}
        <div className="prose max-w-none">
          <p className="mb-4">
            L'aide non remboursable en Guadeloupe sera toujours un <Link to="/" className="text-gray-900 hover:underline">financement sans remboursement</Link>, 
            une subvention non remboursable ou encore un prêt sans remboursement qui sera accordé aux citoyens en entreprise dans le besoin.
            Dans un terme plus précis, l'aide non remboursable est un don qui peut être accordé à toute personne vivant en Guadeloupe.
          </p>

          <div className="px-4 py-6">
            <Link
              to="demandefinancement" 
              className="inline-block bg-gray-600 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition duration-200 "
            >
              Effectuer votre demande de financement
            </Link>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Quels sont les objectifs d'une aide non remboursable en Guadeloupe ?</h2>

          <p className="mb-4">
            Primo, l'objectif principal d'un financement non remboursable en Guadeloupe est de lutter contre la pauvreté en Guadeloupe. Sur ce, pour atteindre ses objectifs, des dons seraient accordés aux personnes / entreprises dans le besoin. Il s'agit des personnes âgées, des personnes malades ou aussi des entreprises faisant faillite suite à un événement, une pandémie. Le prêt non remboursable peut de même être accordé aux personnes pour la rénovation de leur maison, l'achat d'un véhicule, la construction ou la création d'une entreprise etc...
          </p>

          <p className="mb-4">
            Secundo, pour atteindre son objectif principal, le financement sans remboursement en Guadeloupe serait accordées a toute personnes détenteur d'un projet pouvant permettre de lutter contre le chômage sur le territoire francais.
          </p>

          <p className="mb-6">
            En résumé, l'aide non remboursable en Guadeloupe pourrait être accordée aux particuliers, comme aux entreprises a la recherche de capitale dans le cadre de la lutte contre la pauvreté
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Comment obtenir une subvention non remboursable en Guadeloupe ?</h2>

          <p className="mb-4">
            Comme dans la plupart des départements de la France, l'obtention du financement sans remboursement est le même en Guadeloupe. En effet, vous devez avoir une raison valable, un projet avant de pouvoir vous décidez pour obtenir le financement. Suite à cela, connectez-vous sur internet grace à un téléphone ou ordinateur. C'est enfin le moment, visité notre page de <Link to="https://financement-non-remboursable.fr/demande-de-financement/" className="text-blue-600 hover:underline">demande de financement</Link> et remplissez notre formulaire en ligne.
          </p>

          <p className="mb-6">
            Maintenant que c'est fait, tout ce qui vous reste : c'est la patience afin d'obtenir un retour de notre part.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Quel est le temps requis pour obtenir une réponse par rapport a ma demande de financement non remboursable en Guadeloupe ?</h2>

          <p className="mb-6">
            24H - 72H : c'est le temps minimum requis pour obtenir un retour concernant votre demande de financement soumise en ligne. Toutefois, vous pouvez obtenir une réponse excepté ce délai mentionné pour des raisons de plusieurs dossiers en cours. Mais généralement la réponse est rapide, dans un délai court.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4">Quelles sont les informations à fournir pour obtenir mon aide sans remboursement ?</h2>

          <p className="mb-4">
            À cette étape, vous êtes chanceux. votre demande de prêt non remboursable a été probablement accepté. Mais le tour n'est pas encore joué. 
            Vous devez fournir certaines informations afin de prouver que vous êtes bien réel. Cette mesure est mise en place dans le but de lutter 
            contre la fraude et l'usurpation d'identité. C'est pour cette raison que vous devez fournir les informations tels que :
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Pièce d'identité ou passeport</li>
            <li>justificatif de domicile</li>
          </ul>

          <p>
            Enfin il nous revient de vous préciser que les informations fournies sont gardées confidentielles. Ils ne sont divulguées en aucun cas.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Aideguadeloupe;