
import { Link } from 'react-router-dom';
import { BookOpen, Search, Plus, Zap, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Flashcards',
      description: 'Study with flip-card animations and track your progress through hundreds of DevOps questions.'
    },
    {
      icon: Search,
      title: 'Smart Filtering',
      description: 'Find questions by technology, difficulty level, or search for specific topics.'
    },
    {
      icon: Plus,
      title: 'Community Driven',
      description: 'Submit your own questions and help build the most comprehensive DevOps Q&A collection.'
    },
    {
      icon: Zap,
      title: 'Quick Practice',
      description: 'Jump into flashcard mode instantly with randomized questions for effective learning.'
    }
  ];

  const stats = [
    { label: 'Questions Available', value: '500+' },
    { label: 'Technologies Covered', value: '15+' },
    { label: 'Community Contributors', value: '1k+' },
    { label: 'Success Rate', value: '94%' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Master DevOps
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Interviews</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Practice with interactive flashcards, browse hundreds of real interview questions, 
              and contribute to the largest community-driven DevOps Q&A platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/flashcards">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Practicing
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/questions">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Questions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need to Ace Your DevOps Interview
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From Docker and Kubernetes to CI/CD and Infrastructure as Code - 
              we've got you covered with comprehensive practice materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Coverage */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Technology Coverage
            </h2>
            <p className="text-xl text-muted-foreground">
              Practice questions covering all major DevOps tools and practices
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform', 'Ansible', 'GitOps', 'Monitoring', 'CI/CD', 'Infrastructure'].map((tech) => (
              <div key={tech} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="font-medium text-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of DevOps professionals who have successfully prepared for their interviews with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/flashcards">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/submit">
                <Plus className="w-5 h-5 mr-2" />
                Contribute Questions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
