import React from 'react';
import { Link } from 'react-router-dom';

const FinancementCanada = () => {
  return (
    <div className="text-gray-800 text-sm gext-justify">
      {/* Page Header */}
      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <article className="mb-8">
              <div className='flex justify-center items-center space-x-4'>
              <img 
                src="canada.png" 
                alt="Financement non remboursable au Canada" 
                className="w-20 h-auto mb-6"
              />
              <header className="mb-4">
                <h3 className="text-xl font-bold ">Financement non remboursable au Canada</h3>
              </header>

              </div>

              <div className="prose max-w-none">
                <div className="h-5"></div>

                <div className="flex mb-4 sm:mx-7">
                  <Link
                    to="/demandefinance" 
                    className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg"
                  >
                    <strong>Effectuer votre demande de financement non remboursable</strong>
                  </Link>
                </div>

                <div className="h-4"></div>

                <p>Le financement non remboursable au Canada est une forme d'<Link to="/" className="text-gray-900">allocation non remboursable</Link> versée aux personnes qui dispose un projet de développement personnel au Canada.</p>

                <p>C'est aussi une aide non remboursable qui sera accordée par le FMI aux personnes / entreprises canadiennes pour la réalisation de leur différent projet de développement au Canada.</p>

                <p>En effet, l'aide qui sera reçu, ne sera pas remboursé par le bénéficiaire.</p>

                <p>En plus, il sera libre d'utiliser le financement reçu comme il l'entend t en réalisant un projet de développement. Ces aides vont de 1.000$ à 500.000.000$.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">Comment obtenir votre financement non remboursable au Canada ?</h2>

                <p>Vous êtes un ressortissant canadien,vous vivez sur le territoire et vous souhaitez obtenir un financement non remboursable au Canada. La méthodologie est très simple. Vous devez préalablement avoir des bonnes raisons pour votre demande. 
                  Ensuite vous pouvez à présent vous rendre sur notre plateforme pour remplir notre 
                  <Link to="/demandefinance" className="text-gray-500">formulaire de demande de financement sans remboursable</Link>.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">Combien de temps pour obtenir une réponse concernant ma demande de financement sans remboursement ?</h2>

                <p>Généralement après votre demande de financement sans remboursement au Canada, vous obtiendrez une réponse sur votre courriel dans les prochaines 24H ou 48H concernant l'acceptation ou non de votre demande de financement.<br />Toutefois, cela peut prendre des jours. Ceci, dans les cas de force majeure où nos équipes seraient surchargées car chaque jour, plusieurs demandes sont analysées.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">Quelles sont les informations à fournir après l'acceptation de votre demande pour obtenir l'aide non remboursable sur le territoire canadien ?</h2>

                <p>c'est votre jour de chance. Vous allez recevoir un mail d'acceptation de votre demande de financement de notre part. Réjouissez-vous. ce n'est qu'une question de formalité avant de recevoir le financement sur votre compte.</p>

                <p>Premièrement, vous devez être en mesure de vérifier votre identité et celui de votre entreprise, société (personne morale).</p>

                <h3 className="text-xl font-bold mt-6 mb-4">Personne physique</h3>

                <p>Dans le présent cas, vous allez fournir une preuve d'identité attestant que vous êtes réels. Cela peut être : votre pièce d'identité, votre passeport ou encore votre permis de conduire. Ensuite, vous allez joindre un justificatif de domicile afin que nous puissions effectuer nos vérifications.</p>

                <h3 className="text-xl font-bold  mt-6 mb-4">Personne morale</h3>

                <p>vous allez tout simplement fournir la preuve de l'enregistrement légale de votre société où entreprise conformément a la loi en vigueur sur le territoire du siège de votre société. En plus de ça, vous joignez la preuve attestant que vous êtes le directeur, gérant ... de l'entreprise.</p>

                <h2 className="text-xl font-bold mt-8 mb-4">Combien de délai pour obtenir mon financement non remboursable au canada ?</h2>

                <p>72H au plus, c'est le temps requis pour recevoir votre financement sur votre compte après avoir rempli tous les formalités légales. En raison du montant de financement non remboursable demandé, vous pouvez obtenir votre financement par un virement interac, un virement instantané ou un virement swift. Ceci étant, vous pouvez obtenir votre financement séance tenante sur votre compte après approbation du conseil d'évaluation et d'accord du financement.</p>

                <div className="flex mt-8 mb-8">
                  <Link 
                    to="/demandefinance" 
                    className="bg-gray-500 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg"
                  >
                    <strong>Effectuer votre demande de financement non remboursable au Canada</strong>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancementCanada;