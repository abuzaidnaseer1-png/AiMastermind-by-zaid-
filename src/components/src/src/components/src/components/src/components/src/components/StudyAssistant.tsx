import React from 'react';
import { BookOpen, CheckCircle2, BrainCircuit, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';

const StudyAssistant = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Study Assistant</h1>
        <p className="text-slate-400">Your smart tutor for exams and subjects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Ask a Question</h3>
            <div className="relative">
              <textarea 
                placeholder="Paste your math problem, history question, or science concept here..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 pr-12 min-h-[150px] outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="absolute bottom-4 right-4 p-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
                <BrainCircuit size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-500">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="font-bold">Summarize Notes</p>
                <p className="text-xs text-slate-400">Turn long text into short notes</p>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold">Quick Quiz</p>
                <p className="text-xs text-slate-400">Test your knowledge instantly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="text-indigo-400" />
              <h3 className="font-bold">Learning Goal</h3>
            </div>
            <p className="text-sm text-slate-300 mb-4">You have completed 65% of your Science revision.</p>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[65%]" />
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold mb-4">Recent Topics</h3>
            <ul className="space-y-3">
              {['Quantum Physics', 'Ancient Rome', 'Organic Chemistry'].map(topic => (
                <li key={topic} className="text-sm text-slate-400 flex items-center justify-between">
                  {topic} <span className="text-[10px] bg-slate-800 px-2 py-1 rounded">Reviewing</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAssistant;
