import React, { useState } from 'react';
import { Play, Pause, Calendar, MapPin } from 'lucide-react';
import { useVoiceNarration } from '../hooks/useVoiceNarration';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  location: string;
  story: string;
  letterExcerpt?: string;
  imageUrl?: string;
}

const Timeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const { isPlaying, currentText, speak, stop } = useVoiceNarration();

  const events: TimelineEvent[] = [
    {
      id: '1857-rani',
      year: '1857',
      title: 'Rani Lakshmibai of Jhansi',
      location: 'Jhansi, Uttar Pradesh',
      story: 'Born as Manikarnika Tambe, Rani Lakshmibai became one of the most prominent figures of the Indian Rebellion of 1857. After her husband\'s death, the British invoked the Doctrine of Lapse to annex Jhansi. She refused to surrender her Jhansi and fought valiantly against the British forces. Leading from the front with her infant son strapped to her back, she died fighting in the battlefield at Gwalior, becoming an eternal symbol of resistance and courage.',
      letterExcerpt: 'My dear Jhansi, I shall not give you up! Even if it costs me my life, I will fight for your freedom and honor.',
      imageUrl: '/images/rani-lakshmibai.jpg'
    },
    {
      id: '1857-uda',
      year: '1857',
      title: 'Uda Devi - The Sniper of Sikandar Bagh',
      location: 'Lucknow, Uttar Pradesh',
      story: 'Uda Devi was a Pasi woman who fought in the 1857 rebellion. She was among the few women who took up arms during the siege of Lucknow. Positioned herself on a peepal tree and shot down 32 British soldiers before being discovered and killed. Her courage exemplified how women from marginalized communities played crucial roles in the freedom struggle, often going unrecognized in mainstream historical narratives.',
      letterExcerpt: 'From the branches of this tree, I see the enemy. Each shot I take is for my motherland\'s honor.',
      imageUrl: '/images/uda-devi.jpg'
    },
    {
      id: '1848-savitri',
      year: '1848',
      title: 'Savitribai Phule - Education Revolutionary',
      location: 'Maharashtra',
      story: 'Though her major work began earlier, Savitribai Phule\'s influence continued into the freedom movement era. She established the first school for girls in India in 1848 and fought against caste discrimination and for women\'s education. Her revolutionary approach to social reform laid the foundation for women\'s participation in the independence movement. She proved that the fight for freedom must include the fight for social equality.',
      letterExcerpt: 'Education is the most powerful weapon to change the world. When we educate our daughters, we free our nation.',
      imageUrl: '/images/savitribai-phule.jpg'
    },
    {
      id: '1920-kasturba',
      year: '1920',
      title: 'Kasturba Gandhi - The Quiet Revolutionary',
      location: 'Gujarat',
      story: 'Kasturba Gandhi, wife of Mahatma Gandhi, was a freedom fighter in her own right. She participated in the non-cooperation movement, led satyagrahas, and was imprisoned multiple times. Despite living in Gandhi\'s shadow, she had her own voice and often disagreed with him on various issues. Her dedication to the cause of independence and her ability to mobilize women made her an important figure in the freedom struggle.',
      letterExcerpt: 'My dear Mohan writes of ahimsa, but I say a woman\'s strength comes from her conviction to do what is right.',
      imageUrl: '/images/kasturba-gandhi.jpg'
    },
    {
      id: '1930-sarojini',
      year: '1930',
      title: 'Sarojini Naidu - The Nightingale of India',
      location: 'Multiple locations across India',
      story: 'Sarojini Naidu was a poet, political activist, and a prominent leader in the Indian independence movement. She was the first woman to become the president of the Indian National Congress and played a crucial role in the Salt March of 1930. Known as the "Nightingale of India" for her poetry, she used her oratory skills to inspire millions. Her speeches and poems became rallying cries for the freedom movement.',
      letterExcerpt: 'We are not begging for freedom; we are demanding what is rightfully ours. Our voices shall rise like the dawn.',
      imageUrl: '/images/sarojini-naidu.jpg'
    },
    {
      id: '1932-pritilata',
      year: '1932',
      title: 'Pritilata Waddedar - Revolutionary Martyr',
      location: 'Chittagong, Bengal',
      story: 'Pritilata Waddedar was a Bengali revolutionary nationalist who led an armed attack on the Pahartali European Club in 1932. She was a member of the Chittagong Armoury Raid group led by Surya Sen. When the mission was compromised, she took cyanide to avoid capture, becoming one of the youngest martyrs of the independence movement. Her sacrifice inspired many others to join the armed resistance.',
      letterExcerpt: 'My beloved motherland, tonight I prepare for what may be my final mission. If I do not return, remember that every drop of blood spilled for freedom waters the tree of liberty.',
      imageUrl: '/images/pritilata-waddedar.jpg'
    },
    {
      id: '1942-aruna',
      year: '1942',
      title: 'Aruna Asaf Ali - The Heroine of Quit India',
      location: 'Delhi',
      story: 'Aruna Asaf Ali hoisted the Indian National Congress flag at the Gowalia Tank maidan in Mumbai during the Quit India Movement. Despite being underground and hunted by the British, she continued to organize resistance activities. She edited underground newspapers and motivated people to join the movement. Her fearless leadership during one of the most crucial phases of the independence movement earned her the title "Heroine of the 1942 movement".',
      letterExcerpt: 'Today I hoist this flag not just as a symbol, but as a promise that we shall be free. Let every heart beat with this resolve.',
      imageUrl: '/images/aruna-asaf-ali.jpg'
    },
    {
      id: '1942-matangini',
      year: '1942',
      title: 'Matangini Hazra - Gandhi Buri\'s Final March',
      location: 'Tamluk, Bengal',
      story: 'At the age of 73, Matangini Hazra led a procession of 6,000 supporters to take over the Tamluk police station during the Quit India Movement. Known affectionately as "Gandhi Buri" (Gandhi\'s old lady), she was shot three times by the police but continued to advance with the Indian tricolor in her hand, shouting "Vande Mataram" until she collapsed and died. Her sacrifice became a symbol of unwavering dedication to freedom.',
      letterExcerpt: 'Age is just a number when it comes to serving the motherland. Let them shoot this old body, but they cannot kill the idea of a free India.',
      imageUrl: '/images/matangini-hazra.jpg'
    }
  ];

  const handleNarration = (text: string, eventId: string) => {
    if (isPlaying && currentText === eventId) {
      stop();
    } else {
      speak(text, eventId);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Timeline of Courage
          </h1>
          <p className="text-xl text-gray-600">
            1857-1947: A journey through India's freedom struggle as told through the voices of its women warriors
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    {event.imageUrl && (
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = 'https://images.pexels.com/photos/5749153/pexels-photo-5749153.jpeg';
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            <Calendar className="w-4 h-4 mr-1" />
                            {event.year}
                          </span>
                          <span className="inline-flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => handleNarration(event.story, event.id)}
                          className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                        >
                          {isPlaying && currentText === event.id ? (
                            <>
                              <Pause className="w-4 h-4 mr-1" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-1" />
                              Listen
                            </>
                          )}
                        </button>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {event.story}
                      </p>
                      
                      {event.letterExcerpt && (
                        <div className="bg-gray-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                          <p className="text-gray-800 italic font-medium">
                            "{event.letterExcerpt}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Stories Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Global Voices of Resistance
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Harriet Tubman',
                country: 'United States',
                period: '1822-1913',
                contribution: 'Underground Railroad conductor who led enslaved people to freedom'
              },
              {
                name: 'Sophie Scholl',
                country: 'Germany',
                period: '1921-1943',
                contribution: 'Anti-Nazi resistance member of the White Rose group'
              },
              {
                name: 'Funmilayo Ransome-Kuti',
                country: 'Nigeria',
                period: '1900-1978',
                contribution: 'Women\'s rights activist and anti-colonial campaigner'
              }
            ].map((person, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{person.country} • {person.period}</p>
                <p className="text-sm text-gray-700">{person.contribution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;