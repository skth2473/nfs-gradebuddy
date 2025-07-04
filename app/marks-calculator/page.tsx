"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, Home, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function MarksCalculator() {
  // Theory Subjects State
  const [theoryMarks, setTheoryMarks] = useState({
    assignment: 0,
    attendance: 0,
    mst1: 0,
    mst2: 0,
    quiz: 0,
    surpriseTest: 0,
    endTerm: 0,
  })
  const [theoryResult, setTheoryResult] = useState<{ total: number; grade: string } | null>(null)

  // Hybrid Subjects State - Updated to match theory calculation
  const [hybridMarks, setHybridMarks] = useState({
    assignment: 0,
    attendance: 0,
    mst1: 0,
    mst2: 0,
    quiz: 0,
    surpriseTest: 0,
    practicalSum: 0,
    labMST: 0,
    endTermPractical: 0,
    endTermTheory: 0,
  })
  const [hybridResult, setHybridResult] = useState<{ total: number; grade: string } | null>(null)

  // Hybrid IInd Year State
  const [hybrid2ndMarks, setHybrid2ndMarks] = useState({
    attendance: 0,
    mst1: 0,
    mst2: 0,
    exp1: 0,
    exp2: 0,
    exp3: 0,
    exp4: 0,
    classPerformance: 0,
    courseProject: 0,
    endTermPr: 0,
    assignment: 0,
    quiz: 0,
    surpriseTest: 0,
    endTermTh: 0,
  })
  const [hybrid2ndResult, setHybrid2ndResult] = useState<{ total: number; grade: string } | null>(null)

  // Practical Subjects State
  const [practicalMarks, setPracticalMarks] = useState({
    practicalSum: 0,
    labMST: 0,
    endTermPractical: 0,
  })
  const [practicalResult, setPracticalResult] = useState<{ total: number; grade: string } | null>(null)

  // Online Subjects State
  const [onlineMarks, setOnlineMarks] = useState({
    obtained: 0,
    total: 0,
  })
  const [onlineResult, setOnlineResult] = useState<{ total: number; grade: string } | null>(null)

  const getGrade = (marks: number) => {
    if (marks >= 95) return "A+"
    if (marks >= 90) return "A"
    if (marks >= 80) return "B+"
    if (marks >= 75) return "B"
    if (marks >= 60) return "C+"
    if (marks >= 50) return "C"
    if (marks >= 35) return "D"
    return "F"
  }

  const calculateTheory = () => {
    const mst1Converted = theoryMarks.mst1 / 2
    const mst2Converted = theoryMarks.mst2 / 2
    const surpriseTestConverted = (theoryMarks.surpriseTest / 12) * 4
    const attendance = theoryMarks.attendance // out of 2
    const assignment = theoryMarks.assignment // out of 10
    const quiz = theoryMarks.quiz // out of 4
    const endTerm = theoryMarks.endTerm
    const internalTotal = attendance + assignment + surpriseTestConverted + quiz + mst1Converted + mst2Converted
    const total = internalTotal + endTerm
    setTheoryResult({ total, grade: getGrade(total) })
  }

  const calculateHybrid = () => {
    // Calculate theory internal marks same as theory subjects
    const mst1Converted = hybridMarks.mst1 / 2
    const mst2Converted = hybridMarks.mst2 / 2
    const surpriseTestConverted = (hybridMarks.surpriseTest / 12) * 4
    const attendance = hybridMarks.attendance // out of 2
    const assignment = hybridMarks.assignment // out of 10
    const quiz = hybridMarks.quiz // out of 4

    const theoryInternal = attendance + assignment + surpriseTestConverted + quiz + mst1Converted + mst2Converted

    // Convert theory internal to 20 marks (half of 40)
    const internalTheoryConverted = (theoryInternal / 40) * 20

    const practicalSumConverted = (hybridMarks.practicalSum / 300) * 25
    const labMSTConverted = (hybridMarks.labMST / 10) * 5
    const endTermPracticalConverted = (hybridMarks.endTermPractical / 40) * 20
    const endTermTheoryConverted = (hybridMarks.endTermTheory / 60) * 30

    const total =
      internalTheoryConverted +
      practicalSumConverted +
      labMSTConverted +
      endTermPracticalConverted +
      endTermTheoryConverted

    setHybridResult({ total, grade: getGrade(total) })
  }

  const calculateHybrid2nd = () => {
    const total =
      (hybrid2ndMarks.attendance / 2) * 1 +
      (hybrid2ndMarks.mst1 / 20) * 5 +
      (hybrid2ndMarks.mst2 / 20) * 5 +
      (hybrid2ndMarks.exp1 / 30) * 5 +
      (hybrid2ndMarks.exp2 / 30) * 5 +
      (hybrid2ndMarks.exp3 / 30) * 5 +
      (hybrid2ndMarks.exp4 / 30) * 5 +
      (hybrid2ndMarks.classPerformance / 10) * 5 +
      (hybrid2ndMarks.courseProject / 10) * 5 +
      (hybrid2ndMarks.assignment / 10) * 5 +
      (hybrid2ndMarks.quiz / 4) * 2 +
      (hybrid2ndMarks.surpriseTest / 12) * 2 +
      (hybrid2ndMarks.endTermPr / 40) * 20 +
      (hybrid2ndMarks.endTermTh / 60) * 30

    setHybrid2ndResult({ total, grade: getGrade(total) })
  }

  const calculatePractical = () => {
    const total = (practicalMarks.practicalSum / 300) * 45 + practicalMarks.labMST + practicalMarks.endTermPractical

    setPracticalResult({ total, grade: getGrade(total) })
  }

  const calculateOnline = () => {
    if (onlineMarks.total === 0) return
    const percentage = (onlineMarks.obtained / onlineMarks.total) * 100
    setOnlineResult({ total: Math.round(percentage), grade: getGrade(percentage) })
  }

  const downloadResult = (type: string, result: { total: number; grade: string }) => {
    const content = `
MARKS CALCULATION RESULT - ${type.toUpperCase()}
================================================

Total Marks: ${result.total}
Grade: ${result.grade}

Generated on: ${new Date().toLocaleString()}
Generated by: GradeBuddy - A NFS Material
    `.trim()

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${type}_Marks_Result_${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>
              <h1 className="text-2xl font-bold text-white">📝 Marks Calculator - CU</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Info Card */}
          <Card className="mb-8 bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-400" />
                Calculate your Marks and know your Grade
              </CardTitle>
              <CardDescription className="text-gray-300">
                Comprehensive marks calculator for all CU subject types
              </CardDescription>
            </CardHeader>
          </Card>

          <Tabs defaultValue="theory" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-gray-800 border-gray-700">
              <TabsTrigger value="theory" className="data-[state=active]:bg-gray-700 text-gray-300">
                Theory
              </TabsTrigger>
              <TabsTrigger value="hybrid" className="data-[state=active]:bg-gray-700 text-gray-300">
                Hybrid
              </TabsTrigger>
              <TabsTrigger value="hybrid2nd" className="data-[state=active]:bg-gray-700 text-gray-300">
                Hybrid 2nd Yr
              </TabsTrigger>
              <TabsTrigger value="practical" className="data-[state=active]:bg-gray-700 text-gray-300">
                Practical
              </TabsTrigger>
              <TabsTrigger value="online" className="data-[state=active]:bg-gray-700 text-gray-300">
                Online
              </TabsTrigger>
            </TabsList>

            {/* Theory Subjects */}
            <TabsContent value="theory">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Calculate Marks for Theory Subjects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Assignment marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.assignment || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, assignment: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Attendance marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.attendance || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, attendance: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">MST-1 marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.mst1 || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, mst1: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">MST-2 marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.mst2 || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, mst2: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Quiz marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.quiz || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, quiz: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Surprise Test marks:</Label>
                      <Input
                        type="number"
                        value={theoryMarks.surpriseTest || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, surpriseTest: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-gray-300">End Term marks (optional):</Label>
                      <Input
                        type="number"
                        value={theoryMarks.endTerm || ""}
                        onChange={(e) => setTheoryMarks({ ...theoryMarks, endTerm: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <Button onClick={calculateTheory} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Generate
                  </Button>

                  {theoryResult && (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">{theoryResult.total}</div>
                      <div className="text-2xl text-white mb-4">Grade: {theoryResult.grade}</div>
                      <Button
                        onClick={() => downloadResult("Theory", theoryResult)}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Result
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Hybrid Subjects - Updated */}
            <TabsContent value="hybrid">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Calculate Marks for Hybrid Subjects</CardTitle>
                  <CardDescription className="text-gray-300">
                    Theory internal marks will be calculated same as theory subjects and then converted
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg mb-4">
                    <h4 className="text-white font-semibold mb-3">Theory Internal Components:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-300">Assignment marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.assignment || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, assignment: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">Attendance marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.attendance || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, attendance: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">MST-1 marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.mst1 || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, mst1: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">MST-2 marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.mst2 || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, mst2: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">Quiz marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.quiz || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, quiz: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">Surprise Test marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.surpriseTest || ""}
                          onChange={(e) =>
                            setHybridMarks({ ...hybridMarks, surpriseTest: Number(e.target.value) || 0 })
                          }
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">Practical Components:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-300">Sum of All 10 practical marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.practicalSum || ""}
                          onChange={(e) =>
                            setHybridMarks({ ...hybridMarks, practicalSum: Number(e.target.value) || 0 })
                          }
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">Lab MST marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.labMST || ""}
                          onChange={(e) => setHybridMarks({ ...hybridMarks, labMST: Number(e.target.value) || 0 })}
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">End Term (practical) marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.endTermPractical || ""}
                          onChange={(e) =>
                            setHybridMarks({ ...hybridMarks, endTermPractical: Number(e.target.value) || 0 })
                          }
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-gray-300">End Term (Theory) marks:</Label>
                        <Input
                          type="number"
                          value={hybridMarks.endTermTheory || ""}
                          onChange={(e) =>
                            setHybridMarks({ ...hybridMarks, endTermTheory: Number(e.target.value) || 0 })
                          }
                          className="bg-gray-600 border-gray-500 text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <Button onClick={calculateHybrid} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Generate
                  </Button>

                  {hybridResult && (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">{hybridResult.total}</div>
                      <div className="text-2xl text-white mb-4">Grade: {hybridResult.grade}</div>
                      <Button
                        onClick={() => downloadResult("Hybrid", hybridResult)}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Result
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Hybrid IInd Year */}
            <TabsContent value="hybrid2nd">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Calculate Marks for Hybrid Subjects (IInd Year)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Attendance marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.attendance || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, attendance: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">MST-1 Hybrid marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.mst1 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, mst1: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">MST-2 Hybrid marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.mst2 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, mst2: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Experiment 1 marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.exp1 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, exp1: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Experiment 2 marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.exp2 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, exp2: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Experiment 3 marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.exp3 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, exp3: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Experiment 4 marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.exp4 || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, exp4: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Class Performance marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.classPerformance || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, classPerformance: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Course Project marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.courseProject || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, courseProject: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">End Term Assessment Pr marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.endTermPr || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, endTermPr: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Assignment marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.assignment || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, assignment: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Quiz marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.quiz || ""}
                        onChange={(e) => setHybrid2ndMarks({ ...hybrid2ndMarks, quiz: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Surprise Test marks:</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.surpriseTest || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, surpriseTest: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">End Term Assessment TH marks (optional):</Label>
                      <Input
                        type="number"
                        value={hybrid2ndMarks.endTermTh || ""}
                        onChange={(e) =>
                          setHybrid2ndMarks({ ...hybrid2ndMarks, endTermTh: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <Button onClick={calculateHybrid2nd} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Generate
                  </Button>

                  {hybrid2ndResult && (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">{hybrid2ndResult.total}</div>
                      <div className="text-2xl text-white mb-4">Grade: {hybrid2ndResult.grade}</div>
                      <Button
                        onClick={() => downloadResult("Hybrid_2nd_Year", hybrid2ndResult)}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Result
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Practical Subjects */}
            <TabsContent value="practical">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Calculate Marks for Practical Subjects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Sum of All 10 practical marks:</Label>
                      <Input
                        type="number"
                        value={practicalMarks.practicalSum || ""}
                        onChange={(e) =>
                          setPracticalMarks({ ...practicalMarks, practicalSum: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Lab MST marks:</Label>
                      <Input
                        type="number"
                        value={practicalMarks.labMST || ""}
                        onChange={(e) => setPracticalMarks({ ...practicalMarks, labMST: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label className="text-gray-300">End Term (practical) marks:</Label>
                      <Input
                        type="number"
                        value={practicalMarks.endTermPractical || ""}
                        onChange={(e) =>
                          setPracticalMarks({ ...practicalMarks, endTermPractical: Number(e.target.value) || 0 })
                        }
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <Button onClick={calculatePractical} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Generate
                  </Button>

                  {practicalResult && (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">{practicalResult.total}</div>
                      <div className="text-2xl text-white mb-4">Grade: {practicalResult.grade}</div>
                      <Button
                        onClick={() => downloadResult("Practical", practicalResult)}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Result
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Online Subjects */}
            <TabsContent value="online">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Calculate Marks for Online Subjects</CardTitle>
                  <CardDescription className="text-gray-300">(out of 100 will be calculated)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-gray-300">Your Online marks (e.g: 146):</Label>
                      <Input
                        type="number"
                        value={onlineMarks.obtained || ""}
                        onChange={(e) => setOnlineMarks({ ...onlineMarks, obtained: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-gray-300">Total Marks (e.g: 160):</Label>
                      <Input
                        type="number"
                        value={onlineMarks.total || ""}
                        onChange={(e) => setOnlineMarks({ ...onlineMarks, total: Number(e.target.value) || 0 })}
                        className="bg-gray-600 border-gray-500 text-white"
                      />
                    </div>
                  </div>

                  <Button onClick={calculateOnline} className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Calculator className="h-4 w-4 mr-2" />
                    Generate
                  </Button>

                  {onlineResult && (
                    <div className="bg-gray-700 p-6 rounded-lg text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">{onlineResult.total}%</div>
                      <div className="text-2xl text-white mb-4">Grade: {onlineResult.grade}</div>
                      <Button
                        onClick={() => downloadResult("Online", onlineResult)}
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Result
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
