import bank1 from '../assets/projects/bank4to.1.jpg'
import tonyskinal1 from '../assets/projects/tonys1.jpg'
import dress2 from '../assets/projects/dress2.jpg'
import website1 from '../assets/projects/website1.jpg'
import agendaweb2 from '../assets/projects/agendaweb2.jpg'
import gestorcomercial from '../assets/projects/gestorcomercial.jpg'
import task2 from '../assets/projects/task1.jpg'
import cashflow2 from '../assets/projects/cashflow2.jpg'
import olasis1 from '../assets/projects/olasis1.jpg'
import perfiltrabajo from '../assets/perfiltrabajo.jpg'
import linkedin from '../assets/linkedin.jpg'

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
      `This is a project in which is implemented mainly the Java language, with the use of JavaSwing is implemented the interfaces of the application. This application is a banking system to perform transactions and perform all kinds of administrative activity both on the client side and on the admin side.`,
    technologies: ["Java", "JavaSe", "JavaSwing", "MyQL", "SQL"],
    image: bank1,
    link: 'https://github.com/fpaiz-2022134/Banco4to.git',
    skillsLearned: "Learned advanced Java programming, GUI design with Java Swing, and database management with MySQL."
  },
  {
    title: "Tonys Kinal",
    image: tonyskinal1,
    description:
      `Project of a restaurant that offers food services in which you can work only as an administrator. This administrator can add employees, dishes, services, etc.. And add the data of the company to whom the service will be given, in this way you can generate at the end of the program a personalized invoice with all the data collected.`,
    technologies: ["Java", "JavaEE", "JavaFX", "MySQL", "Scene Builder", "iReport"],
    link: 'https://github.com/fpaiz-2022134/TonysKinal.git',
    skillsLearned: "Gained experience in JavaEE for enterprise applications, UI design with JavaFX, and reporting with iReport."
  },
  {
    title: "DressCode",
    image: dress2,
    description:
      `Project made with Java and implemented as a web application. This project is an online clothing store in which it has shopping cart functions for customer and management for administrator. It automatically generates an invoice when purchases are made. Dresscode was developed as a group using the SCRUM methodology, with each of the members having important coding roles.`,
    technologies: ["Java", "JavaEE", "JavaFX", "XML", "MySQL"],
    link: 'https://github.com/fpaiz-2022134/DresscodeProject.git',
    skillsLearned: "Learned web application development with JavaEE, teamwork and collaboration using SCRUM methodology, and XML for data handling."
  },
  {
    title: "Responsive Website",
    image: website1,
    description:
      `Responsive front-end design website which contains different segments. In the first one is a description of my hobbies or favorite hobby which in this case is calisthenics. Second, page about myself including autobiography. And finally, remodeling of the main page of Fundación Kinal, developed by me. To see the page double click on the index.html document.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/fpaiz-2022134_kinal_edu_gt/ES6G-qQvp7JMsiWsB4_LLYwBpAfR8kv94THB3-CXZ3Q9Cg?e=RBW0BJ',
    skillsLearned: "Improved front-end development skills, including responsive design with HTML and CSS, and client-side scripting with JavaScript."
  },
  {
    title: "ToDo List",
    image: agendaweb2,
    description:
      `Program which contains a responsive frontend design login, integrating contact information cards that when clicked will take them to their personal information. And finally and mainly a To Do List which is a task creator which allows you to view, store, add, edit and delete the tasks you want.`,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: 'https://cetkinal-my.sharepoint.com/:u:/g/personal/fpaiz-2022134_kinal_edu_gt/EauXnnMTSjVOprIX8MCb_yIB30x5X_GOz-sEWTExuHYQEw?e=eiyATx',
    skillsLearned: "Enhanced skills in creating interactive web applications, including task management features and user authentication."
  },
  {
    title: "Comercial Management API",
    image: gestorcomercial,
    description:
      `The project is an API whose main idea is a BackEnd logic for the development of an online store or supermarket. The program allows the administrator to create products, manage invoices, manage product categories and add products. To the customer, it allows him to register and login, have a shopping cart, add products, checkout, generate an invoice automatically, view his purchase history and invoices, and finally, print the invoice of his purchase in PDF format.`,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    link: 'https://github.com/fpaiz-2022134/ProyectoBimestral.git',
    skillsLearned: "Developed backend skills, including RESTful API design, CRUD operations, and database management with MongoDB."
  },
  {
    title: "Local Storage (ToDo)",
    image: task2,
    description:
      `Web application developed with React JS as Frontend and Node JS as Backend, in addition to the connection to a non-relational database in MongoDB. It consists of a program of type To Do List in which allows to create, edit, observe and delete tasks with data of the creator of the task as name and surname, data of the task that contains title, description, start date, end date. It also allows to indicate if the task has been done or not.`,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    link: 'https://github.com/fpaiz-2022134/KinalTec.git',
    skillsLearned: "Learned full-stack development with React and Node.js, state management, and database integration with MongoDB."
  },
  {
    title: "Olasis Hotel Management",
    image: olasis1,
    description:
      `It is a Hotel Manager and functionally like a site with similarity to the Trivago application. It allows you to add, create, edit, manage, and delete hotels, categories, services, etc. Also, as a user you can make reservations for rooms or event planning using the hotel. This project was done in a group way in which I led the processes.`,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB"],
    link: 'https://github.com/fpaiz-2022134/Hotel-Olasis-Kinalitos.git',
    skillsLearned: "Gained leadership experience in a group project, and improved skills in developing complex applications with Express, Node.js, and MongoDB."
  },
  {
    title: "Cashflow Bank",
    image: cashflow2,
    description:
      `It is an online bank that has functionalities for both administrator and user. The administrator can manage products, users, deposits and account types. While, the user can view his account data, manage his user data, make transactions, purchase products and add favorite accounts.
      
      In this project you can log in with email: admin@gmail.com and password: ADMINB in this way you will enter the program and you will be able to add a user and then log in as a client and observe the rest of the banking management.`,
    technologies: ["Express", "NodeJS", "JavaScript", "MongoDB", "Tailwind Css"],
    link: 'https://cashflow-frontend-jeusfkaul-andercabreras-projects.vercel.app/',
    skillsLearned: "Learned how to develop secure online banking systems, user authentication, and the integration of Tailwind CSS for styling."
  }
];
export const CONTACT = {
  phoneNo: "+502 51803683",
  email: "fralpaiz@gmail.com",
  workProfileImage: perfiltrabajo,
  additionalImage: linkedin
};
