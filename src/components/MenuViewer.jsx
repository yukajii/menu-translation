import { useState, useEffect } from 'react';
import { Languages, Image as ImageIcon } from 'lucide-react';

const MenuViewer = () => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('english');
  const [menuData, setMenuData] = useState(null);
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [error, setError] = useState(null);
  
  // Get restaurant ID from URL parameter
  const restaurantId = new URLSearchParams(window.location.search).get('id') || 'default';

  useEffect(() => {
    // Use relative path for production with custom domain
    const menuUrl = `/data/${restaurantId}/menu.json`;
    
    console.log('Attempting to fetch menu from:', menuUrl);
    
    fetch(menuUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Menu data received:', data);
        setMenuData(data);
        setAvailableLanguages(Object.keys(data.translations));
      })
      .catch(error => {
        console.error('Error loading menu:', error);
        setError(`Failed to load menu: ${error.message}`);
      });
  }, [restaurantId]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!menuData) return <div className="p-4">Loading menu...</div>;

  const currentTranslation = menuData.translations[currentLanguage];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Header with restaurant name and language selector */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">{menuData.restaurant}</h1>
        
        {/* Language selector */}
        <div className="mb-4">
          <select 
            value={currentLanguage}
            onChange={(e) => setCurrentLanguage(e.target.value)}
            className="px-4 py-2 border rounded-lg mr-4"
          >
            {availableLanguages.map(lang => (
              <option key={lang} value={lang}>
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* View toggle */}
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => setShowTranslation(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              !showTranslation ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <ImageIcon size={20} />
            Original Menu
          </button>
          <button
            onClick={() => setShowTranslation(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              showTranslation ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            <Languages size={20} />
            Translated Menu
          </button>
        </div>
      </div>

      {/* Original menu view */}
      {!showTranslation && (
        <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[500px]">
          <img
            src={`/data/${restaurantId}/menu.jpg`}
            alt="Original menu"
            className="max-w-full h-auto rounded shadow-lg"
          />
        </div>
      )}

      {/* Translated menu view */}
      {showTranslation && currentTranslation && (
        <div className="space-y-8">
          {currentTranslation.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">{section.name}</h2>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">{item.nameTranslated}</h3>
                        <p className="text-sm text-gray-600 italic">{item.nameOriginal}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">{item.price}</span>
                        {item.weight && (
                          <div className="text-sm text-gray-500">{item.weight}g</div>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-sm text-gray-500 italic">{item.descriptionOriginal}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuViewer;