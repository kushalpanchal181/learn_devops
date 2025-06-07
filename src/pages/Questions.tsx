
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { sampleQuestions } from '@/data/sampleQuestions';
import MCQQuestion from '@/components/MCQQuestion';

const Questions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const technologies = [...new Set(sampleQuestions.map(q => q.technology))];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  // Filter questions based on search and filters
  const filteredQuestions = sampleQuestions.filter(question => {
    const matchesSearch = question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.technology.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTechnology = selectedTechnology === 'all' || question.technology === selectedTechnology;
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesTechnology && matchesDifficulty;
  });

  const textQuestions = filteredQuestions.filter(q => q.type === 'text');
  const mcqQuestions = filteredQuestions.filter(q => q.type === 'mcq');

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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">DevOps Questions</h1>
          <p className="text-muted-foreground">
            Browse and practice with hundreds of DevOps interview questions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
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

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
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
        </div>

        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="text">Text Questions ({textQuestions.length})</TabsTrigger>
            <TabsTrigger value="mcq">Multiple Choice ({mcqQuestions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-6">
            {textQuestions.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-6">
                {textQuestions.map((question) => (
                  <Card key={question.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{question.technology}</Badge>
                          <Badge className={getDifficultyColor(question.difficulty)}>
                            {question.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg">{question.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap text-foreground font-normal text-sm leading-relaxed">
                          {question.answer}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="mcq" className="mt-6">
            {mcqQuestions.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No MCQ questions found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="space-y-6">
                {mcqQuestions.map((question) => (
                  <MCQQuestion key={question.id} question={question} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Questions;
