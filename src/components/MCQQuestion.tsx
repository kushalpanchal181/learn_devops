
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  answer: string;
  technology: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  type: 'text' | 'mcq';
  options?: string[];
  correctAnswer?: number;
}

interface MCQQuestionProps {
  question: Question;
}

const MCQQuestion = ({ question }: MCQQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const handleSubmit = () => {
    const selectedIndex = parseInt(selectedAnswer);
    const correct = selectedIndex === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleReset = () => {
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  if (!question.options || question.correctAnswer === undefined) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{question.technology}</Badge>
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
          </div>
          {showResult && (
            <div className="flex items-center space-x-1">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-medium">Incorrect</span>
                </>
              )}
            </div>
          )}
        </div>
        <CardTitle className="text-lg">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={showResult}>
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                showResult
                  ? index === question.correctAnswer
                    ? 'bg-green-50 border-green-200'
                    : selectedAnswer === index.toString() && !isCorrect
                    ? 'bg-red-50 border-red-200'
                    : 'bg-gray-50'
                  : 'hover:bg-gray-50'
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer font-medium"
              >
                {option}
              </Label>
              {showResult && index === question.correctAnswer && (
                <CheckCircle className="w-4 h-4 text-green-600" />
              )}
              {showResult && selectedAnswer === index.toString() && index !== question.correctAnswer && (
                <XCircle className="w-4 h-4 text-red-600" />
              )}
            </div>
          ))}
        </RadioGroup>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Select an answer and click Submit
          </div>
          <div className="space-x-2">
            {showResult ? (
              <Button onClick={handleReset} variant="outline">
                Try Again
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit} 
                disabled={!selectedAnswer}
                className="min-w-20"
              >
                Submit
              </Button>
            )}
          </div>
        </div>

        {showResult && !isCorrect && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-medium text-blue-800 mb-1">Correct Answer:</p>
            <p className="text-blue-700">{question.options[question.correctAnswer]}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MCQQuestion;
