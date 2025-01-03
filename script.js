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

// Counter

document.addEventListener("DOMContentLoaded", () => {
  // Key for the counter in local storage
  const counterKey = "pageVisitCount";

  // Retrieve the current count from local storage
  let visitCount = localStorage.getItem(counterKey);

  // If no count exists, initialize it
  if (!visitCount) {
    visitCount = 0;
  } else {
    visitCount = parseInt(visitCount);
  }

  // Increment the count
  visitCount += 1;

  // Update local storage with the new count
  localStorage.setItem(counterKey, visitCount);

  // Display the updated count on the page
  document.getElementById("visitCounter").innerText = visitCount;
});

// Database

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtAgLfQ8Ml2CmKYgXCGT5j8BTLWucPb0",
  authDomain: "portfolio-2447b.firebaseapp.com",
  projectId: "portfolio-2447b",
  storageBucket: "portfolio-2447b.firebasestorage.app",
  messagingSenderId: "997101827775",
  appId: "1:997101827775:web:ee06fac428294c308c780a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.getElementById("dataForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    // Add data to Firestore
    await db.collection("contacts").add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    alert("Message sent successfully!");
    // Reset the form
    document.getElementById("dataForm").reset();
  } catch (error) {
    console.error("Error sending message: ", error);
    alert("Failed to send message.");
  }
});
