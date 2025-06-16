import { useState } from 'react';
import picture1 from '/assets/picture1.png'
import SwiperCarousel from '../components/SwiperCarousel';
import Card from '../components/card';
import CardIcones from '../components/CardIcones';



const Home = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="font-sans bg-gray-50">
            {/* Bannière principale */}
            <section className="bg-[url('/assets/picture1.png')] bg-cover bg-[position:center_5%]  bg-no-repeat text-white py-16 md:py-24 ">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">Entreprise / Particulier</h1>
                    <p className="text-xm font-medium mb-8 max-w-2xl mx-auto">
                        Avez-vous besoin d'un financement non remboursable dans un laps de temps court pour combler vos besoins ?
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 px-5 sm:space-x-6 hover:animate-shake">
                        <a
                            href="Demandefinance"
                            className="bg-yellow-500 hover:bg-white text-black font-bold py-3 px-8 rounded-full text-base transition duration-300 "
                        >
                            Demander votre financement
                        </a>
                    </div>
                </div>
            </section>
            <section className='mb-5'>
                <div className='bg-yellow-300 px-5 py-5 text-small md:text-xl font-bold text-center '>
                    <p>Le financement non remboursable est accessible à tous en 72 heures.</p>
                </div>
            </section>


            {/* FMI FINANCEMENT */}
            <section className="py-5 border-b border-gray-300">
                <div className="container mx-auto px-5">
                    <h2 className="text-3xl font-bold text-center mb-5">FMI Financements</h2>
                    <p className="text-sm text-gray-600 mb-8 max-w-3xl mx-auto text-justify">
                        Le financement non remboursable, également appelé subvention non remboursable, est une forme prêt en ligne sans obligation de remboursement accordée à
                        toute personne physique ou morale (particulier ou entreprise) détentrice d'un projet personnel de développement. L'idée de la subvention sans remboursement
                        ou encore prêt non remboursable a vu le jour dans le cadre de la lutte contre la pauvreté à travers le monde. Ainsi, au lendemain de la crise financière
                        mondiale et du ralentissement économique qui ont récemment touché l'ensemble des pays du monde, Le FMI financement en partenariat avec plusieurs
                        organisations internationales à but non lucratif et plusieurs pays du monde, a donc initié ce projet en vue d'apporter une solution durable à la crise
                        financière mondiale. Il s'agit d'accorder des aides non remboursables aux entreprises ou aux personnes physiques pour la réalisation de leurs différents
                        projets de développement. Il est à noter que les bénéficiaires ne rembourseront pas l'aide reçue. Ceci étant, chaque personne est libre d'utiliser le
                        montant de sa subvention comme elle l'entend, mais en réalisant un projet de développement. Ces aides vont de 1.000 € à 5.000.000 €. En effet, il est
                        à souligner que toute personne sans distinction de race et de sexe peut effectuer une demande de prêt non remboursable. Enfin, nombreux se posent la
                        question de savoir comment obtenir l'aide financière non remboursable. Nous vous présentons les directives à suivre et comment effectuer votre demande
                        de financement non remboursable en ligne dans un délai rapide.
                    </p>

                    <CardIcones />
                    {/* <div className='flex flex-wrap justify-center gap-4 mb-12'>
                        <a href="Demandefinance">
                            <div className="w-72 h-60 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <h3 className='text-lg font-bold mb-2'>Ordinateur / Téléphone / Connexion</h3>
                                </div>
                                <p className='text-sm text-gray-600 '>Vous devez disposer d'un ordinateur portable ou d'un téléphone portable suivi d'une connexion Internet pour effectuer votre demande de financement
                                    non remboursable en ligne.</p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-60 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <h3 className='text-lg font-bold mb-2'>Page de demande financement</h3>
                                </div>
                                <p className='text-sm text-gray-600 '>À présent, vous devez vous rendre sur notre page de demande de financement soit en cliquant plus bas sur :
                                    Demandez votre financement, ou tous simplement en cliquant sur le Menu pour vous rendre sur notre page : Demande de financement .
                                </p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-60 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <h3 className='text-lg font-bold mb-2'>Remplissage et Acceptation</h3>
                                </div>
                                <p className='text-sm text-gray-600 '>Pour maximiser vos chances d'obtenir votre aide non remboursable, vous devez remplir vos informations
                                    et acceptez la condition de fournir des informations personnelles à votre propos.
                                </p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-60 bg-white shadow-lg rounded-lg p-4 text-center">
                                <h3 className='text-lg font-bold mb-2'>Soumettre votre demande de financement</h3>
                                <p className='text-sm text-gray-600 '>Soumettez à présent votre demande de financement en ligne. Un retour vous sera envoyé par E-mail
                                    dans les prochains 72H au plus .</p>
                            </div>
                        </a>
                    </div> */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mx-4 hover:animate-shake">
                        <a
                            href="Demandefinance"
                            className="bg-yellow-500 hover:bg-white border-yellow-500 text-black font-bold py-3 px-4 rounded-full text-lg transition duration-300 text-center"
                        >
                            Demander votre financement
                        </a>
                    </div>
                </div>
            </section>

            {/* NOS FINANCEMENTT */}
            <section className="py-5 border-b border-gray-200">
                <div className="container mx-auto mb-5 px-5">
                    <h2 className="text-3xl font-bold text-center pt-10 mb-8">Nos Financements</h2>
                    <p className="text-sm text-gray-600 mb-8 max-w-3xl mx-auto text-justify">
                        Toujours dans l'objectif de venir en aide aux personnes dans le besoin, nous disposons de plusieurs financements à notre disposition
                        grâce à l'appui de la Banque mondiale, de l'UE et des personnes de bonne foi. Ainsi, le financement non remboursable, encore appelé
                        subvention non remboursable, est considéré comme un don non remboursable, un prêt sans remboursement qui est et sera accordé jusqu'à un
                        certain montant gratuitement (1.000 € à 5.000.000 €) en fonction de multiples raisons. Pour cela, nous vous accompagnons avec notre
                        subvention sans remboursement qui sera accordée à toute personne sans distinction pour les motifs suivants : le règlement de vos dettes
                        (la pauvreté), soigner votre santé (la maladie), la rénovation ou la construction de votre maison, la création d'entreprises, les études,
                        le permis, l'achat d'une voiture, l'achat d'une maison, etc. Nous vous aidons de même à remettre sur pied votre entreprise qui est sur le
                        point de faire faillite pour des raisons de manque de capital. Ce n'est pas fini, il existe de multiples raisons pour lesquelles la
                        subvention non remboursable vous est garantie avec certitude.
                    </p>

                    <Card/>
                    {/* <div className='flex flex-wrap justify-center gap-4 mb-12 '> 
                        <a href="Demandefinance">
                            <div className="w-72  bg-white shadow-lg rounded-lg p-4 text-center h-auto">
                                <div>
                                    <img
                                        className="w-25 h-auto mx-auto mb-4"
                                        src={picture1}
                                        alt="" />
                                </div>
                                <h3 className='text-lg font-bold mb-2'>Financement À Taux 0%</h3>
                                <p className='text-sm text-gray-600 '>Le financement non remboursable est ouvert à toutes personnes sans distinction
                                    de sexe, de race et de religion. Le bénéficiaire doit simplement remplir les conditions d'accès. 1 000€
                                    jusqu'à 1 000 000€
                                </p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-100 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <img
                                        className="w-25 h-auto mx-auto mb-4"
                                        src={picture1}
                                        alt="" />
                                </div>
                                <h3 className='text-lg font-bold mb-2'>Aides aux personnes âgées</h3>
                                <p className='text-sm text-gray-600 '>Une aide financière qui contribue au financement de la prise en
                                    charge de la dépendance des personnes âgées, pour soutenir les personnes âgées aux faibles
                                    ressources. 1.000€ jusqu'à 50.000€
                                </p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-100 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <img
                                        className="w-25 h-auto mx-auto mb-4"
                                        src={picture1}
                                        alt="" />
                                </div>
                                <h3 className='text-lg font-bold mb-2'>Création d'entreprises innovantes</h3>
                                <p className='text-sm text-gray-600 '>Ce projet accompagne et finance les projets de création d’entreprises innovantes
                                    sous forme de subvention non remboursable Jusqu’à 3 000 000€.
                                </p>
                            </div>
                        </a>
                        <a href="Demandefinance">
                            <div className="w-72 h-72 bg-white shadow-lg rounded-lg p-4 text-center">
                                <div>
                                    <img
                                        className="w-25 h-auto mx-auto mb-4"
                                        src={picture1}
                                        alt="" />
                                </div>
                                <h3 className='text-lg font-bold mb-2'>Aides humanitaire</h3>
                                <p className='text-sm text-gray-600 '>
                                    Un financement sans remboursement qui intervient en matière de crise ou d'urgence pour aider les réfugiés,
                                    les plus dévalorisés et les personnes victimes de catastrophes. elle varie de 1.000€ à 500.000€
                                </p>
                            </div>
                        </a>
                    </div> */}
                </div>
            </section>

            <section className='bg-yellow-100 py-10 border-b border-gray-300'>
                <div className='text-center mb-5'>
                    <h2 className='text-2xl font-bold mb-4'>Témoignages</h2>
                    <p>Ce que disent nos clients a propos de nos financements !!!</p>
                </div>

                <div className='my-15'>
                    <SwiperCarousel />
                </div>

            </section>

        </div>
    );
};

export default Home;