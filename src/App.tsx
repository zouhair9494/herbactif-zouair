import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

type Category = "visage" | "corps" | "cheveux";

type Product = {
  name: string;
  price: string;
  description: string;
  image: string;
  category: Category;
};

const whatsappNumber = "+212612345678";
const instagramUrl = "https://www.instagram.com/herbactif";

const products: Product[] = [
  {
    name: "Serum Botanique Eclat",
    price: "249 DH",
    description: "Figue de barbarie, vitamine E et rose de Damas pour nourrir la peau en profondeur.",
    image:
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1100&q=80",
    category: "visage",
  },
  {
    name: "Creme Aloe Calme",
    price: "189 DH",
    description: "Aloe vera et camomille pour apaiser les peaux sensibles et reduire les tiraillements.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=80",
    category: "visage",
  },
  {
    name: "Savon Argan Pur",
    price: "89 DH",
    description: "Savon artisanal sans sulfate enrichi en huile d'argan et extraits de plantes douces.",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1100&q=80",
    category: "corps",
  },
  {
    name: "Huile Capillaire Nectar",
    price: "159 DH",
    description: "Ricin, nigelle et romarin pour fortifier les longueurs et renforcer la brillance.",
    image:
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=1100&q=80",
    category: "cheveux",
  },
  {
    name: "Masque Detox Vert",
    price: "139 DH",
    description: "Argile verte et moringa pour purifier sans agresser la peau.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=80",
    category: "visage",
  },
  {
    name: "Lait Corps Amande",
    price: "129 DH",
    description: "Hydratation legere a l'huile d'amande douce et beurre de karite.",
    image:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=1100&q=80",
    category: "corps",
  },
];

const categoryLabels: Record<"all" | Category, string> = {
  all: "Tout",
  visage: "Visage",
  corps: "Corps",
  cheveux: "Cheveux",
};

const ingredientLoop = [
  "Huile de figue",
  "Aloe vera",
  "Argan brut",
  "Moringa",
  "Camomille",
  "Karite",
  "Ricin",
  "Rose de Damas",
];

const createWhatsappLink = (message: string) => {
  return `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<"all" | Category>("all");
  const [skinNeed, setSkinNeed] = useState("eclat");
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.08]);

  const visibleProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const routineMessage = useMemo(() => {
    const map: Record<string, string> = {
      eclat: "Salam Herbactif, bghit routine pour eclat naturel dyal l visage.",
      hydration: "Salam Herbactif, bghit routine hydration profonde pour peau seche.",
      imperfections: "Salam Herbactif, bghit routine contre imperfections et pores visibles.",
      cheveux: "Salam Herbactif, bghit routine naturelle pour cheveux faibles ou secs.",
    };
    return map[skinNeed];
  }, [skinNeed]);

  return (
    <main className="bg-[#f3f1ea] text-[#183025]">
      <section className="relative min-h-screen overflow-hidden">
        <motion.img
          style={{ scale: heroScale }}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=2000&q=80"
          alt="Univers naturel Herbactif"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b13]/90 via-[#12271b]/70 to-[#193427]/50" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 md:px-10">
          <div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-xs tracking-[0.34em] text-emerald-100"
            >
              HERBACTIF COSMETIQUE NATURELLE
            </motion.p>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-5 max-w-3xl text-5xl leading-[1.03] font-semibold text-white md:text-7xl"
            >
              Herbactif
              <br />
              Nature pure. Peau vivante.
            </motion.h1>
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-emerald-50/95 md:text-lg"
            >
              Une gamme premium d'origine naturelle pour visage, corps et cheveux. Commande simple,
              rapide et confirmee directement sur WhatsApp.
            </motion.p>
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#produits"
                className="inline-flex items-center justify-center bg-emerald-300 px-7 py-3 text-sm font-semibold text-[#163124] transition hover:bg-emerald-200"
              >
                Explorer la collection
              </a>
              <a
                href={createWhatsappLink(
                  "Salam Herbactif, bghit n3ref les produits disponibles o tariqat commande WhatsApp.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Commander sur WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#d8ddcf] bg-[#f8f7f2] py-4">
        <motion.div
          animate={{ x: [0, -900] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex w-max gap-10 text-sm tracking-[0.16em] whitespace-nowrap text-[#284637]"
        >
          {[...ingredientLoop, ...ingredientLoop, ...ingredientLoop].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className="text-3xl font-semibold md:text-5xl">Des formules propres, un effet visible</h2>
        <p className="mt-4 max-w-3xl text-[#385747]">
          Herbactif selectionne des actifs vegetaux traces, evite les composants agressifs et garde des
          textures fines pour une routine agreable au quotidien.
        </p>
        <div className="mt-10 grid gap-8 border-t border-[#d8ddcf] pt-8 md:grid-cols-3">
          <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <p className="text-sm font-semibold tracking-[0.15em] text-[#2f4f40]">01</p>
            <h3 className="mt-3 text-xl font-semibold">Origine controlee</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#385747]">
              Ingredients identifies et selectionnes pour leur purete.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <p className="text-sm font-semibold tracking-[0.15em] text-[#2f4f40]">02</p>
            <h3 className="mt-3 text-xl font-semibold">Sans compromis</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#385747]">
              Sans sulfate agressif, sans surcharge, uniquement le necessaire.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
            <p className="text-sm font-semibold tracking-[0.15em] text-[#2f4f40]">03</p>
            <h3 className="mt-3 text-xl font-semibold">Commande instantanee</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#385747]">
              Votre demande part direct sur WhatsApp avec le produit choisi.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="produits" className="bg-[#eaf0e4] py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">Collection Herbactif</h2>
              <p className="mt-3 max-w-2xl text-[#385747]">
                Choisissez votre categorie puis envoyez la commande en un clic vers WhatsApp.
              </p>
            </div>
            <div className="flex gap-2">
              {(Object.keys(categoryLabels) as Array<"all" | Category>).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-[#1f5a37] text-white"
                      : "bg-white text-[#1f5a37] hover:bg-[#dce8d1]"
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence>
              {visibleProducts.map((product) => (
                <motion.article
                  key={product.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden bg-white"
                >
                  <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
                  <div className="space-y-4 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-lg font-semibold text-[#1f5a37]">{product.price}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-[#385747]">{product.description}</p>
                    <a
                      href={createWhatsappLink(
                        `Salam Herbactif, bghit ncommander ${product.name}. Momkin details 3la livraison?`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center bg-[#1f5a37] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#164229]"
                    >
                      Commander sur WhatsApp
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:px-10">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=1400&q=80"
          alt="Routine soins naturels"
          className="h-[420px] w-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f5f7f1] p-6"
        >
          <h2 className="text-3xl font-semibold">Diagnostic express</h2>
          <p className="mt-3 text-[#385747]">
            Choisissez votre besoin principal et ouvrez un message WhatsApp deja prepare.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <button
              onClick={() => setSkinNeed("eclat")}
              className={`px-4 py-3 text-left text-sm transition ${
                skinNeed === "eclat" ? "bg-[#1f5a37] text-white" : "bg-white text-[#1f5a37]"
              }`}
            >
              Eclat naturel
            </button>
            <button
              onClick={() => setSkinNeed("hydration")}
              className={`px-4 py-3 text-left text-sm transition ${
                skinNeed === "hydration" ? "bg-[#1f5a37] text-white" : "bg-white text-[#1f5a37]"
              }`}
            >
              Hydration profonde
            </button>
            <button
              onClick={() => setSkinNeed("imperfections")}
              className={`px-4 py-3 text-left text-sm transition ${
                skinNeed === "imperfections" ? "bg-[#1f5a37] text-white" : "bg-white text-[#1f5a37]"
              }`}
            >
              Imperfections
            </button>
            <button
              onClick={() => setSkinNeed("cheveux")}
              className={`px-4 py-3 text-left text-sm transition ${
                skinNeed === "cheveux" ? "bg-[#1f5a37] text-white" : "bg-white text-[#1f5a37]"
              }`}
            >
              Cheveux fatigues
            </button>
          </div>
          <a
            href={createWhatsappLink(routineMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center bg-[#1f5a37] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#164229]"
          >
            Recevoir ma routine sur WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-[#d8ddcf] px-6 py-8 text-sm text-[#385747] md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold tracking-[0.18em] text-[#183025]">HERBACTIF</p>
          <div className="flex flex-col gap-2 text-left md:items-end">
            <p>Commande officielle via WhatsApp: {whatsappNumber}</p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#1f5a37] underline-offset-4 transition hover:underline"
            >
              Instagram: @herbactif
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
