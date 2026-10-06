const biologyData = {
  // 1. CELL BIOLOGY MODULE
  cellBiology: {
    title: "Cell Biology",
    category: "Foundational Biology",
    description: "Master the fundamental building blocks of life, cell organelles, and microscopic transport systems.",
    lessons: [
      {
        id: "cell-101",
        title: "Lesson 1: Cellular Architecture & Organelles",
        duration: "10 mins read",
        content: `
          <p>The cell is the basic structural, functional, and biological unit of all known living organisms. Cells are often called the <em>"building blocks of life"</em>.</p>
          <h3 style="color: #0f172a; margin-top: 1.2rem;">Key Organelles & Their Functions:</h3>
          <ul style="padding-left: 1.2rem; line-height: 1.8;">
            <li><strong>Nucleus:</strong> Houses genomic DNA and coordinates cell activities like growth and protein synthesis.</li>
            <li><strong>Mitochondria:</strong> Converts glucose into cellular energy (ATP) through respiration.</li>
            <li><strong>Cell Membrane:</strong> Semi-permeable phospholipid bilayer regulating movement in and out of the cell.</li>
            <li><strong>Ribosomes:</strong> Molecular machines responsible for assembling proteins.</li>
          </ul>
        `,
        quickCheck: {
          question: "Which organelle is primarily responsible for ATP energy production during cellular respiration?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Body"],
          correct: 1,
          explanation: "Mitochondria generate the majority of cellular ATP, earning them the title 'powerhouse of the cell'."
        }
      },
      {
        id: "cell-102",
        title: "Lesson 2: Membrane Transport Systems",
        duration: "8 mins read",
        content: `
          <p>Cells move materials across their membranes via passive and active transport mechanisms to maintain homeostasis.</p>
          <h3 style="color: #0f172a; margin-top: 1.2rem;">Transport Types:</h3>
          <ul style="padding-left: 1.2rem; line-height: 1.8;">
            <li><strong>Diffusion:</strong> Movement of molecules from high to low concentration without energy input.</li>
            <li><strong>Osmosis:</strong> Diffusion of water molecules across a selectively permeable membrane.</li>
            <li><strong>Active Transport:</strong> Movement of molecules against their concentration gradient requiring energy (ATP).</li>
          </ul>
        `,
        quickCheck: {
          question: "Which type of transport requires ATP energy to move molecules across the membrane?",
          options: ["Osmosis", "Simple Diffusion", "Active Transport", "Facilitated Diffusion"],
          correct: 2,
          explanation: "Active transport requires cellular energy (ATP) because it pushes substances against their natural concentration gradient."
        }
      }
    ]
  },

  // 2. HUMAN PHYSIOLOGY MODULE
  humanPhysiology: {
    title: "Human Physiology",
    category: "Organ Systems",
    description: "Explore the complex systems maintaining human life, homeostasis, and systemic functions.",
    lessons: [
      {
        id: "phys-101",
        title: "Lesson 1: The Circulatory System & Blood Flow",
        duration: "12 mins read",
        content: `
          <p>The human circulatory system delivers oxygen, nutrients, and hormones to tissues while removing metabolic waste products like carbon dioxide.</p>
          <h3 style="color: #0f172a; margin-top: 1.2rem;">Core Components:</h3>
          <ul style="padding-left: 1.2rem; line-height: 1.8;">
            <li><strong>Heart:</strong> A four-chambered muscular pump driving systemic and pulmonary circulation.</li>
            <li><strong>Arteries:</strong> High-pressure vessels carrying oxygenated blood away from the heart.</li>
            <li><strong>Veins:</strong> Low-pressure vessels returning deoxygenated blood back to the heart.</li>
          </ul>
        `,
        quickCheck: {
          question: "Which blood vessels carry oxygenated blood away from the heart to body tissues?",
          options: ["Veins", "Arteries", "Capillaries", "Venules"],
          correct: 1,
          explanation: "Arteries carry oxygenated blood away from the heart, with the aorta being the largest artery in the body."
        }
      }
    ]
  },

  // 3. PAST QUESTIONS BANK
  pastQuestions: [
    {
      id: "pq-1",
      topic: "Cell Biology",
      question: "Which of the following cellular structures is present in plant cells but absent in animal cells?",
      options: ["Mitochondria", "Cell Wall", "Endoplasmic Reticulum", "Ribosome"],
      correct: 1,
      explanation: "Plant cells possess a rigid cell wall composed of cellulose for structural support, which animal cells lack."
    },
    {
      id: "pq-2",
      topic: "Human Physiology",
      question: "Where in the human digestive system does the primary absorption of nutrients occur?",
      options: ["Stomach", "Large Intestine", "Small Intestine", "Esophagus"],
      correct: 2,
      explanation: "The small intestine (specifically the jejunum and ileum) is lined with villi and microvilli designed for maximum nutrient absorption."
    }
  ]
};
