/* ============================================================
   UNIT 4 DATA — Creative Coding Project
   ============================================================ */
const UNIT_DATA = {
  num: 4,
  title: "Creative Coding Project",
  tagline: "Designing, building, and presenting an original Scratch project from idea to finished product.",
  totalParts: 8,
  parts: [
    // ---------------- PART 1 ----------------
    {
      num: 1,
      title: "Project Introduction",
      objective: "Understand the project requirements and brainstorm your own original idea.",
      video: { id: "D-nW4jvzRr8", title: "Beginners Guide to Scratch (Very Simple)" },
      content: [
        { p: "If you could build absolutely anything in Scratch, what would you make? Over the next 8 parts, you'll design, build, test, and present an original creative coding project — combining everything from Units 1-3: computational thinking, sequence, loops, variables, and conditionals." },
        { h3: "Project Requirements Checklist" },
        { ul: [
          "At least one event block starting each script (green flag, key press, or sprite click)",
          "At least one loop (repeat, forever, or repeat until)",
          "At least one variable that changes during the project (score, health, progress, etc.)",
          "At least one conditional (if, or if-else) making a decision",
          "A clear beginning, middle, and end to the experience",
        ]},
        { h3: "Project Ideas to Get You Started" },
        { ul: [
          "Interactive story: the player makes choices that affect what happens next",
          "Simple game: collect items, avoid obstacles, or beat a timer",
          "Quiz or trivia game: ask questions, track score, give a final result",
          "Animated scene: a short animated story or music-reactive animation",
        ]},
        { p: "You may also combine ideas — e.g. a story WITH a mini-game inside it." },
      ],
      worksheet: {
        wsId: "u4ws01",
        title: "Brainstorm & Choose Your Idea",
        instructions: "Brainstorm 3 project ideas, then choose the one you'll develop for the rest of the unit.",
        fields: [
          { id: "idea_1", type: "text", label: "Idea 1" },
          { id: "idea_2", type: "text", label: "Idea 2" },
          { id: "idea_3", type: "text", label: "Idea 3" },
          { id: "chosen_idea", type: "text", label: "Which idea did you choose?" },
          { id: "why_chosen", type: "textarea", label: "Why did you choose it? Which requirements (loop, variable, conditional) would it naturally use?", rows: 3 },
        ],
        rubric: [
          { criterion: "Generated 3 genuinely different ideas", points: 25 },
          { criterion: "Chosen idea is realistic to build in the remaining time", points: 25 },
          { criterion: "Chosen idea can naturally include all 4 requirements", points: 25 },
          { criterion: "Reasoning for the choice is clear and thoughtful", points: 25 },
        ],
      },
    },
    // ---------------- PART 2 ----------------
    {
      num: 2,
      title: "Project Planning",
      objective: "Storyboard your project and list the technical components you'll need.",
      video: { id: "D-nW4jvzRr8", title: "Beginners Guide to Scratch (Very Simple)" },
      content: [
        { p: "Professional developers always plan before writing code — it saves time overall. A clear plan helps you notice problems BEFORE they become confusing bugs, and makes it easier to explain your project to others later. You don't need a perfect plan — just enough detail to start building confidently." },
        { h3: "Building a Storyboard" },
        { p: "Draw 3-5 boxes representing key moments in your project, like a comic strip. For a game: starting screen → main gameplay → win screen → lose screen. For a story: opening scene → choice point → consequence → ending. Storyboards don't need to be beautiful — stick figures and labels are perfectly fine." },
        { h3: "Listing Your Technical Needs" },
        { ul: [
          "List every sprite you'll need and its main job",
          "List every variable you'll need and what changes it",
          "List your loop(s) — what should repeat, and under what condition should it stop?",
          "List your conditional(s) — what decision needs to be made, and what are the outcomes?",
        ]},
      ],
      worksheet: {
        wsId: "u4ws02",
        title: "Storyboard & Technical Plan",
        instructions: "Describe your storyboard and list your technical requirements before you start building.",
        fields: [
          { id: "storyboard", type: "textarea", label: "Describe your storyboard: what are the 3-5 key moments of your project?", rows: 4 },
          { id: "sprites_list", type: "textarea", label: "List every sprite you'll need and its main job", rows: 3 },
          { id: "variables_list", type: "textarea", label: "List every variable you'll need and what changes it", rows: 2 },
          { id: "loops_conditionals", type: "textarea", label: "List your loop(s) and conditional(s), and what they control", rows: 3 },
        ],
        rubric: [
          { criterion: "Storyboard has a clear beginning, middle, and end", points: 25 },
          { criterion: "Sprite list is complete and matches the storyboard", points: 25 },
          { criterion: "Variable list is sensible for the project idea", points: 25 },
          { criterion: "Loops/conditionals identified match the project's needs", points: 25 },
        ],
      },
    },
    // ---------------- PART 3 ----------------
    {
      num: 3,
      title: "Building Your Project (Part 1)",
      objective: "Build the core mechanic of your project before adding any extras.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "Start With the Core, Not the Extras" },
        { p: "Focus today ONLY on the main mechanic — movement, the main choice, or the core gameplay loop. Resist the urge to add sound effects or decorations yet — they come later. A working \"boring\" version is far more valuable than a beautiful broken one. You can always add polish once the core experience actually works." },
      ],
      code: {
        label: "Example: a core movement mechanic",
        lines: [
          "when 🏳 clicked",
          "forever",
          "  if <key [right arrow] pressed?> then",
          "    change x by (5)",
          "  if <key [left arrow] pressed?> then",
          "    change x by (-5)",
        ],
      },
      worksheet: {
        wsId: "u4ws03",
        title: "Build Your Core Mechanic",
        instructions: "Build ONLY the core mechanic of your project today — no sound, no scoring yet.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "core_mechanic", type: "textarea", label: "Describe the core mechanic you built", rows: 3 },
          { id: "testing_notes", type: "textarea", label: "Does the core experience feel right? What did you test?", rows: 2 },
        ],
        rubric: [
          { criterion: "Core mechanic is built and functional", points: 40 },
          { criterion: "No unnecessary extras added yet (stayed focused)", points: 20 },
          { criterion: "Core mechanic was genuinely tested, not just assumed to work", points: 40 },
        ],
      },
    },
    // ---------------- PART 4 ----------------
    {
      num: 4,
      title: "Building Your Project (Part 2)",
      objective: "Add sequence and event-driven interactions to your project.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "Layering In Sequence & Events" },
        { ul: [
          "Add additional event blocks for other interactions (key presses, sprite clicks, broadcasts)",
          "Think about the ORDER actions should happen in — sequence still matters even in a complex project",
          "Use broadcasts if one sprite's action needs to trigger something in a different sprite",
          "Add \"say\" blocks or simple animations to give the player feedback on their actions",
        ]},
      ],
      code: {
        label: "Example: adding an interaction event",
        lines: [
          "when this sprite clicked",
          "  say [You found a clue!] for (2) seconds",
          "  broadcast [clue_found]",
          "",
          "when I receive [clue_found]",
          "  change [clues] by (1)",
        ],
      },
      worksheet: {
        wsId: "u4ws04",
        title: "Add Sequence & Events",
        instructions: "Add at least one new event-driven interaction to your project.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "new_interaction", type: "textarea", label: "Describe the new interaction you added", rows: 3 },
          { id: "used_broadcast", type: "text", label: "Did you use a broadcast? If so, describe what it connects." },
        ],
        rubric: [
          { criterion: "At least one new event-driven interaction added", points: 35 },
          { criterion: "Feedback (say/animation) given to the player for the interaction", points: 35 },
          { criterion: "Interaction tested and works correctly", points: 30 },
        ],
      },
    },
    // ---------------- PART 5 ----------------
    {
      num: 5,
      title: "Building Your Project (Part 3)",
      objective: "Add loops for repetition and ongoing checks.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "Where Does Your Project Need a Loop?" },
        { ul: [
          "A \"forever\" loop for constant checking (e.g. is the player touching danger?)",
          "A \"repeat\" loop for a fixed animation or sequence of moves",
          "A \"repeat until\" loop for something that continues until a goal is reached",
        ]},
        { p: "Revisit your plan from Part 2 — which loop(s) did you originally identify?" },
      ],
      code: {
        label: "Example: a loop that checks for danger",
        lines: [
          "forever",
          "  if <touching [Enemy]?> then",
          "    change [health] by (-1)",
          "    wait (1) seconds",
        ],
      },
      worksheet: {
        wsId: "u4ws05",
        title: "Add Your Loop(s)",
        instructions: "Add the loop(s) identified in your plan to your ongoing project.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "loop_description", type: "textarea", label: "Describe the loop(s) you added and what they control", rows: 3 },
          { id: "timing_adjustments", type: "text", label: "Did you need to adjust any wait times? What did you change?" },
        ],
        rubric: [
          { criterion: "Loop(s) from the plan successfully implemented", points: 40 },
          { criterion: "Loop behaves correctly without unwanted side effects", points: 30 },
          { criterion: "Timing feels appropriate (not too fast/slow)", points: 30 },
        ],
      },
    },
    // ---------------- PART 6 ----------------
    {
      num: 6,
      title: "Building Your Project (Part 4)",
      objective: "Add variables and conditionals to bring in state and decisions.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "Bringing In State & Decisions" },
        { ul: [
          "Add the variable(s) from your plan — score, health, progress, or similar",
          "Add at least one conditional that makes a meaningful decision using that variable",
          "Consider: does your project need a win condition? A lose condition? Both?",
        ]},
        { p: "This is often the most satisfying step — your project starts to feel like a \"real\" experience." },
      ],
      code: {
        label: "Example: a win condition using a variable",
        lines: [
          "if <clues = (3)> then",
          "  say [You solved the mystery!] for (3) seconds",
          "  stop [all]",
        ],
      },
      worksheet: {
        wsId: "u4ws06",
        title: "Add Variables & Conditionals",
        instructions: "Complete your project's variable and conditional logic today.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "variable_behavior", type: "textarea", label: "Describe how your variable(s) update during the project", rows: 3 },
          { id: "end_condition", type: "textarea", label: "Describe your win/end conditional — how does the project conclude?", rows: 3 },
        ],
        rubric: [
          { criterion: "Variable(s) update correctly during the project", points: 30 },
          { criterion: "Win/end conditional works correctly", points: 40 },
          { criterion: "Project now meets all 4 checklist requirements from Part 1", points: 30 },
        ],
      },
    },
    // ---------------- PART 7 ----------------
    {
      num: 7,
      title: "Testing & Debugging",
      objective: "Debug thoroughly and gather peer feedback to polish your project.",
      video: { id: "D-nW4jvzRr8", title: "Beginners Guide to Scratch (Very Simple)" },
      content: [
        { h3: "A Full Project Debugging Checklist" },
        { ul: [
          "Does everything reset properly when the green flag is clicked again?",
          "Do all 4 checklist requirements (event, loop, variable, conditional) work correctly?",
          "Are there any blocks left over from testing that should be removed?",
          "Does the project make sense to someone who has never seen it before?",
          "Is there a clear ending, so the player knows when the experience is over?",
        ]},
        { h3: "Peer Playtesting" },
        { p: "Swap projects with a partner (or ask a family member) and try theirs without any explanation first. Note down anything confusing, broken, or unclear as you play. Give specific, kind feedback — not just \"it's good\" — and use the feedback you receive to make your final round of fixes." },
      ],
      worksheet: {
        wsId: "u4ws07",
        title: "Debug & Polish Your Project",
        instructions: "Work through the debugging checklist, get feedback from someone else, and make final improvements.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "checklist_confirm", type: "textarea", label: "Confirm you've worked through the debugging checklist. Note any issues found and fixed.", rows: 3 },
          { id: "feedback_received", type: "textarea", label: "What feedback did you receive from playtesting, and what did you change as a result?", rows: 3 },
        ],
        rubric: [
          { criterion: "Debugging checklist worked through thoroughly", points: 30 },
          { criterion: "Feedback was gathered from another person", points: 30 },
          { criterion: "At least one improvement made based on feedback", points: 40 },
        ],
      },
    },
    // ---------------- PART 8 ----------------
    {
      num: 8,
      title: "Final Presentation",
      objective: "Present your finished project and reflect on what you built.",
      video: { id: "D-nW4jvzRr8", title: "Beginners Guide to Scratch (Very Simple)" },
      content: [
        { h3: "How to Present Your Project" },
        { ul: [
          "Briefly explain your project's idea in 1-2 sentences",
          "Point out ONE part of the code you're especially proud of, and why",
          "Demo your project live — let your audience see it in action, not just hear about it",
        ]},
        { p: "Since this is a self-paced course, your \"presentation\" happens during your next review session with your teacher — demo your project live and be ready to explain your code choices." },
      ],
      worksheet: {
        wsId: "u4ws08",
        title: "Final Submission & Presentation Notes",
        instructions: "Submit your finished project and prepare your presentation notes for your next review session.",
        fields: [
          { id: "project_link", type: "text", label: "Your final Scratch project link" },
          { id: "one_sentence_pitch", type: "text", label: "Describe your project in 1-2 sentences" },
          { id: "proudest_code", type: "textarea", label: "What part of your code are you most proud of, and why?", rows: 3 },
          { id: "final_reflection", type: "textarea", label: "What was the hardest part of this project? What would you do differently next time?", rows: 3 },
        ],
        rubric: [
          { criterion: "Project is fully finished and meets all requirements", points: 30 },
          { criterion: "Pitch clearly communicates what the project does", points: 20 },
          { criterion: "Explanation of proudest code shows real understanding", points: 25 },
          { criterion: "Final reflection is honest and thoughtful", points: 25 },
        ],
      },
    },
  ],
};
