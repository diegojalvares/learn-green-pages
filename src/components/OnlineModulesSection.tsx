
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  progress: number;
}

const OnlineModulesSection = () => {
  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      description: "Learn the basics of Python programming language with interactive exercises and examples.",
      duration: "4 hours",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 100
    },
    {
      id: 2,
      title: "Data Visualization with D3.js",
      description: "Create interactive data visualizations for the web using the powerful D3.js library.",
      duration: "6 hours",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 65
    },
    {
      id: 3,
      title: "Cloud Computing Fundamentals",
      description: "Understand core concepts of cloud infrastructure, services, and deployment models.",
      duration: "5 hours",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 0
    },
    {
      id: 4,
      title: "Advanced Neural Networks",
      description: "Explore advanced neural network architectures and techniques for deep learning applications.",
      duration: "8 hours",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
      progress: 30
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile applications using React Native framework and best practices.",
      duration: "10 hours",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 0
    },
    {
      id: 6,
      title: "DevOps and CI/CD Pipeline Implementation",
      description: "Learn to implement continuous integration and deployment pipelines for software delivery.",
      duration: "7 hours",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      progress: 0
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (progress: number) => {
    if (progress === 100) return "Completed";
    if (progress > 0) return "In Progress";
    return "Not Started";
  };

  return (
    <section id="online-modules" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Online Modules</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Self-paced online modules designed to enhance your skills with interactive content and practical exercises.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(module => (
            <Card key={module.id} className="overflow-hidden course-card">
              <div className="relative h-44 overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="course-image"
                />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                    {module.difficulty}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-darkGray mb-2">{module.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock size={16} />
                    <span>{module.duration}</span>
                  </div>
                  <span className={module.progress === 100 ? "text-appGreen" : module.progress > 0 ? "text-amber-500" : "text-gray-500"}>
                    {getStatusText(module.progress)}
                  </span>
                </div>
                
                <Progress value={module.progress} className="h-1 mb-4" />
                
                <Button asChild className="w-full flex items-center justify-center gap-2 bg-appGreen hover:bg-appGreen-dark">
                  <a href={`#module-${module.id}`}>
                    <PlayCircle size={16} />
                    {module.progress > 0 && module.progress < 100 ? "Continue" : "Start"} Module
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineModulesSection;
