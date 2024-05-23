export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "Nodejs", label: "Nodejs", isFixed: true },
  { value: "Reactjs", label: "Reactjs" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS", isFixed: true },
  { value: "Javascript", label: "Javascript" },
  { value: "Java", label: "Java" },
  { value: "Python", label: "Python" },
];

export interface languagesData {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const languages: readonly languagesData[] = [
  { value: "Tamil", label: "Tamil", isFixed: true },
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Spanish", label: "Spanish" },
  { value: "Hindi", label: "Hindi", isFixed: true },
  { value: "Urdu", label: "Urdu" },
];

export interface interestedRolesData {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
}

export const interestedRoles: readonly interestedRolesData[] = [
  { value: "Fullstack developer", label: "Fullstack developer", isFixed: true },
  { value: "React developer", label: "React developer" },
  { value: "Frontend developer", label: "Frontend developer" },
  { value: "Backend developer", label: "Backend developer" },
  { value: "Database developer", label: "Database developer" },
  { value: "Project manager", label: "Project manager" },
];
