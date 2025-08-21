import React from "react";
import { Result } from "../types";
import { Trophy, Medal, Award, User, Hash, BookOpen, Star, CheckCircle, Heart } from "lucide-react";
import { getCategoryColor, getGradeColor } from "../utils/contestStats";

interface ResultCardProps {
  result: Result;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-8 h-8 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-8 h-8 text-gray-400" />;
    if (rank === 3) return <Award className="w-8 h-8 text-amber-600" />;
    return <Star className="w-8 h-8 text-blue-500" />;
  };

  const getRankText = (rank: number) => {
    if (rank === 1) return "المركز الأول";
    if (rank === 2) return "المركز الثاني";
    if (rank === 3) return "المركز الثالث";
    if (rank <= 10) return `المركز ${rank}`;
    return `الترتيب ${rank}`;
  };

  const getSuccessMessage = (grade: number) => {
    if (grade >= 90) {
      if (grade >= 98) return "مبروك! أداء استثنائي ومتميز جداً 🌟";
      if (grade >= 95) return "ألف مبروك! أداء ممتاز ومشرف 🎉";
      if (grade >= 90) return "مبروك النجاح! أداء جيد جداً 👏";
    } else {
      return "لا تيأس، حاول مرة أخرى بإذن الله. النجاح يحتاج إلى مثابرة 💪";
    }
  };

  const getGradeDisplay = (grade: number) => {
    if (grade >= 90) {
      return (
        <div className="flex items-center justify-end gap-3">
          <CheckCircle className="w-8 h-8 text-green-500 animate-pulse" />
          <div className="text-center">
            <span className={`text-4xl font-bold px-6 py-3 rounded-xl ${getGradeColor(grade)}`}>
              ناجح
            </span>
            <p className="text-sm text-gray-600 mt-1">الدرجة: {grade} من 100</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center justify-end gap-3">
          <Heart className="w-8 h-8 text-red-400 animate-pulse" />
          <div className="text-center">
            <span className={`text-3xl font-bold px-4 py-2 rounded-lg ${getGradeColor(grade)}`}>
              {grade}
            </span>
            <p className="text-sm text-gray-600 mt-1">من 100</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 animate-fadeIn">
      <div className={`rounded-2xl shadow-2xl overflow-hidden border-2 ${
        result.grade >= 90 
          ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
          : 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200'
      }`}>
        {/* Header with rank */}
        <div className={`text-white p-6 text-center ${
          result.grade >= 90 
            ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
            : 'bg-gradient-to-r from-orange-600 to-red-600'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            {getRankIcon(result.rank!)}
            <h3 className="text-2xl font-bold">{getRankText(result.rank!)}</h3>
          </div>
          <p className={result.grade >= 90 ? "text-green-100" : "text-orange-100"}>
            {result.grade >= 90 ? "تهانينا على هذا الإنجاز الرائع!" : "استمر في المحاولة، بإذن الله ستنجح"}
          </p>
        </div>

        {/* Student details */}
        <div className="p-8 space-y-6">
          <div className={`flex items-center gap-4 p-4 rounded-xl ${
            result.grade >= 90 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50' 
              : 'bg-gradient-to-r from-orange-50 to-red-50'
          }`}>
            <User className={`w-6 h-6 ${result.grade >= 90 ? 'text-green-600' : 'text-orange-600'}`} />
            <div className="flex-1 text-right">
              <p className="text-sm text-gray-600 mb-1">اسم الطالب</p>
              <p className="text-xl font-bold text-gray-800">{result.name}</p>
            </div>
          </div>

          <div className={`flex items-center gap-4 p-4 rounded-xl ${
            result.grade >= 90 
              ? 'bg-gradient-to-r from-blue-50 to-green-50' 
              : 'bg-gradient-to-r from-yellow-50 to-orange-50'
          }`}>
            <Hash className={`w-6 h-6 ${result.grade >= 90 ? 'text-blue-600' : 'text-yellow-600'}`} />
            <div className="flex-1 text-right">
              <p className="text-sm text-gray-600 mb-1">رقم الطالب</p>
              <p className="text-xl font-bold text-gray-800">{result.id}</p>
            </div>
          </div>

          <div className={`flex items-center gap-4 p-4 rounded-xl ${
            result.grade >= 90 
              ? 'bg-gradient-to-r from-purple-50 to-blue-50' 
              : 'bg-gradient-to-r from-pink-50 to-red-50'
          }`}>
            <BookOpen className={`w-6 h-6 ${result.grade >= 90 ? 'text-purple-600' : 'text-pink-600'}`} />
            <div className="flex-1 text-right">
              <p className="text-sm text-gray-600 mb-1">الفئة</p>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(
                  result.category
                )}`}
              >
                {result.category}
              </span>
            </div>
          </div>

          <div className={`flex items-center gap-4 p-6 rounded-xl border-2 ${
            result.grade >= 90 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
              : 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200'
          }`}>
            <Star className={`w-6 h-6 ${result.grade >= 90 ? 'text-green-600' : 'text-orange-600'}`} />
            <div className="flex-1 text-right">
              <p className="text-sm text-gray-600 mb-3">النتيجة</p>
              {getGradeDisplay(result.grade)}
            </div>
          </div>
        </div>

        {/* Footer message */}
        <div className={`text-white p-6 text-center ${
          result.grade >= 90 
            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
            : 'bg-gradient-to-r from-orange-500 to-red-500'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-2">
            {result.grade >= 90 ? (
              <CheckCircle className="w-6 h-6 animate-pulse" />
            ) : (
              <Heart className="w-6 h-6 animate-pulse" />
            )}
            <p className="font-bold text-lg">
              {getSuccessMessage(result.grade)}
            </p>
          </div>
          {result.grade >= 90 && (
            <p className="text-sm opacity-90">
              جزاك الله خيراً على اجتهادك في حفظ كتاب الله
            </p>
          )}
          {result.grade < 90 && (
            <p className="text-sm opacity-90">
              "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا" - لا تيأس واستمر في المحاولة
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
