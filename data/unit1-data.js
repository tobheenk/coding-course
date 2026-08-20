/* ============================================================
   UNIT 1 DATA — Computational Thinking
   ============================================================ */
const UNIT_DATA = {
  num: 1,
  title: "Computational Thinking",
  tagline: "Learning to break down, recognise, simplify, and solve problems the way a programmer does.",
  totalParts: 9,
  parts: [
    // ---------------- PART 1 ----------------
    {
      num: 1,
      title: "Introduction to CT & Decomposition",
      objective: "Understand what computational thinking is, and learn to break big problems into smaller, manageable sub-problems.",
      video: { id: "91utNt5qshE", title: "What Is Computational Thinking? (4 pillars explained)" },
      content: [
        { p: "Have you ever solved a big problem by breaking it into smaller, easier steps without even realising it? That instinct is the starting point for everything we'll learn in this unit. <strong>Computational Thinking (CT)</strong> is a way of solving problems using four key skills: decomposition, pattern recognition, abstraction, and algorithm design. It isn't really about computers at all — it's a thinking method that programmers use before they ever write a single line of code." },
        { h3: "Our Roadmap for Unit 1" },
        { ul: [
          "<strong>Decomposition</strong> — breaking a big problem into smaller, manageable parts (today's focus, continued as trees in Part 2)",
          "<strong>Pattern Recognition</strong> — spotting similarities or repeated elements between problems (Part 3)",
          "<strong>Abstraction</strong> — focusing on important details while ignoring irrelevant ones (Part 4)",
          "<strong>Algorithm Design</strong> — creating a step-by-step plan to solve the problem (Part 5)",
        ]},
        { h3: "Decomposition: Breaking Problems Down" },
        { p: "Decomposition means splitting one large, overwhelming problem into several smaller sub-problems. Each smaller part is easier to understand, solve, and check than the problem as a whole. It's the very first thing programmers do before writing any code — they never try to solve everything at once. A well-decomposed problem often reveals sub-problems you can solve independently, sometimes even by different people working in parallel." },
        { h3: "Worked Example: Organise a Class Trip" },
        { p: "\"Organise a class trip\" feels big and overwhelming as a single task — where would you even start? But decomposed into parts, it becomes: choose a destination, plan transportation, plan the budget and collect money, arrange food, and prepare an emergency contact list. Each of those is something one person (or small group) could realistically tackle." },
        { h3: "Why This Matters for Coding" },
        { p: "A big app like Instagram is decomposed into smaller features: login, upload photo, like, comment, search. Even a simple Scratch game is decomposed into movement, scoring, collision detection, and win/lose conditions. Programmers typically work on ONE decomposed part at a time, testing it before moving to the next. Without decomposition, even experienced programmers get lost in overly complex code." },
      ],
      worksheet: {
        wsId: "u1ws01",
        title: "Decomposition Practice",
        instructions: "Choose ONE big problem below, then break it down into at least 5 smaller sub-problems. For each one, explain why it's easier to solve on its own.",
        fields: [
          { id: "problem_choice", type: "text", label: "Which problem did you choose? (\"Plan a birthday party\", \"Build a simple mobile game\", or your own idea)" },
          { id: "subproblems", type: "table", label: "Step 2 — Break It Down", columns: ["Sub-Problem", "Why is this easier to solve on its own?"], rows: 5 },
          { id: "partner_comparison", type: "textarea", label: "Step 3 — Partner Comparison: did you split the problem in a similar way as a partner? What was different?", rows: 4 },
        ],
        rubric: [
          { criterion: "Identified at least 5 clear sub-problems", points: 25 },
          { criterion: "Each sub-problem is specific and understandable on its own", points: 25 },
          { criterion: "Reasoning explains WHY each part is easier to solve separately", points: 25 },
          { criterion: "Completed a thoughtful partner/reflection comparison", points: 25 },
        ],
      },
    },

    // ---------------- PART 2 (NEW) ----------------
    {
      num: 2,
      title: "Decomposition Trees",
      objective: "Understand what a decomposition tree is, why it's a powerful visual alternative to a list, and how to build one correctly for a real problem.",
      video: { id: "qbnTZCj0ugI", title: "Computational Thinking: Decomposition, Pattern Recognition, Abstraction & Algorithms" },
      content: [
        { p: "In Part 1 you decomposed a problem into a flat list of sub-problems. Today we go one step further: a <strong>decomposition tree</strong> is a diagram that breaks a big problem down visually, starting from one main problem at the top and branching outward into smaller and smaller sub-problems — like the branches of an actual tree, or an upside-down family tree." },
        { h3: "Why Use a Tree Instead of a List?" },
        { p: "A list shows sub-problems as flat, separate items, but doesn't show if a sub-problem is still too big. A <strong>tree</strong> shows how sub-problems relate to the main goal, makes it obvious when a branch needs to split further, and makes gaps easier to spot — an empty-looking branch stands out. Trees become especially useful once decomposition needs more than one \"layer,\" which happens often with bigger, real-world problems." },
        { h3: "How to Build a Decomposition Tree" },
        { ul: [
          "<strong>1. Write the main problem at the top</strong> — this is the root, the big overwhelming task you started with",
          "<strong>2. Ask: what are the 3-5 major parts?</strong> — draw these as the first set of branches",
          "<strong>3. For each branch, ask: is it still too big?</strong> — if yes, split it into its own smaller branches (a second layer)",
          "<strong>4. Stop once a branch is small enough to solve directly</strong> — this is called a <strong>leaf</strong>, usually doable in one sitting",
          "<strong>5. Check your tree</strong> — does every leaf feel genuinely manageable? If not, split once more",
        ]},
        { h3: "Worked Example: Build a Simple Mobile Game" },
        { p: "Root: \"Build a Simple Mobile Game\" splits into 4 top-level branches: Game Logic, Graphics, Sound, and User Interface. \"Game Logic\" needed a THIRD layer (Scoring, Win/Lose, Player Movement) because it hides several separate tasks. \"Sound\" was simple enough to stop at just \"Music\" as a single leaf. Notice the uneven depth — some branches need more layers than others, and that's completely normal in a good tree." },
        { h3: "Rules of a Good Decomposition Tree" },
        { ul: [
          "One root only — every tree starts from a single main problem",
          "Each branch should be a genuine PART of its parent, not just a related idea",
          "Don't force exactly 3 branches everywhere — let the problem decide how many",
          "Leaves should feel \"doable in one sitting\" — if unsure, split once more",
          "It's fine to have uneven depth — some branches need 3 layers, others are done after 1",
        ]},
      ],
      worksheet: {
        wsId: "u1ws02",
        title: "Build Your Own Decomposition Tree",
        instructions: "Choose a problem (e.g. \"Organise a Class Field Trip\", \"Build a To-Do List App\", \"Plan a 3-Course Meal\", or your own idea). List your top-level branches, then split at least ONE branch into a second layer of sub-branches.",
        fields: [
          { id: "root_problem", type: "text", label: "Root — what is the main problem at the top of your tree?" },
          { id: "level1_branches", type: "table", label: "Level 1 — Main Branches (3-5 major parts of the problem)", columns: ["Branch Name"], rows: 4 },
          { id: "level2_branches", type: "table", label: "Level 2 — Sub-Branches (split at least 1-2 of your Level 1 branches further)", columns: ["Parent Branch", "Sub-Branch"], rows: 6 },
          { id: "leaf_check", type: "textarea", label: "For your smallest branches (leaves), briefly explain why each one feels \"doable in one sitting.\"", rows: 3 },
        ],
        rubric: [
          { criterion: "Root problem is clearly stated", points: 15 },
          { criterion: "3-5 sensible, genuine top-level branches", points: 30 },
          { criterion: "At least one branch correctly split into a second layer", points: 30 },
          { criterion: "Leaves feel genuinely manageable, with clear reasoning", points: 25 },
        ],
      },
    },

    // ---------------- PART 3 ----------------
    {
      num: 3,
      title: "Pattern Recognition",
      objective: "Learn to notice similarities, trends, and repeated elements between problems, and understand why this matters for coding.",
      video: { id: "qbnTZCj0ugI", title: "Computational Thinking: Decomposition, Pattern Recognition, Abstraction & Algorithms" },
      content: [
        { p: "If you were asked to describe your daily morning routine to a friend, would any steps repeat every single day? Probably yes. <strong>Pattern recognition</strong> means noticing similarities, trends, or repeated elements. In coding, spotting patterns lets us reuse the same solution instead of solving the same problem over and over again." },
        { h3: "Patterns Are Everywhere" },
        { ul: [
          "Daily routines: wake up, brush teeth, get dressed — repeated every school day",
          "Number patterns: 2, 4, 6, 8... — recognising the \"add 2\" rule",
          "Visual patterns: a tiled floor, a striped shirt, a brick wall",
          "In code: a shape made of 4 equal sides always needs the same \"turn\" amount repeated",
        ]},
        { h3: "Why This Matters for Coding Later" },
        { p: "Once you notice a pattern, you often don't need to write separate instructions for each repeat. This is the core idea behind <strong>loops</strong>, which you'll use heavily starting in Unit 2 and Unit 3. Recognising \"this looks like something I've solved before\" saves huge amounts of time. Pattern recognition also helps with debugging — many bugs follow familiar patterns too, so experienced programmers often spot a bug just by recognising its \"shape\"." },
        { h3: "Finding Patterns in Real Data" },
        { p: "Patterns aren't just visual — they show up in data too. Weather, for example, usually follows a yearly pattern: certain months are consistently hotter or cooler than others, year after year. Today's worksheet asks you to find a real pattern like this using actual temperature data for a city of your choice, which is exactly the kind of pattern-spotting that later becomes useful when designing programs that need to predict or react to trends." },
      ],
      worksheet: {
        wsId: "u1ws03",
        title: "Pattern Recognition — Data Log",
        instructions: "Search \"average monthly temperature [your city]\" and log 12 months of data below. Then answer the reflection questions about the pattern you found.",
        fields: [
          { id: "city", type: "text", label: "Which city's data did you use?" },
          { id: "temp_data", type: "table", label: "12-Month Temperature Log", columns: ["Temperature (°C)", "Notes"], rows: 12, rowLabels: ["January","February","March","April","May","June","July","August","September","October","November","December"] },
          { id: "pattern_found", type: "textarea", label: "What pattern did you notice across the 12 months? (e.g. hottest/coolest months)", rows: 3 },
          { id: "hottest_coolest", type: "text", label: "Which month was the hottest, and which was the coolest?" },
          { id: "usefulness", type: "textarea", label: "How might this pattern be useful if you were designing an app or program?", rows: 3 },
        ],
        rubric: [
          { criterion: "Logged real data for all (or nearly all) 12 months", points: 25 },
          { criterion: "Correctly identified the hottest and coolest months", points: 25 },
          { criterion: "Clearly described the overall pattern in words", points: 25 },
          { criterion: "Gave a thoughtful example of how this pattern could be useful in a program", points: 25 },
        ],
      },
    },

    // ---------------- PART 4 ----------------
    {
      num: 4,
      title: "Abstraction",
      objective: "Learn to focus on the details that matter for a problem, while deliberately ignoring irrelevant ones.",
      video: { id: "kVfGUdIaUvY", title: "Computational Thinking — Abstraction Explained" },
      content: [
        { p: "If you were describing a bicycle to someone who has never seen one, would you mention the exact brand of paint used? Probably not — because it doesn't matter for understanding what a bicycle IS or does. <strong>Abstraction</strong> means keeping only the details that are relevant to the problem you're solving, and ignoring the rest. Too much detail can make a problem harder to solve, not easier." },
        { h3: "A Map Is Abstraction in Action" },
        { p: "A map is a perfect real-world example. A good map keeps: roads and their names, major landmarks, distances and directions, and transit lines — because those help you navigate. It deliberately leaves out: the exact colour of every building, individual trees, what's inside each shop, and the texture of the pavement — because none of that helps you get where you're going." },
        { h3: "Abstraction in Programming" },
        { p: "When designing a \"Login\" feature, programmers abstract away exactly how passwords get encrypted at first — they just focus on: username, password, submit. A game character can be abstracted as: position, speed, health — ignoring the artistic details of how it looks. Good abstraction makes a problem simple enough to actually start solving. Too little abstraction and you're overwhelmed by detail; too much and you risk missing something important — finding the right balance is a skill that improves with practice." },
      ],
      worksheet: {
        wsId: "u1ws04",
        title: "Abstraction Practice",
        instructions: "Choose ONE object below. List only 4-5 features that matter for its MAIN purpose — leave out appearance, brand, or other unimportant details.",
        fields: [
          { id: "object_choice", type: "text", label: "Which object did you choose? (a car, a smartphone, a school timetable, or your own idea)" },
          { id: "feature_sort", type: "table", label: "Sort the Details", columns: ["Essential Features (Keep)", "Irrelevant Details (Ignore)"], rows: 5 },
          { id: "partner_comparison", type: "textarea", label: "Partner Comparison: did you choose similar essential features? Discuss any differences.", rows: 4 },
        ],
        rubric: [
          { criterion: "Listed at least 4 genuinely essential features", points: 25 },
          { criterion: "Correctly identified irrelevant/unimportant details", points: 25 },
          { criterion: "Features chosen clearly relate to the object's MAIN purpose", points: 25 },
          { criterion: "Completed a thoughtful partner comparison", points: 25 },
        ],
      },
    },

    // ---------------- PART 5 ----------------
    {
      num: 5,
      title: "Introduction to Algorithms",
      objective: "Understand what makes a good algorithm, and practice writing and testing one.",
      video: { id: "kri4m19O06o", title: "Algorithm and Flowchart: Let's Learn the Basics Properly" },
      content: [
        { p: "After decomposing, spotting patterns, and abstracting a problem, what's the next logical step? Turning our understanding into an actual plan. An <strong>algorithm</strong> is a clear, ordered, and finite sequence of steps that solves a problem — the natural result of applying the first three CT skills." },
        { h3: "What Makes a Good Algorithm?" },
        { ul: [
          "<strong>Clear</strong> — each step is exact, with no room for confusion",
          "<strong>Ordered</strong> — the steps happen in the correct sequence",
          "<strong>Finite</strong> — the algorithm eventually reaches an end",
        ]},
        { p: "A vague algorithm can easily be misunderstood or fail when followed literally — which is exactly why today's practice activity has you test your algorithm on a partner who follows it EXACTLY as written, even if that leads somewhere silly." },
        { h3: "Everyday Algorithms All Around Us" },
        { p: "A recipe is an algorithm: exact steps to cook a dish, in the correct order. Directions to a friend's house are an algorithm: turn left, go straight, turn right. Even brushing your teeth follows an algorithm, whether you realise it or not. Recognising algorithms in daily life makes it much easier to write your own." },
      ],
      worksheet: {
        wsId: "u1ws05",
        title: "Algorithm Writing & Testing",
        instructions: "Write numbered steps for \"making a cup of tea\" as clearly as possible. Then imagine a partner following your steps EXACTLY and literally, and record what would happen.",
        fields: [
          { id: "algorithm_steps", type: "table", label: "Step 1 — Write Your Algorithm", columns: ["Instruction"], rows: 8 },
          { id: "test_results", type: "table", label: "Step 2 — Partner Test Results", columns: ["What actually happened?", "Gap/Issue found"], rows: 3 },
          { id: "reflection", type: "textarea", label: "Step 3 — Reflection: what gaps in logic did you find? How would you rewrite your algorithm to be clearer?", rows: 4 },
        ],
        rubric: [
          { criterion: "Algorithm has clear, specific, numbered steps", points: 25 },
          { criterion: "Steps are in a logical, workable order", points: 25 },
          { criterion: "Identified at least 2 real gaps or ambiguities when tested literally", points: 25 },
          { criterion: "Reflection shows understanding of how to improve clarity", points: 25 },
        ],
      },
    },

    // ---------------- PART 6 ----------------
    {
      num: 6,
      title: "Digital Flowcharts — Basics",
      objective: "Learn the four basic flowchart symbols and build your first flowchart digitally.",
      video: { id: "_KWig28YYDM", title: "Flowchart Example Explained — Step-by-Step Guide for Beginners" },
      content: [
        { p: "Why might a diagram be easier to follow at a glance than a paragraph of written instructions? Because a picture can show order and structure instantly. A <strong>flowchart</strong> is a visual way to represent an algorithm using standard shapes connected by arrows." },
        { h3: "The Four Basic Flowchart Symbols" },
        { ul: [
          "<strong>Oval</strong> — Start / End of the algorithm",
          "<strong>Rectangle</strong> — a Process or action step",
          "<strong>Parallelogram</strong> — Input or Output",
          "<strong>Diamond</strong> — a Decision (we'll cover this properly in Unit 3)",
        ]},
        { p: "Arrows always show the direction and order of the steps. Every flowchart needs exactly ONE start point, though it can have more than one possible end point." },
      ],
      code: {
        label: "Worked example — making tea as a flowchart",
        lines: [
          "[Start] -> [Boil water] -> [Put tea bag in cup]",
          "-> [Pour hot water] -> [Wait 3 minutes] -> [Remove tea bag] -> [End]",
        ],
      },
      worksheet: {
        wsId: "u1ws06",
        title: "Flowchart Planning — Making Tea",
        instructions: "Before building a flowchart digitally (e.g. in Google Drawings), plan it here in words first. Write out each step, then decide which symbol it should be.",
        fields: [
          { id: "tea_plan", type: "table", label: "Plan: Making a Cup of Tea", columns: ["Instruction", "Flowchart Symbol (Oval / Rectangle / Parallelogram)"], rows: 7 },
          { id: "drawing_link", type: "text", label: "Paste the link to your finished digital flowchart here (once built)" },
        ],
        rubric: [
          { criterion: "Plan has a clear single Start and at least one End", points: 25 },
          { criterion: "Steps are in the correct logical order", points: 25 },
          { criterion: "Correct symbol chosen for each step", points: 25 },
          { criterion: "Digital flowchart link provided and matches the plan", points: 25 },
        ],
      },
    },

    // ---------------- PART 7 ----------------
    {
      num: 7,
      title: "Digital Flowcharts — Practice",
      objective: "Practice planning and building flowcharts for two new everyday scenarios.",
      video: { id: "NdS8J9lHWgE", title: "How to Make an Algorithm and Flowchart from a Given Problem" },
      content: [
        { p: "Which part of building a flowchart do you find trickiest so far — choosing the right shape, or getting the order correct? Today is focused practice, reinforcing the symbols and structure from Part 6 using two brand-new everyday scenarios." },
        { h3: "Scenario 1: Getting Ready for School" },
        { p: "List all the steps involved, in the order they usually happen. Decide which symbol fits each step (mostly rectangles and parallelograms at this stage). Remember: every flowchart needs exactly one Start and at least one End." },
        { h3: "Scenario 2: Charging Your Phone" },
        { p: "List the steps from picking up the charger to the phone being fully charged. Think about which steps are inputs (plugging in) versus processes (charging). Compare with a partner afterwards — did you both order the steps the same way?" },
      ],
      worksheet: {
        wsId: "u1ws07",
        title: "Flowchart Planning — Two Scenarios",
        instructions: "Plan both flowcharts below in words first, deciding the right symbol for each step, before building them digitally.",
        fields: [
          { id: "scenario1", type: "table", label: "Scenario 1 — Getting Ready for School", columns: ["Instruction", "Flowchart Symbol"], rows: 6 },
          { id: "scenario2", type: "table", label: "Scenario 2 — Charging Your Phone", columns: ["Instruction", "Flowchart Symbol"], rows: 6 },
          { id: "partner_comparison", type: "textarea", label: "Partner Comparison: did you both order the steps the same way? Did you choose the same symbols?", rows: 4 },
        ],
        rubric: [
          { criterion: "Both scenarios have clear, ordered steps", points: 25 },
          { criterion: "Symbols chosen correctly for each step type", points: 25 },
          { criterion: "Each flowchart has exactly one Start and at least one End", points: 25 },
          { criterion: "Completed a thoughtful partner comparison", points: 25 },
        ],
      },
    },

    // ---------------- PART 8 ----------------
    {
      num: 8,
      title: "Integrated Case Study",
      objective: "Apply all four computational thinking skills together to solve one larger, realistic problem.",
      video: { id: "qbnTZCj0ugI", title: "Computational Thinking: Decomposition, Pattern Recognition, Abstraction & Algorithms" },
      content: [
        { p: "Out of decomposition, pattern recognition, abstraction, and algorithm design — which do you feel most confident using so far? Today you solve one larger, more realistic problem using ALL four skills together, from start to finish, just like a programmer would before writing any code." },
        { h3: "The Challenge: Planning a Class Party" },
        { ul: [
          "<strong>Decomposition:</strong> break \"plan a class party\" into smaller tasks (food, decorations, games, invites)",
          "<strong>Pattern Recognition:</strong> has our class organised a similar event before? What worked?",
          "<strong>Abstraction:</strong> what are the essential requirements vs \"nice to have\" extras?",
          "<strong>Algorithm:</strong> create an ordered step-by-step plan to execute the party successfully",
        ]},
        { p: "Each CT skill builds on the previous one — you can't design a good algorithm until you've decomposed the problem and identified what truly matters. This order (Decompose → Patterns → Abstract → Algorithm) is worth remembering; it's the same order professional developers instinctively follow." },
      ],
      worksheet: {
        wsId: "u1ws08",
        title: "Group Case Study — Planning a Class Party",
        instructions: "Work through all four CT stages for the same shared problem: planning a class party. If working with a study partner or group, agree on answers together.",
        fields: [
          { id: "group_name", type: "text", label: "Group / Your Name" },
          { id: "decomposition", type: "textarea", label: "1. Decomposition — What are the major parts of organising a party? Could any be broken down further?", rows: 4 },
          { id: "patterns", type: "textarea", label: "2. Pattern Recognition — Has a similar event happened before? What worked, and what usually goes wrong?", rows: 4 },
          { id: "abstraction", type: "textarea", label: "3. Abstraction — Which elements are essential vs \"nice to have\"?", rows: 4 },
          { id: "algorithm", type: "textarea", label: "4. Algorithm — Write your final ordered step-by-step plan to execute the party.", rows: 5 },
        ],
        rubric: [
          { criterion: "Decomposition breaks the problem into clear, sensible parts", points: 25 },
          { criterion: "Pattern recognition draws on real or plausible past experience", points: 25 },
          { criterion: "Abstraction clearly separates essential vs optional elements", points: 25 },
          { criterion: "Algorithm is clear, ordered, and would actually work if followed", points: 25 },
        ],
      },
    },

    // ---------------- PART 9 ----------------
    {
      num: 9,
      title: "Review & Assessment",
      objective: "Consolidate everything from Unit 1 and complete the final individual assessment.",
      video: { id: "91utNt5qshE", title: "What Is Computational Thinking? (4 pillars — full review)" },
      content: [
        { h3: "Unit 1 Recap: The Four Pillars" },
        { ul: [
          "<strong>Decomposition</strong> — breaking a big problem into smaller, manageable parts (as a list, and as a tree)",
          "<strong>Pattern Recognition</strong> — spotting similarities and repeated elements between problems",
          "<strong>Abstraction</strong> — keeping only the details relevant to solving the problem",
          "<strong>Algorithm Design</strong> — creating a clear, ordered, finite plan to solve the problem",
        ]},
        { h3: "Common Errors and How to Avoid Them" },
        { ul: [
          "Skipping decomposition and trying to solve everything at once — leads to overwhelm and mistakes",
          "Building a decomposition tree with only one layer when a branch is clearly still too big",
          "Confusing a pattern with an algorithm — a pattern is something you NOTICE, an algorithm is something you BUILD",
          "Over-abstracting and losing details that actually mattered",
          "Writing algorithms that are too vague to actually follow step by step",
        ]},
        { p: "This final assessment covers all of Unit 1. Choose one real-life problem and work through all four stages carefully — take your time, since this brings together everything you've practiced across the last 8 parts." },
      ],
      worksheet: {
        wsId: "u1ws09",
        title: "Final Assessment — Computational Thinking",
        isAssessment: true,
        instructions: "Choose ONE real-life problem and complete all four Computational Thinking stages for it. This assessment covers all of Unit 1 — work carefully.",
        fields: [
          { id: "problem_statement", type: "textarea", label: "0. Problem Statement — describe the real-life problem you have chosen to solve", rows: 3 },
          { id: "decomposition", type: "table", label: "1. Decomposition — break your problem into at least 5 smaller sub-problems", columns: ["Sub-Problem"], rows: 5 },
          { id: "patterns", type: "textarea", label: "2. Pattern Recognition — what patterns or similarities did you notice? Has something similar been solved before?", rows: 3 },
          { id: "abstraction", type: "table", label: "3. Abstraction — essential features vs details you can ignore", columns: ["Essential Features (Keep)", "Irrelevant Details (Ignore)"], rows: 4 },
          { id: "algorithm", type: "table", label: "4. Algorithm — write a clear, ordered, step-by-step algorithm to solve your problem", columns: ["Instruction"], rows: 6 },
          { id: "flowchart_link", type: "text", label: "5. Paste the link to your Google Drawings flowchart representing this algorithm" },
        ],
        rubric: [
          { criterion: "Decomposition — at least 5 clear, sensible sub-problems", points: 20 },
          { criterion: "Pattern Recognition — thoughtful, relevant observation", points: 20 },
          { criterion: "Abstraction — sensible essential vs irrelevant split", points: 20 },
          { criterion: "Algorithm — clear, ordered, workable steps", points: 20 },
          { criterion: "Flowchart accurately represents the algorithm", points: 20 },
        ],
      },
    },
  ],
};
