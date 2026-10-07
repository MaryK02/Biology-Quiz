const platformData = {
  subjects: {
    biology: {
      title: "General Biology",
      icon: "🧬",
      description: "Fundamental principles of living organisms, cellular biology, and ecology.",
      topics: [
        {
          id: "cell-bio-complete",
          title: "Cell Biology",
          description: "Cell theory, organelle micro-anatomy, membrane transport, and cellular respiration.",
          lessons: [
            {
              id: "cb-1",
              title: "1. Cell Theory & Universal Architecture",
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
              content: `
                <p>Organelles carry out specialized physiological tasks within the eukaryotic cell:</p>
                <ul style="padding-left: 1.2rem; line-height: 1.8;">
                  <li><strong>Nucleus:</strong> Contains genomic DNA and controls cellular gene expression.</li>
                  <li><strong>Mitochondria:</strong> Sites of aerobic cellular respiration generating ATP.</li>
                  <li><strong>Endoplasmic Reticulum (ER):</strong> Rough ER synthesizes proteins; Smooth ER synthesizes lipids and detoxifies metabolites.</li>
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
              content: `
                <p>The plasma membrane is a selectively permeable phospholipid bilayer featuring embedded proteins, cholesterol, and carbohydrates.</p>
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
          id: "organs-systemic",
          title: "Organ Systems, Anatomical Location & Pathology",
          description: "Comprehensive guide to major organs, physiological states, locations, and associated pathologies.",
          lessons: [
            {
              id: "anat-org-1",
              title: "1. Cardiovascular Organs (Heart & Blood Vessels)",
              content: `
                <p>The cardiovascular system distributes oxygen, nutrients, and hormones to peripheral tissues while removing metabolic metabolic wastes.</p>
                
                <h4 style="color: #064e3b; margin-top: 1.2rem;">Major Organ: The Heart</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Thoracic cavity, in the mediastinum between the lungs, resting on the diaphragm.</li>
                  <li><strong>Physiological State:</strong> Muscular four-chambered pump (2 atria, 2 ventricles) generating pressure to drive pulmonary and systemic blood flow continuously.</li>
                  <li><strong>Pathology:</strong>
                    <ul>
                      <li><em>Coronary Artery Disease (CAD):</em> Atherosclerotic plaque accumulation reducing arterial blood flow to myocardium.</li>
                      <li><em>Myocardial Infarction (Heart Attack):</em> Ischemic necrosis of heart tissue resulting from complete vascular occlusion.</li>
                    </ul>
                  </li>
                </ul>
              `,
              quickCheck: {
                question: "In which anatomical cavity and sub-region is the human heart located?",
                options: ["Abdominal cavity", "Thoracic cavity (Mediastinum)", "Pelvic cavity", "Pleural cavity"],
                correct: 1,
                explanation: "The heart is located in the thoracic cavity within the central compartment called the mediastinum."
              }
            },
            {
              id: "anat-org-2",
              title: "2. Digestive & Abdominal Organs (Stomach, Liver, Intestines)",
              content: `
                <p>The digestive system ingests, breaks down, absorbs nutrients, and eliminates indigestible waste products.</p>
                
                <h4 style="color: #064e3b; margin-top: 1rem;">1. Stomach</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Upper left quadrant of the abdominal cavity, inferior to the diaphragm.</li>
                  <li><strong>Physiological State:</strong> Secretes hydrochloric acid (pH 1.5–2.0) and pepsinogen to mechanically and chemically digest food into chyme.</li>
                  <li><strong>Pathology:</strong> <em>Peptic Ulcer Disease (PUD)</em> — Mucosal erosion caused by <i>H. pylori</i> infection or prolonged NSAID use.</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Liver</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Upper right quadrant of the abdominal cavity, protected by the ribcage.</li>
                  <li><strong>Physiological State:</strong> Synthesizes bile, processes absorbed nutrients, metabolizes toxins, and produces plasma proteins (albumin).</li>
                  <li><strong>Pathology:</strong> <em>Cirrhosis</em> — Irreversible scarring and fibrosis of hepatic tissue resulting from chronic alcohol abuse or hepatitis.</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">3. Small & Large Intestines</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Central, inferior abdominal cavity surrounded by the peritoneal membrane.</li>
                  <li><strong>Physiological State:</strong> Small intestine absorbs ~90% of nutrient molecules; large intestine absorbs water and electrolytes to form feces.</li>
                  <li><strong>Pathology:</strong> <em>Inflammatory Bowel Disease (IBD)</em> — Chronic autoimmune inflammation including Crohn's Disease and Ulcerative Colitis.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which organ located in the upper right abdominal quadrant is responsible for bile production and toxin neutralization?",
                options: ["Stomach", "Pancreas", "Liver", "Spleen"],
                correct: 2,
                explanation: "The liver occupies the upper right abdominal quadrant and is the body's primary metabolic organ, producing bile and detoxifying metabolites."
              }
            },
            {
              id: "anat-org-3",
              title: "3. Respiratory Organs (Lungs, Trachea & Diaphragm)",
              content: `
                <p>The respiratory system facilitates gas exchange ($\text{O}_2$ intake and $\text{CO}_2$ release) between the atmosphere and circulating blood.</p>
                
                <h4 style="color: #064e3b; margin-top: 1rem;">1. Lungs & Bronchial Tree</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Thoracic cavity within bilateral pleural sacs flanking the mediastinum.</li>
                  <li><strong>Physiological State:</strong> Passive elastic organs housing millions of microscopic alveoli where passive gas exchange occurs via capillary networks.</li>
                  <li><strong>Pathology:</strong>
                    <ul>
                      <li><em>Asthma:</em> Chronic airway inflammation leading to bronchospasm and hyper-responsiveness.</li>
                      <li><em>Pneumonia:</em> Infectious inflammation filling alveolar spaces with fluid or pus.</li>
                    </ul>
                  </li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Diaphragm</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Dome-shaped skeletal muscle separating the thoracic cavity from the abdominal cavity.</li>
                  <li><strong>Physiological State:</strong> Contracts downwards to create negative pulmonary pressure driving inspiration.</li>
                </ul>
              `,
              quickCheck: {
                question: "Where within the lungs does gas exchange specifically take place?",
                options: ["Trachea", "Bronchioles", "Alveoli", "Pleural Membrane"],
                correct: 2,
                explanation: "Alveoli are microscopic sac-like structures surrounded by blood capillaries where gas exchange occurs."
              }
            },
            {
              id: "anat-org-4",
              title: "4. Renal/Urinary Organs (Kidneys & Bladder)",
              content: `
                <p>The urinary system filters blood, maintains fluid/electrolyte balance, regulates blood pressure, and excretes nitrogenous waste.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">1. Kidneys</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Location:</strong> Retroperitoneal space against the posterior abdominal wall (T12–L3 level).</li>
                  <li><strong>Physiological State:</strong> Functional nephron units filter blood plasma, reabsorb required solutes, and excrete urea/creatinine into urine.</li>
                  <li><strong>Pathology:</strong> <em>Chronic Kidney Disease (CKD)</em> — Progressive loss of nephron function, often secondary to hypertension or diabetes.</li>
                </ul>
              `,
              quickCheck: {
                question: "What is the anatomical classification for the kidneys' location behind the peritoneal membrane?",
                options: ["Intraperitoneal", "Retroperitoneal", "Pleural", "Mediastinal"],
                correct: 1,
                explanation: "The kidneys reside behind the peritoneal lining along the posterior abdominal wall, classifying them as retroperitoneal."
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
              content: `
                <p>The Central Dogma of Molecular Biology describes the flow of genetic information: DNA → RNA → Protein.</p>
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
              content: `
                <p>Energy flows directionally through ecosystems starting from primary producers up through consumers.</p>
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
