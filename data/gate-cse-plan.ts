export interface DayPlan {
  day: number
  title: string
  topics: string[]
  youtubePlaylist: string
  practiceSheet: string
  notes: string
  completed: boolean
}

export const gateCSEPlan: DayPlan[] = [
  {
    day: 1,
    title: "Mathematical Foundations",
    topics: ["Discrete Mathematics", "Set Theory", "Logic", "Probability"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
    notes: "https://drive.google.com/file/d/1example1",
    completed: false,
  },
  {
    day: 2,
    title: "Programming & Data Structures",
    topics: ["C Programming", "Arrays", "Linked Lists", "Stacks & Queues"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
    notes: "https://drive.google.com/file/d/1example2",
    completed: false,
  },
  {
    day: 3,
    title: "Algorithms",
    topics: ["Sorting", "Searching", "Graph Algorithms", "Dynamic Programming"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
    notes: "https://drive.google.com/file/d/1example3",
    completed: false,
  },
  {
    day: 4,
    title: "Theory of Computation",
    topics: ["Finite Automata", "Regular Languages", "Context-Free Grammar", "Turing Machines"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example4",
    notes: "https://drive.google.com/file/d/1example4",
    completed: false,
  },
  {
    day: 5,
    title: "Computer Organization & Architecture",
    topics: ["CPU Design", "Memory Hierarchy", "I/O Systems", "Pipeline"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example5",
    notes: "https://drive.google.com/file/d/1example5",
    completed: false,
  },
  {
    day: 6,
    title: "Operating Systems",
    topics: ["Process Management", "Memory Management", "File Systems", "Synchronization"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example6",
    notes: "https://drive.google.com/file/d/1example6",
    completed: false,
  },
  {
    day: 7,
    title: "Database Management Systems",
    topics: ["Relational Model", "SQL", "Normalization", "Transactions"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example7",
    notes: "https://drive.google.com/file/d/1example7",
    completed: false,
  },
  {
    day: 8,
    title: "Computer Networks",
    topics: ["OSI Model", "TCP/IP", "Routing", "Network Security"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example8",
    notes: "https://drive.google.com/file/d/1example8",
    completed: false,
  },
  {
    day: 9,
    title: "Compiler Design",
    topics: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Code Generation"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example9",
    notes: "https://drive.google.com/file/d/1example9",
    completed: false,
  },
  {
    day: 10,
    title: "Software Engineering",
    topics: ["SDLC", "Design Patterns", "Testing", "Project Management"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example10",
    notes: "https://drive.google.com/file/d/1example10",
    completed: false,
  },
  // Add more days as needed...
]
