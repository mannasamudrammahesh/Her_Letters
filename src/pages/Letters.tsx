import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Stamp } from 'lucide-react';
import { useVoiceNarration } from '../hooks/useVoiceNarration';

interface Letter {
  id: string;
  author: string;
  date: string;
  location: string;
  recipient: string;
  content: string;
  context: string;
}

const Letters: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const { isPlaying, currentText, speak, stop } = useVoiceNarration();

  const letters: Letter[] = [
    {
      id: 'aruna-1942',
      author: 'Aruna Asaf Ali',
      date: 'August 9, 1942',
      location: 'Mumbai',
      recipient: 'Fellow Freedom Fighters',
      content: `My dear comrades,

Today I hoisted our tricolor at Gowalia Tank, and with it, I felt the weight of every dream, every sacrifice, every prayer of our motherland. The British may hunt me now, but they cannot capture the spirit that lives in each thread of our flag.

From this moment, I am no longer just Aruna - I am the voice of every woman who has been silenced, every mother who has lost her son to colonial tyranny, every daughter who dreams of breathing free air.

They call this the Quit India movement, but for us women, it is more than that. It is our declaration that we will no longer be spectators in our own freedom struggle. We will lead, we will fight, and if necessary, we will die for the India we believe in.

Tell every woman you meet - the time for watching from the sidelines is over. Our revolution needs the fierce love that only a mother's heart can give to her children.

Do or Die - these are not just words, they are our covenant with destiny.

With revolutionary fervor,
Aruna`,
      context: 'Written during the Quit India Movement when Aruna Asaf Ali went underground after hoisting the Indian flag at Gowalia Tank Maidan.'
    },
    {
      id: 'rani-lakshmibai-1858',
      author: 'Rani Lakshmibai',
      date: 'March 1858',
      location: 'Jhansi',
      recipient: 'The Women of Jhansi',
      content: `My brave daughters of Jhansi,

As I write this letter, the sounds of approaching battle echo in our halls. The British seek to take what is ours by right - our beloved Jhansi, our home, our honor. But I write not with fear in my heart, but with the fire that has always burned within us.

You have seen your Rani take up sword and shield. Some may question whether it is proper for a woman to lead in battle. I say to them - when our children are threatened, does a mother ask for permission to protect them? When our home is invaded, does a daughter seek approval to defend it?

My little Damodar sleeps peacefully tonight, trusting that his mother will keep him safe. Every woman here carries someone precious in her heart. We fight not for glory, but for the simple right to live freely in the land of our ancestors.

If I fall tomorrow, let it be known that I fell as a free woman, a proud queen, and most of all, as someone who never surrendered what was rightfully ours. Let my story inspire our daughters to never bow their heads before injustice.

Jhansi ki Rani is not just a title - it is a promise that we will never yield.

Har Har Mahadev!
Your Manikarnika`,
      context: 'A letter believed to be written before the final battle for Jhansi, addressing the women of her kingdom.'
    },
    {
      id: 'sarojini-naidu-1930',
      author: 'Sarojini Naidu',
      date: 'April 1930',
      location: 'Dharasana Salt Works',
      recipient: 'Indian Women Across the Nation',
      content: `My dear sisters in the struggle,

I write to you from the salt pans of Dharasana, where we have gathered to break an unjust law that has kept the poor from accessing something as basic as salt from their own sea. As I watch our brave satyagrahis march forward, knowing they will be beaten but refusing to raise a hand in violence, I am reminded of the unique strength we women bring to this movement.

We have always been the keepers of our homes, the nurturers of our families. But today, we are called to be the nurturers of a nation's dreams. When we march, we carry not just our own hopes, but the aspirations of every Indian woman who has ever been told she cannot dream too big.

Bapu calls us the better half of the independence movement, but I believe we are not half of anything - we are whole, complete, and essential. Our non-violence is not weakness; it is the strength of those who create life and therefore value it above all else.

Every time you spin your charkha, remember you are spinning the threads of freedom. Every time you refuse to buy foreign cloth, remember you are weaving the fabric of our future. Every time you teach a child about our heritage, remember you are preserving the soul of our civilization.

The nightingale sings not because it must, but because it has a song in its heart. We fight not because we must, but because freedom is the song in our hearts.

With love and hope,
Sarojini`,
      context: 'Written during the Salt Satyagraha, capturing the spirit of women\'s participation in non-violent resistance.'
    },
    {
      id: 'matangini-hazra-1942',
      author: 'Matangini Hazra',
      date: 'September 1942',
      location: 'Tamluk, Bengal',
      recipient: 'My Fellow Villagers',
      content: `My dear children of Tamluk,

I may be an old woman of 73, but my heart beats with the passion of a young revolutionary. Tomorrow, we march to take over the police station, and some of you worry about Gandhi Buri leading such a dangerous mission. Let me tell you why this old woman must be at the front.

I have lived through famines, watched young men die for scraps of food while British officials feast. I have seen mothers unable to feed their children while our grain fills foreign ships. I have watched this for seven decades, and if I remain silent now, when will I ever speak?

You call me Gandhi Buri with affection, and I am proud of this name. But remember, even Gandhi was once told he was too small, too weak, too different to challenge the Empire. Yet he proved that the strength of an idea is greater than the strength of armies.

I ask not that you follow an old woman into danger, but that you follow the idea that this old woman represents - that freedom is not the privilege of the young and strong, but the birthright of every Indian, regardless of age, gender, or station in life.

If these old bones fall tomorrow, let them fall facing forward, toward the police station, toward freedom, toward the dawn of the new India that I may not live to see but you certainly will.

Remember Gandhi Buri not as the old woman who died, but as the idea that no one is too old to dream of freedom.

Vande Mataram!
Your Matangini`,
      context: 'Her final letter before leading the march on Tamluk police station, where she was martyred.'
    },
    {
      id: 'savitribai-phule-1850',
      author: 'Savitribai Phule',
      date: 'October 1850',
      location: 'Pune',
      recipient: 'Women of Maharashtra',
      content: `My dear sisters,

Today, as I walked to our school, they threw stones and mud at me again. But with each step I took through their hatred, I carried something more precious than gold - the dreams of our daughters who will one day read these words with educated minds and free hearts.

They ask me why a woman needs to learn letters, why she needs to think beyond the boundaries of home and hearth. I tell them: because a woman who can read will raise children who can dream. A woman who can write will author the future of our society. A woman who can think will question every injustice done in the name of tradition.

My husband Jyotirao supports our cause, but I want you to know that this is not just his vision - it is ours. When we teach our daughters to read, we are not being immodest or improper. We are being mothers to the future of our nation.

The hardest part is not the stones they throw at our bodies, but the doubt they try to plant in our minds. They tell us we are going against nature, against dharma, against the way things have always been. But I ask you - is it natural for half of humanity to live in darkness? Is it dharma to waste the intelligence that the Creator gave to all His children? Is it right to continue something simply because it has always been done?

Every girl who sits in our classroom is an act of revolution. Every woman who learns to write her name is declaring her existence to the world. Every mother who teaches her daughter that she too can dream is planting seeds of a new India.

Hold fast to your learning, dear sisters. It is your weapon against ignorance, your shield against injustice, and your gift to the generations yet to come.

With revolutionary love,
Savitribai`,
      context: 'Written during the early days of women\'s education movement in Maharashtra, reflecting the challenges faced by pioneer educators.'
    }
  ];

  const currentLetter = letters[currentLetterIndex];

  const nextLetter = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % letters.length);
  };

  const prevLetter = () => {
    setCurrentLetterIndex((prev) => (prev - 1 + letters.length) % letters.length);
  };

  const handleNarration = () => {
    if (isPlaying && currentText === currentLetter.id) {
      stop();
    } else {
      speak(currentLetter.content, currentLetter.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Letters of Resistance
          </h1>
          <p className="text-xl text-gray-600">
            Intimate glimpses into the hearts and minds of India's bravest women
          </p>
        </div>

        {/* Letter Display */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Letter Header */}
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{currentLetter.author}</h2>
                <p className="text-gray-600">{currentLetter.date} • {currentLetter.location}</p>
                <p className="text-sm text-gray-500">To: {currentLetter.recipient}</p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                <Stamp className="h-8 w-8 text-red-600" />
                <button
                  onClick={handleNarration}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
                >
                  {isPlaying && currentText === currentLetter.id ? (
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
            </div>
          </div>

          {/* Letter Content */}
          <div className="p-8">
            <div 
              className="bg-yellow-50 p-8 rounded-lg border border-yellow-200"
              style={{ fontFamily: 'cursive, serif' }}
            >
              <div className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
                {currentLetter.content}
              </div>
            </div>
          </div>

          {/* Letter Context */}
          <div className="bg-blue-50 px-6 py-4 border-t border-blue-200">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Historical Context</h3>
            <p className="text-sm text-blue-800">{currentLetter.context}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevLetter}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous Letter
          </button>

          <div className="flex space-x-2">
            {letters.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentLetterIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentLetterIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextLetter}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Next Letter
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Letter Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            Letter {currentLetterIndex + 1} of {letters.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Letters;