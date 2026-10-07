// Local Storage Progress State
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];

// 1. Screen Navigation Controller
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

// 2. Open Subtopics View
function openSubjectTopics(subjectKey) {
  const subject = platformData.subjects[subjectKey];
  const container = document.getElementById("topicsContainer");

  if (!container || !subject) return;

  let htmlContent = `
    <div style="margin-bottom: 1.5rem;">
      <span style="font-size: 2.2rem;">${subject.icon}</span>
      <h1 style="font-size: 1.6rem; color: #0f172a; margin: 8px 0 4px 0;">${subject.title}</h1>
      <p style="color: #64748b; font-size: 0.95rem; margin: 0;">${subject.description}</p>
    </div>
  `;

  subject.topics.forEach((topic) => {
    htmlContent += `
      <div class="coursera-card">
        <h3 style="font-size: 1.15rem; color: #0f172a; margin: 0 0 6px 0;">${topic.title}</h3>
        <p style="color: #475569; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1rem;">${topic.description}</p>
        <button class="btn-primary" onclick="loadTopicLessons('${subjectKey}', '${topic.id}')">Start Subtopic Lessons (${topic.lessons.length}) →</button>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
  showScreen("topicsScreen");
}

// 3. Render Sequential Lessons with Unlock Gating
function loadTopicLessons(subjectKey, topicId) {
  const subject = platformData.subjects[subjectKey];
  const topic = subject.topics.find(t => t.id === topicId);
  const container = document.getElementById("lessonContainer");

  if (!container || !topic) return;

  let htmlContent = `
    <div style="margin-bottom: 1.5rem;">
      <span style="font-size: 0.8rem; background: #e0e7ff; color: #3730a3; padding: 4px 12px; border-radius: 999px; font-weight: 700; text-transform: uppercase;">${subject.title}</span>
      <h1 style="font-size: 1.5rem; color: #0f172a; margin: 10px 0 4px 0;">${topic.title}</h1>
      <p style="color: #64748b; font-size: 0.92rem; margin: 0;">${topic.description}</p>
    </div>
  `;

  topic.lessons.forEach((lesson, index) => {
    const isCompleted = completedLessons.includes(lesson.id);
    // First lesson is always unlocked; subsequent lessons require previous lesson completion
    const isUnlocked = index === 0 || completedLessons.includes(topic.lessons[index - 1].id);

    htmlContent += `
      <div id="card-${lesson.id}" class="coursera-card" style="margin-bottom: 1.5rem; opacity: ${isUnlocked ? '1' : '0.6'};">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-size: 0.85rem; font-weight: 700; color: #334155;">Lesson ${index + 1}</span>
          <span id="badge-${lesson.id}" style="font-size: 0.8rem; background: ${isCompleted ? '#dcfce7' : (isUnlocked ? '#e0f2fe' : '#f1f5f9')}; color: ${isCompleted ? '#15803d' : (isUnlocked ? '#0369a1' : '#64748b')}; padding: 3px 10px; border-radius: 6px; font-weight: 700;">
            ${isCompleted ? '✓ Passed' : (isUnlocked ? 'Unlocked' : '🔒 Locked')}
          </span>
        </div>

        <h2 style="font-size: 1.2rem; color: #1e293b; margin: 0 0 10px 0;">${lesson.title}</h2>
        
        ${isUnlocked ? `
          <div style="line-height: 1.7; color: #334155; font-size: 0.95rem;">${lesson.content}</div>

          <!-- Quick Check Gate -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0284c7; padding: 1.2rem; border-radius: 8px; margin-top: 1.25rem;">
            <h4 style="margin: 0 0 8px 0; color: #0369a1; font-size: 0.98rem;">💡 Master Check (Score 50%+ to Unlock Next Lesson)</h4>
            <p style="margin: 0 0 12px 0; font-weight: 600; color: #1e293b;">${lesson.quickCheck.question}</p>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${lesson.quickCheck.options.map((optionText, idx) => `
                <button class="quiz-option-btn" onclick="checkLessonAnswer(this, '${subjectKey}', '${topicId}', '${lesson.id}', ${idx}, ${lesson.quickCheck.correct}, '${lesson.quickCheck.explanation.replace(/'/g, "\\'")}')">
                  ${optionText}
                </button>
              `).join('')}
            </div>
            <div class="feedback-box" style="margin-top: 12px; font-weight: 600; font-size: 0.9rem;"></div>
          </div>
        ` : `
          <div style="padding: 1rem; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; text-align: center; color: #64748b; font-size: 0.9rem;">
            🔒 Complete the quiz in Lesson ${index} with at least 50% to unlock this lesson.
          </div>
        `}
      </div>
    `;
  });

  container.innerHTML = htmlContent;
  showScreen("lessonsScreen");
}

// 4. Verify Quiz & Handle Unlock Logic
function checkLessonAnswer(btnElement, subjectKey, topicId, lessonId, selectedIndex, correctIndex, explanation) {
  const parent = btnElement.parentElement;
  const feedbackEl = parent.parentElement.querySelector(".feedback-box");
  const allBtns = parent.querySelectorAll(".quiz-option-btn");

  allBtns.forEach(btn => {
    btn.style.borderColor = "#cbd5e1";
    btn.style.background = "#ffffff";
  });

  if (selectedIndex === correctIndex) {
    btnElement.style.borderColor = "#16a34a";
    btnElement.style.background = "#f0fdf4";
    feedbackEl.style.color = "#15803d";
    feedbackEl.innerHTML = `✅ Correct (100% Score)! ${explanation} <br><br><strong>🎉 Next lesson unlocked! Reloading view...</strong>`;

    if (!completedLessons.includes(lessonId)) {
      completedLessons.push(lessonId);
      localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }

    // Refresh view after short delay to unlock next card
    setTimeout(() => {
      loadTopicLessons(subjectKey, topicId);
    }, 1200);

  } else {
    btnElement.style.borderColor = "#dc2626";
    btnElement.style.background = "#fef2f2";
    feedbackEl.style.color = "#b91c1c";
    feedbackEl.innerHTML = `❌ Score: 0%. ${explanation}<br><br><strong>⚠️ Score is below 50%. Please review the lesson content above and try again to unlock the next lesson.</strong>`;
  }
}

// 5. Standalone Quiz Screen
function loadQuizScreen() {
  const container = document.getElementById("quizContainer");
  const questions = platformData.quizBank;

  if (!container || !questions) return;

  let htmlContent = `
    <div style="margin-bottom: 1.5rem;">
      <span style="font-size: 0.8rem; background: #f3e8ff; color: #6b21a8; padding: 4px 12px; border-radius: 999px; font-weight: 700; text-transform: uppercase;">Assessment</span>
      <h1 style="font-size: 1.6rem; color: #0f172a; margin: 8px 0 4px 0;">🧠 Rapid Biology Quiz</h1>
      <p style="color: #64748b; font-size: 0.92rem; margin: 0;">Test your retention across all core biology branches.</p>
    </div>
  `;

  questions.forEach((q, index) => {
    htmlContent += `
      <div class="coursera-card" style="margin-bottom: 1.25rem;">
        <span style="font-size: 0.78rem; background: #e2e8f0; color: #334155; padding: 2px 8px; border-radius: 4px; font-weight: 700;">Question ${index + 1}</span>
        <h3 style="font-size: 1.05rem; color: #1e293b; margin: 10px 0 12px 0;">${q.question}</h3>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${q.options.map((optionText, idx) => `
            <button class="quiz-option-btn" onclick="checkGeneralQuiz(this, ${idx}, ${q.correct}, '${q.explanation.replace(/'/g, "\\'")}')">
              ${optionText}
            </button>
          `).join('')}
        </div>
        <div class="feedback-box" style="margin-top: 12px; font-weight: 600; font-size: 0.9rem;"></div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
  showScreen("quizScreen");
}

function checkGeneralQuiz(btnElement, selectedIndex, correctIndex, explanation) {
  const parent = btnElement.parentElement;
  const feedbackEl = parent.parentElement.querySelector(".feedback-box");
  const allBtns = parent.querySelectorAll(".quiz-option-btn");

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

// 6. Comprehensive Progress Tracker
function loadProgressScreen() {
  const container = document.getElementById("progressContainer");
  if (!container) return;

  let totalLessons = 0;
  let subjectBreakdown = "";

  Object.keys(platformData.subjects).forEach(sKey => {
    const subj = platformData.subjects[sKey];
    let subjTotal = 0;
    let subjCompleted = 0;

    subj.topics.forEach(t => {
      subjTotal += t.lessons.length;
      t.lessons.forEach(l => {
        if (completedLessons.includes(l.id)) subjCompleted++;
      });
    });

    totalLessons += subjTotal;
    const subjPercent = subjTotal > 0 ? Math.round((subjCompleted / subjTotal) * 100) : 0;

    subjectBreakdown += `
      <div style="margin-bottom: 1rem; text-align: left; background: #f8fafc; padding: 1rem; border-radius: 8px; border: 1px solid #e2e8f0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-weight: 600; font-size: 0.92rem; color: #1e293b;">
          <span>${subj.icon} ${subj.title}</span>
          <span>${subjCompleted}/${subjTotal} (${subjPercent}%)</span>
        </div>
        <div style="width: 100%; background: #e2e8f0; height: 8px; border-radius: 999px; overflow: hidden;">
          <div style="width: ${subjPercent}%; background: #064e3b; height: 100%;"></div>
        </div>
      </div>
    `;
  });

  const completedCount = completedLessons.length;
  const overallPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  container.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span style="font-size: 0.8rem; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 999px; font-weight: 700; text-transform: uppercase;">Analytics</span>
      <h1 style="font-size: 1.6rem; color: #0f172a; margin: 8px 0 4px 0;">📊 Progress Check</h1>
      <p style="color: #64748b; font-size: 0.92rem; margin: 0;">Track your unlocking progress across all biology subjects.</p>
    </div>

    <div class="coursera-card" style="text-align: center; padding: 1.5rem;">
      <h2 style="font-size: 2.5rem; color: #064e3b; margin: 0;">${overallPercentage}%</h2>
      <p style="color: #64748b; font-size: 0.92rem; margin: 4px 0 1.25rem 0;">Overall Platform Mastery</p>

      <div style="width: 100%; background: #e2e8f0; height: 12px; border-radius: 999px; overflow: hidden; margin-bottom: 1.5rem;">
        <div style="width: ${overallPercentage}%; background: #064e3b; height: 100%; transition: width 0.4s ease;"></div>
      </div>

      <h4 style="text-align: left; color: #0f172a; margin: 0 0 10px 0; font-size: 1rem;">Subject Breakdown:</h4>
      ${subjectBreakdown}
    </div>
  `;

  showScreen("progressScreen");
}
