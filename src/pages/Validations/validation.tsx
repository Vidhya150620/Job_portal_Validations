import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export const RegisterSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name must be within 50 characters")
    .matches(/^[A-Za-z ]+$/, "Full name only accepts alphabets"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const personalDetailsSchema = yup.object().shape({
  city: yup
    .string()
    .required("city is required")
    .matches(/^[A-Za-z ]+$/, "Full name only accepts alphabets"),
  area: yup
    .string()
    .required("Area is required")
    .matches(/^[A-Za-z ]+$/, "Full name only accepts alphabets"),
  street: yup.string().required("Street is required"),
  pincode: yup
    .string()
    .required("Pincode is required")
    .matches(/^[0-9]/, "Pincode only accepts numbers"),
  language: yup
    .array()
    .of(
      yup
        .object()
        .shape({
          value: yup.string().required(),
          label: yup.string().required(),
        })
        .required("Select knowm languages")
    )
    .required("Language is required"),
  maritalStatus: yup.string().required("Select your marital status"),
  gender: yup.string().required("Select your Gender"),
  dob: yup.string().required("Date of birth is required"),
});

export const ProfileSummaryschema = yup.object().shape({
  profileSummary: yup
    .string()
    .min(100, "Profile summary must be at least 100 words")
    .required("Profile summary is required"),
});

export const ProjectDetailsSchema = yup.object().shape({
  projectName: yup
    .string()
    .required("Project name is required")
    .max(50, "Project description maximum 50 words"),
  projectDescription: yup
    .string()
    .required("Project description is required")
    .min(200, "Project description must be at least 200 words"),
  projectStatus: yup.string().required("Project status is required"),
  startYear: yup.string().required("Start year is required"),
  startMonth: yup.string().required("Start month is required"),
  endYear: yup.string().when("projectStatus", {
    is: "finished",
    then: yup.string().required("End year is required"),
  }),
  endMonth: yup.string().when("projectStatus", {
    is: "finished",
    then: yup.string().required("End month is required"),
  }),
});

export const SkillsSchema = yup.object().shape({});

export const workStatusSchema = yup.object().shape({
  // linkedInUrl: yup.string().required("LinkedIn url is required"),
  // workStatus: yup.string().required("Select your work status"),
  // noticePeriod: yup.string().required("Select notice period"),
  // currentSalary: yup.number().required("Enter your current salary"),
  // salaryExpectation: yup.number().required("Enter your salary expectation"),
  // experience: yup.number().required("Select your experience"),
  linkedInUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("LinkedIn profile URL is required"),
  workStatus: yup.string().required("Work status is required"),
  noticePeriod: yup.string().required("Notice period is required"),
  currentSalary: yup
    .number()
    .typeError("Current salary must be a number")
    .required("Current salary is required"),
  salaryExpectation: yup
    .number()
    .typeError("Salary expectation must be a number")
    .required("Salary expectation is required"),
  experience: yup
    .number()
    .typeError("Experience must be a number")
    .when("workStatus", {
      is: "experience",
      then: yup.number().required("Experience is required"),
      otherwise: yup.number().nullable(),
    }),
});

export const educationShema = yup.object().shape({
  educationType: yup.string().required("Select education"),
  university: yup.string().required("Select your university/ Institute"),
  course: yup.string().required("Enter your course"),
  Specialization: yup.string().required("Enter your course specialization"),
  courseType: yup.string().required("Select course type"),
  courseDuration: yup.string().required("Select course duration"),
  marks: yup.string().matches(/^1-9/, "Enter your mark"),
});
