// Portfolio App - Dynamic Project Loading
(function () {
  // Detect language from HTML lang attribute
  const lang = document.documentElement.lang === "en" ? "en" : "fr";
  const ui = uiTranslations[lang];

  // Helper to get localized value
  function getLocalized(value) {
    if (typeof value === "object" && value !== null) {
      return value[lang] || value.fr || value.en || value;
    }
    return value;
  }

  // Get project title (some have titleEn for English)
  function getProjectTitle(project) {
    if (lang === "en" && project.titleEn) {
      return project.titleEn;
    }
    return project.title;
  }

  // Render all projects in the grid
  function renderProjects() {
    const grid = document.querySelector(".portfolio-grid");
    if (!grid) return;

    grid.innerHTML = "";

    Object.keys(projectsData).forEach((id) => {
      const project = projectsData[id];
      const article = document.createElement("article");
      article.className = "portfolio-item";
      article.onclick = () => openModal(parseInt(id));

      article.innerHTML = `
        <div class="portfolio-image">
          <img src="${project.image}" alt="${getProjectTitle(project)}" loading="lazy" />
          <div class="portfolio-overlay">
            <span class="portfolio-link">${ui.viewDetails}</span>
          </div>
        </div>
        <div class="portfolio-info">
          <h3>${getProjectTitle(project)}</h3>
          <p>${getLocalized(project.description)}</p>
          <div class="portfolio-tags">
            ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
        </div>
      `;

      grid.appendChild(article);
    });

    // Apply scroll animations
    applyScrollAnimations();
  }

  // Open modal with project details
  window.openModal = function (id) {
    const project = projectsData[id];
    if (!project) return;

    document.getElementById("modal-title").textContent =
      getProjectTitle(project);
    document.getElementById("modal-year").textContent = getLocalized(
      project.year,
    );
    document.getElementById("modal-role").textContent = getLocalized(
      project.role,
    );

    // Set logo image if available
    const logoEl = document.getElementById("modal-logo");
    if (project.logoImage) {
      logoEl.style.backgroundImage = `url(${project.logoImage})`;
      logoEl.style.display = "block";
    } else {
      logoEl.style.display = "none";
    }

    // Set main illustration
    document.getElementById("modal-image").style.backgroundImage =
      `url(${project.image})`;

    document.getElementById("modal-tags").innerHTML = project.tags
      .map((t) => `<span class="tag">${t}</span>`)
      .join("");
    document.getElementById("modal-body").innerHTML = getLocalized(
      project.content,
    );

    let footer = "";
    if (project.link) {
      footer = `<a href="${project.link}" target="_blank" class="btn btn-primary">${ui.viewProject}</a>`;
    }
    document.getElementById("modal-footer").innerHTML = footer;

    document.getElementById("project-modal").classList.add("active");
    document.body.style.overflow = "hidden";
  };

  // Close modal
  window.closeModal = function () {
    document.getElementById("project-modal").classList.remove("active");
    document.body.style.overflow = "";
  };

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Scroll animations
  function applyScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll(".portfolio-item, .skill-category")
      .forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(item);
      });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Current year in footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Initialize
  document.addEventListener("DOMContentLoaded", renderProjects);

  // If DOM already loaded
  if (document.readyState !== "loading") {
    renderProjects();
  }
})();
