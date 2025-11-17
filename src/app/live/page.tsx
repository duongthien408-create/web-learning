'use client';

import { useState, useEffect } from 'react';
import { Video, Users, Heart, MessageCircle, Share2, Sparkles, Radio } from 'lucide-react';

export default function LivePage() {
  const [viewerCount, setViewerCount] = useState(1247);
  const [likes, setLikes] = useState(3421);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: 'Sarah Chen', message: 'Amazing content! 🔥', time: '2s ago' },
    { id: 2, user: 'Mike Johnson', message: 'Love this!', time: '5s ago' },
    { id: 3, user: 'Emma Wilson', message: 'Can you show that again?', time: '12s ago' },
    { id: 4, user: 'David Park', message: 'This is incredible! 💯', time: '18s ago' },
  ]);
  const [newComment, setNewComment] = useState('');

  // Simulate live viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 10 - 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSendComment = () => {
    if (newComment.trim()) {
      setComments([
        { id: Date.now(), user: 'You', message: newComment, time: 'now' },
        ...comments.slice(0, 3)
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse" />
                <Radio className="relative w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-semibold text-lg">Live Now</h1>
                <p className="text-white/60 text-sm">Marketing Masterclass 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-red-400 font-medium text-sm">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Video Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* Video Player */}
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 shadow-2xl">
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Video Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                      <Video className="relative w-24 h-24 text-white/80" />
                    </div>
                    <p className="text-white/60 text-lg">Live Stream Active</p>
                  </div>
                </div>

                {/* Top Overlay Stats */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="backdrop-blur-xl bg-black/40 rounded-full px-4 py-2 border border-white/10 flex items-center gap-2">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white font-medium">{viewerCount.toLocaleString()}</span>
                    </div>
                    <div className="backdrop-blur-xl bg-black/40 rounded-full px-4 py-2 border border-white/10 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-medium">Peak: {(viewerCount + 156).toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="backdrop-blur-xl bg-black/40 rounded-full p-2 border border-white/10 hover:bg-white/10 transition-all">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-4 border border-white/10">
                    <h2 className="text-white font-semibold text-xl mb-1">Advanced Marketing Strategies</h2>
                    <p className="text-white/70 text-sm">Learn cutting-edge techniques from industry experts</p>
                  </div>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  className={`flex-1 backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group ${
                    isLiked ? 'bg-red-500/20 border-red-500/30' : ''
                  }`}
                >
                  <Heart className={`w-6 h-6 transition-all ${isLiked ? 'text-red-500 fill-red-500' : 'text-white/80 group-hover:text-red-400'}`} />
                  <span className="text-white font-medium">{likes.toLocaleString()}</span>
                </button>

                <button className="flex-1 backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                  <MessageCircle className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors" />
                  <span className="text-white font-medium">{comments.length}</span>
                </button>

                <button className="flex-1 backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                  <Share2 className="w-6 h-6 text-white/80 group-hover:text-green-400 transition-colors" />
                  <span className="text-white font-medium">Share</span>
                </button>
              </div>

              {/* Description */}
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-3">About This Stream</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Join us for an exclusive deep dive into modern marketing strategies. We'll cover everything from content marketing to data analytics, with real-world examples and actionable insights.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Marketing', 'Strategy', 'Digital', 'Analytics', 'Content'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Section */}
            <div className="lg:col-span-1">
              <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 overflow-hidden h-[calc(100vh-8rem)] flex flex-col sticky top-24">
                {/* Chat Header */}
                <div className="p-4 border-b border-white/10">
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Live Chat
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{viewerCount.toLocaleString()} viewers</p>
                </div>

                {/* Comments */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {comments.map((comment) => (
                    <div key={comment.id} className="animate-in slide-in-from-bottom-4 duration-300">
                      <div className="backdrop-blur-xl bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-all">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-white font-medium text-sm">{comment.user}</span>
                          <span className="text-white/40 text-xs">{comment.time}</span>
                        </div>
                        <p className="text-white/80 text-sm">{comment.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendComment()}
                      placeholder="Say something..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    />
                    <button
                      onClick={handleSendComment}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-xl px-6 py-3 text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
