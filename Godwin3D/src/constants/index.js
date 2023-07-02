import {
    calgary,
    IB,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    SQL,
    git,
    figma,
    Csharp, 
    python,
    java,
    first,
    starbucks,
    impactapp,

    carrent,
    jobit,
    tripguide,
    threejs,
    sait,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "International Baccalaureate",
      subtitle: "Certificate & Highschool Diploma ",
      period: "September 2016 - June 2019",
      icon: IB,
    },
   
    {
      title: "University of Calgary (UofC)",
      subtitle: "Bsc Actuarial Science",
      period: "September 2019 - Ongoing",
      icon: calgary,
    },

    {
      title: "Southern Alberta Institute of Technology (SAIT)",
      subtitle: "Diploma, Software Development",
      period: "September 2022 - April 2024",
      icon: sait,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 5",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },

    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  

    {
      name: "Python",
      icon: python
    },
    {
      name: "Java",
      icon: java
    },

    {
      name: "C#",
      icon: Csharp
    },

    {
      name: "MySQL/SQLPlus",
      icon: SQL
    },

    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];

  
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer (Volunteer)",
      company_name: "Impact Applications",
      icon: impactapp,
      iconBg: "#FFFFFF",
      date: "June 2023 - Present",
      points: [
        "Conducted research on potential libraries for AI/ML and explored topics such as Tokenization and Lemmatization for Data Processing using NLTK (Natural Language ToolKit) combined with BeautifulSoup.",
        "Explored Feature Extraction using the Bag-Of-Words Model and topics related to the Vector Space Model for Term-Frequency Inverse Document Frequency.",
        "Created a comprehensive report summarizing findings, including the use of scikit-learn and Pandas for Python, the language used by the company.",
         "Worked on developing a Grant Writing GPT with enhanced capabilities. The software utilized ChatGPT to read and receive documents in various forms, analyze words, parse data, and highlight key words and requirements to generate responses.",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Southern Alberta Institute of Technology (SAIT)",
      icon: sait,
      iconBg: "#FFFFFF",
      date: "Sept 2022 - April 2024",
      points: [
        "Database Design: Led the design and development of SQL databases, optimizing storage and retrieval. Prepared comprehensive reports documenting the process.",
        "Software Design: Organized functional roles for design projects, ensuring adherence to project requirements and best practices.",
        "Programming: Managed MVC projects, utilizing .NET for application development and connecting databases. Ensured timely completion of tasks.",
        "Team Leadership: Managed a UI/UX design team, guiding them from low to high-fidelity designs. Provided mentorship and support.",
        "Project Lifecycle Management: Oversaw multiple project lifecycles from planning to implementation, managing scope, resources, and risks.",
        "Documentation: Created comprehensive reports summarizing project activities, requirements, and outcomes."
      ],
    },
    {
      title: "Robotics Instructor",
      company_name: "FIRST Robotics",
      icon: first,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Feb 2019",
      points: [
        "Taught students the principles of robotics and logical thinking, used LEGO building techniques, and programming concepts using the EV3 Storms software. Provided hands-on demonstrations and guidance to ensure students understand the concepts and techniques effectively",
        "Recognized the unique needs and abilities of each student and provided individualized instructions accordingly. Adapted teaching methods and materials to cater to different learning styles and abilities, ensured that all students can participate and progress",
        "Technical Troubleshooting: Assist students in troubleshooting technical issues related to building LEGO robots and programming using the EV3 Storms software. Fostered a problem-solving mindset among students, encouraging them to overcome challenges independently or collaboratively."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  