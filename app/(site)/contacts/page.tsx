import ContactForm from "@/components/contact/ContactForm";

export default function ContactsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-16">
        <span className="text-[#968370] uppercase tracking-widest text-xs font-bold">
          Nous écrire
        </span>
        <h1 className="text-5xl font-serif text-stone-900 mt-2">Contact</h1>
        <div className="h-1 w-20 bg-[#968370] mt-6"></div>
      </header>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Informations */}
        <div className="space-y-10 text-stone-700">
          <div>
            <h2 className="font-serif text-xl text-stone-900 mb-3">Adresse</h2>
            <p>4 Rue du Secadou, Le Château</p>
            <p>34360 Pardailhan</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-stone-900 mb-3">Email</h2>
            <a
              href="mailto:association.pardailhan@orange.fr"
              className="text-[#968370] hover:text-stone-900 transition-colors"
            >
              association.pardailhan@orange.fr
            </a>
          </div>

          <div>
            <h2 className="font-serif text-xl text-stone-900 mb-3">
              Réseaux sociaux
            </h2>
            <span className="flex items-center gap-3 text-stone-400 italic text-sm">
              <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs">
                fb
              </span>
              Page Facebook à venir
            </span>
          </div>
        </div>

        {/* Formulaire */}
        <ContactForm />
      </div>
    </main>
  );
}
