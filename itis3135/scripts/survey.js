document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intro-form");
    const outputDiv = document.getElementById("output");
    const addCourseButton = document.getElementById("add-course");
    const coursesSection = document.getElementById("courses-section");

    // Load image preview before form submission
    function loadImage() {
        const image = document.getElementById('image').files[0]; // Get the selected image file
        const previewContainer = document.getElementById('loadImage'); // Where the image preview will be displayed
        
        if (image) {
            const imageURL = URL.createObjectURL(image); // Generate the image URL

            // Create an image element and set the source to the image URL
            const imgElement = document.createElement('img');
            imgElement.src = imageURL;
            imgElement.alt = "Preview Image";
            imgElement.style.maxWidth = '300px';  // Limit the size of the image
            imgElement.style.borderRadius = '8px';

            // Clear previous preview if any
            previewContainer.innerHTML = ''; 

            // Append the new preview image to the container
            previewContainer.appendChild(imgElement);
        }
    }

    // Add Course dynamically
    addCourseButton.addEventListener("click", () => {
        const wrapper = document.createElement("div");
        wrapper.className = "course-wrapper";
        
        const input = document.createElement("input");
        input.type = "text";
        input.className = "course";
        input.placeholder = "Enter your course name";
        input.required = true;

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.textContent = "Delete";
        delBtn.addEventListener("click", () => {
            wrapper.remove();  // Removes input and button together
        });

        wrapper.appendChild(input);
        wrapper.appendChild(delBtn);
        coursesSection.appendChild(wrapper);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Gather form data
        const name = document.getElementById("name").value.trim();
        const mascot = document.getElementById("mascot").value.trim();
        const image = document.getElementById("image").files[0];
        const caption = document.getElementById("caption").value.trim();
        const personal = document.getElementById("personal").value.trim();
        const professional = document.getElementById("professional").value.trim();
        const academic = document.getElementById("academic").value.trim();
        const webdev = document.getElementById("webdevbackground").value.trim();
        const platform = document.getElementById("platform").value.trim();
        const funny = document.getElementById("funny").value.trim();
        const anything = document.getElementById("anything").value.trim();
        const agreement = document.getElementById("agreement").checked;

        // Validate required fields
        if (!name || !mascot || !image || !caption || !personal || !professional ||
            !academic || !webdev || !platform || !funny || !anything || !agreement) {
            alert("Please fill out all fields and check the agreement.");
            return;
        }

        // Collect courses
        const courseInputs = document.querySelectorAll(".course");
        const courses = [];
        courseInputs.forEach((input) => {
            if (input.value.trim()) courses.push(input.value.trim());
        });

        // Hide the form and create the introduction page
        form.style.display = "none";

        // Create the output
        const heading = document.createElement("h2");
        heading.textContent = `${name} the ${mascot}`;

        // Image (Show the actual image, not just the caption)
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = URL.createObjectURL(image);  // Display the submitted image
        img.alt = `${name}'s image`;
        img.style.maxWidth = "300px"; // Ensure the image fits in the container

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = caption;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        // Display information in the correct order
        const infoList = document.createElement("ul");

        const makeLI = (label, text) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${label}:</strong> ${text}`;
            return li;
        };

        // Correct order of data displayed:
        infoList.appendChild(makeLI("Name", name));
        infoList.appendChild(makeLI("Mascot", mascot));
        infoList.appendChild(makeLI("Image", `<img src="${URL.createObjectURL(image)}" alt="${name}'s image" style="max-width: 300px;">`)); // Show the actual image
        infoList.appendChild(makeLI("Image Caption", caption));
        infoList.appendChild(makeLI("Personal Background", personal));
        infoList.appendChild(makeLI("Professional Background", professional));
        infoList.appendChild(makeLI("Academic Background", academic));
        infoList.appendChild(makeLI("Web Dev Background", webdev));
        infoList.appendChild(makeLI("Primary Computer Platform", platform));

        // Display courses correctly between "platform" and "funny"
        if (courses.length > 0) {
            const courseHeader = document.createElement("h3");
            courseHeader.textContent = "Courses I'm Taking:";
            outputDiv.appendChild(courseHeader);

            const courseList = document.createElement("ul");
            courses.forEach((course) => {
                const li = document.createElement("li");
                li.textContent = course;
                courseList.appendChild(li);
            });
            outputDiv.appendChild(courseList);
        }

        outputDiv.appendChild(infoList);
        outputDiv.appendChild(makeLI("Funny Thing", funny));
        outputDiv.appendChild(makeLI("Anything Else", anything));
        outputDiv.appendChild(makeLI("Agreement", agreement ? "Agreed" : "Not Agreed"));

        // Reset button
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Reset and Try Again";
        resetBtn.addEventListener("click", () => {
            outputDiv.innerHTML = "";
            form.reset();
            form.style.display = "block"; // Show form again
        });

        outputDiv.appendChild(resetBtn);
        document.querySelector("main").appendChild(outputDiv);
    });
});
