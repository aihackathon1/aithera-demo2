'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Navigation from '@/components/Navigation';

const moodData = [
  { day: 'Mon', mood: 4, label: 'Happy' },
  { day: 'Tue', mood: 3, label: 'Neutral' },
  { day: 'Wed', mood: 2, label: 'Anxious' },
  { day: 'Thu', mood: 1, label: 'Sad' },
  { day: 'Fri', mood: 4, label: 'Happy' },
  { day: 'Sat', mood: 5, label: 'Calm' },
  { day: 'Sun', mood: 3, label: 'Neutral' },
];

const moodEmojis = [
  { emoji: '😡', label: 'Angry', value: 1, color: 'bg-red-100 hover:bg-red-200 border-red-300' },
  { emoji: '😟', label: 'Anxious', value: 2, color: 'bg-orange-100 hover:bg-orange-200 border-orange-300' },
  { emoji: '😔', label: 'Sad', value: 3, color: 'bg-yellow-100 hover:bg-yellow-200 border-yellow-300' },
  { emoji: '😐', label: 'Neutral', value: 4, color: 'bg-blue-100 hover:bg-blue-200 border-blue-300' },
  { emoji: '😊', label: 'Happy', value: 5, color: 'bg-green-100 hover:bg-green-200 border-green-300' },
];

const journalEntries = [
  {
    day: 'Monday',
    mood: '😟',
    entry: 'Felt stressed about exams. Took a 10-minute walk which helped clear my mind.',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    day: 'Wednesday',
    mood: '😊',
    entry: 'Relaxed after a walk in nature. The fresh air really lifted my spirits.',
    color: 'bg-green-50 border-green-200'
  },
  {
    day: 'Friday',
    mood: '😊',
    entry: 'Excited to hang out with friends. Social connections always make me feel better.',
    color: 'bg-blue-50 border-blue-200'
  }
];

const tips = [
  {
    icon: '💙',
    title: 'Every feeling is valid',
    description: 'Your emotions are important and deserve acknowledgment.',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: '🌱',
    title: 'Small steps lead to big progress',
    description: 'Celebrate the little victories along your wellness journey.',
    color: 'bg-green-50 border-green-200'
  },
  {
    icon: '🧘',
    title: 'Take a moment to breathe and reflect',
    description: 'Mindfulness can help you stay grounded and present.',
    color: 'bg-purple-50 border-purple-200'
  }
];

export default function MoodTracking() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleMoodSelect = (value: number) => {
    setSelectedMood(value);
  };

  const handleLogMood = () => {
    if (selectedMood) {
      alert(`Mood logged: ${moodEmojis.find(m => m.value === selectedMood)?.label}`);
      setSelectedMood(null);
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Your Mood.{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Understand Yourself Better.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Log your emotions daily and see your progress over time. 
            Building awareness of your emotional patterns can help you develop better coping strategies.
          </p>
        </div>
      </section>

      {/* Mood Input Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              How are you feeling today?
            </h2>
            
            <div className="flex justify-center space-x-4 mb-8">
              {moodEmojis.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => handleMoodSelect(mood.value)}
                  className={`w-20 h-20 rounded-2xl border-2 transition-all duration-300 transform hover:scale-110 ${
                    selectedMood === mood.value
                      ? `${mood.color} border-current shadow-lg scale-110`
                      : `${mood.color} border-gray-200 hover:shadow-md`
                  }`}
                >
                  <div className="text-4xl mb-1">{mood.emoji}</div>
                  <div className="text-xs font-medium text-gray-700">{mood.label}</div>
                </button>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleLogMood}
                disabled={!selectedMood}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                Log Today's Mood
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Chart Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Mood Over the Past Week
            </h2>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#6b7280"
                    fontSize={14}
                    fontWeight={500}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={14}
                    fontWeight={500}
                    domain={[0, 5]}
                    tickCount={6}
                    tickFormatter={(value) => {
                      const mood = moodEmojis.find(m => m.value === value);
                      return mood ? mood.emoji : '';
                    }}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                            <p className="font-semibold text-gray-900">{label}</p>
                            <p className="text-lg">{data.label}</p>
                            <p className="text-sm text-gray-600">Mood Level: {data.mood}/5</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Journal Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Recent Reflections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journalEntries.map((entry, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 ${entry.color} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{entry.mood}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{entry.day}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{entry.entry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Encouragement Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Gentle Reminders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className={`rounded-2xl p-6 border-2 ${tip.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Want to talk about how you're feeling?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our AI therapist is here to listen and provide support whenever you need it.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Chat with AI Therapist
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="pb-16"></div>
      </div>
    </main>
  );
}
