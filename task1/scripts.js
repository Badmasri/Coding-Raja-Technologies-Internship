// JavaScript for dynamic form handling and preview functionality

document.addEventListener('DOMContentLoaded', function () {
    // Load Resume Builder components dynamically
    loadResumeBuilder();
});

function loadResumeBuilder() {
    // For simplicity, let's assume we have a template selection page initially
    showTemplateSelection();
}

function showTemplateSelection() {
    const contentDiv = document.querySelector('.content');

    // Template selection HTML (replace this with your actual template selection UI)
    const templateSelectionHTML = `
        <h2>Choose a Resume Template</h2>
        <select id="templateSelect">
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <!-- Add more template options as needed -->
        </select>
        <button onclick="showResumeForm()">Start Building</button>
    `;

    contentDiv.innerHTML = templateSelectionHTML;
}

function showResumeForm() {
    const contentDiv = document.querySelector('.content');

    // Form HTML (replace this with your actual form UI)
    const formHTML = `
        <h2 align=center>Resume Builder</h2>
        <form onsubmit="handleFormSubmission(); return false;">
            <!-- Add form fields for personal information, education, work experience, skills, etc. -->
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <br>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" required>
            <br>
            <label for="address">Address:</label>
            <input type="text" id="address" required>
            <br>
            <hr>

            <!-- Education Section -->
            <div id="educationSection">
                <h3>Education</h3>
                <div class="educationEntry">
                    <label for="education">Institution:</label>
                    <input type="text" class="education" required>
                    <br>
                    <label for="eduStartDate">Start Date:</label>
                    <input type="date" class="eduStartDate" required>
                    <br>
                    <label for="eduEndDate">End Date:</label>
                    <input type="date" class="eduEndDate" required>
                </div>
                <button type="button" onclick="addEducationEntry()">Add Education</button>
            </div>

            <hr>

            <!-- Work Experience Section -->
            <div id="workExperienceSection">
                <h3>Work Experience</h3>
                <div class="workExperienceEntry">
                    <label for="workExperience">Position:</label>
                    <textarea class="workExperience" rows="4" required></textarea>
                    <br>
                    <label for="expStartDate">Start Date:</label>
                    <input type="date" class="expStartDate" required>
                    <br>
                    <label for="expEndDate">End Date:</label>
                    <input type="date" class="expEndDate" required>
                </div>
                <button type="button" onclick="addWorkExperienceEntry()">Add Work Experience</button>
            </div>

            <hr>

            <!-- Skills Section -->
            <label for="skills">Skills:</label>
            <textarea id="skills" rows="4" required></textarea>

            <hr>

            <!-- Projects Section -->
            <div id="projectsSection">
                <h3>Projects</h3>
                <div class="projectEntry">
                    <label for="projectName">Project Name:</label>
                    <input type="text" class="projectName" required>
                    <br>
                    <label for="projectDescription">Project Description:</label>
                    <textarea class="projectDescription" rows="4" required></textarea>
                </div>
                <button type="button" onclick="addProjectEntry()">Add Project</button>
            </div>

            <hr>

            <!-- Certifications Section -->
            <label for="certifications">Certifications:</label>
            <textarea id="certifications" rows="4" required></textarea>

            <hr>

            <!-- Languages Section -->
            <div id="languagesSection">
                <h3>Languages</h3>
                <div class="languageEntry">
                    <label for="language">Language:</label>
                    <input type="text" class="language" required>
                    <br>
                    <label for="proficiency">Proficiency:</label>
                    <input type="text" class="proficiency" required>
                </div>
                <button type="button" onclick="addLanguageEntry()">Add Language</button>
            </div>

            <button type="submit">Preview</button>
        </form>
    `;

    contentDiv.innerHTML = formHTML;
}

function handleFormSubmission() {
    // Gather user input and generate preview (replace this with your actual logic)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;

    // Gather education entries
    const educationEntries = document.querySelectorAll('.educationEntry');
    const educationData = Array.from(educationEntries).map(entry => ({
        institution: entry.querySelector('.education').value,
        startDate: entry.querySelector('.eduStartDate').value,
        endDate: entry.querySelector('.eduEndDate').value
    }));

    // Gather work experience entries
    const workExperienceEntries = document.querySelectorAll('.workExperienceEntry');
    const workExperienceData = Array.from(workExperienceEntries).map(entry => ({
        position: entry.querySelector('.workExperience').value,
        startDate: entry.querySelector('.expStartDate').value,
        endDate: entry.querySelector('.expEndDate').value
    }));

    // Gather project entries
    const projectEntries = document.querySelectorAll('.projectEntry');
    const projectData = Array.from(projectEntries).map(entry => ({
        projectName: entry.querySelector('.projectName').value,
        projectDescription: entry.querySelector('.projectDescription').value
    }));

    // Gather language entries
    const languageEntries = document.querySelectorAll('.languageEntry');
    const languageData = Array.from(languageEntries).map(entry => ({
        language: entry.querySelector('.language').value,
        proficiency: entry.querySelector('.proficiency').value
    }));

    // Generate preview HTML (replace this with your actual preview generation logic)
    const previewHTML = `
        <h2>Preview</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>

        <h3>Education</h3>
        ${educationData.map(edu => `<p>${edu.institution} (${edu.startDate} - ${edu.endDate})</p>`).join('')}

        <h3>Work Experience</h3>
        ${workExperienceData.map(exp => `<p>${exp.position} (${exp.startDate} - ${exp.endDate})</p>`).join('')}

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Projects</h3>
        ${projectData.map(project => `<p>${project.projectName}: ${project.projectDescription}</p>`).join('')}

        <h3>Certifications</h3>
        <p>${certifications}</p>

        <h3>Languages</h3>
        ${languageData.map(lang => `<p>${lang.language}: ${lang.proficiency}</p>`).join('')}

        <button onclick="handleDownload()">Download</button>
    `;

    // Display the preview
    const contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = previewHTML;
}

function addEducationEntry() {
    const educationSection = document.getElementById('educationSection');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.classList.add('educationEntry');

    newEducationEntry.innerHTML = `
        <label for="education">Institution:</label>
        <input type="text" class="education" required>

        <label for="eduStartDate">Start Date:</label>
        <input type="date" class="eduStartDate" required>

        <label for="eduEndDate">End Date:</label>
        <input type="date" class="eduEndDate" required>
    `;

    educationSection.insertBefore(newEducationEntry, educationSection.lastChild);
}

function addWorkExperienceEntry() {
    const workExperienceSection = document.getElementById('workExperienceSection');
    const newWorkExperienceEntry = document.createElement('div');
    newWorkExperienceEntry.classList.add('workExperienceEntry');

    newWorkExperienceEntry.innerHTML = `
        <label for="workExperience">Position:</label>
        <textarea class="workExperience" rows="4" required></textarea>

        <label for="expStartDate">Start Date:</label>
        <input type="date" class="expStartDate" required>

        <label for="expEndDate">End Date:</label>
        <input type="date" class="expEndDate" required>
    `;

    workExperienceSection.insertBefore(newWorkExperienceEntry, workExperienceSection.lastChild);
}

function addProjectEntry() {
    const projectsSection = document.getElementById('projectsSection');
    const newProjectEntry = document.createElement('div');
    newProjectEntry.classList.add('projectEntry');

    newProjectEntry.innerHTML = `
        <label for="projectName">Project Name:</label>
        <input type="text" class="projectName" required>

        <label for="projectDescription">Project Description:</label>
        <textarea class="projectDescription" rows="4" required></textarea>
    `;

    projectsSection.insertBefore(newProjectEntry, projectsSection.lastChild);
}

function addLanguageEntry() {
    const languagesSection = document.getElementById('languagesSection');
    const newLanguageEntry = document.createElement('div');
    newLanguageEntry.classList.add('languageEntry');

    newLanguageEntry.innerHTML = `
        <label for="language">Language:</label>
        <input type="text" class="language" required>

        <label for="proficiency">Proficiency:</label>
        <input type="text" class="proficiency" required>
    `;

    languagesSection.insertBefore(newLanguageEntry, languagesSection.lastChild);
}

function handleDownload() {
    // Implement logic to download the resume in different formats (PDF, Word, etc.)
    // For simplicity, let's just show an alert for demonstration purposes
    alert('Downloading resume...');
}
