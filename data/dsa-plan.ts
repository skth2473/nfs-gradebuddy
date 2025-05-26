export interface DayPlan {
  day: number
  title: string
  topics: string[]
  youtubePlaylist: string
  practiceSheet: string
  notes: string
  completed: boolean
}

export const dsaPlan: DayPlan[] = [
  {
    day: 1,
    title: "Introduction to DSA & Time Complexity",
    topics: ["What is DSA?", "Time & Space Complexity", "Big O Notation"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example1",
    notes: "https://drive.google.com/file/d/1example1",
    completed: false,
  },
  {
    day: 2,
    title: "Arrays - Basics",
    topics: ["Array Declaration", "Traversal", "Insertion & Deletion"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example2",
    notes: "https://drive.google.com/file/d/1example2",
    completed: false,
  },
  {
    day: 3,
    title: "Arrays - Problems",
    topics: ["Two Sum", "Maximum Subarray", "Rotate Array"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example3",
    notes: "https://drive.google.com/file/d/1example3",
    completed: false,
  },
  {
    day: 4,
    title: "Recursion & Backtracking",
    topics: ["Recursive Thinking", "Base Cases", "Backtracking Problems", "Tree Recursion"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example4",
    notes: "https://drive.google.com/file/d/1example4",
    completed: false,
  },
  {
    day: 5,
    title: "Linked Lists & Pointers",
    topics: ["Singly Linked List", "Doubly Linked List", "Circular Lists", "Pointer Manipulation"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example5",
    notes: "https://drive.google.com/file/d/1example5",
    completed: false,
  },
  {
    day: 6,
    title: "Stacks & Queues",
    topics: ["Stack Implementation", "Queue Implementation", "Applications", "Deque"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example6",
    notes: "https://drive.google.com/file/d/1example6",
    completed: false,
  },
  {
    day: 7,
    title: "Trees - Basics",
    topics: ["Binary Trees", "Tree Traversals", "Binary Search Trees", "Tree Properties"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example7",
    notes: "https://drive.google.com/file/d/1example7",
    completed: false,
  },
  {
    day: 8,
    title: "Trees - Advanced",
    topics: ["AVL Trees", "Red-Black Trees", "Segment Trees", "Fenwick Trees"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example8",
    notes: "https://drive.google.com/file/d/1example8",
    completed: false,
  },
  {
    day: 9,
    title: "Graphs - Introduction",
    topics: ["Graph Representation", "BFS", "DFS", "Connected Components"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example9",
    notes: "https://drive.google.com/file/d/1example9",
    completed: false,
  },
  {
    day: 10,
    title: "Graphs - Advanced Algorithms",
    topics: ["Dijkstra's Algorithm", "Floyd-Warshall", "Minimum Spanning Tree", "Topological Sort"],
    youtubePlaylist: "https://youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nfk2TqFBiP",
    practiceSheet: "https://docs.google.com/spreadsheets/d/1example10",
    notes: "https://drive.google.com/file/d/1example10",
    completed: false,
  },
  // Add more days up to 60...
]
