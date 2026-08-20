/* ============================================================
   UNIT 5 DATA — Introduction to Text-Based Coding (Python)
   ============================================================ */
const UNIT_DATA = {
  num: 5,
  title: "Introduction to Text-Based Coding",
  tagline: "Taking the first steps into Python — from print() to your first interactive programs.",
  totalParts: 6,
  parts: [
    // ---------------- PART 1 ----------------
    {
      num: 1,
      title: "Introduction to Python",
      objective: "Understand what text-based coding is and get your Python environment set up.",
      video: { id: "WnCBW_Im2UU", title: "Python Tutorial for Beginners #1 — Printing, Input, and Variables" },
      content: [
        { p: "Scratch uses blocks you snap together. What do you imagine \"typing\" code instead of clicking blocks might feel like? <strong>Python</strong> is a text-based programming language — instead of snapping blocks, we type commands as lines of text. It's one of the most widely used programming languages in the world, from websites to scientific research to artificial intelligence." },
        { h3: "Comparing Scratch and Python" },
        { p: "<strong>Scratch (Blocks):</strong> visual, drag-and-drop programming. Blocks snap together physically, so errors are harder to make. Great for visual thinkers and beginners — and it's what you've been using since Grade 3.<br><br><strong>Python (Text):</strong> typed, text-based programming. Commands are typed exactly, with precise spelling. Errors happen easily — computers are very literal! This is used by professional software developers worldwide, and it's new to you starting today." },
        { h3: "Getting Set Up: Replit or Thonny" },
        { ul: [
          "<strong>Replit</strong> (replit.com) — an online code editor, works in any web browser, nothing to install",
          "<strong>Thonny</strong> — a downloadable Python editor, good if it's already installed on your computer",
        ]},
        { p: "Both let you write Python code and run it immediately to see the result." },
      ],
      code: {
        label: "Your first Python program",
        lines: ['print("Hello, World!")'],
      },
      worksheet: {
        wsId: "u5ws01",
        title: "Set Up Your Python Environment",
        instructions: "Open your chosen Python editor, run your first program, and confirm it works.",
        fields: [
          { id: "tool_used", type: "text", label: "Which tool did you use: Replit or Thonny?" },
          { id: "hello_world_result", type: "textarea", label: "Paste or describe what happened when you ran print(\"Hello, World!\")", rows: 2 },
          { id: "errors_encountered", type: "textarea", label: "Did you see any errors? If so, what did you fix?", rows: 2 },
        ],
        rubric: [
          { criterion: "Python editor successfully set up", points: 40 },
          { criterion: "\"Hello, World!\" program ran successfully", points: 40 },
          { criterion: "Any errors encountered were identified and resolved", points: 20 },
        ],
      },
    },
    // ---------------- PART 2 ----------------
    {
      num: 2,
      title: "The print() Function",
      objective: "Practice displaying text and calculation results using print().",
      video: { id: "AovxLr8jUH4", title: "Python Tutorial for Beginners 5 — print() and input() Function" },
      content: [
        { h3: "Understanding print()" },
        { ul: [
          "print() is a function — a built-in command that performs a specific action",
          "Anything you want displayed goes inside the round brackets ( )",
          "Text must be wrapped in quotation marks \" \" — this is called a \"string\"",
          "Each print() statement displays its own new line of output",
        ]},
      ],
      code: {
        label: "Basic print() examples",
        lines: [
          'print("Hello World")',
          'print("My name is Sam")',
          'print("2 + 2")        # this prints the TEXT "2 + 2", not the number 4',
          "",
          "print(2 + 2)          # this DOES calculate, because there are no quotes",
          "print(10 - 3)",
          "print(4 * 5)          # * means multiply",
          "print(20 / 4)         # / means divide",
        ],
      },
      worksheet: {
        wsId: "u5ws02",
        title: "Write 6 print() Lines",
        instructions: "In your Python editor, write and test a series of print() statements, then paste your final code below.",
        fields: [
          { id: "final_code", type: "textarea", label: "Paste your final code (all 6 print statements)", rows: 8 },
          { id: "output_description", type: "textarea", label: "Describe what your program displayed when you ran it", rows: 3 },
        ],
        rubric: [
          { criterion: "Printed personal information correctly (name, hobby, grade)", points: 30 },
          { criterion: "Correctly printed a maths calculation without quotes", points: 35 },
          { criterion: "Program ran without errors", points: 35 },
        ],
      },
    },
    // ---------------- PART 3 ----------------
    {
      num: 3,
      title: "Variables in Python",
      objective: "Create, use, and combine variables with text.",
      video: { id: "PdQyJ5v_EyM", title: "Coding for Kids — Python Variables in 2 Minutes" },
      content: [
        { h3: "Creating Variables" },
        { ul: [
          "A variable is created simply by writing: <code>name = value</code> — no special keyword needed",
          "Variable names should be meaningful (e.g. \"age\" not \"x\") and cannot contain spaces",
          "Text values (strings) need quotation marks; number values do not",
          "Once created, a variable can be used again and again throughout your program",
        ]},
      ],
      code: {
        label: "Creating, printing, and combining variables",
        lines: [
          'name = "Budi"',
          "age = 12",
          "",
          "print(name)",
          "print(age)",
          "",
          'print("Hello, " + name + "!")',
          'print("I am " + str(age) + " years old.")',
        ],
      },
      worksheet: {
        wsId: "u5ws03",
        title: "Create Your Own Variables",
        instructions: "Create and use several variables about yourself in Python, then combine at least one with text.",
        fields: [
          { id: "final_code", type: "textarea", label: "Paste your final code", rows: 8 },
          { id: "str_usage", type: "text", label: "Where did you need to use str() and why?" },
        ],
        rubric: [
          { criterion: "Created at least 3 variables with meaningful names", points: 30 },
          { criterion: "Correctly combined text and variables using +", points: 35 },
          { criterion: "Correctly used str() when combining a number with text", points: 35 },
        ],
      },
    },
    // ---------------- PART 4 ----------------
    {
      num: 4,
      title: "The input() Function",
      objective: "Build your first interactive programs that respond to user input.",
      video: { id: "WnCBW_Im2UU", title: "Python Tutorial for Beginners #1 — Printing, Input, and Variables" },
      content: [
        { h3: "Asking the User a Question" },
        { ul: [
          "input() pauses the program and waits for the user to type something, then press Enter",
          "Whatever the user types is treated as a string (text), even if it's a number",
          "input() is usually combined with a variable to save the user's answer",
          "This is the key difference between a static program and an interactive one",
        ]},
      ],
      code: {
        label: "Using input() with text and numbers",
        lines: [
          'name = input("What is your name? ")',
          'print("Hello, " + name + "!")',
          "",
          'age = input("How old are you? ")',
          "age = int(age)              # converts the text answer into a whole number",
          "next_year = age + 1",
          'print("Next year you\'ll be " + str(next_year))',
        ],
      },
      worksheet: {
        wsId: "u5ws04",
        title: "Build an Interactive Greeting",
        instructions: "Write a program that asks the user questions and responds based on their answers.",
        fields: [
          { id: "final_code", type: "textarea", label: "Paste your final code", rows: 8 },
          { id: "test_results", type: "textarea", label: "What happened when you tested it with your own answers?", rows: 2 },
        ],
        rubric: [
          { criterion: "Correctly used input() to collect name and age", points: 30 },
          { criterion: "Correctly converted age to a number with int()", points: 35 },
          { criterion: "Program prints a correct, combined greeting", points: 35 },
        ],
      },
    },
    // ---------------- PART 5 ----------------
    {
      num: 5,
      title: "Combining print(), Variables & input()",
      objective: "Build a complete mini-program combining everything learned so far.",
      video: { id: "AovxLr8jUH4", title: "Python Tutorial for Beginners 5 — print() and input() Function" },
      content: [
        { h3: "Putting the Pieces Together" },
        { p: "Real programs combine all three concepts: getting input, storing it, and displaying output. Plan your program's flow BEFORE typing: what will you ask? What will you calculate or combine? What will you show? Test after every 2-3 new lines — don't write the whole program before running it once. Reading error messages carefully often tells you exactly which line has a problem." },
      ],
      code: {
        label: "Example: a simple number program",
        lines: [
          'num1 = int(input("Enter the first number: "))',
          'num2 = int(input("Enter the second number: "))',
          "total = num1 + num2",
          'print("The total is: " + str(total))',
        ],
      },
      worksheet: {
        wsId: "u5ws05",
        title: "Build a Mini Profile Program",
        instructions: "Write a Python program that asks at least 3 questions and prints a combined summary sentence using all the answers.",
        fields: [
          { id: "final_code", type: "textarea", label: "Paste your final code", rows: 10 },
          { id: "sample_run", type: "textarea", label: "Paste an example of the output when you ran your program", rows: 3 },
        ],
        rubric: [
          { criterion: "Asked for at least 3 pieces of information using input()", points: 25 },
          { criterion: "Stored each answer in a clearly-named variable", points: 25 },
          { criterion: "Combined all answers into one summary sentence correctly", points: 25 },
          { criterion: "Program tested and runs without errors", points: 25 },
        ],
      },
    },
    // ---------------- PART 6 ----------------
    {
      num: 6,
      title: "Review & Assessment",
      objective: "Consolidate Unit 5 — and the whole Grade 7 Coding course.",
      video: { id: "Z1Yd7upQsXY", title: "Python Tutorial for Absolute Beginners #1 — What Are Variables?" },
      content: [
        { h3: "Unit 5 Recap: Python Basics" },
        { ul: [
          "<strong>print()</strong> — displays text or the result of a calculation on the screen",
          "<strong>Variables</strong> — store information using name = value, reusable throughout a program",
          "<strong>input()</strong> — pauses the program to receive text typed in by the user",
          "<strong>Combining them</strong> — real programs ask for input, store it in variables, then print results",
        ]},
        { h3: "Common Errors and How to Read Them" },
        { ul: [
          "<strong>SyntaxError</strong>: usually means a missing quotation mark, bracket, or colon",
          "<strong>NameError</strong>: usually means a variable name was misspelled or used before being created",
          "<strong>TypeError</strong>: usually means mixing text and numbers without converting with str() or int()",
        ]},
        { p: "Error messages tell you the exact line number — always check that line first." },
      ],
      code: {
        label: "Practice: spot the bug",
        lines: [
          'name = input("What is your name? ")',
          'age = input("How old are you? ")',
          "next_year = age + 1",
          'print("Next year you\'ll be " + next_year)',
          "",
          "# Hint: there are TWO bugs here involving int() and str()",
        ],
      },
      worksheet: {
        wsId: "u5ws06",
        title: "Final Assessment — Basic Coding Exercises",
        isAssessment: true,
        instructions: "Complete the final Unit 5 assessment: fix the bugs above, then write your own small program.",
        fields: [
          { id: "bug_fix", type: "textarea", label: "Write the corrected version of the buggy code above", rows: 6 },
          { id: "final_program", type: "textarea", label: "Write a program that asks for the user's name and favourite number, adds 5 to it, and prints the result in a full sentence", rows: 8 },
          { id: "course_reflection", type: "textarea", label: "Looking back at the whole course (Units 1-5), what are you most proud of learning?", rows: 3 },
        ],
        rubric: [
          { criterion: "Correctly fixed both bugs (int and str conversions)", points: 30 },
          { criterion: "Final program correctly uses input(), a variable, and a calculation", points: 30 },
          { criterion: "Final program prints a correct, complete sentence", points: 20 },
          { criterion: "Course reflection is thoughtful and specific", points: 20 },
        ],
      },
    },
  ],
};
