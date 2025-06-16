import React from 'react';
import { Link } from 'react-router-dom';

const BesoinFinancement = () => {
    return (
        <div className=" text-gray-800 text-sm text-justify">
            {/* Page Header */}
            <section className=" pt-16 justify-center">
                <div className="justify-center">
                    <div>
                        <div className=" mb-4 md:mb-0 text-center">
                            <h1 className="text-3xl md:text-4xl font-bold">Besoin de financement</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="p-2">
                <div className="container mx-auto px-4">
                    <div className="w-full">
                        <article className="max-w-4xl mx-auto">

                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-center">
                                    Avez vous besoin de financement non remboursable ?
                                </h2>

                                <figure className="w-full">
                                    <Link to="#">
                                        <img
                                            src="https://financement-non-remboursable.fr/wp-content/uploads/2022/09/img_0445.jpg"
                                            alt="Besoin de financement"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </Link>
                                </figure>

                                <p>
                                    Le besoin de financement non remboursable est la <Link to="https://www.economie.gouv.fr/cedef/conjoncture-economique#:~:text=La%20croissance%20%C3%A9conomique%20mondiale%20devrait,18%20novembre%202021.&amp;text=11%20novembre%202021."
                                        className="text-gray-900 fond-bold hover:underline">situation économique</Link> d'une personne dont les dépenses d'investissement sont au dessus de l'épargne. Autrement dit, nous évoquons l'expression: besoin de financement lorsque le solde est négatif. En effet, c'est la situation d'un Homme a la quête d'investissement pour un projet d'ordre publique ou privée.
                                </p>


                                <div className="flex justify-center">
                                    <Link
                                        to="/demandefinance"
                                        className="bg-gray-600 text-white px-6 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors"
                                    >
                                        Obtenir votre financement
                                    </Link>
                                </div>

                                <h2 className="text-xl font-bold">
                                    Quels sont les différents besoins de financement que nous accordons ?
                                </h2>

                                <p>
                                    L'organisme de l'ONU : <Link to="#" className="text-blue-600 hover:underline">Financement non remboursable</Link> accorde de différents besoin de financement aux personnes physiques et morales. C'est besoin sont entre autres accordée sur les plans suivants :
                                </p>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Matériel (achat de bien de production physique : capacité, de remplacement, ou de productivité)</li>
                                    <li>Immatériel (recherche et développement, brevet, formation, publicité, logiciel)</li>
                                    <li>Financier (prise de participation, création de filiale, etc)</li>
                                    <li>Remboursement de prêt accumulé</li>
                                </ul>

                                <p>
                                    Plusieurs autres besoins de financement sont accordés par financement non remboursable a des fins d'ordre personnel, ainsi qu'aux entreprises dans le cadre de lutter contre la pauvreté qui s'étend dans le monde.
                                </p>

                                <h2 className="text-xl font-bold">
                                    Pourquoi les entreprises ont besoin de financement ?
                                </h2>

                                <p>
                                    Pour une entreprise, le financement est à la fois le besoin en capitaux et la méthode employée pour en trouver. Il sert à couvrir des pertes éventuelles, à subvenir aux besoins d'exploitation ou à permettre un investissement futur. Aussi, l'entreprise aura besoin de capitaux pour acheter : les matières, les stocker , les transformés. es activités de l'entreprise génèrent une augmentation qui doit être financé .
                                </p>

                                <p>
                                    En effet , pour les entreprises, ils existent pour les entreprises, deux grandes catégories de besoins de financement.
                                </p>

                                <ul className="list-disc pl-6 space-y-2">
                                    <li>L'investissement : c'est la condition indispensable pour qu'une <strong>entreprise</strong> se développe et prospère dans le temps.</li>
                                    <li>L'exploitation : c'est en résumé toutes les transactions effectuées dans l'objectif d'assurer le fonctionnement de l'entreprise.</li>
                                </ul>

                                <p>
                                    Enfin, les entreprises ont besoins de ressources à long terme, pour assurer le financement de ses investissements.De même disposer d'un fond de roulement et de ressources à court terme, pour financer son exploitation.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BesoinFinancement;