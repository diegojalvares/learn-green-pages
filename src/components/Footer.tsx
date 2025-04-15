
import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Learning<span className="text-appGreen">Hub</span></h3>
            <p className="text-gray-300">
              Providing high-quality learning materials and resources for students and professionals.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-appGreen transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-appGreen transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-appGreen transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#materials" className="text-gray-300 hover:text-appGreen transition-colors">Materials</a></li>
              <li><a href="#previous-courses" className="text-gray-300 hover:text-appGreen transition-colors">Previous Courses</a></li>
              <li><a href="#online-modules" className="text-gray-300 hover:text-appGreen transition-colors">Online Modules</a></li>
              <li><a href="#" className="text-gray-300 hover:text-appGreen transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">If you have any questions or feedback, please don't hesitate to contact us.</p>
            <a href="mailto:contact@learninghub.org" className="text-appGreen hover:underline mt-2 inline-block">
              contact@learninghub.org
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LearningHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
