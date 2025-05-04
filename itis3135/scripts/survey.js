// Function to validate the form
function validateForm() {
    const form = document.forms['surveyForm'];
    
    // Validate required fields
    for (let i = 0; i < form.elements.length; i++) {
        const field = form.elements[i];
        if (field.hasAttribute('required') && !field.value) {
            alert(`Please fill in the ${field.name}.`);
            return false; // Prevent form submission if validation fails
        }
    }

    // If form passes validation, gather data
    displayResults();
    return false; // Prevent form from submitting traditionally
}

// Function to reset the form
function resetForm() {
    document.getElementById('surveyForm').reset();
    document.getElementById('surveyResults').style.display = 'none';
    document.getElementById('surveyForm').style.display = 'block';
}

// Function to dynamically add a new course input
function addCourse() {
    const coursesList = document.getElementById('coursesList');
    const courseCount = coursesList.getElementsByTagName('input').length + 1;

    const newCourseField = document.createElement('div');
    newCourseField.innerHTML = `
        <input type="text" id="course${courseCount}" name="course${courseCount}" placeholder="Enter your course name" required>
        <button type="button" onclick="removeCourse(this)">Delete</button>
    `;
    coursesList.appendChild(newCourseField);
}

// Function to remove a course input
function removeCourse(button) {
    const courseField = button.parentElement;
    courseField.remove();
}

// Function to display survey results
function displayResults() {
    const form = document.forms['surveyForm'];
    const results = document.getElementById('resultContent');

    // Gather form data
    let resultHTML = `<p><strong>Name:</strong> ${form['name'].value}</p>`;
    resultHTML += `<p><strong>Mascot:</strong> ${form['mascot'].value}</p>`;
    resultHTML += `<p><strong>Image Caption:</strong> ${form['imageCaption'].value}</p>`;
    resultHTML += `<p><strong>Personal Background:</strong> ${form['personalBackground'].value}</p>`;
    resultHTML += `<p><strong>Professional Background:</strong> ${form['professionalBackground'].value}</p>`;
    resultHTML += `<p><strong>Academic Background:</strong> ${form['academicBackground'].value}</p>`;
    resultHTML += `<p><strong>Background in Web Development:</strong> ${form['webDevBackground'].value}</p>`;
    resultHTML += `<p><strong>Primary Computer Platform:</strong> ${form['platform'].value}</p>`;

    // Gather course data
    let courses = '';
    for (let i = 1; i <= form.elements.length; i++) {
        const course = form[`course${i}`];
        if (course && course.value) {
            courses += `<p><strong>Course ${i}:</strong> ${course.value}</p>`;
        }
    }
    resultHTML += courses;

    resultHTML += `<p><strong>Funny Thing:</strong> ${form['funnyThing'].value}</p>`;
    resultHTML += `<p><strong>Anything Else:</strong> ${form['anythingElse'].value}</p>`;
    
    results.innerHTML = resultHTML;
    
    // Hide form and show results
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('surveyResults').style.display = 'block';
}
