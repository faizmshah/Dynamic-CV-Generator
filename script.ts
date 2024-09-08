// Function to add new education fields dynamically
document.getElementById('add-education-button')?.addEventListener('click', () => {
  const educationSection = document.getElementById('education-section');
  const newEducation = document.createElement('div');
  newEducation.className = 'edField';
  newEducation.innerHTML = `
    <label for="degreeField">Degree:</label>
    <input type="text" class="degreeField" required><br><br>

    <label for="schoolField">School/University:</label>
    <input type="text" class="schoolField" required><br><br>
  `;
  educationSection?.appendChild(newEducation);
});

// Function to add new work experience fields dynamically
document.getElementById('add-work-button')?.addEventListener('click', () => {
  const workSection = document.getElementById('work-section');
  const newWork = document.createElement('div');
  newWork.className = 'weField';
  newWork.innerHTML = `
    <label for="weJobField">Job Title</label>
    <input type="text" class="weJobField" required><br><br>

    <label for="companyField">Company Name:</label>
    <input type="text" class="companyField" required><br><br>
  `;
  workSection?.appendChild(newWork);
});

// Function to generate the resume
function generateCV() {
  // Personal Information
  const name = (document.getElementById('nameField') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('titleField') as HTMLInputElement).value;
  const contact = (document.getElementById('contactField') as HTMLInputElement).value;
  const email = (document.getElementById('emailField') as HTMLInputElement).value;
  const address = (document.getElementById('addressField') as HTMLInputElement).value;
  const linkedin = (document.getElementById('linkedinField') as HTMLInputElement).value;
  const github = (document.getElementById('githubField') as HTMLInputElement).value;
  const objective = (document.getElementById('objectiveField') as HTMLTextAreaElement).value;

  // Populate Resume Template
  (document.getElementById('fullnameT') as HTMLElement).innerText = name;
  (document.getElementById('nameT') as HTMLElement).innerText = name;
  (document.getElementById('jobtitleT') as HTMLElement).innerText = jobTitle;
  (document.getElementById('phoneT') as HTMLElement).innerText = `Phone: ${contact}`;
  (document.getElementById('emailT') as HTMLElement).innerText = `Email: ${email}`;
  (document.getElementById('addressT') as HTMLElement).innerText = `Address: ${address}`;
  (document.getElementById('linkedT') as HTMLAnchorElement).href = linkedin;
  (document.getElementById('githubT') as HTMLAnchorElement).href = github;
  (document.getElementById('objectiveT') as HTMLElement).innerText = objective;

  // Education
  const degreeFields = document.querySelectorAll('.degreeField') as NodeListOf<HTMLInputElement>;
  const schoolFields = document.querySelectorAll('.schoolField') as NodeListOf<HTMLInputElement>;
  let educationList = '';
  for (let i = 0; i < degreeFields.length; i++) {
    const degree = degreeFields[i].value;
    const school = schoolFields[i].value;
    educationList += `<li>${degree} from ${school}</li>`;
  }
  // Append to the resume's education section
  const educationSection = document.getElementById('aqT');
  if (educationSection) {
    educationSection.innerHTML = educationList;
  }

  // Work Experience
  const jobFields = document.querySelectorAll('.weJobField') as NodeListOf<HTMLInputElement>;
  const companyFields = document.querySelectorAll('.companyField') as NodeListOf<HTMLInputElement>;
  let workList = '';
  for (let i = 0; i < jobFields.length; i++) {
    const job = jobFields[i].value;
    const company = companyFields[i].value;
    workList += `<li>${job} at ${company}</li>`;
  }
  // Append to the resume's work experience section
  const workSection = document.getElementById('weT');
  if (workSection) {
    workSection.innerHTML = workList;

  // Skills
  const skills = (document.getElementById('skillsField') as HTMLInputElement).value;
  const subSkills = (document.getElementById('subSkillField') as HTMLTextAreaElement).value;
  const skillsList = `<li>${skills}</li><li>${subSkills}</li>`;
  (document.getElementById('skillsT') as HTMLElement).innerHTML = skillsList;
}

// code for setting image

const fileInput = document.getElementById('imgField') as HTMLInputElement;
const imgTemplate = document.getElementById('imgTemplate') as HTMLImageElement;

if (fileInput.files && fileInput.files.length > 0) {
  const file = fileInput.files[0];
  console.log(file);

  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onloadend = () => {
    if (typeof reader.result === 'string') {
      imgTemplate.src = reader.result;
    }
  };
}



const cvForm = document.getElementById('cv-form');
const resumeTemplate = document.getElementById('resume-template');


if (cvForm) {
  cvForm.style.display = 'none';
}

if (resumeTemplate) {
  resumeTemplate.style.display = 'grid';
}

}

// Function to print the CV
function printCV() {
  window.print();
}

// Event listener for form submission
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  generateCV();
});
