import React from 'react'
import FinancementForm from '../components/FinancementForm';
import { Link } from 'react-router-dom';

export const Demandefinance = () => {
  return (
    <div>
       <section className=" bg-gradient-to-r from-gray-700 to-gray-900 py-10 md:pt-15 md:py-20 text-white">
        
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-3xl font-bold mb-6 text-yellow-500 px-5 pt-5">Formulaire de demande de financement non renouvelable </h1>
                    <p className="text-lg mb-8 max-w-2xl mx-auto font-medium">
                        Faites dès à présent votre demande de Financement non renouvelable
                    </p>
                </div>
                <div className='px-6 text-center'>
                    <p className='text-sm italic'>NB: Une <Link to="/" className='text-yellow-500 hover:text-white'>aide non remboursable </Link> peut être accordée, allant de 1000€ jusqu’à 5 000 000 euros. Ceci sous forme d’une donation 
                        provenant du budget du FMI. Par conséquent, en cas de difficultés financières et sociales temporaires, il est possible 
                        d’obtenir, suite à une analyse de votre situation, un soutien exceptionnel non</p>
                </div>
          
            </section>
            <FinancementForm/>
    </div>
  )
}
