"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Plus, Calculator, Home, RotateCcw } from "lucide-react"
import Link from "next/link"

interface Subject {
  id: string
  name: string
  credit: number
  grade: string
}

const gradePoints: { [key: string]: number } = {
  "A+": 10,
  A: 9,
  "B+": 8,
  B: 7,
  "C+": 6,
  C: 5,
  D: 4,
  F: 0,
}

export default function SGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([{ id: "1", name: "", credit: 0, grade: "" }])
  const [sgpa, setSgpa] = useState<number | null>(null)
  const [totalCredits, setTotalCredits] = useState<number>(0)

  const addSubject = () => {
    const newSubject: Subject = {
      id: Date.now().toString(),
      name: "",
      credit: 0,
      grade: "",
    }
    setSubjects([...subjects, newSubject])
  }

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((subject) => subject.id !== id))
    }
  }

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(subjects.map((subject) => (subject.id === id ? { ...subject, [field]: value } : subject)))
  }

  const calculateSGPA = () => {
    const validSubjects = subjects.filter(
      (subject) => subject.credit > 0 && subject.grade && gradePoints[subject.grade] !== undefined,
    )

    if (validSubjects.length === 0) {
      alert("Please add at least one valid subject with credit and grade.")
      return
    }

    let totalGradePoints = 0
    let totalCreds = 0

    validSubjects.forEach((subject) => {
      const gradePoint = gradePoints[subject.grade]
      totalGradePoints += subject.credit * gradePoint
      totalCreds += subject.credit
    })

    const calculatedSGPA = totalGradePoints / totalCreds
    setSgpa(Math.round(calculatedSGPA * 100) / 100)
    setTotalCredits(totalCreds)
  }

  const resetCalculator = () => {
    setSubjects([{ id: "1", name: "", credit: 0, grade: "" }])
    setSgpa(null)
    setTotalCredits(0)
  }

  const getMotivationalMessage = (sgpa: number) => {
    if (sgpa >= 9) return "🎉 Excellent! Outstanding performance!"
    if (sgpa >= 8) return "🌟 Great job! Keep up the good work!"
    if (sgpa >= 7) return "👍 Good performance! You're doing well!"
    if (sgpa >= 6) return "📚 Fair performance. Room for improvement!"
    if (sgpa >= 5) return "⚠️ Average performance. Focus on weak subjects!"
    return "🚨 Needs significant improvement. Don't give up!"
  }

  const downloadResults = () => {
    if (sgpa === null) return

    const content = `
SGPA CALCULATION RESULT
========================

SGPA: ${sgpa}
Total Credits: ${totalCredits}
${getMotivationalMessage(sgpa)}

SUBJECT DETAILS:
${subjects
  .filter((s) => s.credit > 0 && s.grade)
  .map(
    (s, i) =>
      `${i + 1}. ${s.name || "Subject " + (i + 1)}: ${s.credit} credits, Grade ${s.grade} (${gradePoints[s.grade]} points)`,
  )
  .join("\n")}

Generated on: ${new Date().toLocaleString()}
    `.trim()

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `SGPA_Result_${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm shadow-xl border-b border-blue-500/20 sticky top-0 z-50">
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
                  alt="NFS Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <h1 className="text-2xl font-bold text-white">🧮 SGPA Calculator</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Grade Point Reference */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Grade Point Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4 text-center">
                {Object.entries(gradePoints).map(([grade, point]) => (
                  <div key={grade} className="bg-slate-700/50 p-2 rounded">
                    <div className="font-bold text-white">{grade}</div>
                    <div className="text-gray-300">{point}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subject Input Form */}
          <Card className="mb-8 bg-slate-800/80 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Enter Subject Details</CardTitle>
              <CardDescription className="text-gray-300">
                Add your subjects with their respective credits and grades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjects.map((subject, index) => (
                <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 bg-slate-700/50 rounded-lg">
                  <div className="md:col-span-5">
                    <Label htmlFor={`name-${subject.id}`} className="text-gray-300">
                      Subject Name (Optional)
                    </Label>
                    <Input
                      id={`name-${subject.id}`}
                      placeholder="e.g., Mathematics"
                      value={subject.name}
                      onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                      className="bg-slate-600/50 border-slate-500 text-white placeholder-gray-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor={`credit-${subject.id}`} className="text-gray-300">
                      Credit *
                    </Label>
                    <Input
                      id={`credit-${subject.id}`}
                      type="number"
                      step="0.5"
                      min="0"
                      placeholder="3"
                      value={subject.credit || ""}
                      onChange={(e) => updateSubject(subject.id, "credit", Number.parseFloat(e.target.value) || 0)}
                      className="bg-slate-600/50 border-slate-500 text-white placeholder-gray-400"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <Label htmlFor={`grade-${subject.id}`} className="text-gray-300">
                      Grade *
                    </Label>
                    <Select value={subject.grade} onValueChange={(value: string | number) => updateSubject(subject.id, "grade", value)}>
                      <SelectTrigger className="bg-slate-600/50 border-slate-500 text-white">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {Object.keys(gradePoints).map((grade) => (
                          <SelectItem key={grade} value={grade} className="text-white hover:bg-slate-600">
                            {grade} ({gradePoints[grade]} points)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2 flex items-end">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSubject(subject.id)}
                      disabled={subjects.length === 1}
                      className="w-full"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <Button
                  onClick={addSubject}
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Subject
                </Button>

                <Button onClick={calculateSGPA} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate SGPA
                </Button>

                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {sgpa !== null && (
            <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Your SGPA Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-blue-400">{sgpa}</div>
                  <div className="text-xl text-gray-300">Total Credits: {totalCredits}</div>
                  <div className="text-lg text-gray-300 bg-slate-700/50 p-4 rounded-lg">
                    {getMotivationalMessage(sgpa)}
                  </div>
                  <Button
                    onClick={downloadResults}
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    Download Result
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

// <Button
//   asChild
//   variant="outline"
//   className={`${
//     isActive ? "bg-green-100 text-green-600 border-green-500" : "bg-white text-muted-foreground border-transparent hover:border-gray-300"
//   }`}
// >
//   <Link href={link} target="_blank" rel="noopener noreferrer">
//     <Icon className="h-4 w-4 mr-2" />
//     {label}
//   </Link>
// </Button>