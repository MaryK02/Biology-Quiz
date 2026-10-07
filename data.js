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
        },
        {
          id: "neuro-phys",
          title: "Neurophysiology & Signal Conduction",
          description: "Neural signaling, action potential propagation, synaptic transmission, and nervous system organization.",
          lessons: [
            {
              id: "neuro-1",
              title: "1. Cellular Neurobiology (Neurons & Glia)",
              content: `
                <p>The nervous system processes and transmits information using specialized electrical and chemical signals.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">1. Neuron Structure</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Dendrites:</strong> Branching projections that receive signals from other neurons or receptors.</li>
                  <li><strong>Soma (Cell Body):</strong> Contains the nucleus and cellular machinery to maintain cell functions.</li>
                  <li><strong>Axon:</strong> Long nerve fiber that conducts action potentials away from the soma toward target cells.</li>
                  <li><strong>Myelin Sheath:</strong> Lipid-rich insulating layer produced by glia that speeds up signal transmission via saltatory conduction.</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Glial Cells (Neuroglia)</h4>
                <p>Supporting non-neuronal cells that maintain homeostasis and structure:</p>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Astrocytes:</strong> Form the blood-brain barrier (BBB) and regulate extracellular ion levels.</li>
                  <li><strong>Oligodendrocytes:</strong> Produce myelin in the Central Nervous System (CNS).</li>
                  <li><strong>Schwann Cells:</strong> Produce myelin in the Peripheral Nervous System (PNS).</li>
                  <li><strong>Microglia:</strong> Resident immune cells acting as phagocytes within the CNS.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which glial cells are responsible for forming the myelin sheath in the Central Nervous System (CNS)?",
                options: ["Schwann Cells", "Astrocytes", "Oligodendrocytes", "Microglia"],
                correct: 2,
                explanation: "Oligodendrocytes form myelin in the CNS, whereas Schwann cells form myelin in the PNS."
              }
            },
            {
              id: "neuro-2",
              title: "2. Action Potentials & Membrane Bioelectricity",
              content: `
                <p>Neurons communicate via rapid, electrical impulses called <strong>action potentials</strong> driven by voltage-gated ion channels.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">Phases of the Action Potential:</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Resting Membrane Potential:</strong> Typically -70 mV, maintained by the $\text{Na}^+/\text{K}^+$ pump ($3\text{ Na}^+$ out, $2\text{ K}^+$ in) and passive potassium leak channels.</li>
                  <li><strong>Depolarization:</strong> A stimulus reaches threshold (~ -55 mV), triggering voltage-gated $\text{Na}^+$ channels to open rapidly. $\text{Na}^+$ rushes into the cell, making the interior positive (+30 mV).</li>
                  <li><strong>Repolarization:</strong> $\text{Na}^+$ channels close and voltage-gated $\text{K}^+$ channels open. $\text{K}^+$ flows out of the cell, restoring the negative charge inside.</li>
                  <li><strong>Hyperpolarization:</strong> Excess $\text{K}^+$ outflow temporarily makes the membrane more negative than resting potential before returning to -70 mV.</li>
                </ul>
              `,
              quickCheck: {
                question: "What ion influx is directly responsible for the rapid depolarization phase of an action potential?",
                options: ["Outflow of Potassium (K+)", "Influx of Sodium (Na+)", "Influx of Calcium (Ca2+)", "Outflow of Chloride (Cl-)"],
                correct: 1,
                explanation: "The influx of positively charged Sodium (Na+) ions through opened voltage-gated Na+ channels rapidly depolarizes the membrane."
              }
            },
            {
              id: "neuro-3",
              title: "3. Synaptic Transmission & Neurotransmitters",
              content: `
                <p>Signal transfer across a neural junction occurs at the <strong>synapse</strong>.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">Steps of Chemical Synaptic Transmission:</h4>
                <ol style="padding-left: 1.2rem; line-height: 1.7;">
                  <li>Action potential arrives at the presynaptic axon terminal.</li>
                  <li>Depolarization opens voltage-gated $\text{Ca}^{2+}$ channels, causing $\text{Ca}^{2+}$ influx.</li>
                  <li>$\text{Ca}^{2+}$ triggers synaptic vesicles to fuse with the presynaptic membrane and release neurotransmitters into the synaptic cleft.</li>
                  <li>Neurotransmitters bind to post-synaptic receptors, triggering excitatory or inhibitory potentials.</li>
                </ol>

                <h4 style="color: #064e3b; margin-top: 1rem;">Key Neurotransmitters:</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Acetylcholine (ACh):</strong> Primary neurotransmitter at neuromuscular junctions.</li>
                  <li><strong>GABA:</strong> Main inhibitory neurotransmitter in the CNS.</li>
                  <li><strong>Glutamate:</strong> Main excitatory neurotransmitter in the CNS.</li>
                  <li><strong>Dopamine:</strong> Regulates motor control, reward, and motivation pathways.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which neurotransmitter serves as the principal inhibitory signal in the central nervous system?",
                options: ["Glutamate", "GABA", "Acetylcholine", "Dopamine"],
                correct: 1,
                explanation: "GABA (Gamma-Aminobutyric Acid) is the primary inhibitory neurotransmitter, reducing neural excitability across the CNS."
              }
            },
            {
              id: "neuro-4",
              title: "4. Autonomic Nervous System Dynamics",
              content: `
                <p>The Autonomic Nervous System (ANS) regulates involuntary visceral functions without conscious thought.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">Divisions of the ANS:</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Sympathetic Nervous System ("Fight or Flight"):</strong> Increases heart rate, dilates airways, inhibits digestion, and mobilizes glucose reserves during stress.</li>
                  <li><strong>Parasympathetic Nervous System ("Rest and Digest"):</strong> Slows heart rate, stimulates digestive activity, and promotes energy conservation.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which branch of the autonomic nervous system is responsible for the 'Fight or Flight' response?",
                options: ["Parasympathetic", "Sympathetic", "Somatic", "Central"],
                correct: 1,
                explanation: "The sympathetic nervous system activates energy reserves and increases cardiac output during stressful 'fight or flight' scenarios."
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
                <p>The cardiovascular system distributes oxygen, nutrients, and hormones to peripheral tissues while removing metabolic wastes.</p>
                
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
                  <li><strong>Pathology:</strong> <em>Peptic Ulcer Disease (PUD)</em> — Mucosal erosion caused by H. pylori infection or prolonged NSAID use.</li>
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
        {
          id: "limb-anatomy",
          title: "Anatomy of the Upper & Lower Limbs",
          description: "Osteology, myology, neurovascular supply, and major joint biomechanics of the limbs.",
          lessons: [
            {
              id: "limb-1",
              title: "1. Upper Limb: Bones, Joints & Compartments",
              content: `
                <p>The upper limb is specialized for mobility, reaching, and precise manual dexterity.</p>
                
                <h4 style="color: #064e3b; margin-top: 1rem;">1. Osteology & Joints</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Pectoral Girdle:</strong> Clavicle and Scapula (connects the axial skeleton to the appendicular upper limb).</li>
                  <li><strong>Arm (Brachium):</strong> Humerus. Articulates at the <em>Glenohumeral Joint</em> (ball-and-socket; highly mobile, susceptible to dislocation).</li>
                  <li><strong>Forearm (Antebrachium):</strong> Radius (lateral) and Ulna (medial). Form the <em>Hinge Elbow Joint</em> and proximal/distal radioulnar joints for pronation/supination.</li>
                  <li><strong>Hand & Wrist:</strong> 8 Carpal bones, 5 Metacarpals, and 14 Phalanges.</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Functional Muscle Groups</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Anterior Arm:</strong> Biceps brachii, Brachialis (Flexors of the elbow; innervated by the <em>Musculocutaneous Nerve</em>).</li>
                  <li><strong>Posterior Arm:</strong> Triceps brachii (Extensor of the elbow; innervated by the <em>Radial Nerve</em>).</li>
                </ul>
              `,
              quickCheck: {
                question: "Which nerve innervates the triceps brachii muscle responsible for elbow extension?",
                options: ["Median Nerve", "Radial Nerve", "Ulnar Nerve", "Musculocutaneous Nerve"],
                correct: 1,
                explanation: "The Radial Nerve supplies the posterior compartment of the arm and forearm, including the triceps brachii."
              }
            },
            {
              id: "limb-2",
              title: "2. Upper Limb: Brachial Plexus & Neurovascular Pathways",
              content: `
                <p>Nerve supply to the upper limb originates from the <strong>Brachial Plexus</strong> (ventral rami of C5–T1 spinal nerves).</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">1. Major Terminal Nerve Branches</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Musculocutaneous:</strong> Flexors of the anterior arm.</li>
                  <li><strong>Axillary:</strong> Deltoid and Teres Minor muscles (shoulder abduction).</li>
                  <li><strong>Radial:</strong> All posterior compartment extensors (arm and forearm). Injury causes <em>wrist drop</em>.</li>
                  <li><strong>Median:</strong> Anterior forearm flexors, thenar muscles. Compression in the carpal tunnel causes <em>Carpal Tunnel Syndrome</em>.</li>
                  <li><strong>Ulnar:</strong> Intrinsic hand muscles and medial forearm flexors. Injury causes <em>claw hand</em>.</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Arterial Supply</h4>
                <p>Subclavian Artery $\rightarrow$ Axillary Artery $\rightarrow$ Brachial Artery (bifurcates at cubital fossa into Radial and Ulnar Arteries).</p>
              `,
              quickCheck: {
                question: "Compression of which nerve passing through the carpal tunnel leads to Carpal Tunnel Syndrome?",
                options: ["Ulnar Nerve", "Radial Nerve", "Median Nerve", "Axillary Nerve"],
                correct: 2,
                explanation: "The Median Nerve passes under the flexor retinaculum in the carpal tunnel; compression causes numbness and muscle weakness in the lateral hand."
              }
            },
            {
              id: "limb-3",
              title: "3. Lower Limb: Osteology, Hip & Knee Biomechanics",
              content: `
                <p>The lower limb is specialized for weight-bearing, locomotion, and maintaining upright posture.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">1. Osteology & Joints</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Pelvic Girdle:</strong> Os Coxae (formed by fused Ilium, Ischium, and Pubis). Articulates with the Sacrum.</li>
                  <li><strong>Thigh:</strong> Femur (longest, strongest bone in the body). Articulates at the <em>Hip Joint</em> (multiaxial ball-and-socket; highly stable).</li>
                  <li><strong>Leg (Crus):</strong> Tibia (medial, weight-bearing) and Fibula (lateral, non-weight-bearing, muscle attachment site).</li>
                  <li><strong>Knee Joint:</strong> Modified hinge joint stabilized by anterior/posterior cruciate ligaments (ACL/PCL) and medial/lateral collateral ligaments (MCL/LCL).</li>
                  <li><strong>Foot:</strong> 7 Tarsals (including Talus and Calcaneus), 5 Metatarsals, and 14 Phalanges.</li>
                </ul>
              `,
              quickCheck: {
                question: "Which leg bone is the primary weight-bearing bone that articulates directly with the femur at the knee joint?",
                options: ["Fibula", "Tibia", "Radius", "Calcaneus"],
                correct: 1,
                explanation: "The Tibia is the larger, medial bone of the leg that bears body weight from the femur."
              }
            },
            {
              id: "limb-4",
              title: "4. Lower Limb: Muscular Compartments & Lumbosacral Nerves",
              content: `
                <p>The lower limb muscles are divided into deep fascia-enclosed compartments driven by the <strong>Lumbosacral Plexus (L1–S4)</strong>.</p>

                <h4 style="color: #064e3b; margin-top: 1rem;">1. Compartments & Nerve Innervation</h4>
                <ul style="padding-left: 1.2rem; line-height: 1.7;">
                  <li><strong>Anterior Thigh:</strong> Quadriceps femoris (knee extension; innervated by the <em>Femoral Nerve</em>).</li>
                  <li><strong>Medial Thigh:</strong> Adductors (hip adduction; innervated by the <em>Obturator Nerve</em>).</li>
                  <li><strong>Posterior Thigh:</strong> Hamstrings (hip extension / knee flexion; innervated by the <em>Sciatic Nerve</em>).</li>
                  <li><strong>Anterior Leg:</strong> Tibialis anterior (dorsiflexion; innervated by the <em>Deep Fibular Nerve</em>). Injury causes <em>foot drop</em>.</li>
                  <li><strong>Posterior Leg:</strong> Gastrocnemius and Soleus (plantar flexion; innervated by the <em>Tibial Nerve</em>).</li>
                </ul>

                <h4 style="color: #064e3b; margin-top: 1rem;">2. Sciatic Nerve</h4>
                <p>The largest single nerve in the body, exiting the pelvis via the greater sciatic foramen before splitting into the Tibial and Common Fibular nerves in the popliteal fossa.</p>
              `,
              quickCheck: {
                question: "Which muscle group in the posterior thigh acts to flex the knee and extend the hip?",
                options: ["Quadriceps", "Adductors", "Hamstrings", "Peroneals"],
                correct: 2,
                explanation: "The Hamstrings (Biceps femoris, Semitendinosus, Semimembranosus) cross two joints to flex the knee and extend the hip."
              }
            }
          ]
        }
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
