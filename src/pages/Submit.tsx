
import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const Submit = () => {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    technology: '',
    difficulty: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const technologies = ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Ansible', 'GitOps', 'Monitoring', 'CI/CD', 'Infrastructure'];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Question submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        question: '',
        answer: '',
        technology: '',
        difficulty: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.question && formData.answer && formData.technology && formData.difficulty;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Question Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for contributing to our DevOps question bank. Your submission will be reviewed and added to the collection.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Submit a Question</h1>
          <p className="text-muted-foreground">
            Help grow our DevOps question bank by contributing your own interview questions
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add New Question</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="question" className="text-sm font-medium text-foreground">
                  Question *
                </Label>
                <Textarea
                  id="question"
                  placeholder="Enter your DevOps interview question..."
                  value={formData.question}
                  onChange={(e) => handleInputChange('question', e.target.value)}
                  className="mt-1 min-h-24"
                  required
                />
              </div>

              <div>
                <Label htmlFor="answer" className="text-sm font-medium text-foreground">
                  Answer *
                </Label>
                <Textarea
                  id="answer"
                  placeholder="Provide a comprehensive answer to the question..."
                  value={formData.answer}
                  onChange={(e) => handleInputChange('answer', e.target.value)}
                  className="mt-1 min-h-32"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="technology" className="text-sm font-medium text-foreground">
                    Technology *
                  </Label>
                  <Select value={formData.technology} onValueChange={(value) => handleInputChange('technology', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select technology" />
                    </SelectTrigger>
                    <SelectContent>
                      {technologies.map(tech => (
                        <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="difficulty" className="text-sm font-medium text-foreground">
                    Difficulty *
                  </Label>
                  <Select value={formData.difficulty} onValueChange={(value) => handleInputChange('difficulty', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map(diff => (
                        <SelectItem key={diff} value={diff}>
                          {diff.charAt(0).toUpperCase() + diff.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Submission Guidelines</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ensure your question is relevant to DevOps practices</li>
                  <li>• Provide detailed and accurate answers</li>
                  <li>• Questions will be reviewed before being published</li>
                  <li>• Focus on practical, real-world scenarios</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={!isFormValid}
              >
                <Plus className="w-4 h-4 mr-2" />
                Submit Question
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Submit;
