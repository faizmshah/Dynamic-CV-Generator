var _a, _b, _c;
// Function to add new education fields dynamically
(_a = document.getElementById('add-education-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var educationSection = document.getElementById('education-section');
    var newEducation = document.createElement('div');
    newEducation.className = 'edField';
    newEducation.innerHTML = "\n    <label for=\"degreeField\">Degree:</label>\n    <input type=\"text\" class=\"degreeField\" required><br><br>\n\n    <label for=\"schoolField\">School/University:</label>\n    <input type=\"text\" class=\"schoolField\" required><br><br>\n  ";
    educationSection === null || educationSection === void 0 ? void 0 : educationSection.appendChild(newEducation);
});
// Function to add new work experience fields dynamically
(_b = document.getElementById('add-work-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var workSection = document.getElementById('work-section');
    var newWork = document.createElement('div');
    newWork.className = 'weField';
    newWork.innerHTML = "\n    <label for=\"weJobField\">Job Title</label>\n    <input type=\"text\" class=\"weJobField\" required><br><br>\n\n    <label for=\"companyField\">Company Name:</label>\n    <input type=\"text\" class=\"companyField\" required><br><br>\n  ";
    workSection === null || workSection === void 0 ? void 0 : workSection.appendChild(newWork);
});
// Function to generate the resume
function generateCV() {
    // Personal Information
    var name = document.getElementById('nameField').value;
    var jobTitle = document.getElementById('titleField').value;
    var contact = document.getElementById('contactField').value;
    var email = document.getElementById('emailField').value;
    var address = document.getElementById('addressField').value;
    var linkedin = document.getElementById('linkedinField').value;
    var github = document.getElementById('githubField').value;
    var objective = document.getElementById('objectiveField').value;
    // Populate Resume Template
    document.getElementById('fullnameT').innerText = name;
    document.getElementById('nameT').innerText = name;
    document.getElementById('jobtitleT').innerText = jobTitle;
    document.getElementById('phoneT').innerText = "Phone: ".concat(contact);
    document.getElementById('emailT').innerText = "Email: ".concat(email);
    document.getElementById('addressT').innerText = "Address: ".concat(address);
    document.getElementById('linkedT').href = linkedin;
    document.getElementById('githubT').href = github;
    document.getElementById('objectiveT').innerText = objective;
    // Education
    var degreeFields = document.querySelectorAll('.degreeField');
    var schoolFields = document.querySelectorAll('.schoolField');
    var educationList = '';
    for (var i = 0; i < degreeFields.length; i++) {
        var degree = degreeFields[i].value;
        var school = schoolFields[i].value;
        educationList += "<li>".concat(degree, " from ").concat(school, "</li>");
    }
    // Append to the resume's education section
    var educationSection = document.getElementById('aqT');
    if (educationSection) {
        educationSection.innerHTML = educationList;
    }
    // Work Experience
    var jobFields = document.querySelectorAll('.weJobField');
    var companyFields = document.querySelectorAll('.companyField');
    var workList = '';
    for (var i = 0; i < jobFields.length; i++) {
        var job = jobFields[i].value;
        var company = companyFields[i].value;
        workList += "<li>".concat(job, " at ").concat(company, "</li>");
    }
    // Append to the resume's work experience section
    var workSection = document.getElementById('weT');
    if (workSection) {
        workSection.innerHTML = workList;
        // Skills
        var skills = document.getElementById('skillsField').value;
        var subSkills = document.getElementById('subSkillField').value;
        var skillsList = "<li>".concat(skills, "</li><li>").concat(subSkills, "</li>");
        document.getElementById('skillsT').innerHTML = skillsList;
    }
    // code for setting image
    var fileInput = document.getElementById('imgField');
    var imgTemplate = document.getElementById('imgTemplate');
    if (fileInput.files && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        console.log(file);
        var reader_1 = new FileReader();
        reader_1.readAsDataURL(file);
        reader_1.onloadend = function () {
            if (typeof reader_1.result === 'string') {
                imgTemplate.src = reader_1.result;
            }
        };
    }
    var cvForm = document.getElementById('cv-form');
    var resumeTemplate = document.getElementById('resume-template');
    if (cvForm) {
        cvForm.style.display = 'none';
    }
    if (resumeTemplate) {
        resumeTemplate.style.display = 'block';
    }
}
// Function to print the CV
function printCV() {
    window.print();
}
// Event listener for form submission
(_c = document.getElementById('resume-form')) === null || _c === void 0 ? void 0 : _c.addEventListener('submit', function (event) {
    event.preventDefault();
    generateCV();
});
