import React, { useState } from 'react';
import { X, Play, Pause } from 'lucide-react';
import { useVoiceNarration } from '../hooks/useVoiceNarration';

interface Woman {
  id: string;
  name: string;
  period: string;
  region: string;
  imageUrl: string;
  shortDescription: string;
  fullBiography: string;
  letter: string;
  significance: string;
}

const TheWomen: React.FC = () => {
  const [selectedWoman, setSelectedWoman] = useState<Woman | null>(null);
  const { isPlaying, currentText, speak, stop } = useVoiceNarration();

  const women: Woman[] = [
    {
      id: 'matangini-hazra',
      name: 'Matangini Hazra',
      period: '1869-1942',
      region: 'Bengal',
      imageUrl: '/images/matangini-hazra.jpg',
      shortDescription: 'Known as "Gandhi Buri", she led protests against British salt tax',
      fullBiography: 'Matangini Hazra was a revolutionary who participated in India\'s freedom movement. Born into a poor family in Bengal, she was widowed at 18 but dedicated her life to the independence struggle. She was an active participant in the Non-Cooperation Movement, Civil Disobedience Movement, and Quit India Movement. At the age of 73, she led a procession of 6,000 supporters to take over the Tamluk police station. She was shot three times by the police but continued to advance with the Indian tricolor in her hand, shouting "Vande Mataram" until she collapsed and died.',
      letter: 'My dear countrymen, age is just a number when it comes to serving the motherland. At 73, I feel the fire of youth burning in my heart. We must not let the British crush our spirit. Every step we take toward the police station today is a step toward our freedom. Let them shoot this old body, but they cannot kill the idea of a free India that lives in each of us.',
      significance: 'Her sacrifice inspired thousands and showed that the freedom struggle belonged to people of all ages and backgrounds.'
    },
    {
      id: 'rani-gaidinliu',
      name: 'Rani Gaidinliu',
      period: '1915-1993',
      region: 'Manipur',
      imageUrl: '/images/rani-gaidinliu.jpg',
      shortDescription: 'Naga spiritual and political leader who fought against British rule in Northeast India',
      fullBiography: 'Rani Gaidinliu was a Naga spiritual and political leader who led a movement against British rule in present-day Manipur and Nagaland. She joined the Heraka religious movement at the age of 13 and later led an armed resistance against the British. Arrested at 16, she spent 14 years in prison. Jawaharlal Nehru called her the "Daughter of the Hills" and gave her the title "Rani". After independence, she continued to work for the welfare of her people and the preservation of Naga culture.',
      letter: 'From these hills of Manipur, I send word to all who will listen. The British may have weapons, but we have something stronger - our connection to this sacred land and our ancestors. They call me young, but the spirits of our forefathers guide my hand. Every mountain, every valley knows we belong here, and no foreign power can change that truth.',
      significance: 'She represents the often-overlooked contributions of tribal communities and women from Northeast India to the freedom struggle.'
    },
    {
      id: 'savitribai-phule',
      name: 'Savitribai Phule',
      period: '1831-1897',
      region: 'Maharashtra',
      imageUrl: '/images/savitribai-phule.jpg',
      shortDescription: 'Pioneer of women\'s education and social reform in India',
      fullBiography: 'Savitribai Phule was a social reformer, educationalist, and poet from Maharashtra. Along with her husband Jyotirao Phule, she played a crucial role in improving women\'s rights in India. She was the first female teacher in India and, along with her husband, opened the first school for girls in Pune in 1848. She faced severe social ostracism and was often pelted with stones and cow dung for her efforts to educate girls and women from lower castes.',
      letter: 'My dear sisters, they throw stones at me when I walk to school, but each stone strengthens my resolve. Education is our weapon against ignorance and oppression. When you learn to read and write, you are not just gaining knowledge - you are claiming your right to think, to question, to dream. Let them mock us today, for tomorrow our daughters will read these words and know they are free.',
      significance: 'Her work in education and women\'s rights laid the foundation for future generations of Indian women\'s participation in public life.'
    },
    {
      id: 'uda-devi',
      name: 'Uda Devi',
      period: '1830s-1857',
      region: 'Uttar Pradesh',
      imageUrl: '/images/uda-devi.jpg',
      shortDescription: 'Dalit woman warrior who fought in the 1857 rebellion',
      fullBiography: 'Uda Devi was a Pasi woman who played a significant role in the Indian Rebellion of 1857. She was one of the women soldiers in the army of Begum Hazrat Mahal of Awadh. During the siege of Lucknow, she positioned herself on a peepal tree and shot down over 30 British soldiers before being discovered and killed. Her story represents the contributions of Dalit women to India\'s freedom struggle, which have been largely ignored in mainstream historical narratives.',
      letter: 'From this tree, I can see the enemy advancing on our beloved Lucknow. Each bullet I fire carries the prayers of my people, the Pasis, who have been told we are untouchable, unworthy. But today, from these branches, I touch the sky itself. Let them come - they will find that freedom flows in the blood of every Indian, regardless of caste or creed.',
      significance: 'She exemplifies the courage of marginalized communities and challenges traditional narratives about who participated in the independence movement.'
    },
    {
      id: 'kamaladevi-chattopadhyay',
      name: 'Kamaladevi Chattopadhyay',
      period: '1903-1988',
      region: 'Karnataka/National',
      imageUrl: '/images/kamaladevi-chattopadhyay.jpg',
      shortDescription: 'Freedom fighter and social reformer who championed women\'s rights',
      fullBiography: 'Kamaladevi Chattopadhyay was a social reformer and freedom activist who played an important role in the Indian independence movement. She was the first woman to run for a legislative seat in India and was a close associate of Mahatma Gandhi and Sarojini Naidu. She was actively involved in the Salt Satyagraha and was imprisoned several times. After independence, she worked towards the revival of Indian handicrafts, handloom, and theatre.',
      letter: 'Dear friends in the struggle, they ask why a woman needs to concern herself with politics. I tell them that politics concerns itself with women every day - in the laws that govern our bodies, the opportunities denied to our minds, the futures stolen from our daughters. When we fight for freedom, we fight not just against foreign rule, but against every chain that binds the human spirit.',
      significance: 'She was instrumental in connecting women\'s rights with the broader freedom struggle and continued her activism after independence.'
    },
    {
      id: 'pritilata-waddedar',
      name: 'Pritilata Waddedar',
      period: '1911-1932',
      region: 'Bengal',
      imageUrl: '/images/pritilata-waddedar.jpg',
      shortDescription: 'Revolutionary who led armed resistance against British colonial rule',
      fullBiography: 'Pritilata Waddedar was a Bengali revolutionary nationalist who was part of the armed resistance movement against British colonial rule in India. She was a member of the Chittagong Armoury Raid group led by Surya Sen. She led an attack on the Pahartali European Club in 1932 and took cyanide to avoid capture when the mission was compromised. She was one of the few women to participate in armed revolutionary activities during the independence movement.',
      letter: 'My beloved motherland, tonight I prepare for what may be my final mission. They say women should not take up arms, but when the enemy shows no mercy to our people, how can we show mercy to them? I go not as a woman or man, but as a child of this sacred soil. If I do not return, remember that every drop of blood spilled for freedom waters the tree of liberty.',
      significance: 'She broke gender barriers in revolutionary activities and inspired many others to join the armed resistance movement.'
    }
  ];

  const handleNarration = (text: string, id: string) => {
    if (isPlaying && currentText === id) {
      stop();
    } else {
      speak(text, id);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Women Who Dared
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the unsung heroines who sacrificed everything for India's freedom. 
            Their stories of courage transcend time and continue to inspire generations.
          </p>
        </div>

        {/* Women Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {women.map((woman) => (
            <div
              key={woman.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedWoman(woman)}
            >
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  src={woman.imageUrl}
                  alt={woman.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = 'https://images.pexels.com/photos/5749153/pexels-photo-5749153.jpeg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {woman.name}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-blue-600 font-medium">{woman.period}</span>
                  <span className="text-sm text-gray-500">{woman.region}</span>
                </div>
                <p className="text-gray-600 text-sm">{woman.shortDescription}</p>
                <div className="mt-4">
                  <span className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    Read her story →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedWoman && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">{selectedWoman.name}</h2>
                <button
                  onClick={() => setSelectedWoman(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img
                      src={selectedWoman.imageUrl}
                      alt={selectedWoman.name}
                      className="w-full rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/5749153/pexels-photo-5749153.jpeg';
                      }}
                    />
                    <div className="mt-4 text-center">
                      <div className="text-lg font-semibold text-gray-900">{selectedWoman.name}</div>
                      <div className="text-blue-600">{selectedWoman.period}</div>
                      <div className="text-gray-500">{selectedWoman.region}</div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">Biography</h3>
                        <button
                          onClick={() => handleNarration(selectedWoman.fullBiography, `bio-${selectedWoman.id}`)}
                          className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                        >
                          {isPlaying && currentText === `bio-${selectedWoman.id}` ? (
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
                      <p className="text-gray-700 leading-relaxed">{selectedWoman.fullBiography}</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">Her Letter</h3>
                        <button
                          onClick={() => handleNarration(selectedWoman.letter, `letter-${selectedWoman.id}`)}
                          className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                        >
                          {isPlaying && currentText === `letter-${selectedWoman.id}` ? (
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
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600" style={{ fontFamily: 'cursive' }}>
                        <p className="text-gray-800 italic leading-relaxed">"{selectedWoman.letter}"</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Historical Significance</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedWoman.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheWomen;