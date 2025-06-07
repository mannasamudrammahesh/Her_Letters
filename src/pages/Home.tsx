import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Map } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline-preview');
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Her Letters
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Forgotten Voices of India's Freedom Women
            </p>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Discover the untold stories of courageous women who fought for India's independence 
              from 1857 to 1947, through their own words and the letters that history forgot.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToTimeline}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Read Their Words
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                to="/timeline"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Explore Timeline
              </Link>
              <Link
                to="/women"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Know the Women
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Explore Their Legacy</h2>
            <p className="mt-4 text-lg text-gray-600">
              Journey through history and discover the remarkable women who shaped India's freedom struggle
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Their Stories</h3>
              <p className="mt-4 text-gray-600">
                Read detailed accounts of brave women who risked everything for freedom, 
                from rural villages to royal palaces.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Forgotten Heroes</h3>
              <p className="mt-4 text-gray-600">
                Discover the names and faces of women whose contributions were 
                overlooked by traditional history books.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Map className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Impact Across India</h3>
              <p className="mt-4 text-gray-600">
                Explore how women from different regions and communities 
                contributed to the independence movement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Preview */}
      <div id="timeline-preview" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">A Century of Courage</h2>
            <p className="mt-4 text-lg text-gray-600">1857 - 1947: Key moments in women's resistance</p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: '1857',
                title: 'Rani Lakshmibai of Jhansi',
                description: 'Led the resistance against British annexation, becoming a symbol of courage and determination.',
              },
              {
                year: '1930',
                title: 'Sarojini Naidu & Salt March',
                description: 'Participated in the Salt Satyagraha, demonstrating women\'s crucial role in non-violent resistance.',
              },
              {
                year: '1942',
                title: 'Aruna Asaf Ali & Quit India',
                description: 'Hoisted the Indian flag during the Quit India Movement, inspiring nationwide participation.',
              },
            ].map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4">
                  <div className="text-4xl font-bold text-blue-600">{event.year}</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/timeline"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View Complete Timeline
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;