export interface DayPlan {
  day: number
  title: string
  topics: string[]
  youtubePlaylist: string
  practiceSheet: string
  notes: string
  completed: boolean
}

export const frontendPlan: DayPlan[] = [
  {
    day: 1,
    title: "HTML Fundamentals",
    topics: ["HTML Structure", "Tags & Elements", "Semantic HTML"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
    notes: "https://drive.google.com/file/d/1example1",
    completed: false,
  },
  {
    day: 2,
    title: "HTML Forms & Media",
    topics: ["Forms", "Input Types", "Audio & Video", "Images"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
    notes: "https://drive.google.com/file/d/1example2",
    completed: false,
  },
  {
    day: 3,
    title: "CSS Basics",
    topics: ["CSS Syntax", "Selectors", "Properties", "Box Model"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
    notes: "https://drive.google.com/file/d/1example3",
    completed: false,
  },
  {
    day: 4,
    title: "CSS Flexbox",
    topics: ["Flexbox Properties", "Flex Container", "Flex Items", "Responsive Layout"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example4",
    notes: "https://drive.google.com/file/d/1example4",
    completed: false,
  },
  {
    day: 5,
    title: "CSS Grid",
    topics: ["Grid Container", "Grid Items", "Grid Template", "Grid Areas"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example5",
    notes: "https://drive.google.com/file/d/1example5",
    completed: false,
  },
  {
    day: 6,
    title: "JavaScript Fundamentals",
    topics: ["Variables", "Data Types", "Functions", "Scope"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example6",
    notes: "https://drive.google.com/file/d/1example6",
    completed: false,
  },
  {
    day: 7,
    title: "DOM Manipulation",
    topics: ["DOM Selection", "Event Handling", "Dynamic Content", "Form Validation"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example7",
    notes: "https://drive.google.com/file/d/1example7",
    completed: false,
  },
  {
    day: 8,
    title: "ES6+ Features",
    topics: ["Arrow Functions", "Destructuring", "Modules", "Promises"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example8",
    notes: "https://drive.google.com/file/d/1example8",
    completed: false,
  },
  {
    day: 9,
    title: "Async JavaScript",
    topics: ["Callbacks", "Promises", "Async/Await", "Fetch API"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example9",
    notes: "https://drive.google.com/file/d/1example9",
    completed: false,
  },
  {
    day: 10,
    title: "React Introduction",
    topics: ["Components", "JSX", "Props", "State"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example10",
    notes: "https://drive.google.com/file/d/1example10",
    completed: false,
  },
  // Add more days up to 60...
]
