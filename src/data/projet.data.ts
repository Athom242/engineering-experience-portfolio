import { type Projet } from "../types/projet.types";

export const projectsData: Projet[] = [
  {
    id: "01",
    slug: "robotic-arm-6axis",
    titre: "6-Axis Robotic Arm System",
    description: "Design and simulation of a 6-axis electromechanical robotic arm for industrial applications.",
    technologies: ["SolidWorks", "MATLAB", "Arduino", "C++"],
    stackPrincipale: ["Electromechanics", "Automation"],
    statut: "Terminé",
    categorie: "Robotics",
    featured: true,
    tags: ["robotics", "control", "mechanics"]
  },
  {
    id: "02",
    slug: "iot-smart-factory",
    titre: "Smart Factory IoT System",
    description: "IoT-based monitoring system for industrial production lines.",
    technologies: ["Node.js", "MQTT", "React", "MongoDB"],
    stackPrincipale: ["IoT", "Full Stack"],
    statut: "En cours",
    categorie: "Automation",
    tags: ["iot", "industry", "sensors"]
  },
  {
    id: "03",
    slug: "energy-simulation-model",
    titre: "Energy Consumption Simulation",
    description: "Simulation model for electrical energy consumption in industrial systems.",
    technologies: ["Python", "MATLAB"],
    stackPrincipale: ["Data", "Energy Systems"],
    statut: "Terminé"
  },
  {
    id: "04",
    slug: "ecommerce-platform-mewa",
    titre: "MEWA E-commerce Platform",
    description: "Custom e-commerce platform with modular architecture and scalability.",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    stackPrincipale: ["Full Stack"],
    statut: "En cours",
    featured: true
  },
  {
    id: "05",
    slug: "ai-predictive-maintenance",
    titre: "Predictive Maintenance AI System",
    description: "AI system for predicting machine failures in industrial environments.",
    technologies: ["Python", "TensorFlow", "Pandas"],
    stackPrincipale: ["AI", "Data"],
    statut: "En cours"
  },
  {
    id: "06",
    slug: "3d-factory-simulation",
    titre: "3D Factory Simulation",
    description: "3D industrial factory simulation for production flow optimization.",
    technologies: ["Blender", "Unity", "C#"],
    stackPrincipale: ["3D Design"],
    statut: "Terminé"
  },
  {
    id: "07",
    slug: "autonomous-drone-system",
    titre: "Autonomous Drone Navigation",
    description: "Control system for autonomous navigation of drones.",
    technologies: ["C++", "ROS", "Python"],
    stackPrincipale: ["Robotics"],
    statut: "En cours"
  },
  {
    id: "08",
    slug: "portfolio-engineering-v1",
    titre: "Engineering Portfolio v1",
    description: "First version of personal engineering portfolio system.",
    technologies: ["React", "SCSS", "TypeScript"],
    stackPrincipale: ["Frontend"],
    statut: "Terminé"
  },
  {
    id: "09",
    slug: "industrial-automation-plc",
    titre: "PLC Industrial Automation System",
    description: "Automation system using PLC for industrial processes.",
    technologies: ["Siemens PLC", "Ladder Logic"],
    stackPrincipale: ["Automation"],
    statut: "Terminé"
  },
  {
    id: "10",
    slug: "real-time-data-dashboard",
    titre: "Real-time Data Dashboard",
    description: "Dashboard for real-time monitoring of industrial metrics.",
    technologies: ["React", "D3.js", "WebSocket"],
    stackPrincipale: ["Data Visualization"],
    statut: "En cours",
    featured: true
  },

  /* ===== 15 PROJETS SUPPLÉMENTAIRES ===== */

  {
    id: "11",
    slug: "smart-home-system",
    titre: "Smart Home Automation System",
    description: "Home automation system with IoT integration.",
    technologies: ["Arduino", "Node.js"],
    stackPrincipale: ["IoT"],
    statut: "Terminé"
  },
  {
    id: "12",
    slug: "cv-parser-ai",
    titre: "AI CV Parser",
    description: "AI system to extract structured data from CVs.",
    technologies: ["Python", "NLP"],
    stackPrincipale: ["AI"],
    statut: "En cours"
  },
  {
    id: "13",
    slug: "electric-car-modeling",
    titre: "Electric Vehicle Modeling",
    description: "Simulation of electric vehicle energy consumption.",
    technologies: ["MATLAB", "Simulink"],
    stackPrincipale: ["Energy"],
    statut: "Terminé"
  },
  {
    id: "14",
    slug: "3d-product-advertising",
    titre: "3D Product Advertising",
    description: "3D animations for marketing and advertising products.",
    technologies: ["Blender", "After Effects"],
    stackPrincipale: ["3D", "Animation"],
    statut: "Terminé"
  },
  {
    id: "15",
    slug: "chatbot-assistant-engineering",
    titre: "Engineering Chatbot Assistant",
    description: "AI chatbot for engineering documentation support.",
    technologies: ["OpenAI API", "Node.js"],
    stackPrincipale: ["AI", "Backend"],
    statut: "En cours"
  },
  {
    id: "16",
    slug: "industrial-vision-system",
    titre: "Computer Vision Quality System",
    description: "Vision system for industrial quality inspection.",
    technologies: ["OpenCV", "Python"],
    stackPrincipale: ["AI", "Vision"],
    statut: "Terminé"
  },
  {
    id: "17",
    slug: "portfolio-v2-system",
    titre: "Portfolio System Architecture v2",
    description: "Second generation of scalable portfolio architecture.",
    technologies: ["React", "TypeScript"],
    stackPrincipale: ["Frontend"],
    statut: "En cours"
  },
  {
    id: "18",
    slug: "hydraulic-system-simulation",
    titre: "Hydraulic System Simulation",
    description: "Simulation of hydraulic actuators in mechanical systems.",
    technologies: ["MATLAB"],
    stackPrincipale: ["Mechanics"],
    statut: "Terminé"
  },
  {
    id: "19",
    slug: "logistics-optimization-ai",
    titre: "Logistics Optimization AI",
    description: "AI system for optimizing logistics routes.",
    technologies: ["Python", "Optimization"],
    stackPrincipale: ["AI", "Data"],
    statut: "En cours"
  },
  {
    id: "20",
    slug: "industrial-dashboard-ui",
    titre: "Industrial UI Dashboard",
    description: "UI system for industrial monitoring platforms.",
    technologies: ["React", "Tailwind"],
    stackPrincipale: ["Frontend"],
    statut: "Terminé"
  },

  /* ===== 5 BONUS ===== */

  {
    id: "21",
    slug: "energy-grid-analysis",
    titre: "Energy Grid Analysis System",
    description: "Analysis of electrical grid stability and optimization.",
    technologies: ["Python"],
    stackPrincipale: ["Energy"],
    statut: "En cours"
  },
  {
    id: "22",
    slug: "motion-design-ads",
    titre: "Motion Design Advertising System",
    description: "Motion graphics system for advertising campaigns.",
    technologies: ["After Effects", "Blender"],
    stackPrincipale: ["Design"],
    statut: "Terminé"
  },
  {
    id: "23",
    slug: "industrial-security-system",
    titre: "Industrial Security Monitoring",
    description: "Security monitoring system for industrial environments.",
    technologies: ["IoT", "C++"],
    stackPrincipale: ["Automation"],
    statut: "En cours"
  },
  {
    id: "24",
    slug: "data-analysis-platform",
    titre: "Data Analysis Platform",
    description: "Platform for analyzing large-scale industrial datasets.",
    technologies: ["Python", "Pandas"],
    stackPrincipale: ["Data"],
    statut: "Terminé"
  },
  {
    id: "25",
    slug: "ai-robot-navigation",
    titre: "AI Robot Navigation System",
    description: "Autonomous navigation system for mobile robots.",
    technologies: ["ROS", "Python"],
    stackPrincipale: ["Robotics"],
    statut: "En cours"
  }
];

export default projectsData;