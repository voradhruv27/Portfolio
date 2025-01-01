// Navbar manu button

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

document.querySelector(".nav-btn").addEventListener("click", toggleMenu);

function manuBtn() {
  const menuList = document.getElementById("mobile-menu");
  menuList.classList.toggle("hidden");
}
document.querySelector(".resNav").addEventListener("click", manuBtn);

// Array of skills

const skills = [
  {
    name: "HTML",
    description:
      "The backbone of web development, enabling the structuring of content for websites and applications using semantic and accessible markup.",
  },
  {
    name: "CSS",
    description:
      "Enhances the aesthetics of web applications by enabling responsive designs, animations, and visually appealing styles tailored to user experience.",
  },
  {
    name: "JavaScript",
    description: "Dynamic web development and scripting.",
  },
  {
    name: "C",
    description:
      "Efficient system-level programming and algorithm design with a focus on performance and memory management.",
  },
  {
    name: "Java",
    description:
      "Object-oriented programming for robust applications, including backend development and cross-platform software.",
  },
  {
    name: "TailwindCSS",
    description: "Rapidly building modern user interfaces.",
  },
  {
    name: "Git",
    description:
      "A robust version control system designed for tracking changes in code, enabling collaboration, and managing development workflows effectively.",
  },
  {
    name: "GitHub",
    description:
      "A cloud-based platform for Git repositories that fosters collaborative coding, version control, and seamless project management for developers worldwide.",
  },
];

const skillsGrid = document.getElementById("skills-grid");

skills.forEach((skill) => {
  const skillCard = document.createElement("div");
  skillCard.className =
    "bg-purple-600 shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between bg-purple-600";
  skillCard.innerHTML = `
      <h3 class="text-xl font-semibold">${skill.name}</h3>
      <p class="mt-2 text-sm flex-grow">${skill.description}</p>
    `;
  skillsGrid.appendChild(skillCard);
});

// Database

document.getElementById("dataForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send data to Google Apps Script Web App
  fetch(
    "https://script.google.com/macros/s/AKfycbzk-ke7eQpkCPRufDncOGvyQ1SDFNqxb7N_-lzRh3j_lHqOOzHQJAZfB3Nxnsl-GTVQ/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      alert("Form submitted successfully!");
      console.log("Response:", data);
    })
    .catch((error) => {
      alert("Failed to submit form. Please try again later.");
      console.error("Error:", error);
    });
});
