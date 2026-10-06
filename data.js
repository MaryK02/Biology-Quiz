const biologyData = {
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
      }
    ]
  }
};
