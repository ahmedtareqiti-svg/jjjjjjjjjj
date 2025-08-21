import { Result, ContestStats } from '../types';

export const calculateStats = (results: Result[]): ContestStats => {
  const categories = [...new Set(results.map(r => r.category))];
  const totalStudents = results.length;
  const averageGrade = totalStudents > 0 ? Math.round(results.reduce((sum, r) => sum + r.grade, 0) / totalStudents) : 0;
  const topGrade = totalStudents > 0 ? Math.max(...results.map(r => r.grade)) : 0;

  return {
    totalStudents,
    categories,
    averageGrade,
    topGrade
  };
};

export const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    "ثلاثة أجزاء": "bg-blue-100 text-blue-800",
    "خمسة أجزاء": "bg-green-100 text-green-800",
    "ثمانية أجزاء": "bg-purple-100 text-purple-800",
    "عشرة أجزاء": "bg-orange-100 text-orange-800",
    "خمسة عشر جزءا": "bg-pink-100 text-pink-800",
    "عشرون جزءا": "bg-indigo-100 text-indigo-800",
    "خمسة وعشرون جزءا": "bg-yellow-100 text-yellow-800",
    "ثلاثون جزءا": "bg-red-100 text-red-800"
  };
  return colors[category] || "bg-gray-100 text-gray-800";
};

export const getGradeColor = (grade: number): string => {
  if (grade >= 90) return "text-green-600 bg-green-100 border-2 border-green-300";
  return "text-red-600 bg-red-100 border-2 border-red-300";
};