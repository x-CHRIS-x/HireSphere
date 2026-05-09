export const applicants = [
  {
    id: 1,
    name: "Maria Santos",
    education: 4,
    experience: 3.5,
    technicalSkills: 82,
    examinationResults: 88,
    applicationDate: "2026-05-01"
  },
  {
    id: 2,
    name: "Carlos Reyes",
    education: 3,
    experience: 5,
    technicalSkills: 91,
    examinationResults: 76,
    applicationDate: "2026-04-29"
  },
  {
    id: 3,
    name: "Angela Dela Cruz",
    education: 4,
    experience: 2,
    technicalSkills: 78,
    examinationResults: 93,
    applicationDate: "2026-05-02"
  },
  {
    id: 4,
    name: "Jerome Garcia",
    education: 2,
    experience: 7,
    technicalSkills: 85,
    examinationResults: 71,
    applicationDate: "2026-05-03"
  },
  {
    id: 5,
    name: "Patricia Villanueva",
    education: 5,
    experience: 1.5,
    technicalSkills: 73,
    examinationResults: 95,
    applicationDate: "2026-04-28"
  },
  {
    id: 6,
    name: "Rafael Mendoza",
    education: 3,
    experience: 4,
    technicalSkills: 88,
    examinationResults: 82,
    applicationDate: "2026-05-04"
  }
];

// Education scale reference:
// 1 = High School Diploma
// 2 = Vocational/Technical Certificate
// 3 = Bachelor's Degree
// 4 = Bachelor's Degree with Honors
// 5 = Master's Degree

// Criteria descriptions for display
export const criteriaInfo = {
  education: {
    label: "Education",
    description: "Academic qualification level (1–5 scale)",
    min: 1,
    max: 5,
    unit: "level"
  },
  experience: {
    label: "Experience",
    description: "Years of relevant work experience",
    min: 0,
    max: 10,
    unit: "years"
  },
  technicalSkills: {
    label: "Technical skills",
    description: "Score from technical assessment (0–100)",
    min: 0,
    max: 100,
    unit: "score"
  },
  examinationResults: {
    label: "Examination results",
    description: "Written examination score (0–100)",
    min: 0,
    max: 100,
    unit: "score"
  }
};
