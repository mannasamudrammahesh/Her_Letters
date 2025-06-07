import React, { useState } from 'react';
import { X, MapPin, Play, Pause } from 'lucide-react';
import { useVoiceNarration } from '../hooks/useVoiceNarration';

interface RegionStory {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  story: string;
  keyFigures: string[];
  significance: string;
}

const ImpactMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionStory | null>(null);
  const { isPlaying, currentText, speak, stop } = useVoiceNarration();

  const regions: RegionStory[] = [
    {
      id: 'bengal',
      name: 'Bengal',
      coordinates: { x: 78, y: 45 },
      story: 'Bengal was the epicenter of revolutionary activity and women\'s participation in the independence movement. From Rani Rashmoni who challenged British authorities to Matangini Hazra who led protests at 73, Bengal produced some of the most fearless women freedom fighters. The region saw active participation of women in the Swadeshi movement, with women organizing boycotts of foreign goods and promoting indigenous products.',
      keyFigures: ['Matangini Hazra', 'Pritilata Waddedar', 'Kalpana Dutta', 'Shanti Ghosh'],
      significance: 'Bengal demonstrated how women could lead both non-violent resistance and armed revolutionary activities.'
    },
    {
      id: 'manipur',
      name: 'Manipur',
      coordinates: { x: 85, y: 35 },
      story: 'Manipur has a unique history of women\'s resistance, with the Nupi Lan (Women\'s War) movements of 1904 and 1939 being precursors to the national freedom struggle. Rani Gaidinliu led the Heraka movement and armed resistance against British rule. Manipuri women traditionally held significant political and economic power, which translated into their active participation in anti-colonial movements.',
      keyFigures: ['Rani Gaidinliu', 'Hijam Irabot Singh (supported by women activists)', 'Nupi Lan participants'],
      significance: 'Showed how indigenous traditions of women\'s empowerment could fuel anti-colonial resistance.'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      coordinates: { x: 55, y: 60 },
      story: 'Maharashtra was the birthplace of modern women\'s education and social reform movements. Savitribai Phule opened the first school for girls in 1848, laying the foundation for women\'s participation in public life. The state produced leaders like Kamaladevi Chattopadhyay who connected social reform with political freedom. Maharashtra showed how education and social reform were integral to the freedom struggle.',
      keyFigures: ['Savitribai Phule', 'Kamaladevi Chattopadhyay', 'Lakshmibai Tilak', 'Ramabai Ranade'],
      significance: 'Demonstrated the connection between women\'s education, social reform, and political freedom.'
    },
    {
      id: 'uttar-pradesh',
      name: 'Uttar Pradesh',
      coordinates: { x: 65, y: 45 },
      story: 'UP was home to some of the most dramatic episodes of women\'s participation in the freedom struggle. From Rani Lakshmibai\'s heroic resistance in Jhansi to Uda Devi\'s sniper attack during the 1857 rebellion, the state witnessed women taking up arms for freedom. The region also saw significant participation of women in Gandhi\'s non-violent movements, with many courting arrest and imprisonment.',
      keyFigures: ['Rani Lakshmibai', 'Uda Devi', 'Begum Hazrat Mahal', 'Sucheta Kripalani'],
      significance: 'Showcased both armed resistance and non-violent protest by women across different communities.'
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      coordinates: { x: 50, y: 55 },
      story: 'Gujarat was central to Gandhi\'s movement and saw massive participation of women in civil disobedience. Kasturba Gandhi, though often overshadowed by her husband, was a leader in her own right. The state witnessed women breaking salt laws, picketing liquor shops, and organizing boycotts. The Bardoli Satyagraha saw significant participation of rural women who faced economic hardship for the cause of freedom.',
      keyFigures: ['Kasturba Gandhi', 'Mithuben Petit', 'Maniben Patel', 'Shardaben Mehta'],
      significance: 'Demonstrated how Gandhian methods particularly resonated with and empowered women participants.'
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      coordinates: { x: 60, y: 80 },
      story: 'Tamil Nadu had a strong tradition of women\'s social reform movements that fed into the freedom struggle. The state saw women participating in the Non-Cooperation Movement and Salt Satyagraha. Women like Rukmani Lakshmipathi played crucial roles in organizing resistance activities. The state also had a strong tradition of women\'s participation in cultural nationalism through music, dance, and literature.',
      keyFigures: ['Rukmani Lakshmipathi', 'Dr. Muthulakshmi Reddi', 'Rajkumari Amrit Kaur (though from Punjab, active in South)'],
      significance: 'Showed how cultural nationalism and political resistance could be combined by women leaders.'
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Impact Across India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how women from different regions of India contributed to the freedom struggle. 
            Click on the locations to discover their unique stories of resistance.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative bg-blue-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Interactive Map of India</h2>
            <p className="text-gray-600">Click on the markers to explore regional stories</p>
          </div>
          
          {/* Simplified India Map */}
          <div className="relative mx-auto" style={{ width: '400px', height: '500px' }}>
            {/* India outline using CSS */}
            <div className="absolute inset-0 bg-green-100 border-2 border-green-300 rounded-lg"></div>
            
            {/* Map illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm">Simplified Map of India</p>
                <p className="text-xs">Click on region markers below</p>
              </div>
            </div>

            {/* Region Markers */}
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className="absolute w-4 h-4 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors transform -translate-x-2 -translate-y-2 hover:scale-125"
                style={{ 
                  left: `${region.coordinates.x}%`, 
                  top: `${region.coordinates.y}%` 
                }}
                title={region.name}
              />
            ))}
          </div>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedRegion(region)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{region.name}</h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {region.story.substring(0, 150)}...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 text-sm font-medium">Read full story →</span>
                <div className="text-xs text-gray-500">
                  {region.keyFigures.length} key figures
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedRegion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">{selectedRegion.name}</h2>
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">Regional Story</h3>
                    <button
                      onClick={() => handleNarration(selectedRegion.story, selectedRegion.id)}
                      className="inline-flex items-center px-3 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                    >
                      {isPlaying && currentText === selectedRegion.id ? (
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
                  <p className="text-gray-700 leading-relaxed">{selectedRegion.story}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Figures</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedRegion.keyFigures.map((figure, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {figure}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Historical Significance</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedRegion.significance}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImpactMap;