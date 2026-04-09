import React, { useState } from 'react';
import { Image as ImageIcon, Video as VideoIcon, Wand2, Download, Layers } from 'lucide-react';
import { cn } from '../lib/utils';

const MediaLab = () => {
  const [mode, setMode] = useState<'image' | 'video'>('image');
  const [prompt, setPrompt] = useState('');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">AI Media Lab</h1>
          <p className="text-slate-400">Generate high-quality visuals from text prompts.</p>
        </div>
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button 
            onClick={() => setMode('image')}
            className={cn("flex items-center space-x-2 px-4 py-2 rounded-lg transition-all", mode === 'image' ? "bg-indigo-600 text-white" : "text-slate-400")}
          >
            <ImageIcon size={18} /> <span>Image</span>
          </button>
          <button 
            onClick={() => setMode('video')}
            className={cn("flex items-center space-x-2 px-4 py-2 rounded-lg transition-all", mode === 'video' ? "bg-indigo-600 text-white" : "text-slate-400")}
          >
            <VideoIcon size={18} /> <span>Video</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl h-fit">
          <div>
            <label className="text-sm font-medium text-slate-400 block mb-2">Prompt</label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              placeholder="Describe what you want to create..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-400 block mb-2">Aspect Ratio</label>
            <div className="grid grid-cols-3 gap-2">
              {['1:1', '16:9', '9:16'].map(ratio => (
                <button key={ratio} className="py-2 text-xs bg-slate-800 border border-slate-700 rounded-lg hover:border-indigo-500 transition-colors">
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-400 block mb-2">Style</label>
            <select className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm outline-none">
              <option>Cinematic</option>
              <option>3D Cartoon</option>
              <option>Anime</option>
              <option>Realistic Photo</option>
            </select>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20">
            <Wand2 size={20} />
            <span>Generate {mode === 'image' ? 'Image' : 'Video'}</span>
          </button>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 min-h-[400px] relative group">
          {!prompt ? (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                <ImageIcon className="text-slate-600" size={40} />
              </div>
              <p className="text-slate-500">Enter a prompt and click generate to see magic</p>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-full aspect-video bg-slate-800 rounded-xl animate-pulse flex items-center justify-center">
                <span className="text-slate-500">AI is thinking...</span>
              </div>
            </div>
          )}
          
          {/* Floating Actions */}
          <div className="absolute bottom-6 right-6 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition-colors"><Download size={20}/></button>
            <button className="p-3 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 transition-colors"><Layers size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLab;
