const experienceData = {
    superstars: {
        title: "Software Developer Intern",
        meta: "Superstars Inc. · Sep 2025 - Dec 2025",
        points: [
            "Reduced application search latency by 35% by designing optimized backend search APIs and caching workflows.",
            "Improved backend scalability and responsiveness by restructuring request handling and cutting redundant network calls.",
            "Improved production system reliability through structured logging, root cause analysis, and backend failure debugging.",
            "Contributed to architecture improvements, code reviews, and production deployments in agile delivery cycles."
        ]
    },
    research: {
        title: "Research Assistant",
        meta: "Dr. D. Y. Patil Unitech Society · Aug 2023 - Jun 2024",
        points: [
            "Designed automated data ingestion pipelines and backend services with Node.js and Express for scalable ML experimentation.",
            "Improved data processing efficiency by 40% by deploying and optimizing EC2, S3, and Lambda infrastructure.",
            "Built modular backend pipelines that improved benchmarking consistency and deep learning experiment evaluation.",
            "Published peer-reviewed research on plant disease detection using CNNs and transfer learning."
        ]
    },
    bajaj: {
        title: "Engineering Intern",
        meta: "Bajaj Auto Ltd. · Feb 2023 - Mar 2023",
        points: [
            "Improved operational visibility and reporting efficiency by 40% with Power BI dashboards for automated aggregation and visualization.",
            "Reduced manual data processing effort by 30% through data collection and transformation automation.",
            "Analyzed operational and financial data to identify inefficiencies and present actionable business insights."
        ]
    }
};

const projectData = {
    wardrobe: {
        title: "AI-Powered Wardrobe & Outfit Recommendation App",
        meta: "Flutter · Firebase Auth · Firestore · Cloud Storage",
        points: [
            "Reduced outfit selection time by 40% with a full-stack wardrobe and recommendation workflow.",
            "Improved recommendation relevance by 30% using structured attributes like category, color, occasion, and season.",
            "Maintained sub-300 ms response latency through optimized Firestore models and indexed queries.",
            "Led architecture, backend integration, state management, and production-ready implementation."
        ],
        action: {
            label: "Private Repository",
            href: ""
        }
    },
    kai: {
        title: "Kai.v3: AI-Powered LeetCode Problem-Solving Mentor",
        meta: "Chrome Extension · Node.js · Express · Ollama",
        points: [
            "Built a Manifest V3 extension that provides real-time hints, debugging guidance, and optimization nudges without dumping full solutions.",
            "Reduced context switching during LeetCode practice with injected overlays and background workers.",
            "Enabled low-latency local AI inference through a Node.js and Express server integrated with Ollama.",
            "Implemented automated post-submission feedback, multi-level explanations, and hotkeys for fast code snapshot capture."
        ],
        action: {
            label: "View GitHub Repository",
            href: "https://github.com/SThor07/kai_leetcodementor"
        }
    }
};

const skillData = {
    languages: ["Python", "TypeScript", "JavaScript", "Dart", "Java", "SQL"],
    backend: ["REST APIs", "Express", "Modular Architecture", "System Integration", "Firebase", "Query Optimization"],
    cloud: ["AWS EC2", "AWS S3", "AWS Lambda", "PostgreSQL", "Firestore", "GCP Fundamentals"],
    workflow: ["Git", "Debugging", "Logging", "Testing", "CI/CD", "Agile/Scrum"]
};

const heroFocusItems = [
    {
        title: "Production-grade backend systems",
        text: "Designing reliable APIs, optimizing latency, and improving system behavior under real usage."
    },
    {
        title: "LLM and RAG product workflows",
        text: "Building AI experiences that guide users well, stay fast, and avoid turning into novelty demos."
    },
    {
        title: "Cloud-backed data and ML pipelines",
        text: "Using AWS and strong data modeling to make experimentation and analytics repeatable at scale."
    }
];

const experienceButtons = document.querySelectorAll(".timeline-item");
const projectButtons = document.querySelectorAll(".project-item");
const skillButtons = document.querySelectorAll(".skill-tab");
const experienceDetail = document.getElementById("experienceDetail");
const projectDetail = document.getElementById("projectDetail");
const skillPanel = document.getElementById("skillPanel");
const themeToggle = document.getElementById("themeToggle");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const heroFocusTitle = document.getElementById("heroFocusTitle");
const heroFocusText = document.getElementById("heroFocusText");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const root = document.documentElement;

function renderSpotlight(container, data, label, withAction = false) {
    const points = data.points.map((point) => `<li>${point}</li>`).join("");
    const actionMarkup = withAction
        ? data.action.href
            ? `<div class="spotlight-actions"><a class="button button-primary" href="${data.action.href}" target="_blank" rel="noopener">${data.action.label}</a></div>`
            : `<div class="spotlight-actions"><span class="button button-muted">${data.action.label}</span></div>`
        : "";

    container.innerHTML = `
        <p class="mini-label">${label}</p>
        <h3>${data.title}</h3>
        <p class="spotlight-meta">${data.meta}</p>
        <ul class="spotlight-list">${points}</ul>
        ${actionMarkup}
    `;
}

experienceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = experienceData[button.dataset.experience];
        experienceButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-selected", String(active));
        });
        renderSpotlight(experienceDetail, selected, "Role spotlight");
    });
});

projectButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = projectData[button.dataset.project];
        projectButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderSpotlight(projectDetail, selected, "Project spotlight", true);
    });
});

function renderSkillPanel(key) {
    const chips = skillData[key]
        .map((item) => `<span>${item}</span>`)
        .join("");
    skillPanel.innerHTML = `<div class="skill-chip-grid">${chips}</div>`;
}

skillButtons.forEach((button) => {
    button.addEventListener("click", () => {
        skillButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-selected", String(active));
        });
        renderSkillPanel(button.dataset.skillPanel);
    });
});

function applyTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

function getPreferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return prefersDark.matches ? "dark" : "light";
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
});

prefersDark.addEventListener("change", (event) => {
    if (!localStorage.getItem("theme")) {
        applyTheme(event.matches ? "dark" : "light");
    }
});

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll('.nav-menu a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14
});

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

let focusIndex = 0;
setInterval(() => {
    focusIndex = (focusIndex + 1) % heroFocusItems.length;
    heroFocusTitle.textContent = heroFocusItems[focusIndex].title;
    heroFocusText.textContent = heroFocusItems[focusIndex].text;
}, 3200);

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        formStatus.textContent = "Sending message...";
        formStatus.className = "form-status";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            contactForm.reset();
            formStatus.textContent = "Message sent. I will get back to you soon.";
            formStatus.className = "form-status is-success";
        } catch (error) {
            formStatus.textContent = "Message failed to send. Please email me directly at shrivrath9@gmail.com.";
            formStatus.className = "form-status is-error";
        }
    });
}
