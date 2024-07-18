import bank1 from '../assets/projects/bank4to.1.jpg'
import tonyskinal1 from '../assets/projects/tonys1.jpg'
import dress2 from '../assets/projects/dress2.jpg'
import website1 from '../assets/projects/website1.jpg'
import agendaweb2 from '../assets/projects/agendaweb2.jpg'
import gestorcomercial from '../assets/projects/gestorcomercial.jpg'
import task1 from '../assets/projects/task1.jpg'
import cashflow from '../assets/projects/cashflow.jpg'

import progra1 from "../assets/Progra1.jpg"
import progra2 from "../assets/Progra2.jpg"
import red1 from "../assets/red1.jpg"
import study1 from "../assets/study1.jpg"

export const HERO_CONTENT = `Welcome! This space is dedicated to share with you my career in software development. Here you can explore my educational and professional projects, learn details about the technologies and languages I use, as well as find my contact information. Each project has its own section where I detail its development and you can access directly to its GitHub repository for more details. `;

export const ABOUT_TEXT = `
I am a student of Computer Science with a clear focus on software development. I am intensely dedicated to continuously improve and work hard to achieve positive changes for both society and my own growth, through the technology I develop.

I have acquired skills in several languages and technologies such as JavaScript, React.js, Node.js, MongoDB, MySQL, HTML, CSS, Git, and Java. In addition, I have participated in collaborative projects assuming leadership roles in development teams. I possess a high level of English in both written and conversational skills, which allows me to communicate effectively and participate in influential discussions.

My interests span technology, academic studies and sports. Currently, my focus is on developing artificial intelligence applied to mobile and web applications. One of my goals is to integrate my experience in sports with the development of technology that benefits athletes.
`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "6to. Perito en Informática ",
    company: "-  Centro Educativo Técnico Laboral Kinal",
    description: `During my last year of my degree, I have specialized deeply in web development, exploring both Backend and Frontend areas.

    In Backend, I have mastered the use of the Node.js runtime environment and the Express.js framework for routing, as well as the use of the MongoDB database manager in NoSQL environments. All this I have carried out using JavaScript, developing robust functional APIs.

    On the Frontend, I have acquired advanced skills with the React.js framework, creating attractive and adaptive user interfaces. I have implemented reusable components, integrated the developed APIs and designed flexible layouts that fit perfectly to different screen sizes and mobile devices.

    In addition, I have learned the basics of mobile development with Ionic, given a project proposal developed in teamwork. As a team leader in projects with SCRUM methodology I have acquired skills of resilience, constancy, diligence and organization that have helped me to be a pragmatic developer.
    `,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB", "Node.js"],
    image: progra1,

  },
  {
    year: "2023 - 2024",
    role: "5to. Perito en Informática",
    company: "- Centro Educativo Técnico Laboral Kinal",
    description: `During this cycle of my career, I have acquired knowledge and experience in the management of relational databases through the use of SQL and the MySQL manager. This learning has been fundamental, as it has allowed me to master the necessary programming logic to advance to the next stage.

    In this next stage, I have focused on the use of JavaFX to develop enterprise applications with Java Enterprise Edition. I used MySQL for data management, Scene Builder for interfaces and iReport for all billing. This year of studies has also given me a deep understanding of the MVC design pattern and the organization of work through the SCRUM methodology.
    `,
    technologies: ["Java EE", "Java", "Scene Builder", "mySQL", "iReport", "JavaFX", "MVC Design"],
    image: progra2
  },
  {
    year: "2022 - 2023",
    role: "4to. Perito en Informática",
    company: "- Centro Educativo Técnico Laboral Kinal",
    description: `In this school year, I acquired and put into practice IT Essentials concepts through the CCNA Essentials course, which focuses on the basic configuration of computer networks. In addition, I had an introduction to the world of programming with the Java language, developing in the Java SE (Standard Edition) version using tools such as NetBeans IDE and Java Swing components.

    Parallel to my training at Kinal, I completed my English studies and graduated in advanced level at the Escuela Municipal de Idiomas (EMI). In this academy, I acquired fluency, knowledge and understanding of the language, which allowed me to successfully pass several job interviews for call centers.
    `,
    technologies: ["English Language", "CCNA", "Networking", "Java", "Java SE"],
    image: red1
  },
  {
    year: "2019 - 2021",
    role: "Educación Básica",
    company: "Liceo Compu-Market",
    description: `In my basic studies I developed as an outstanding student in several extracurricular areas such as public speaking, art and sports. Most valuable in terms of knowledge was my brief introduction to programming and computer science, and my English language studies.`,
    technologies: ["English Language", "Computing concepts."],
    image: study1
  },
];

export const PROJECTS = [
  {
    title: "Bank in Java Swing",
    description:
      `Este es un proyecto en el cual se implementa sobre todo el lenguaje de Java, con el uso de JavaSwing se implementa las interfaces de la aplicacion. Esta aplicación trata de un sistema bancario para realizar transacciones y realizar todo tipo de actividad administrativa tanto del lado del cliente como del lado del admin.`,
    technologies: ["Java", "JavaSe", "JavaSwing", "MyQL", "SQL"],
    image: bank1,
    link: 'https://github.com/fpaiz-2022134/Banco4to.git'
  },
  {
    title: "Tonys Kinal",
    image: tonyskinal1,
    description:
      `Proyecto de un restaurante que ofrece servicios de comida en el cual se puede trabajar solamente como modo administrador. Este administrador puede agregar empleados, platillos, servicios, etc. Y agregar los datos de la empresa a quien se le dará el servicio, de esta manera se puede generar al finalizar el programa una factura personalizada con todos los datos recopilados.`,
    technologies: ["Java", "JavaEE", "JavaFX", "MySQL", "Scene Builder", "iReport"],
    link: 'https://github.com/fpaiz-2022134/TonysKinal.git'
  },
  {
    title: "DressCode",
    image: dress2,
    description:
      `Proyecto realizado con Java e implementado como aplicación web. Este proyecto se trata de una tienda de ropa online en la cual cuenta con funciones de carrito de compras para cliente y de gestión para administrador. Genera de manera automática una factura al realizar las compras. Dresscode fue desarrollado grupalmente con la metodología SCRUM, teniendo cada uno de los integrantes roles importantes de codificación.`,
    technologies: ["Java", "JavaEE", "JavaFX", "XML", "MySQL"],
    link: 'https://github.com/bjulian-2022033/DressCode.git'
  },
  {
    title: "Responsive Website",
    image: website1,
    description:
      `Sitio web de diseño front-end responsive el cúal contiene distintos segmentos. En el primero se encuentra una descripción de mis hobbies o hobbie favorito que en este caso es la calistenia. Segundo, página sobre mi persona incluyendo autobiografía. Y, por último, remodelación de la página principal de Fundación Kinal, desarrollado por mí. Para observar la página haz doble click en el documento index.html.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/fpaiz-2022134_kinal_edu_gt/ES6G-qQvp7JMsiWsB4_LLYwBpAfR8kv94THB3-CXZ3Q9Cg?e=RBW0BJ'
  },
  {
    title: "ToDo List ",
    image: agendaweb2,
    description:
      `
      Programa el cuál contiene un inicio de sesión de diseño frontend responsivo, integrando tarjetas de información de contactos que al hacer click los llevará a su información personal. Y por último y principalmente un To Do List que es un creador de tareas el cual permité ver, almacenar, agregar, editar y eliminar las tareas que desees.
      `,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/fpaiz-2022134_kinal_edu_gt/EauXnnMTSjVOprIX8MCb_yIB30x5X_GOz-sEWTExuHYQEw?e=eiyATx'
  },
  {
    title: "Comercial Management API ",
    image: gestorcomercial,
    description:
      `
      El proyecto es un API cuya idea principal es una lógica de BackEnd para el desarrollo de una tienda online o supermercado. El programa permite al administrador crear productos, gestionar facturas, gestionar categorías de productos y agregar productos. Al cliente, le permite registrarse e iniciar sesión, tener un carrito de compras, agregar productos, realizar la compra, generar una factura automáticamente, ver su historial de compras y facturas, y finalmente, imprimir la factura de su compra en formato PDF.
      `,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    lik: 'https://github.com/fpaiz-2022134/ProyectoBimestral.git'
  },

  {
    title: "Local Storage (ToDo) ",
    image: task1,
    description:
      `
      Aplicación web desarrollada con React JS como Frontend y Node JS como Backend, adicional a la conexión a base de datos no relacional en MongoDB. Consiste en un programa de tipo To Do List en el cuál permite crear. editar, observar y eliminar tareas con datos del creador de la tarea como nombre y apellido, datos de la tarea que contiene título, descripción, fecha de inicio, fecha final. Además permite indicar si la tarea ha sido o no realizada.
      `,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    link: 'https://github.com/fpaiz-2022134/KinalTec.git'
  },
  {
    title: "Olasis Hotel Management ",
    image: task1,
    description:
      `
      Se tratá de un Gestor de Hoteles y funcionalmente como un sitio con similitud a la aplicación de Trivago. Permite agregar, crear, editar, gestionar y eliminar hoteles, categorías, servicios, etc. También, como usuario puede realizar tanto reservaciones para habitaciones o planificación de eventos utilizando el hotel. Este proyecto fue realizado de manera grupal en el que yo lideré los procesos.
      `,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    link: 'https://github.com/fpaiz-2022134/Hotel-Olasis-Kinalitos.git'
  },
  {
    title: "Cashflow Bank ",
    image: cashflow,
    description:
      `
      Se trata de un banco online que cuenta con funcionalidades tanto para administrador como para un usuario. En la parte del administrador este puede gestionar productos, usuarios, depósitos y tipos de cuenta. Mientras que, el usuario puede observar los datos de su cuenta, gestionar sus datos de usuario, realizar transacciones, compra de productos y agregar cuentas favoritas. 
      `,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB", "Tailwind Css"],
    link: 'https://github.com/Chejinos-Kinal/online-bank-frontend.git'
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
