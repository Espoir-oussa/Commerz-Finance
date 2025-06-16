import React, { useState } from 'react';
import logo from "/assets/logo.png";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.nom.trim() || formData.nom.trim().length < 3) {
      errs.nom = 'Nom trop court (min 3 lettres)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errs.email = 'Adresse email invalide';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message trop court (min 10 caractères)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulaire soumis :', formData);
      alert('Message envoyé avec succès !');
      // Reset
      setFormData({ nom: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-white px-4 py-7 ">
      <div className='text-center py-5'>
        <h1 className='text-4xl font-bold text-gray-900'>Contactez-nous</h1>
      </div>
      <div className='flex  items-center justify-center py-10'>
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2 border-4 border-gray-300 animate-float">

        {/* Image */}
        <div className="hidden md:flex justify-center items-center bg-gray-100">
          <img
            src={logo}
            alt="Illustration"
            className="object-cover w-[50%]"
          />
          
        </div>

        {/* Formulaire */}
        <div className="p-6 sm:p-8 md:-12  text-black">
          <p className="text-sm text-black text-center mb-4">
            Merci d’avoir visité <strong className="text-black">Financement Non Remboursable</strong>.
            Contactez-nous 7j/7, même en période de{' '}
            <a href="https://www.info.gouv.fr/alerte/covid-19" className="text-black underline">Covid-19</a>.
          </p>

          <div className="text-center text-sm mb-4">
            <p><strong>Email :</strong> <a href="mailto:info@financement-non-remboursable.fr" className=" hover:text-yellow-500">info@financement-non-remboursable.fr</a></p>
            <p><strong>Tél :</strong> <a href="tel:+33751437627" className="hover:text-yellow-500">+33 751 437 627</a></p>
            <p className="font-semibold mt-2">
              1-2 Place de la Mairie<br />
              23300 Saint-Maurice-la-Souterraine, France
            </p>
          </div>

          <p className="text-xs text-gray-500 mb-5">
            Remplissez tous les champs pour une réponse rapide sur les <a href="/" className="hover:text-yellow-500 underline">aides non remboursables</a>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block font-medium mb-1">Nom complet <span className="text-red-500">*</span></label>
              <input
                name="nom"
                type="text"
                placeholder="Nom et prénom"
                value={formData.nom}
                onChange={handleChange}
                className={`w-full border ${errors.nom ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                required
              />
              {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Email <span className="text-red-500">*</span></label>
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-medium mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                name="message"
                rows="4"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none`}
                required
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition duration-200 ease-in-out"
            >
              Envoyer
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
