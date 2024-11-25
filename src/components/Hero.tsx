import React from 'react';
import { ArrowRight, Code, Smartphone, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Transforming Ideas into
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative"> Digital Reality</span>
          </span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          We specialize in creating innovative mobile solutions and comprehensive communication 
          services that connect organizations with their audiences effectively.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <a href="#contact" className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-indigo-600">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#portfolio" className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-gray-50 active:bg-gray-100 focus-visible:outline-white border border-gray-200">
            View Portfolio
          </a>
        </div>

        <div className="mt-36 lg:mt-44 grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <Smartphone className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile Solutions</h3>
            <p className="text-gray-600 text-center">Custom mobile apps and USSD solutions for seamless user experiences</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 text-center">Responsive and intuitive web applications tailored to your needs</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <Layout className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-center">Beautiful and functional designs that enhance user engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;