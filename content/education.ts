export type EducationItem = {
  title: string;
  school: string;
  location: string;
  details: { label: string; value: string }[];
};

export const education: EducationItem[] = [
  {
    title: 'B.E. Computer Science and Engineering',
    school: 'Dr. N.G.P. Institute of Technology',
    location: 'Coimbatore, Tamil Nadu',
    details: [
      { label: 'Expected Graduation', value: '2028' },
      { label: 'Current CGPA', value: '6.5' },
    ],
  },
  {
    title: 'Diploma in Computer Networking',
    school: 'PSG Polytechnic College',
    location: 'Coimbatore, Tamil Nadu',
    details: [
      { label: 'Graduated', value: '2025' },
      { label: 'Percentage', value: '80%' },
    ],
  },
  {
    title: '10th Grade',
    school: 'Chandra Matric Hr. Sec. School',
    location: 'Coimbatore, Tamil Nadu',
    details: [
      { label: 'Passed', value: '2022' },
      { label: 'Marks', value: '399/500 (79.8%)' },
    ],
  },
];
