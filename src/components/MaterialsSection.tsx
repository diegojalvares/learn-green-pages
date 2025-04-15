
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MaterialItem {
  id: number;
  title: string;
  description: string;
  type: string;
  link: string;
}

const MaterialsSection = () => {
  const materials: MaterialItem[] = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      description: "Comprehensive study guide covering basic data structures with examples and practice exercises.",
      type: "PDF",
      link: "#"
    },
    {
      id: 2,
      title: "Algorithm Design Patterns",
      description: "Collection of common algorithmic patterns with implementation examples in multiple languages.",
      type: "PDF",
      link: "#"
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      description: "Guide to HTML, CSS, and JavaScript basics with interactive examples.",
      type: "HTML",
      link: "#"
    },
    {
      id: 4,
      title: "Database Schema Diagrams",
      description: "Visual reference for relational database design patterns and normalization techniques.",
      type: "Image",
      link: "#"
    },
    {
      id: 5,
      title: "Machine Learning Formulas",
      description: "Reference sheet with essential machine learning algorithms and mathematical formulations.",
      type: "PDF",
      link: "#"
    },
    {
      id: 6,
      title: "Git Version Control Cheatsheet",
      description: "Quick reference guide for common Git commands and workflows.",
      type: "PDF",
      link: "#"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'PDF':
        return <FileText className="text-red-500" size={20} />;
      case 'HTML':
        return <ExternalLink className="text-blue-500" size={20} />;
      case 'Image':
        return <FileText className="text-green-500" size={20} />;
      default:
        return <FileText className="text-gray-500" size={20} />;
    }
  };

  return (
    <section id="materials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Learning Materials</h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Access our collection of high-quality learning resources, reference guides, and study materials to support your educational journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map(material => (
            <Card key={material.id} className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {getIcon(material.type)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkGray">{material.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{material.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                        {material.type}
                      </span>
                      <Button variant="outline" size="sm" asChild className="text-appGreen border-appGreen hover:bg-appGreen hover:text-white">
                        <a href={material.link}>
                          <Download size={14} className="mr-1" /> Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
