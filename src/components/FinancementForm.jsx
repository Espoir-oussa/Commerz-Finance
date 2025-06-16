import React from 'react';

const FinancementForm = () => {
  const ages = Array.from({ length: 78 }, (_, i) => i + 18);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center text-sm" action="#" method="POST">
      <form className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md space-y-5 rounded-2xl border-8 border-yellow-100">
        <h2 className="text-center font-bold text-gray-900 mb-6 uppercase text-lg px-auto pt-5 pb-5">
          Formulaire de Demande de Financement Non Remboursable
        </h2>

        {/* Civilité */}
        <div>
          <label className="block text-sm font-medium">Civilité *</label>
          <select required className="w-full mt-1 border rounded px-3 py-2">
            <option value="">- Sélectionné -</option>
            <option value="Monsieur">Monsieur</option>
            <option value="Madame">Madame</option>
          </select>
        </div>

        {/* Nom et Prénom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nom *</label>
            <input type="text" placeholder="Votre Nom" required className="w-full mt-1 border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Prénom(s) *</label>
            <input type="text" placeholder="Vos prénoms" required className="w-full mt-1 border rounded px-3 py-2" />
          </div>
        </div>

        {/* Âge */}
        <div>
          <label className="block text-sm font-medium">Quel est votre âge ? *</label>
          <select required className="w-full mt-1 border rounded px-3 py-2">
            <option value="">- Sélectionnez votre âge -</option>
            {ages.map(age => (
              <option key={age} value={age}>{age} ans</option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email *</label>
          <input
            type="email"
            placeholder="Email"
            required
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* Pays */}
        <div>
          <label className="block text-sm font-medium">Pays *</label>
          <select required className="w-full mt-1 border rounded px-3 py-2">
            <option value="">Sélectionner le pays</option>
            <option>France</option>
            <option>Canada</option>
            <option>Bénin</option>
            <option>Côte d'Ivoire</option>
            <option>Autre</option>
          </select>
        </div>

        {/* Numéro de téléphone */}
        <div>
          <label className="block text-sm font-medium">Numéro de téléphone *</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Ex : 0100000000"
            required
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        {/* Montant du financement */}
        <div>
          <label className="block text-sm font-medium">Montant du financement *</label>
          <input type="number" placeholder="Ex : 20000" required className="w-full mt-1 border rounded px-3 py-2" />
        </div>

        {/* Devis */}
        <div>
          <label className="block text-sm font-medium">Devis *</label>
          <select required className="w-full mt-1 border rounded px-3 py-2">
            <option value="">- Sélectionné -</option>
            <option value="EUR">Euro (€)</option>
            <option value="USD">Dollar ($)</option>
            <option value="XPF">XPF</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        {/* Type de financement */}
        <div>
          <label className="block text-sm font-medium">Type de financement *</label>
          <select required className="w-full mt-1 border rounded px-3 py-2">
            <option value="">- Sélectionné -</option>
            <option>Financement non remboursable</option>
            <option>Bourse familiale</option>
            <option>Financement non remboursable en Europe</option>
            <option>Financement non remboursable au Canada</option>
          </select>
        </div>

        {/* Motif */}
        <div>
          <label className="block text-sm font-medium">Motif de votre demande de financement *</label>
          <textarea
            required
            placeholder="Veuillez détailler proprement ici les raisons..."
            className="w-full mt-1 border rounded px-3 py-2 resize-none"
            rows="4"
          ></textarea>
        </div>

        {/* Consentement */}
        <div className="flex items-start gap-2">
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm">
            Je suis conscient(e) qu’il y a des formalités légales à remplir, des documents à fournir lorsque ma demande de financement sera acceptée avant l’obtention du financement non remboursable.
          </p>
        </div>

        {/* Bouton */}
        <div>
          <button type="submit" className="w-full bg-yellow-500 hover:bg-gray-900 text-white py-2 rounded hover:bg-blue-700">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinancementForm;