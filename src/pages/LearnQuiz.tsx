import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RefreshCw } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const LearnQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 'q1',
      question: 'Which freedom fighter was known as "Gandhi Buri" and led a protest at the age of 73?',
      options: ['Sarojini Naidu', 'Matangini Hazra', 'Aruna Asaf Ali', 'Kasturba Gandhi'],
      correctAnswer: 1,
      explanation: 'Matangini Hazra was affectionately called "Gandhi Buri" (Gandhi\'s old lady) and courageously led a march to Tamluk police station at age 73, where she was martyred.'
    },
    {
      id: 'q2',
      question: 'Who opened the first school for girls in India in 1848?',
      options: ['Rani Lakshmibai', 'Savitribai Phule', 'Kamaladevi Chattopadhyay', 'Sarojini Naidu'],
      correctAnswer: 1,
      explanation: 'Savitribai Phule, along with her husband Jyotirao Phule, opened the first school for girls in Pune in 1848, facing severe social opposition for this revolutionary act.'
    },
    {
      id: 'q3',
      question: 'Which woman freedom fighter was known as the "Nightingale of India"?',
      options: ['Aruna Asaf Ali', 'Sarojini Naidu', 'Vijaya Lakshmi Pandit', 'Sucheta Kripalani'],
      correctAnswer: 1,
      explanation: 'Sarojini Naidu was called the "Nightingale of India" for her beautiful poetry and eloquent speeches that inspired the freedom movement.'
    },
    {
      id: 'q4',
      question: 'Rana Gaidinliu led resistance against the British in which region of India?',
      options: ['Bengal', 'Maharashtra', 'Manipur and Nagaland', 'Gujarat'],
      correctAnswer: 2,
      explanation: 'Rani Gaidinliu was a Naga spiritual and political leader who led armed resistance against British rule in present-day Manipur and Nagaland, earning the title "Daughter of the Hills" from Nehru.'
    },
    {
      id: 'q5',
      question: 'Who hoisted the Indian National Congress flag during the Quit India Movement in 1942?',
      options: ['Kasturba Gandhi', 'Aruna Asaf Ali', 'Matangini Hazra', 'Sarojini Naidu'],
      correctAnswer: 1,
      explanation: 'Aruna Asaf Ali hoisted the Indian National Congress flag at Gowalia Tank Maidan in Mumbai during the Quit India Movement, becoming a symbol of resistance.'
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Quiz Completed!</h1>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <div className={`text-6xl font-bold mb-4 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <p className="text-xl text-gray-600 mb-6">
                You scored {Math.round((score / questions.length) * 100)}%
              </p>
              <div className="space-y-2 mb-8">
                {score === questions.length && (
                  <p className="text-green-600 font-semibold">Perfect! You're a true expert on India\'s women freedom fighters!</p>
                )}
                {score >= 4 && score < questions.length && (
                  <p className="text-blue-600 font-semibold">Excellent! You have great knowledge of our heroines!</p>
                )}
                {score >= 3 && score < 4 && (
                  <p className="text-yellow-600 font-semibold">Good job! Keep learning about these inspiring women!</p>
                )}
                {score < 3 && (
                  <p className="text-red-600 font-semibold">Keep exploring their stories - these women deserve to be remembered!</p>
                )}
              </div>
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Take Quiz Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn & Quiz
          </h1>
          <p className="text-xl text-gray-600">
            Test your knowledge about India's women freedom fighters
          </p>
        </div>

        {/* Learning Content */}
        <div className="mb-12 space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Learning Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Women in Freedom Struggle</h3>
                <p className="text-blue-800 text-sm">
                  Women participated in all major movements from 1857 rebellion to Quit India, often facing greater social challenges than their male counterparts.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Caste and Tribal Resistance</h3>
                <p className="text-blue-800 text-sm">
                  Women from marginalized communities like Uda Devi (Pasi) and Rani Gaidinliu (Naga) played crucial roles, challenging both colonialism and social hierarchy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Education and Revolution</h3>
                <p className="text-blue-800 text-sm">
                  Pioneers like Savitribai Phule proved that educating women was itself a revolutionary act that enabled greater political participation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Knowledge Quiz</h2>
              <div className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </div>
            <div className="mt-2">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h3>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-blue-500 bg-blue-50 text-blue-800'
                      : showResult && index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3 font-medium">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {showResult && (
                      <div className="ml-auto">
                        {index === currentQuestion.correctAnswer ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium mb-2">Explanation:</p>
                <p className="text-blue-700">{currentQuestion.explanation}</p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div>
                {showResult && (
                  <span className="text-sm text-gray-600">
                    Score: {score}/{answeredQuestions.filter(Boolean).length}
                  </span>
                )}
              </div>
              <div className="space-x-3">
                {!showResult ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'View Results'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnQuiz;