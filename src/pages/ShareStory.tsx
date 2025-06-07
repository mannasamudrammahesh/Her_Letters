import React, { useState, useEffect } from 'react';
import { Send, Heart, MapPin, Calendar } from 'lucide-react';

interface Story {
  id: string;
  name: string;
  region: string;
  fighterName: string;
  story: string;
  submittedAt: string;
}

const ShareStory: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    fighterName: '',
    story: ''
  });
  const [stories, setStories] = useState<Story[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load stories from localStorage on component mount
    const savedStories = localStorage.getItem('communityStories');
    if (savedStories) {
      setStories(JSON.parse(savedStories));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.region || !formData.fighterName || !formData.story) {
      return;
    }

    setIsSubmitting(true);

    // Create new story
    const newStory: Story = {
      id: Date.now().toString(),
      name: formData.name,
      region: formData.region,
      fighterName: formData.fighterName,
      story: formData.story,
      submittedAt: new Date().toISOString()
    };

    // Add to stories array
    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);

    // Save to localStorage
    localStorage.setItem('communityStories', JSON.stringify(updatedStories));

    // Reset form
    setFormData({
      name: '',
      region: '',
      fighterName: '',
      story: ''
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 3000);
  };

  const regions = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Other'
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Share Her Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us preserve the memory of forgotten heroines. Share stories of women freedom fighters 
            from your family, community, or region that deserve to be remembered.
          </p>
        </div>

        {/* Submission Form */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit a Story</h2>
          
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-green-500 mr-2" />
                <p className="text-green-800 font-medium">
                  Thank you for sharing this important story! It has been added to our community collection.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a region</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="fighterName" className="block text-sm font-medium text-gray-700 mb-2">
                Woman Freedom Fighter's Name
              </label>
              <input
                type="text"
                id="fighterName"
                name="fighterName"
                value={formData.fighterName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the freedom fighter's name"
              />
            </div>

            <div>
              <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-2">
                Her Story
              </label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Share her story - her background, contribution to the freedom struggle, challenges faced, and why she should be remembered..."
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Share Her Story
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Community Stories */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Stories</h2>
          
          {stories.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                No stories shared yet. Be the first to honor a forgotten heroine!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {stories.map((story) => (
                <div key={story.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{story.fighterName}</h3>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(story.submittedAt).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{story.region}</span>
                    <span>Shared by {story.name}</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">{story.story}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-600">
                      Thank you for preserving this important story for future generations.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareStory;