/* ==========================================================================
   BIOLOGY HUB - CONTENT DATA BASE
   Subject: Cell Biology
   ========================================================================== */

const biologyData = {
  cellBiology: {
    title: "Cell Biology",
    description: "Master cell structure, organelles, membrane transport, and cellular reproduction.",
    
    // ------------------------------------------------------------------------
    // LESSONS MODULE
    // ------------------------------------------------------------------------
    lessons: [
      {
        id: "cb_lesson_1",
        title: "Lesson 1: Introduction to Cell Structure & Diversity",
        duration: "10 mins",
        content: `
          <h3>The Fundamental Unit of Life</h3>
          <p>Every living organism—from microscopic bacteria to giant blue whales—is built from cells. The cell theory, formulated in the 19th century, sets three basic rules:</p>
          <ul>
            <li>All living things are made of one or more cells.</li>
            <li>The cell is the basic functional and structural unit of life.</li>
            <li>All cells arise from pre-existing cells through cell division.</li>
          </ul>

          <h3>Prokaryotes vs. Eukaryotes</h3>
          <p>Cells fall into two main structural categories based on whether they enclose their genetic material inside a nucleus:</p>

          <h4>1. Prokaryotic Cells</h4>
          <p>These are simpler, smaller cells (typically 0.1 to 5 micrometers) found in bacteria and archaea. Key features include:</p>
          <ul>
            <li><strong>No enclosed nucleus:</strong> Genetic material floats freely in a region called the <em>nucleoid</em>.</li>
            <li><strong>No membrane-bound organelles:</strong> They lack mitochondria, endoplasmic reticulum, or Golgi bodies.</li>
            <li><strong>Circular DNA:</strong> Usually a single chromosome, often accompanied by small loops of extra DNA called plasmids.</li>
            <li><strong>Cell Wall:</strong> Almost always present, made primarily of peptidoglycan in bacteria.</li>
          </ul>

          <h4>2. Eukaryotic Cells</h4>
          <p>Found in animals, plants, fungi, and protists, eukaryotic cells are larger (10 to 100 micrometers) and far more complex internally:</p>
          <ul>
            <li><strong>True Nucleus:</strong> DNA is enclosed within a double-layered nuclear envelope.</li>
            <li><strong>Organelles:</strong> Specialized compartments carry out specific chemical jobs simultaneously without interfering with each other.</li>
            <li><strong>Linear DNA:</strong> Organized into multiple distinct chromosomes wrapped around histone proteins.</li>
          </ul>
        `,
        // Quick end-of-lesson knowledge check
        quickCheck: {
          question: "A researcher examines a cell under an electron microscope and notices a distinct circular loop of DNA floating freely, with no surrounding nuclear membrane. Which type of cell is this?",
          options: [
            "Animal Eukaryote",
            "Plant Eukaryote",
            "Prokaryotic Cell",
            "Fungal Eukaryote"
          ],
          correct: 2,
          explanation: "Prokaryotic cells (like bacteria) lack a true nucleus. Their single circular chromosome sits directly in the cytoplasm within a region called the nucleoid."
        }
      },

      {
        id: "cb_lesson_2",
        title: "Lesson 2: Organelles & Cellular Machinery",
        duration: "15 mins",
        content: `
          <h3>Inside the Eukaryotic Factory</h3>
          <p>Think of a eukaryotic cell as a busy manufacturing factory. Each organelle plays a distinct role to keep the cell alive and working efficiently.</p>

          <h4>1. The Nucleus: Control & Information Hub</h4>
          <p>Houses the DNA, which carries the master blueprints for protein production. Inside the nucleus sits the <strong>nucleolus</strong>, an intense assembly region where ribosomes are manufactured.</p>

          <h4>2. Ribosomes: Protein Builders</h4>
          <p>Tiny molecular machines made of RNA and proteins. They read genetic instructions (mRNA) and string amino acids together to build proteins. They float freely in the cytoplasm or attach to the Endoplasmic Reticulum.</p>

          <h4>3. Endoplasmic Reticulum (ER): Synthesis & Transport</h4>
          <ul>
            <li><strong>Rough ER:</strong> Covered in ribosomes. It accepts freshly made proteins, folds them properly, and packages them into transport vesicles.</li>
            <li><strong>Smooth ER:</strong> Lacks ribosomes. It synthesizes lipids, metabolizes carbohydrates, and detoxifies drugs and poisons (heavily present in liver cells).</li>
          </ul>

          <h4>4. Golgi Apparatus: Packaging & Shipping</h4>
          <p>Recieves transport vesicles from the ER at its <em>cis</em> face, modifies molecules (e.g., adding carbohydrate chains to make glycoproteins), sorts them, and ships them out from its <em>trans</em> face to their final destination.</p>

          <h4>5. Mitochondria: Power Generation</h4>
          <p>The sites of aerobic cellular respiration, converting glucose and oxygen into ATP (cellular energy). They have their own DNA and ribosomes, supporting the endosymbiotic theory that they evolved from engulfed bacteria.</p>

          <h4>6. Lysosomes & Peroxisomes: Clean-Up & Breakdown</h4>
          <p>Lysosomes contain acidic digestive enzymes to break down old organelles, waste, and foreign invaders. Peroxisomes neutralize toxic metabolic byproducts like hydrogen peroxide.</p>
        `,
        quickCheck: {
          question: "A white blood cell needs to digest an engulfed bacterium. Which organelle fuses with the engulfed vesicle to break down the bacterial cell?",
          options: [
            "Golgi Apparatus",
            "Lysosome",
            "Smooth ER",
            "Peroxisome"
          ],
          correct: 1,
          explanation: "Lysosomes carry hydrolytic digestive enzymes that break down cellular debris, waste, and foreign particles like bacteria."
        }
      },

      {
        id: "cb_lesson_3",
        title: "Lesson 3: Cell Membrane & Transport Mechanics",
        duration: "12 mins",
        content: `
          <h3>The Phospholipid Bilayer</h3>
          <p>The cell membrane controls what enters and exits the cell. Its fundamental structure is described by the <strong>Fluid Mosaic Model</strong>: a double layer of phospholipid molecules with embedded proteins drifting laterally within it.</p>
          
          <p>Each phospholipid molecule has:</p>
          <ul>
            <li>A <strong>hydrophilic (water-loving) head</strong> facing outward toward water inside and outside the cell.</li>
            <li>Two <strong>hydrophobic (water-fearing) fatty acid tails</strong> tucked away in the center, shielded from water.</li>
          </ul>

          <h3>How Molecules Cross the Membrane</h3>

          <h4>1. Passive Transport (No Energy Required)</h4>
          <p>Molecules move naturally down their concentration gradient (from higher concentration to lower concentration).</p>
          <ul>
            <li><strong>Simple Diffusion:</strong> Small, nonpolar molecules (like O₂ and CO₂) pass right through the lipid bilayer.</li>
            <li><strong>Facilitated Diffusion:</strong> Larger or charged molecules (like glucose or Na⁺) need specific protein channels or carrier proteins to pass.</li>
            <li><strong>Osmosis:</strong> The movement of water across a selectively permeable membrane toward the side with higher solute concentration.</li>
          </ul>

          <h4>2. Active Transport (Energy Required)</h4>
          <p>Moves molecules <em>against</em> their concentration gradient (from low concentration to high concentration). This requires cell energy in the form of <strong>ATP</strong> and membrane pump proteins (e.g., the Sodium-Potassium Pump, Na⁺/K⁺ ATPase).</p>

          <h4>3. Bulk Transport</h4>
          <ul>
            <li><strong>Endocytosis:</strong> Taking large molecules into the cell by engulfing them in a membrane vesicle (e.g., phagocytosis or cell eating).</li>
            <li><strong>Exocytosis:</strong> Exporting materials out of the cell by fusing a vesicle with the outer cell membrane.</li>
          </ul>
        `,
        quickCheck: {
          question: "When red blood cells are placed in pure, distilled water (a hypotonic solution), water rushes into the cells until they burst. Which process explains this movement of water?",
          options: [
            "Active Transport",
            "Osmosis",
            "Facilitated Diffusion",
            "Exocytosis"
          ],
          correct: 1,
          explanation: "Osmosis is the passive diffusion of water across a semipermeable membrane from an area of lower solute concentration (pure water) to higher solute concentration inside the cell."
        }
      }
    ],

    // ------------------------------------------------------------------------
    // QUIZ CHALLENGE MODULE
    // ------------------------------------------------------------------------
    quizzes: [
      {
        id: "cb_q1",
        question: "Which organelle is surrounded by a double membrane and contains its own independent circular DNA and ribosomes?",
        options: [
          "Golgi body",
          "Mitochondrion",
          "Lysosome",
          "Ribosome"
        ],
        correct: 1,
        explanation: "Mitochondria (and chloroplasts in plants) have their own circular DNA and 70S ribosomes, reflecting their evolutionary origin as independent prokaryotic organisms."
      },
      {
        id: "cb_q2",
        question: "Plant cells maintain rigidity and structural shape largely due to water pressure pressing against their cell walls. What is this internal fluid pressure called?",
        options: [
          "Osmotic equilibrium",
          "Turgor pressure",
          "Hydrostatic suction",
          "Atmospheric pressure"
        ],
        correct: 1,
        explanation: "Turgor pressure occurs when the central vacuole fills with water, pushing the cell membrane tightly against the rigid plant cell wall."
      },
      {
        id: "cb_q3",
        question: "What primary function does the nucleolus perform within the cell nucleus?",
        options: [
          "Synthesizing lipids and steroids",
          "Assembling ribosomal RNA (rRNA) and ribosome subunits",
          "Packaging proteins into transport vesicles",
          "Breaking down cellular metabolic waste"
        ],
        correct: 1,
        explanation: "The nucleolus is a dense region inside the nucleus dedicated to transcribing ribosomal RNA and combining it with proteins to form ribosome subunits."
      },
      {
        id: "cb_q4",
        question: "The Sodium-Potassium Pump (Na+/K+ ATPase) moves 3 sodium ions out of the cell for every 2 potassium ions brought in. Why is this considered active transport?",
        options: [
          "It uses passive channel proteins without requiring energy.",
          "It moves ions down their natural concentration gradients.",
          "It consumes ATP energy to move ions against their concentration gradients.",
          "It relies entirely on simple diffusion across the lipid bilayer."
        ],
        correct: 2,
        explanation: "Active transport always requires ATP energy because ions are being pumped uphill—from areas of low concentration to areas of higher concentration."
      },
      {
        id: "cb_q5",
        question: "Which component of the cell membrane acts as a temperature buffer, keeping the membrane flexible at lower temperatures and preventing it from becoming too fluid at high temperatures?",
        options: [
          "Cholesterol",
          "Glycoproteins",
          "Phospholipid heads",
          "Peripheral proteins"
        ],
        correct: 0,
        explanation: "Cholesterol molecules slotted between phospholipid tails act as temperature buffers, stabilizing membrane fluidity across changing temperatures."
      }
    ]
  }
};
