
import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Question {
  id: string;
  question: string;
  answer: string;
  technology: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

interface FlashCardProps {
  question: Question;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalQuestions: number;
}

const FlashCard = ({ question, onNext, onPrevious, currentIndex, totalQuestions }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

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

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    onNext();
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    onPrevious();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Badge variant="outline">{question.technology}</Badge>
          <Badge className={getDifficultyColor(question.difficulty)}>
            {question.difficulty}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} of {totalQuestions}
        </div>
      </div>

      <div 
        className="relative w-full h-96 cursor-pointer perspective-1000"
        onClick={handleCardClick}
      >
        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-card border border-border rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Question</h3>
              <p className="text-foreground text-lg leading-relaxed">{question.question}</p>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-sm text-muted-foreground flex items-center">
                <RotateCcw className="w-4 h-4 mr-1" />
                Click to reveal answer
              </p>
            </div>
          </div>

          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-primary/5 border border-border rounded-lg shadow-lg p-8 flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-4">Answer</h3>
              <div className="text-foreground text-lg leading-relaxed whitespace-pre-line">{question.answer}</div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <p className="text-sm text-muted-foreground flex items-center">
                <RotateCcw className="w-4 h-4 mr-1" />
                Click to see question
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Button 
          onClick={handlePrevious} 
          disabled={currentIndex === 0}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>

        <Button onClick={handleCardClick} variant="ghost" className="flex items-center space-x-2">
          <RotateCcw className="w-4 h-4" />
          <span>{isFlipped ? 'Show Question' : 'Show Answer'}</span>
        </Button>

        <Button 
          onClick={handleNext} 
          disabled={currentIndex === totalQuestions - 1}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FlashCard;
