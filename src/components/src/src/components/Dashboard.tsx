import React from 'react';
import { TrendingUp, Zap, Star, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
      <Icon className="text-white" size={24} />
    </div>
    <p className="text-slate-400 text-sm">{label}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Zaid! 👋</h1>
        <p className="text-slate-400 mt-2">Here is what's happening with your AI journey today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={Zap} label="AI Credits" value="1,250" color="bg-yellow-500" />
        <StatCard icon={TrendingUp} label="Learning Streak" value="12 Days" color="bg-green-500" />
        <StatCard icon={Star} label="Mastery Level" value="Expert" color="bg-purple-500" />
        <StatCard icon={Clock} label="Time Spent" value="42h 15m" color="bg-blue-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Daily Challenge</h3>
          <div className="bg-indigo-600/10 border border-indigo-500/20 p-4 rounded-xl">
            <p className="text-indigo-300 font-medium">Learn 5 new Korean phrases today!</p>
            <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm transition-colors">
              Start Challenge
            </button>
          </div>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Recent Creations</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[1,2,3].map(i => (
              <div key={i} className="min-w-[120px] h-20 bg-slate-800 rounded-lg flex-shrink-0 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
