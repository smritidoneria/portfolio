// import ecell from "@/../public/projects/ecell.png";
import caseCobra from "@/../public/projects/casecobra.png";
import contactManager from "@/../public/projects/contactmanager.png";
import moviePulse from "@/../public/projects/moviepulse.png";
import ksham from "@/../public/projects/ksham.png";

import intellipdf from "@/../public/projects/intellipdf.png";
import medical from "@/../public/projects/medical.png";
import fp from "@/../public/projects/fp.png";
import breast from "@/../public/projects/breast.png";
export const PROJECTS = [
    {
        title: "Intellipdf",
        description: "Intellipdf is an innovative application designed to read PDFs and interact with users through questions based on the content. Built with Next.js, Intellipdf offers a seamless and intuitive user experience.",
        img: intellipdf,
        github: "https://github.com/smritidoneria/IntelliPDF",
        deployedLink: "https://intelli-pdf-uj4l.vercel.app",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "NeoTech", "Shadcn UI", "TRPC Backend",]
    },
    {
        title: "Breast Cancer Detection",
        description: "This project aims to detect breast cancer using machine learning algorithms. It achieves an accuracy of 97% in classifying breast cancer tumors as malignant or benign. The algorithms used for testing include logistic regression, random forest,adaboost and decision tree. Among these, random forest yielded the highest accuracy.",
        img: breast,
        github: "https://github.com/smritidoneria/BreastCancer_detection",
        
        technologies: [
            "Python",
            "Pandas",
            "Numpy",
            "Matplotlib",
            "Seaborn",
            "Scikit-learn",
            "Random Forest",
            "Logistic Regression",
        ],
    },
    {
        title: "Medical Text Data Analysis",
        description: "This repository contains an in-depth comparative analysis of multiple machine learning algorithms for text classification tasks. The algorithms evaluated include Support Vector Machines (SVM), Random Forest, and Naive Bayes. The analysis utilizes a comprehensive dataset of research paper abstracts and full texts related to various types of cancer.",
        img: medical,
        deployedLink: "https://github.com/smritidoneria/Medical_dataset_analysis",
        technologies: ["Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-learn", "Random Forest", "SVM", "Naive Bayes"],
    },

    {
        title: "FuturePreneurs24",
        description:
            "Contributed significantly to the development of the Futurepreneurs9.0 event website, utilizing Next.js framework and Node.js for npm flow management. Designed and implemented admin routes for various event levels, integrating MongoDB for database management and JWT tokens for secure authentication. Ensured seamless frontend-backend integration, optimizing user experience and content management efficiency.",
        img: fp,
        github: "https://github.com/smritidoneria/FuturePreneurs24",
        technologies: ["Express", "MongoDB", "JWT", "Mongoose", "Bcrypt", "Cors", "Dotenv", "Nodemon"],
    },

];