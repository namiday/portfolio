import { link } from "fs";

export const navItems = [
  { name: "Présentations", link: "#presentation" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contacts", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "La communication avec le client, une priorité ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Facilement joignable et réactif",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mes domaines de compétences",
    description: "À la recherche de la meilleure solution au meilleur prix",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Un passionné du développement web et embarqué",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Je développe un site pour un Jeu de Rôles interactif",
    description: "Dernière nouvelles",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vous avez un besoin ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MC Peintures",
    des: "Découvrez le formidable univers d'une artiste peintre à travers un site web simple et efficace",
    img: "/s1.png",
    iconLists: ["/re.svg", "/css.svg", "/js.svg"],
    link: "https://mc-peintures.fr",
  },
  {
    id: 2,
    title: "TCE Tout travaux",
    des: "La mise en avant d'un artisan du BTP avec un site web local",
    img: "/s2.png",
    iconLists: ["/next.svg", "/css.svg", "/js.svg"],
    link: "https://tcetouttravaux.vercel.app",
  },
  {
    id: 3,
    title: "Fabio dératiseur",
    des: "Site vitrine pour un professionnel de la dératisation",
    img: "/s3.png",
    iconLists: ["/next.svg", "/css.svg", "/js.svg"],
    link: "https://ecommerce-front-sylvain.vercel.app",
  },
  {
    id: 4,
    title: "Skate E-commerce",
    des: "Une application e-commerce pour la vente de skate et de produits affiliés à cet univers. Paiement stripe, base de données mongodb",
    img: "/s3.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/aws.svg"],
    link: "https://ecommerce-front-sylvain.vercel.app",
  },
  {
    id: 5,
    title: "Skate E-commerce Admin",
    des: "Un site pour gérer son site e-commerce de A à Z. De l'ajout de nouveaux articles jusqu'à la mise en place de promo. j'ai pensé à tous.",
    img: "/s3.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/mongodb.svg", "/aws.svg"],
    link: "https://ecommerce-admin-sylvain.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Ce type me doit 10 balles...",
    name: "Charly B.",
    title: "Meilleur ami",
    image : "avis1.webp"
  },
  {
    quote:
      "Un jour il s'est chié dessus en daily",
    name: "Volo D.",
    title: "Collègue de confiance",
    image : "avis2.webp"
  },
  {
    quote:
      "Si je recroise ce type, je l'en...",
    name: "Adrien T.",
    title: "Client satisfait",
    image : "avis3.webp"
  },
  {
    quote:
      "Je me suis déjà retrouvée seule avec lui dans un ascenceur. Je crois que c'est ça une expérience de mort imminente !",
    name: "Marine R.",
    title: "Collaboratrice ravie",
    image : "avis4.webp"
  },
  {
    quote:
      "De ma vie, je vous jure que ...",
    name: "Maxime R.",
    title: "Formateur",
    image : "avis1.webp"
  },
];

export const companies = [
  {
    id: 1,
    name: "Thales",
    img: "",
    nameImg: "/Thales.svg",
  },
  {
    id: 2,
    name: "Nokia",
    nameImg: "/Nokia.svg",
  },
  {
    id: 3,
    name: "Nexter",
    nameImg: "/Nexter.svg",
  },
  {
    id: 4,
    name: "UMS",
    nameImg: "/UMS.svg",
  },
];

export const workExperience = [
  {
    id: 1,
  title: "Apprenti ingénieur en embarqué",
    desc: "Développement d'application mobile pour des laborantins dans le milieu des semi-conducteurs",
    className: "md:col-span-2",
    thumbnail: "/expe1.svg",
  },
  {
    id: 2,
    title: "Ingénieur en développement R&D Nokia",
    desc: "Développement de feature pour la 5G en C++ ",
    className: "md:col-span-2",
    thumbnail: "/expe2.svg",
  },
  {
    id: 3,
    title: "Ingénieur prestataire dans la défense",
    desc: "Apport de soutien au développement pour des clients dans la défense en ADA, C++, C, python",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/expe4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/namiday/"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/alexandre-collot-3bb959117/"
  }
];
