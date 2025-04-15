
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  students: number;
  duration: string;
  materials: string;
}

const PreviousCoursesSection = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Advanced Data Analysis",
      description: "Statistical methods and tools for analyzing complex datasets with practical applications.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Jan - Mar 2024",
      students: 45,
      duration: "10 weeks",
      materials: "#"
    },
    {
      id: 2,
      title: "Web Application Development",
      description: "Building modern web applications using React, Node.js, and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep - Dec 2023",
      students: 62,
      duration: "12 weeks",
      materials: "#"
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning algorithms, techniques, and practical implementations.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "May - Jul 2023",
      students: 38,
      duration: "8 weeks",
      materials: "#"
    },
    {
      id: 4,
      title: "Database Design & Management",
      description: "Principles of database design, SQL, and database administration for various applications.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Feb - Apr 2023",
      students: 40,
      duration: "9 weeks",
      materials: "#"
    }
  ];

  return (
    <section id="previous-courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Previous Courses</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Explore our previously offered courses with access to lecture materials, assignments, and resources.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map(course => (
            <Card key={course.id} className="overflow-hidden course-card">
              <div className="h-52 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-image"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{course.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-appGreen hover:bg-appGreen-dark">
                  <a href={course.materials}>Access Course Materials</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousCoursesSection;
