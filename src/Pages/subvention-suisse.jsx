import React from 'react';
import { Link } from 'react-router-dom';

const SubventionSuisse = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-8 text-sm text-justify">
			<article className="bg-white rounded-lg ">
				<div className="p-6 md:p-8">
					<header className="mb-6 flex items-center justify-center">
						<div>
							<img
								src="suisse.png"
								alt="Subvention non remboursable- Drapeau suisse"
								className="w-20 h-auto md:w-24 mb-6"
							/>
						</div>
						<h1 className="text-2xl text-center md:text-3xl font-bold text-gray-900 mb-2">Subvention non remboursable en suisse</h1>
					</header>

					<div className="prose max-w-none">


						<h2 className="text-2xl font-semibold text-gray-900 mb-4">Qu'est-ce qu'une subvention non remboursable en suisse ?</h2>

						<p className="text-gray-700 mb-6">
							La subvention non remboursable en suisse, communément appelé financement non remboursable en suisse est un don, un prêt sans remboursement accordé par le FMI en partenariat avec la banque mondiale, l'UE, à toute personne résidant en suisse ayant ou non la nationalité. C'est aussi une aide non remboursable accordée à tous résidents en suisse dans le cadre de la promotion de l'entreprenariat et de lutte contre la pauvreté. Cette subvention a un but précis et disponible à la portée de tous pour de multiples raisons.
						</p>

						<div className="mb-8">
							<Link
								to="/demandefinance"
								className="inline-block px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300"
							>
								Effectuer votre demande de financement
							</Link>
						</div>



						<h2 className="text-2xl font-semibold text-gray-900 mb-4">Quel est le but d'une subvention sans remboursement en suisse.</h2>

						<p className="text-gray-700 mb-4">
							L'objectif principal est la lutte contre la pauvreté. Pour cela, nous allons toujours accorder le financement non remboursable à toutes entreprises. En un mots, tout entreprise dont l'objectif sera de promouvoir l'économie. De même, notre subvention non remboursable sera à la portée de toute personne âgée, handicapé, malade, sous forme d'une aide sociale.
						</p>

						<p className="text-gray-700 mb-6">
							En effet, si votre vision est de créer une entreprise en suisse ; ou d'augmenter votre chiffre d'affaires en offrant plus de travail aux Suissesses, notre subvention sans remboursement est votre solution. La solution idéale pour financer votre projet.
						</p>

						<h2 className="text-2xl font-semibold text-gray-900 mb-4">Quels sont les motifs pour lesquelles vous pouvez effectuer votre demande de financement non remboursable en suisse ?</h2>

						<p className="text-gray-700 mb-4">
							Elles sont énormes les raisons valables pour lesquelles vous pouvez effectuer votre demande de financement.
						</p>

						<ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
							<li>Premièrement, vous avez un projet. Il ne manque que le capital nécessaire pour débuter et les banques ne sont pas prêtes à investir.</li>
							<li>Deuxièmement, vous êtes endetté. Vous ne disposez plus de solution pour rembourser votre dette.</li>
							<li>Troisièmement, vous êtes une personne âgée. Incapable de faire un job, vous pouvez effectuer une demande de bourse familiale.</li>
							<li>Quatrièmement, vous êtes sans-abri suite à une situation économique ou de force majeure et vous souhaitez construire ou acheter un appartement.</li>
							<li>Cinquièmement, vous êtes malade et dans le besoin de financement pour être traité par un docteur spécialisé</li>
							<li>Sixiemement, vous souhaitez poursuivre vos études etc...</li>
						</ul>

						<p className="text-gray-700 mb-6">
							Enfin, ils existent une multitude de motifs pour lesquels vous pouvez effectuer votre demande d'aide financière. Il suffit juste de vouloir être indépendant pour nous contacté.
						</p>

						<h2 className="text-2xl font-semibold text-bgray-900 mb-4">Comment effectuer une demande de don non remboursable en suisse ?</h2>

						<p className="text-gray-700 mb-4">
							Comme dans la plupart des pays de l'Europe, la demande subvention non remboursable s'effectue en ligne comme de la même façon en Polynésie française.
							Il vous suffit tout simplement de vous rendre sur notre site web : <Link to="/" className="text-gray font-bold hover:underline">
								financement-non-remboursable.fr</Link>. De là ça devient beaucoup plus facile. Vous appuyez simplement sur la case : demandée votre financement ou effectuée votre demande de financement. Par la suite, vous remplissez notre formulaire incorrectement que vous allez nous soumettre en ligne. Eh bien, c'est fini. Votre demande de financement est envoyé. L'équipe disponible en ligne étudiera votre demande et un retour vous sera envoyé par E-mail dans les prochains 72H maximum.
						</p>

						<h2 className="text-2xl font-semibold text-gray mb-4">À quel moment effectué une demande de prêt sans remboursement.</h2>

						<p className="text-gray-700">
							Effectuer votre <Link to="/demandefinance" className="text-gray font-bold hover:underline">demande en ligne</Link> à tout moment, à n'importe quelle heure vous souhaitez. Nous sommes disponibles 24H/24 pour étudier chaque demande, satisfaire les personnes dans le besoin.
						</p>
					</div>
				</div>
			</article>
		</div>
	);
};

export default SubventionSuisse;