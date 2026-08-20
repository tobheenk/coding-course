/* ============================================================
   UNIT 2 DATA — Block-Coding Review (Scratch)
   ============================================================ */
const UNIT_DATA = {
  num: 2,
  title: "Block-Coding Review (Scratch)",
  tagline: "A fast, thorough refresher of everything you learned about Scratch in Grades 3-6.",
  totalParts: 2,
  parts: [
    // ---------------- PART 1 ----------------
    {
      num: 1,
      title: "Scratch Refresher — Core Concepts",
      objective: "Refresh every major Scratch block category before moving into more advanced material in Unit 3.",
      video: { id: "D-nW4jvzRr8", title: "Beginners Guide to Scratch (Very Simple)" },
      content: [
        { p: "You've already used Scratch since Grade 3 — this isn't about learning it from zero, it's a fast, thorough refresher covering every block category, so everything is fresh before we build more advanced projects in Unit 3." },
        { h3: "The Scratch Interface — A Quick Tour" },
        { ul: [
          "<strong>Stage</strong> (top-right) — where your program actually runs and characters appear",
          "<strong>Sprite list</strong> (bottom-right) — all the characters/objects in your project",
          "<strong>Block palette</strong> (left) — every category of block you can use",
          "<strong>Script area</strong> (middle) — where you drag and snap blocks together",
          "<strong>Costumes & Sounds tabs</strong> — where you edit how a sprite looks and sounds",
        ]},
        { h3: "Motion, Looks & Sound" },
        { p: "<strong>Motion</strong> blocks move sprites: \"move (10) steps\" moves forward, \"turn ↻ (15) degrees\" rotates, \"go to x: () y: ()\" jumps to an exact position, and \"glide (1) secs to x: () y: ()\" moves smoothly over time. <strong>Looks</strong> blocks change appearance: \"say [Hello!] for (2) seconds\" shows a speech bubble, \"switch costume to ()\" changes the image shown, \"next costume\" cycles through costumes (useful for animation), and \"show / hide\" toggles visibility. <strong>Sound</strong> blocks add audio: \"play sound () until done\" waits for the sound to finish, while \"start sound ()\" plays without waiting." },
        { h3: "Events, Control & Sensing" },
        { p: "Every script needs an <strong>event</strong> block at the top or it will never run: \"when 🏳 clicked\", \"when [key] pressed\", \"when this sprite clicked\", and \"when I receive [message]\" are the most common. <strong>Control</strong> blocks manage flow: \"wait\", \"repeat (n)\", \"forever\", and \"if <condition> then\" (with an optional \"else\"). <strong>Sensing</strong> and <strong>Operators</strong> let you check conditions: \"touching ()?\", \"key () pressed?\", comparisons like \"() > ()\", and logical combinations like \"() and ()\"." },
        { h3: "Variables — Storing Information" },
        { p: "Use \"Make a Variable\" to create a named storage container (e.g. \"score\"). \"set () to ()\" assigns a starting value, and \"change () by ()\" increases or decreases it. \"show variable\" / \"hide variable\" controls whether it's visible on stage — handy for scoreboards." },
        { h3: "The Coordinate System" },
        { p: "Scratch's stage is a coordinate grid, just like maths class. The centre of the stage is x: 0, y: 0. x increases going right and decreases going left; y increases going up and decreases going down. The stage ranges roughly from -240 to 240 (x) and -180 to 180 (y). \"go to x: 100 y: 50\" places a sprite exactly, not roughly — useful for resetting a sprite's position at the start of a game, and essential later for detecting collisions and boundaries." },
        { h3: "Backdrops & Broadcasts" },
        { p: "A project can have multiple backdrops, just like a sprite can have multiple costumes. \"switch backdrop to ()\" changes the entire scene — useful for level changes or menus. Broadcasts let sprites talk to each other: \"broadcast [message]\" sends a signal any sprite can listen for, and \"when I receive [message]\" reacts to it. This is how one sprite's action can trigger something in a completely different sprite." },
      ],
      code: {
        label: "Reading a simple script together",
        lines: [
          "when 🏳 clicked",
          "set [score] to (0)",
          "forever",
          "  move (5) steps",
          "  if <touching [Coin]?> then",
          "    change [score] by (1)",
        ],
      },
      worksheet: {
        wsId: "u2ws01",
        title: "Modify a Starter Scratch Project",
        instructions: "Open the starter Scratch project shared by your teacher (or start a new project) and complete the four tasks below. Record your project link and briefly describe what you built for each task.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch project link" },
          { id: "task_a", type: "textarea", label: "Task A — Change the sprite's movement speed and turning angle. What did you set them to?", rows: 2 },
          { id: "task_b", type: "textarea", label: "Task B — Add a sound effect that plays when the green flag is clicked. Which sound did you use?", rows: 2 },
          { id: "task_c", type: "textarea", label: "Task C — Add a \"say\" block that displays a greeting for 2 seconds at the start. What does it say?", rows: 2 },
          { id: "task_d", type: "textarea", label: "Task D — Change the background using the Costumes/Backdrops tab. What did you choose?", rows: 2 },
        ],
        rubric: [
          { criterion: "Task A completed — motion values changed and tested", points: 25 },
          { criterion: "Task B completed — sound effect added correctly", points: 25 },
          { criterion: "Task C completed — greeting displays correctly", points: 25 },
          { criterion: "Task D completed — backdrop changed successfully", points: 25 },
        ],
      },
    },

    // ---------------- PART 2 ----------------
    {
      num: 2,
      title: "Scratch Refresher — Applied Practice",
      objective: "Independently build a small Scratch project combining event, motion, looks, and control blocks.",
      video: { id: "miVAZKzToqU", title: "Scratch — Conditions and Loops" },
      content: [
        { p: "Now that we've refreshed every block category, today's goal is to independently build (or extend) a small Scratch project that uses at least motion, looks, an event, and one control block — proving you're ready for the more advanced material in Unit 3." },
        { h3: "Mini-Project Requirements Checklist" },
        { ul: [
          "At least one <strong>event</strong> block (green flag or key press)",
          "At least one <strong>motion</strong> block (move, turn, or glide)",
          "At least one <strong>looks</strong> block (say, switch costume, or change size)",
          "At least one <strong>control</strong> block (wait, repeat, or if)",
        ]},
        { p: "Ideas: a simple animation, a character that reacts to key presses, or a mini interactive scene. On paper or in a doc, briefly plan what your sprite will do and which block categories you'll need — a 2-minute plan often saves 10 minutes of confused building later." },
        { h3: "Debugging Tips While You Build" },
        { ul: [
          "Click each block individually in the palette to test it in isolation",
          "Check the order of your blocks — sequence errors are the most common bug",
          "Use \"say\" blocks temporarily to check what value a variable currently holds",
          "Test after adding just 1-2 blocks at a time — don't wait until the end to test!",
        ]},
        { h3: "Looking Ahead to Unit 3" },
        { p: "In Unit 3 we'll go deeper into loops — including nested loops — build more complex variable systems (multiple lives, levels, timers), and combine conditionals with logical operators (and / or / not) for smarter decisions. By the end of Unit 3, you'll build a complete mini-game with score, levels, and win/lose conditions." },
      ],
      code: {
        label: "Example plan: a reactive character",
        lines: [
          "when 🏳 clicked",
          "  say [Press an arrow key!] for (2) seconds",
          "",
          "when [up arrow] key pressed",
          "  change y by (10)",
          "  play sound [pop] until done",
        ],
      },
      worksheet: {
        wsId: "u2ws02",
        title: "Mini-Project & Reflection",
        instructions: "Build your planned mini-project in Scratch, meeting all 4 checklist requirements, then reflect below.",
        fields: [
          { id: "project_link", type: "text", label: "Your Scratch mini-project link" },
          { id: "project_plan", type: "textarea", label: "Briefly describe what your project does", rows: 3 },
          { id: "checklist_confirm", type: "textarea", label: "Confirm how your project meets each requirement: event, motion, looks, control", rows: 4 },
          { id: "confident_skill", type: "text", label: "One Scratch skill you feel confident about" },
          { id: "looking_forward", type: "text", label: "One thing you're looking forward to learning in Unit 3" },
        ],
        rubric: [
          { criterion: "Project includes at least one event block", points: 20 },
          { criterion: "Project includes at least one motion block", points: 20 },
          { criterion: "Project includes at least one looks block", points: 20 },
          { criterion: "Project includes at least one control block", points: 20 },
          { criterion: "Reflection is thoughtful and specific", points: 20 },
        ],
      },
    },
  ],
};
