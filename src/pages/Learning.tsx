
import { useState } from 'react';
import { BookOpen, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { learningModules } from '@/data/learningContent';

const Learning = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

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

  const getModulesByDifficulty = (difficulty: string) => {
    return learningModules.filter(module => module.difficulty === difficulty);
  };

  const selectedModuleData = selectedModule 
    ? learningModules.find(module => module.id === selectedModule)
    : null;

  if (selectedModule && selectedModuleData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto p-6">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedModule(null)}
              className="mb-4"
            >
              ← Back to Learning Modules
            </Button>
            
            <div className="flex items-center space-x-4 mb-4">
              <Badge className={getDifficultyColor(selectedModuleData.difficulty)}>
                {selectedModuleData.difficulty}
              </Badge>
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                <span>{selectedModuleData.duration}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {selectedModuleData.title}
            </h1>
            <p className="text-muted-foreground mb-4">
              {selectedModuleData.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedModuleData.topics.map(topic => (
                <Badge key={topic} variant="outline">{topic}</Badge>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: selectedModuleData.content
                    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-foreground mb-4">$1</h1>')
                    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-foreground mb-3 mt-6">$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-medium text-foreground mb-2 mt-4">$1</h3>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg overflow-x-auto mb-4"><code class="text-sm">$2</code></pre>')
                    .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
                    .replace(/^\* (.+)$/gm, '<li class="mb-1">$1</li>')
                    .replace(/^(\d+)\. (.+)$/gm, '<li class="mb-1">$2</li>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/^([^<\n].*)$/gm, '<p class="mb-4">$1</p>')
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">DevOps Learning Path</h1>
          <p className="text-muted-foreground">
            Structured learning modules to take you from beginner to advanced DevOps practitioner
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getModulesByDifficulty('beginner').map(module => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(module.difficulty)}>
                        {module.difficulty}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {module.topics.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {module.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{module.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => setSelectedModule(module.id)}
                    >
                      Start Learning
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getModulesByDifficulty('intermediate').map(module => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(module.difficulty)}>
                        {module.difficulty}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {module.topics.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {module.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{module.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => setSelectedModule(module.id)}
                    >
                      Start Learning
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getModulesByDifficulty('advanced').map(module => (
                <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getDifficultyColor(module.difficulty)}>
                        {module.difficulty}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{module.duration}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {module.topics.slice(0, 3).map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {module.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{module.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button 
                      className="w-full" 
                      onClick={() => setSelectedModule(module.id)}
                    >
                      Start Learning
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Learning;
