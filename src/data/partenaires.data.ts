import { type Partenaire } from "../types/partenaires.types";

const items: Partenaire[] = [
  // 🟡 FORMATION & UNIVERSITÉS
  {
    id: "1",
    name: "École Supérieure Polytechnique de Dakar (ESP)",
    logo: "/assets/esp.png",
    link: "https://www.esp.sn/",
    type: "Université",
    specialite: "Ingénierie & innovation"
  },
  {
    id: "2",
    name: "Université Cheikh Anta Diop de Dakar (UCAD)",
    logo: "/assets/ucad.png",
    link: "https://www.ucad.sn/",
    type: "Université",
    specialite: "Recherche & sciences"
  },

  // 🟢 INNOVATION & FABLAB
  {
    id: "3",
    name: "FabLab ESP Dakar",
    logo: "/assets/fablab.png",
    link: "#",
    type: "Organisation",
    specialite: "Prototypage & fabrication numérique"
  },
  {
    id: "4",
    name: "Yekolab",
    logo: "/assets/yekolab.png",
    link: "#",
    type: "Organisation",
    specialite: "Formation tech & innovation"
  },

  // 🔵 ENTREPRISES TECH / SOFTWARE
  {
    id: "5",
    name: "Orange Digital Center",
    logo: "/assets/odc.png",
    link: "https://odc-dz.com/",
    type: "Entreprise",
    specialite: "Développement & innovation digitale"
  },
  {
    id: "6",
    name: "Sonatel Group",
    logo: "/assets/sonatel.png",
    link: "https://www.sonatel.sn/",
    type: "Entreprise",
    specialite: "Télécommunications & digital"
  },
  {
    id: "7",
    name: "GitHub",
    logo: "/assets/github.png",
    link: "https://github.com/",
    type: "Entreprise",
    specialite: "Développement logiciel & open source"
  },

  // ⚙️ INDUSTRIE / AUTOMATISME / ÉNERGIE
  {
    id: "8",
    name: "Siemens Industry",
    logo: "/assets/siemens.png",
    link: "https://www.siemens.com/",
    type: "Entreprise",
    specialite: "Automatisme industriel"
  },
  {
    id: "9",
    name: "Schneider Electric",
    logo: "/assets/schneider.png",
    link: "https://www.se.com/",
    type: "Entreprise",
    specialite: "Énergie & systèmes électriques"
  },
  {
    id: "10",
    name: "Bosch Rexroth",
    logo: "/assets/bosch.png",
    link: "https://www.boschrexroth.com/",
    type: "Entreprise",
    specialite: "Robotique & hydraulique industrielle"
  },

  // 🤖 ROBOTIQUE / IA / HARDWARE
  {
    id: "11",
    name: "Arduino",
    logo: "/assets/arduino.png",
    link: "https://www.arduino.cc/",
    type: "Organisation",
    specialite: "Électronique embarquée"
  },
  {
    id: "12",
    name: "Raspberry Pi Foundation",
    logo: "/assets/raspberry.png",
    link: "https://www.raspberrypi.org/",
    type: "Organisation",
    specialite: "Systèmes embarqués & éducation"
  },
  {
    id: "13",
    name: "NVIDIA Developer",
    logo: "/assets/nvidia.png",
    link: "https://developer.nvidia.com/",
    type: "Entreprise",
    specialite: "IA, GPU & robotique intelligente"
  },

  // 🌍 OPEN SOURCE & LEARNING
  {
    id: "14",
    name: "Google Developer Groups (GDG)",
    logo: "/assets/gdg.png",
    link: "https://developers.google.com/community/gdg",
    type: "Organisation",
    specialite: "Communauté développeurs"
  },
  {
    id: "15",
    name: "Microsoft Learn",
    logo: "/assets/microsoft.png",
    link: "https://learn.microsoft.com/",
    type: "Entreprise",
    specialite: "Formation cloud & dev"
  }
];

export const listPartenaires = {
  items,
  totalItems: items.length
};