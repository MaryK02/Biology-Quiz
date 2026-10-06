// 1. Navigation Controller
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// 2. Dynamic Cell Biology Loader
function loadCellBiologyLessons() {
  const module = biologyData.cellBiology;
  const container = document.getElementById("lessonContainer");

  if (!container || !module) return;

  let htmlContent = `
    <div style="margin-bottom: 2rem;">
      <span style="background: #e0e7ff; color: #3730a3; padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase;">${module.category}</span>
      <h1 style="font-size: 1.75rem; color: #0f172a; margin: 12px 0 6px 0;">${module.title}</h1>
      <p style="color: #64748b; font-size: 0.95rem; margin: 0;">${module.description}</p>
    </div>
  `;

  module.lessons.forEach((lesson) => {
    htmlContent += `
      <div class="coursera-card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 0.85rem; color: #64748b; font-weight: 600;">⏱️ ${lesson.duration}</span>
          <span style="font-size: 0.85rem; background: #ecfdf5; color: #065f46; padding: 2px 10px; border-radius: 6px; font-weight: 600;">Active Module</span>
        </div>

        <h2 style="font-size: 1.25rem; color: #1e293b; margin: 0 0 12px 0;">${lesson.title}</h2>
        <div style="line-height: 1.7; color: #334155; font-size: 0.98rem;">${lesson.content}</div>

        <!-- Quick Knowledge Check Widget -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; padding: 1.25rem; border-radius: 8px; margin-top: 1.5rem;">
          <h4 style="margin: 0 0 8px 0; color: #0369a1; font-size: 1rem; display: flex; align-items: center; gap: 6px;">
            💡 Quick Knowledge Check
          </h4>
          <p style="margin: 0 0 14px 0; font-weight: 600; color: #1e293b;">${lesson.quickCheck.question}</p>
          
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${lesson.quickCheck.options.map((optionText, idx) => `
              <button class="quiz-option-btn" onclick="checkAnswer(this, ${idx}, ${lesson.quickCheck.correct}, '${lesson.quickCheck.explanation.replace(/'/g, "\\'")}')">
                ${optionText}
              </button>
            `).join('')}
          </div>
          <div class="feedback-box" style="margin-top: 12px; font-weight: 600; font-size: 0.92rem;"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
  showScreen("lessonsScreen");
}

// 3. Quiz Feedback Engine
function checkAnswer(btnElement, selectedIndex, correctIndex, explanation) {
  const parent = btnElement.parentElement;
  const feedbackEl = parent.parentElement.querySelector(".feedback-box");
  const allBtns = parent.querySelectorAll(".quiz-option-btn");

  // Reset button states
  allBtns.forEach(btn => {
    btn.style.borderColor = "#cbd5e1";
    btn.style.background = "#ffffff";
  });

  if (selectedIndex === correctIndex) {
    btnElement.style.borderColor = "#16a34a";
    btnElement.style.background = "#f0fdf4";
    feedbackEl.style.color = "#15803d";
    feedbackEl.innerHTML = `✅ Correct! ${explanation}`;
  } else {
    btnElement.style.borderColor = "#dc2626";
    btnElement.style.background = "#fef2f2";
    feedbackEl.style.color = "#b91c1c";
    feedbackEl.innerHTML = `❌ Incorrect. ${explanation}`;
  }
}
