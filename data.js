const platformData = {
  // 1. MAIN SUBJECT BRANCHES & SUBTOPICS
  subjects: {
    biology: {
      title: "General Biology",
      icon: "🧬",
      description: "Fundamental principles of living organisms, cellular biology, and ecology.",
      topics: [
        {
          id: "cell-bio-complete",
          title: "Comprehensive Cell Biology",
          description: "Cell theory, organelle micro-anatomy, membrane transport, and cellular respiration.",
          lessons: [
            {
              id: "cb-1",
              title: "1. Cell Theory & Universal Architecture",
              duration: "10 mins read",
              content: `
                <p>The cell is the structural, functional, and fundamental unit of all living organisms. Cell theory states that all living things are composed of cells, the cell is the basic unit of life, and all cells arise from pre-existing cells.</p>
                <h4 style="color: #0f172a; margin-top: 1rem;">Prokaryotic vs. Eukaryotic Cells:</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Prokaryotes:</strong> Lack a membrane-bound nucleus or membrane-bound organelles (e.g., Bacteria and Archaea).</li>
                  <li><strong>Eukaryotes:</strong> Possess a distinct nucleus enclosing genetic material and membrane-bound organelles (e.g., Plant, Animal, and Fungal cells).</li>
                </ul>
              `,
              quickCheck: {
                question: "Which of the following is a key feature that distinguishes eukaryotic cells from prokaryotic cells?",
                options: ["Presence of Ribosomes", "Membrane-bound Nucleus", "Presence of Plasma Membrane", "DNA as genetic material"],
                correct: 1,
                explanation: "Eukaryotic cells uniquely enclose their DNA within a membrane-bound nucleus, whereas prokaryotic DNA floats freely in the nucleoid region."
              }
            },
            {
              id: "cb-2",
              title: "2. Organelle Anatomy & Biochemical Roles",
              duration: "12 mins read",
              content: `
                <p>Organelles carry out specialized physiological tasks within the eukaryotic cell:</p>
                <ul style="padding-left: 1.2rem; line-height: 1.8;">
                  <li><strong>Nucleus:</strong> Contains genomic DNA and controls cellular gene expression.</li>
                  <li><strong>Mitochondria:</strong> Sites of aerobic cellular respiration generating ATP.</li>
                  <li><strong>Endoplasmic Reticulum (ER):</strong> Rough ER (studded with ribosomes) synthesizes proteins; Smooth ER synthesizes lipids and detoxifies metabolites.</li>
                  <li><strong>Golgi Apparatus:</strong> Modifies, sorts, and packages proteins for secretion or organelle delivery.</li>
                  <li><strong>Lysosomes:</strong> Contain hydrolytic enzymes for intracellular digestion.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which organelle is responsible for synthesizing lipids and detoxifying drugs?",
                options: ["Rough Endoplasmic Reticulum", "Smooth Endoplasmic Reticulum", "Golgi Body", "Lysosome"],
                correct: 1,
                explanation: "Smooth ER lacks ribosomes and specializes in lipid biosynthesis, carbohydrate metabolism, and drug detoxification."
              }
            },
            {
              id: "cb-3",
              title: "3. Membrane Structure & Transport Dynamics",
              duration: "10 mins read",
              content: `
                <p>The plasma membrane is a selectively permeable phospholipid bilayer featuring embedded proteins, cholesterol, and carbohydrates (Fluid Mosaic Model).</p>
                <h4 style="color: #0f172a; margin-top: 1rem;">Transport Mechanisms:</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Passive Transport:</strong> Down a concentration gradient without ATP expenditure (Diffusion, Osmosis, Facilitated Diffusion).</li>
                  <li><strong>Active Transport:</strong> Against a concentration gradient requiring ATP expenditure (e.g., Sodium-Potassium Pump).</li>
                </ul>
              `,
              quickCheck: {
                question: "Which transport process pushes molecules against their concentration gradient using ATP?",
                options: ["Simple Diffusion", "Osmosis", "Active Transport", "Facilitated Diffusion"],
                correct: 2,
                explanation: "Active transport requires cellular energy (ATP) to pump substances against their natural concentration gradient."
              }
            }
          ]
        }
      ]
    },

    physiology: {
      title: "Physiology",
      icon: "⚡",
      description: "Systemic body functions, homeostasis, and metabolic regulatory mechanisms.",
      topics: [
        {
          id: "cardio-phys",
          title: "Cardiovascular Physiology & Hemodynamics",
          description: "Heart cardiac cycle, systemic circulation, and blood pressure dynamics.",
          lessons: [
            {
              id: "phys-1",
              title: "1. The Cardiac Cycle & Systemic Circulation",
              duration: "12 mins read",
              content: `
                <p>The mammalian circulatory system uses a four-chambered heart to drive dual circulation (Pulmonary and Systemic loops).</p>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Systole:</strong> Ventricular contraction pumping blood into pulmonary and aortic arteries.</li>
                  <li><strong>Diastole:</strong> Ventricular relaxation and chamber filling.</li>
                </ul>
              `,
              quickCheck: {
                question: "During which phase of the cardiac cycle do the heart chambers relax and fill with blood?",
                options: ["Systole", "Diastole", "Depolarization", "Action Potential"],
                correct: 1,
                explanation: "Diastole represents the relaxation phase where heart muscle relaxes, allowing blood to fill the ventricles."
              }
            }
          ]
        }
      ]
    },

    anatomy: {
      title: "Anatomy",
      icon: "🫀",
      description: "Structural organization of tissues, organs, and human body architecture.",
      topics: [
        {
          id: "tissue-anatomy",
          title: "Human Histology & Primary Tissues",
          description: "Epithelial, connective, muscular, and nervous tissue structural organization.",
          lessons: [
            {
              id: "anat-1",
              title: "1. Classification of Primary Tissues",
              duration: "10 mins read",
              content: `
                <p>The human body consists of four primary tissue types:</p>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Epithelial:</strong> Covers body surfaces and lines cavities.</li>
                  <li><strong>Connective:</strong> Supports, protects, and binds tissues (Bone, Blood, Cartilage).</li>
                  <li><strong>Muscle:</strong> Enables body movement (Skeletal, Cardiac, Smooth).</li>
                  <li><strong>Nervous:</strong> Transmits electrical impulses throughout the nervous system.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which primary tissue type is blood classified under?",
                options: ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Nervous Tissue"],
                correct: 1,
                explanation: "Blood is a specialized liquid connective tissue consisting of cellular elements in an extracellular matrix (plasma)."
              }
            }
          ]
        }
      ]
    },

    genetics: {
      title: "Genetics",
      icon: "🧬",
      description: "Heredity, DNA structure, gene expression, and molecular genetics.",
      topics: [
        {
          id: "mendelian-genetics",
          title: "Molecular Genetics & Inheritance Patterns",
          description: "Mendel's Laws, DNA replication, transcription, and translation.",
          lessons: [
            {
              id: "gen-1",
              title: "1. DNA Structure & Central Dogma",
              duration: "11 mins read",
              content: `
                <p>The Central Dogma of Molecular Biology describes the flow of genetic information: <strong>DNA $\rightarrow$ RNA $\rightarrow$ Protein</strong>.</p>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Replication:</strong> Copying DNA prior to cell division.</li>
                  <li><strong>Transcription:</strong> Synthesizing messenger RNA (mRNA) from a DNA template.</li>
                  <li><strong>Translation:</strong> Ribosomes reading mRNA codons to assemble amino acid protein chains.</li>
                </ul>
              `,
              quickCheck: {
                question: "What process converts mRNA sequences into functional amino acid protein chains?",
                options: ["Transcription", "Translation", "Replication", "Reverse Transcription"],
                correct: 1,
                explanation: "Translation occurs at the ribosome where mRNA codons are translated into specific protein chains."
              }
            }
          ]
        }
      ]
    },

    naturalSciences: {
      title: "Natural Sciences",
      icon: "🌿",
      description: "Ecology, environmental dynamics, biodiversity, and evolutionary biology.",
      topics: [
        {
          id: "ecosystem-dynamics",
          title: "Ecology & Ecosystem Dynamics",
          description: "Energy flow, trophic levels, biogeochemical cycles, and environmental balance.",
          lessons: [
            {
              id: "nat-1",
              title: "1. Trophic Levels & Energy Flow",
              duration: "9 mins read",
              content: `
                <p>Energy flows directionally through ecosystems starting from primary producers (autotrophs) up through primary, secondary, and tertiary consumers.</p>
                <p>The <strong>10% Rule</strong> states that roughly only 10% of energy stored at any trophic level is converted into biomass at the next level.</p>
              `,
              quickCheck: {
                question: "According to ecological principles, approximately how much energy is transferred from one trophic level to the next?",
                options: ["50%", "25%", "10%", "90%"],
                correct: 2,
                explanation: "According to Lindeman's 10% Law, about 10% of energy is transferred to the next trophic level, while 90% is lost as metabolic heat."
              }
            }
          ]
        }
      ]
    }
  },

  // 2. QUIZ CHALLENGE DATABASE
  quizBank: [
    {
      question: "Which organelle contains hydrolytic enzymes responsible for breaking down cellular waste?",
      options: ["Peroxisome", "Lysosome", "Ribosome", "Golgi Apparatus"],
      correct: 1,
      explanation: "Lysosomes contain acidic hydrolytic enzymes that break down waste materials and cellular debris."
    },
    {
      question: "What is the primary function of hemoglobin in human blood?",
      options: ["Blood Clotting", "Oxygen Transport", "Immune Defense", "Hormone Production"],
      correct: 1,
      explanation: "Hemoglobin is an iron-rich protein in red blood cells that binds oxygen in the lungs and transports it throughout the body."
    },
    {
      question: "In DNA, which nitrogenous base pairs specifically with Guanine?",
      options: ["Adenine", "Thymine", "Cytosine", "Uracil"],
      correct: 2,
      explanation: "According to Chargaff's rules, Guanine always forms three hydrogen bonds with Cytosine in DNA."
    }
  ]
};
