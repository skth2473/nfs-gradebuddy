"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Download, Home, FileText, Users } from "lucide-react"
import Link from "next/link"

interface Subject {
  name: string
  code: string
  credits: number
  notes: string
  syllabus: string
  previousPapers: string
}

export default function SemesterMaterials() {
  const semesterData = {
    "1st": [
      {
        name: "Mathematics I",
        code: "MATH101",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example1",
        syllabus: "https://drive.google.com/file/d/1syllabus1",
        previousPapers: "https://drive.google.com/file/d/1papers1",
      },
      {
        name: "Physics",
        code: "PHY101",
        credits: 3,
        notes: "https://drive.google.com/file/d/1example2",
        syllabus: "https://drive.google.com/file/d/1syllabus2",
        previousPapers: "https://drive.google.com/file/d/1papers2",
      },
      {
        name: "Programming Fundamentals",
        code: "CS101",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example3",
        syllabus: "https://drive.google.com/file/d/1syllabus3",
        previousPapers: "https://drive.google.com/file/d/1papers3",
      },
    ],
    "2nd": [
      {
        name: "Mathematics II",
        code: "MATH201",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example4",
        syllabus: "https://drive.google.com/file/d/1syllabus4",
        previousPapers: "https://drive.google.com/file/d/1papers4",
      },
      {
        name: "Data Structures",
        code: "CS201",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example5",
        syllabus: "https://drive.google.com/file/d/1syllabus5",
        previousPapers: "https://drive.google.com/file/d/1papers5",
      },
      {
        name: "Digital Logic",
        code: "CS202",
        credits: 3,
        notes: "https://drive.google.com/file/d/1example6",
        syllabus: "https://drive.google.com/file/d/1syllabus6",
        previousPapers: "https://drive.google.com/file/d/1papers6",
      },
    ],
    "3rd": [
      {
        name: "Algorithms",
        code: "CS301",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example7",
        syllabus: "https://drive.google.com/file/d/1syllabus7",
        previousPapers: "https://drive.google.com/file/d/1papers7",
      },
      {
        name: "Database Systems",
        code: "CS302",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example8",
        syllabus: "https://drive.google.com/file/d/1syllabus8",
        previousPapers: "https://drive.google.com/file/d/1papers8",
      },
      {
        name: "Operating Systems",
        code: "CS303",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example9",
        syllabus: "https://drive.google.com/file/d/1syllabus9",
        previousPapers: "https://drive.google.com/file/d/1papers9",
      },
    ],
    "4th": [
      {
        name: "Computer Networks",
        code: "CS401",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example10",
        syllabus: "https://drive.google.com/file/d/1syllabus10",
        previousPapers: "https://drive.google.com/file/d/1papers10",
      },
      {
        name: "Software Engineering",
        code: "CS402",
        credits: 3,
        notes: "https://drive.google.com/file/d/1example11",
        syllabus: "https://drive.google.com/file/d/1syllabus11",
        previousPapers: "https://drive.google.com/file/d/1papers11",
      },
      {
        name: "Machine Learning",
        code: "CS403",
        credits: 4,
        notes: "https://drive.google.com/file/d/1example12",
        syllabus: "https://drive.google.com/file/d/1syllabus12",
        previousPapers: "https://drive.google.com/file/d/1papers12",
      },
    ],
  }

  const renderSubjectCard = (subject: Subject) => (
    <Card key={subject.code} className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">{subject.name}</CardTitle>
            <CardDescription className="text-gray-300">
              {subject.code} • {subject.credits} Credits
            </CardDescription>
          </div>
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{subject.credits} Credits</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            asChild
            variant="outline"
            className="border-green-500/50 text-green-300 hover:bg-green-500/10 bg-transparent"
          >
            <Link href={subject.notes} target="_blank">
              <BookOpen className="h-4 w-4 mr-2" />
              Notes
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 bg-transparent"
          >
            <Link href={subject.syllabus} target="_blank">
              <FileText className="h-4 w-4 mr-2" />
              Syllabus
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-orange-500/50 text-orange-300 hover:bg-orange-500/10 bg-transparent"
          >
            <Link href={subject.previousPapers} target="_blank">
              <Download className="h-4 w-4 mr-2" />
              Previous Papers
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <div className="flex items-center space-x-3">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="NFSxRFP Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <h1 className="text-2xl font-bold text-white">📚 Semester Materials</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">📖 Study Materials</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Semester-wise Study Materials</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive notes, syllabus, and previous year papers for all semesters
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
                <div className="text-gray-300">Semesters</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-gray-300">Subjects</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
                <div className="text-gray-300">Notes</div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
                <div className="text-gray-300">Previous Papers</div>
              </CardContent>
            </Card>
          </div>

          {/* Semester Tabs */}
          <Tabs defaultValue="1st" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
              <TabsTrigger value="1st" className="data-[state=active]:bg-slate-700 text-gray-300">
                1st Semester
              </TabsTrigger>
              <TabsTrigger value="2nd" className="data-[state=active]:bg-slate-700 text-gray-300">
                2nd Semester
              </TabsTrigger>
              <TabsTrigger value="3rd" className="data-[state=active]:bg-slate-700 text-gray-300">
                3rd Semester
              </TabsTrigger>
              <TabsTrigger value="4th" className="data-[state=active]:bg-slate-700 text-gray-300">
                4th Semester
              </TabsTrigger>
            </TabsList>

            {Object.entries(semesterData).map(([semester, subjects]) => (
              <TabsContent key={semester} value={semester} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{semester} Semester</h3>
                  <p className="text-gray-300">Complete study materials for all subjects</p>
                </div>

                <div className="grid grid-cols-1 gap-6">{subjects.map((subject) => renderSubjectCard(subject))}</div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">📚 Need More Materials?</h3>
              <p className="text-gray-300 mb-6">
                Join our community to access more study materials and connect with fellow students.
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Regular Updates</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Quality Content</Badge>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Community Support</Badge>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Study Group
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
