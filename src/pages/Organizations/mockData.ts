import adobe from "../../assets/images/Adobe.png";
import wipro from "../../assets/images/wipro.png";
import swiggy from "../../assets/images/swiggy.png";

interface Company {
  id: number;
  name: string;
  imageSrc: string;
  jobCount: number;
  description: string;
}

const companiesData: Company[] = [
  {
    id: 1,
    name: "XYZ Company",
    imageSrc: adobe,
    jobCount: 2,
    description:
      "XYZ Corporation is an independent automotive component maker founded in 1941.",
  },
  {
    id: 2,
    name: "ABC Company",
    imageSrc: wipro,
    jobCount: 3,
    description:
      "ABC Corporation specializes in software development services.",
  },
  {
    id: 3,
    name: "Tech Innovators Inc.",
    imageSrc: adobe,
    jobCount: 5,
    description:
      "Tech Innovators Inc. is a leading technology company focusing on innovation and digital solutions.",
  },
  {
    id: 4,
    name: "Global Solutions Group",
    imageSrc: adobe,
    jobCount: 4,
    description:
      "Global Solutions Group offers comprehensive business solutions and consulting services worldwide.",
  },
  {
    id: 5,
    name: "Healthcare Innovations",
    imageSrc: swiggy,
    jobCount: 2,
    description:
      "Healthcare Innovations is dedicated to revolutionizing healthcare through advanced technology and research.",
  },
  {
    id: 6,
    name: "FutureTech Enterprises",
    imageSrc: wipro,
    jobCount: 7,
    description:
      "FutureTech Enterprises specializes in cutting-edge technology solutions for businesses.",
  },
  {
    id: 7,
    name: "GreenTech Solutions",
    imageSrc: swiggy,
    jobCount: 6,
    description:
      "GreenTech Solutions focuses on sustainable technology initiatives and environmental solutions.",
  },
  {
    id: 8,
    name: "Innovative Designs Ltd.",
    imageSrc: wipro,
    jobCount: 3,
    description:
      "Innovative Designs Ltd. is known for its creative and innovative design solutions across various industries.",
  },
  {
    id: 9,
    name: "TechGenius Inc.",
    imageSrc: swiggy,
    jobCount: 4,
    description:
      "TechGenius Inc. provides cutting-edge technology consulting and software development services.",
  },
  {
    id: 10,
    name: "GlobalTech Solutions",
    imageSrc: wipro,
    jobCount: 5,
    description:
      "GlobalTech Solutions offers scalable technology solutions for businesses worldwide.",
  },
  {
    id: 11,
    name: "GlobalTech Solutions",
    imageSrc: wipro,
    jobCount: 5,
    description:
      "GlobalTech Solutions offers scalable technology solutions for businesses worldwide.",
  },
  {
    id: 12,
    name: "GlobalTech Solutions",
    imageSrc: wipro,
    jobCount: 5,
    description:
      "GlobalTech Solutions offers scalable technology solutions for businesses worldwide.",
  },
  {
    id: 13,
    name: "GlobalTech Solutions",
    imageSrc: wipro,
    jobCount: 5,
    description:
      "GlobalTech Solutions offers scalable technology solutions for businesses worldwide.",
  },
];

export default companiesData;
