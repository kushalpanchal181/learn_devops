
import { useState } from 'react';
import { Shuffle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FlashCard from '@/components/FlashCard';
import { sampleQuestions } from '@/data/sampleQuestions';

const Flashcards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [shuffled, setShuffled] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(sampleQuestions);

  const technologies = [...new Set(sampleQuestions.map(q => q.technology))];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  // Filter questions based on selected criteria
  const filteredQuestions = shuffled ? shuffledQuestions.filter(question => {
    const matchesTechnology = selectedTechnology === 'all' || question.technology === selectedTechnology;
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    return matchesTechnology && matchesDifficulty;
  }) : sampleQuestions.filter(question => {
    const matchesTechnology = selectedTechnology === 'all' || question.technology === selectedTechnology;
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    return matchesTechnology && matchesDifficulty;
  });

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    const shuffledArray = [...sampleQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffledArray);
    setShuffled(true);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setShuffled(false);
    setCurrentIndex(0);
  };

  // Reset index when filters change
  const handleTechnologyChange = (value: string) => {
    setSelectedTechnology(value);
    setCurrentIndex(0);
  };

  const handleDifficultyChange = (value: string) => {
    setSelectedDifficulty(value);
    setCurrentIndex(0);
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Flashcards</h1>
            <p className="text-muted-foreground">Practice with interactive flashcards</p>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <Select value={selectedTechnology} onValueChange={handleTechnologyChange}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Technologies</SelectItem>
                {technologies.map(tech => (
                  <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                {difficulties.map(diff => (
                  <SelectItem key={diff} value={diff}>
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-foreground mb-2">No flashcards available</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see available questions</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Flashcards</h1>
          <p className="text-muted-foreground">Practice with interactive flashcards</p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedTechnology} onValueChange={handleTechnologyChange}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Technology" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Technologies</SelectItem>
                {technologies.map(tech => (
                  <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                {difficulties.map(diff => (
                  <SelectItem key={diff} value={diff}>
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleShuffle} variant="outline" className="flex items-center space-x-2">
              <Shuffle className="w-4 h-4" />
              <span>Shuffle</span>
            </Button>
            
            {shuffled && (
              <Button onClick={handleReset} variant="outline" className="flex items-center space-x-2">
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </Button>
            )}
          </div>
        </div>

        {/* Flashcard */}
        <FlashCard
          question={filteredQuestions[currentIndex]}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentIndex={currentIndex}
          totalQuestions={filteredQuestions.length}
        />
      </div>
    </div>
  );
};

export default Flashcards;
