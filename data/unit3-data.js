/* ============================================================
   UNIT 3 DATA — Advanced Loops, Variables & Conditionals
   ============================================================ */
const UNIT_DATA = {
  num: 3,
  title: "Advanced Loops, Variables & Conditionals",
  tagline: "Building real interactive games using nested logic, scoring systems, and smart decisions.",
  totalParts: 12,
  parts: [
    // ---------------- PART 1 ----------------
    {
      num: 1,
      title: "Loops Revisited — Going Further",
      objective: "Choose the right loop type (repeat, forever, repeat until) with purpose.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "Choosing the Right Loop, and Why" },
        { ul: [
          "<strong>repeat (n)</strong> — use when you know EXACTLY how many times something should happen",
          "<strong>forever</strong> — use for things that should keep happening the whole game (e.g. constant motion)",
          "<strong>repeat until &lt;condition&gt;</strong> — use when something should repeat until a goal is reached",
        ]},
        { p: "Choosing the wrong loop type is a common source of bugs — always ask \"do I know the exact count?\" before picking repeat over forever or repeat until." },
      ],
      code: {
        label: "Comparing loop types side by side",
        lines: [
          "repeat (4)              |  forever              |  repeat until <score = 10>",
          "  move (50) steps       |    move (2) steps      |    move (2) steps",
          "  turn (90) degrees     |    if on edge, bounce  |    wait (0.1) seconds",
        ],
      },
      worksheet: {
        wsId: "u3ws01",
        title: "Loop Type Challenge",
        instructions: "In Scratch, build three small scripts using each of the three loop types, then reflect on what you noticed.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "script_a", type: "textarea", label: "Script A (repeat) — what did you build?", rows: 2 },
          { id: "script_b", type: "textarea", label: "Script B (forever) — what did you build?", rows: 2 },
          { id: "script_c", type: "textarea", label: "Script C (repeat until) — what did you build?", rows: 2 },
          { id: "reflection", type: "textarea", label: "Which loop type felt most natural for each task, and why?", rows: 3 },
        ],
        rubric: [
          { criterion: "Script A correctly uses repeat with a fixed count", points: 25 },
          { criterion: "Script B correctly uses forever appropriately", points: 25 },
          { criterion: "Script C correctly uses repeat until with a goal condition", points: 25 },
          { criterion: "Reflection shows understanding of when to use each loop", points: 25 },
        ],
      },
    },
    // ---------------- PART 2 ----------------
    {
      num: 2,
      title: "Nested Loops",
      objective: "Understand and build loops placed inside other loops.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "What Is a Nested Loop?" },
        { p: "A nested loop is simply a loop block placed INSIDE another loop block. The inner loop completes fully each time before the outer loop moves to its next repeat. It's useful for repeating a pattern multiple times, like drawing several shapes. Nesting can go deeper than 2 levels, but 2 levels is enough for most Grade 7 projects." },
      ],
      code: {
        label: "Example: drawing 3 squares using nested loops",
        lines: [
          "repeat (3)                  <- outer loop: repeat the whole square 3 times",
          "  repeat (4)                <- inner loop: draws ONE square",
          "    move (50) steps",
          "    turn (90) degrees",
          "  turn (120) degrees        <- turn a bit before drawing the next square",
        ],
      },
      worksheet: {
        wsId: "u3ws02",
        title: "Draw a Pattern with Nested Loops",
        instructions: "Using Scratch's Pen extension, recreate the nested-square pattern and experiment with variations.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "pattern_built", type: "textarea", label: "Describe the pattern(s) you built (squares, triangles, etc.) and the numbers you used", rows: 3 },
          { id: "experiment_notes", type: "textarea", label: "What happened when you changed the outer repeat number or turn angle?", rows: 3 },
        ],
        rubric: [
          { criterion: "Successfully recreated the nested-square pattern", points: 30 },
          { criterion: "Experimented with at least one variation", points: 30 },
          { criterion: "Correctly explains how the inner and outer loops interact", points: 40 },
        ],
      },
    },
    // ---------------- PART 3 ----------------
    {
      num: 3,
      title: "Variables — Concept & Creation",
      objective: "Create and use variables to give programs a memory.",
      video: { id: "PdQyJ5v_EyM", title: "Coding for Kids — Variables in 2 Minutes" },
      content: [
        { h3: "What Is a Variable?" },
        { p: "A variable is a named container that stores a value which can change over time. Think of it as a labelled box: the label is the variable's name, the contents can change. Common uses: score, lives, timer, player name, health. Variables can be \"for all sprites\" (global) or \"for this sprite only\" (local)." },
      ],
      code: {
        label: "Creating and using a variable",
        lines: [
          "Variables -> Make a Variable -> name it \"score\"",
          "",
          "when 🏳 clicked",
          "set [score] to (0)     <- resets the variable to a starting value",
          "change [score] by (1)  <- adds 1 to the current value",
        ],
      },
      worksheet: {
        wsId: "u3ws03",
        title: "Create Your First Variables",
        instructions: "In Scratch, create and test several variables to see how they behave.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "variables_created", type: "textarea", label: "Which variables did you create, and what does each one represent?", rows: 3 },
          { id: "observation", type: "textarea", label: "What did you observe when watching the variable's value change live on stage?", rows: 3 },
        ],
        rubric: [
          { criterion: "Created at least 2 variables with meaningful names", points: 30 },
          { criterion: "Variables reset correctly at the start (set to)", points: 30 },
          { criterion: "Variables update correctly during the program (change by)", points: 40 },
        ],
      },
    },
    // ---------------- PART 4 ----------------
    {
      num: 4,
      title: "Variable Practice — Building a Score System",
      objective: "Design and build a working score system using a collectible sprite.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "Designing a Simple Score System" },
        { ul: [
          "Decide: what event should increase the score? (touching an object, clicking a sprite)",
          "Decide: does the score ever decrease, or only increase?",
          "Decide: should the score be visible on stage the whole time?",
        ]},
        { p: "A good score system is simple to understand just by watching it work." },
      ],
      code: {
        label: "Example: touch-to-score script",
        lines: [
          "when 🏳 clicked",
          "set [score] to (0)",
          "show variable [score]",
          "",
          "forever",
          "  if <touching [Coin]?> then",
          "    change [score] by (1)",
        ],
      },
      worksheet: {
        wsId: "u3ws04",
        title: "Build a Coin-Collecting Score System",
        instructions: "Add a collectible sprite and build a working touch-to-score system.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "how_it_works", type: "textarea", label: "Describe how your score system works", rows: 3 },
          { id: "bonus", type: "textarea", label: "Bonus: did you make the coin move to a random position after collection? Describe.", rows: 2 },
        ],
        rubric: [
          { criterion: "Score resets to 0 at the start and is shown on stage", points: 25 },
          { criterion: "Score increases correctly when touching the collectible", points: 35 },
          { criterion: "System works reliably when tested multiple times", points: 40 },
        ],
      },
    },
    // ---------------- PART 5 ----------------
    {
      num: 5,
      title: "Conditionals Revisited",
      objective: "Use if and if-else to make more thoughtful decisions in code.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "If, and If-Else: A Quick Recap" },
        { ul: [
          "<strong>if &lt;condition&gt; then</strong> — runs blocks ONLY if the condition is true; otherwise does nothing",
          "<strong>if &lt;condition&gt; then / else</strong> — runs one set of blocks if true, a DIFFERENT set if false",
        ]},
        { p: "Conditions are usually built using Sensing blocks (touching, key pressed) or Operators (>, <, =). Choosing if vs if-else depends on whether you need something to happen in the \"false\" case too." },
      ],
      code: {
        label: "Example: if-else for a health warning",
        lines: [
          "if <health < (3)> then",
          "  say [Low health!] for (1) seconds",
          "  change [color] effect by (25)",
          "else",
          "  say [You're doing great!] for (1) seconds",
        ],
      },
      worksheet: {
        wsId: "u3ws05",
        title: "Build a Health Warning System",
        instructions: "Using your project from Part 4, add a health variable and warning conditional.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "health_setup", type: "textarea", label: "How did you set up the health variable and what decreases it?", rows: 3 },
          { id: "threshold_choice", type: "text", label: "What health number did you choose as the \"low health\" threshold, and why?" },
        ],
        rubric: [
          { criterion: "Health variable created and decreases correctly", points: 30 },
          { criterion: "If-else warning triggers at the correct threshold", points: 40 },
          { criterion: "Threshold choice is explained sensibly", points: 30 },
        ],
      },
    },
    // ---------------- PART 6 ----------------
    {
      num: 6,
      title: "Nested Conditionals",
      objective: "Build decisions inside other decisions to manage game state.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "What Is a Nested Conditional?" },
        { p: "Just like loops, conditional blocks can be placed inside other conditional blocks. Useful when a decision only makes sense after another decision has already been checked. Example: first check \"is the game still running?\", THEN check \"did the player win or lose?\" Too much nesting can get confusing — usually 2 levels is enough for Grade 7 projects." },
      ],
      code: {
        label: "Example: nested if for game state",
        lines: [
          "if <gameActive = [true]> then",
          "  if <score > (10)> then",
          "    say [You win!] for (2) seconds",
          "    set [gameActive] to [false]",
          "  else",
          "    say [Keep going!] for (1) seconds",
        ],
      },
      worksheet: {
        wsId: "u3ws06",
        title: "Add a Win Condition",
        instructions: "Extend your coin-collecting project with a nested win-condition check.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "win_target", type: "text", label: "What score did the player need to reach to win?" },
          { id: "testing_notes", type: "textarea", label: "Does the win message appear only once? How did you test this?", rows: 3 },
        ],
        rubric: [
          { criterion: "gameActive variable correctly controls the outer check", points: 30 },
          { criterion: "Win condition triggers correctly at the target score", points: 40 },
          { criterion: "Win message appears only once, not repeatedly", points: 30 },
        ],
      },
    },
    // ---------------- PART 7 ----------------
    {
      num: 7,
      title: "Logical Operators",
      objective: "Combine multiple conditions using and, or, and not.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "Combining Conditions: AND, OR, NOT" },
        { ul: [
          "<strong>() and ()</strong> — true only when BOTH conditions are true",
          "<strong>() or ()</strong> — true when AT LEAST ONE condition is true",
          "<strong>not ()</strong> — flips true to false, and false to true",
        ]},
        { h3: "AND vs OR — Choosing the Right Operator" },
        { p: "Use AND when both things must be true together — e.g. \"key pressed AND on ground\" for a jump — this is stricter, fewer situations satisfy it. Use OR when either thing being true is enough — e.g. \"left key OR right key\" pressed to move — this is more flexible, more situations satisfy it." },
      ],
      code: {
        label: "Example: using AND for a combined check",
        lines: [
          "if <<touching [Enemy]?> and <shieldActive = [false]>> then",
          "  change [health] by (-1)",
        ],
      },
      worksheet: {
        wsId: "u3ws07",
        title: "Combine Conditions in Your Project",
        instructions: "Add at least one AND condition and one OR condition to your ongoing project.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "and_example", type: "textarea", label: "Describe your AND condition and what it controls", rows: 2 },
          { id: "or_example", type: "textarea", label: "Describe your OR condition and what it controls", rows: 2 },
          { id: "explain_difference", type: "textarea", label: "In your own words, explain the difference between AND and OR", rows: 3 },
        ],
        rubric: [
          { criterion: "AND condition implemented and works correctly", points: 30 },
          { criterion: "OR condition implemented and works correctly", points: 30 },
          { criterion: "Explanation of AND vs OR is accurate and clear", points: 40 },
        ],
      },
    },
    // ---------------- PART 8 ----------------
    {
      num: 8,
      title: "Combining Loops & Variables",
      objective: "Build real game mechanics like timers by combining loops with variables.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "Loops + Variables = Game Mechanics" },
        { p: "Most simple games are really just: a forever loop + a few variables + some conditionals. A timer is a variable that increases (or decreases) inside a forever loop, once per second. A moving obstacle is a sprite whose position variable changes inside a forever loop. Understanding this combination unlocks the ability to design almost any simple game." },
      ],
      code: {
        label: "Example: a simple countdown timer",
        lines: [
          "set [timer] to (30)",
          "forever",
          "  wait (1) seconds",
          "  change [timer] by (-1)",
          "  if <timer = (0)> then",
          "    say [Time's up!] for (2) seconds",
        ],
      },
      worksheet: {
        wsId: "u3ws08",
        title: "Add a Countdown Timer",
        instructions: "Add a working countdown timer to your ongoing coin-collecting project.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "starting_time", type: "text", label: "What starting timer value did you choose, and why does it feel fair?" },
          { id: "combined_logic", type: "textarea", label: "How did you combine the timer with your existing win-condition check?", rows: 3 },
        ],
        rubric: [
          { criterion: "Timer counts down correctly, once per second", points: 30 },
          { criterion: "\"Time's up\" message triggers correctly at zero", points: 30 },
          { criterion: "Timer integrates sensibly with the rest of the game", points: 40 },
        ],
      },
    },
    // ---------------- PART 9 ----------------
    {
      num: 9,
      title: "Combining Conditionals & Variables",
      objective: "Design a leveling system that changes difficulty as the player progresses.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "Designing a Level System" },
        { p: "A \"level\" variable lets your game change difficulty as the player progresses. Common pattern: when score reaches a threshold, increase the level and adjust something (speed, obstacles, win target). Planning your level thresholds on paper first avoids confusing, buggy level logic." },
      ],
      code: {
        label: "Example: leveling up based on score",
        lines: [
          "if <score > (5) and <level = (1)>> then",
          "  set [level] to (2)",
          "  say [Level up!] for (1) seconds",
          "  change [speed] by (2)",
        ],
      },
      worksheet: {
        wsId: "u3ws09",
        title: "Add a Leveling System",
        instructions: "Extend your project with at least 2 levels based on the score variable.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "level_thresholds", type: "textarea", label: "What score thresholds trigger each level, and what changes at each level?", rows: 3 },
          { id: "testing_notes", type: "textarea", label: "How did you confirm the level-up message only appears once?", rows: 2 },
        ],
        rubric: [
          { criterion: "At least 2 levels implemented with clear thresholds", points: 35 },
          { criterion: "Something meaningfully changes at each level", points: 35 },
          { criterion: "Level-up message triggers only once per level", points: 30 },
        ],
      },
    },
    // ---------------- PART 10 ----------------
    {
      num: 10,
      title: "Building Your Mini-Game (Part 1)",
      objective: "Plan and begin building your final Unit 3 mini-game project.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "Mini-Game Project Requirements" },
        { ul: [
          "At least one loop (repeat, forever, or repeat until)",
          "At least one variable that changes during gameplay (score, health, timer, or level)",
          "At least one conditional using a logical operator (and/or/not)",
          "A clear win condition AND a clear lose/end condition",
        ]},
        { p: "Choose a simple concept: collect items, avoid obstacles, or survive a timer. Sketch your game's screen layout and list every sprite you'll need before opening Scratch." },
      ],
      worksheet: {
        wsId: "u3ws10",
        title: "Plan & Start Your Mini-Game",
        instructions: "Plan your mini-game concept, then start building the core mechanic in Scratch.",
        fields: [
          { id: "game_concept", type: "textarea", label: "Describe your game concept in 2-3 sentences", rows: 3 },
          { id: "sprites_needed", type: "textarea", label: "List the sprites you'll need and what each one does", rows: 3 },
          { id: "variables_needed", type: "textarea", label: "List the variables you'll need and what changes them", rows: 3 },
          { id: "project_link", type: "text", label: "Your Scratch project link (work in progress)" },
        ],
        rubric: [
          { criterion: "Game concept is clear and achievable", points: 25 },
          { criterion: "Sprite list is complete and sensible", points: 25 },
          { criterion: "Variable list matches the game concept", points: 25 },
          { criterion: "Core mechanic has been started in Scratch", points: 25 },
        ],
      },
    },
    // ---------------- PART 11 ----------------
    {
      num: 11,
      title: "Building Your Mini-Game (Part 2)",
      objective: "Add levels, win/lose conditions, and polish to your mini-game.",
      video: { id: "4UT91UFGsGg", title: "Learn to Program with Scratch — Variables, Loops & Conditionals" },
      content: [
        { h3: "What to Focus on Today" },
        { ul: [
          "Add your remaining variables (health, timer, or level, depending on your design)",
          "Add your win and lose conditions using conditionals",
          "Use logical operators (and/or/not) at least once in your decision logic",
          "Start adding sound effects and visual feedback (say blocks, costume changes)",
        ]},
        { p: "Test after every 2-3 new blocks — don't build for 20 minutes without testing. If something breaks, undo your most recent change first before searching further." },
      ],
      worksheet: {
        wsId: "u3ws11",
        title: "Continue Building & Peer Test",
        instructions: "Continue building your mini-game, completing all 4 project requirements, then get a partner to test-play it.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "win_lose_logic", type: "textarea", label: "Describe your win and lose conditions", rows: 3 },
          { id: "peer_feedback", type: "textarea", label: "What feedback did a partner give after playtesting your game?", rows: 3 },
        ],
        rubric: [
          { criterion: "Win condition works correctly", points: 25 },
          { criterion: "Lose/end condition works correctly", points: 25 },
          { criterion: "Logical operator used correctly in decision logic", points: 25 },
          { criterion: "Peer feedback collected and noted", points: 25 },
        ],
      },
    },
    // ---------------- PART 12 ----------------
    {
      num: 12,
      title: "Testing, Debugging & Submission",
      objective: "Polish, debug, and submit your finished mini-game project.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { h3: "A Full Debugging Checklist" },
        { ul: [
          "Does the game work correctly every time you click the green flag, not just sometimes?",
          "Do all variables reset properly at the start of a new game?",
          "Does the win condition trigger correctly, and only once?",
          "Does the lose/end condition trigger correctly, and only once?",
          "Are there any leftover \"test\" blocks or sprites you forgot to remove?",
        ]},
        { h3: "Final Polish Ideas" },
        { ul: [
          "Add a simple title screen or instructions using a \"say\" block at the start",
          "Make sure sound effects aren't too loud or repetitive",
          "Check that text is readable and doesn't overlap with other sprites",
        ]},
      ],
      worksheet: {
        wsId: "u3ws12",
        title: "Final Submission — Mini-Game Project",
        instructions: "Complete final testing using the checklist above, then submit your finished mini-game project.",
        fields: [
          { id: "project_link", type: "text", label: "Your final Scratch project link" },
          { id: "checklist_confirm", type: "textarea", label: "Confirm you've worked through the debugging checklist. Note any issues found and fixed.", rows: 3 },
          { id: "proudest_part", type: "textarea", label: "What part of this project are you most proud of?", rows: 2 },
        ],
        rubric: [
          { criterion: "Game includes a working loop, variable, and conditional", points: 25 },
          { criterion: "Win and lose conditions both work reliably", points: 25 },
          { criterion: "Game has been debugged — no obvious errors", points: 25 },
          { criterion: "Final polish (feedback, sound, instructions) is present", points: 25 },
        ],
      },
    },
  ],
};
