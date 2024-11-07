import { useState, useEffect } from 'react';
import { Languages, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

import { useParams } from 'react-router-dom';

const MenuViewer = () => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Get restaurant ID from URL parameter
  const { id } = useParams();
  const restaurantId = id || 'default';

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
        const languages = Object.keys(data.translations);
        setAvailableLanguages(languages);
        // Set initial language to the first available translation
        if (languages.length > 0 && !currentLanguage) {
          setCurrentLanguage(languages[0]);
        }
      })
      .catch(error => {
        console.error('Error loading menu:', error);
        setError(`Failed to load menu: ${error.message}`);
      });
  }, [restaurantId, currentLanguage]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!menuData || !currentLanguage) return <div className="p-4">Loading menu...</div>;

  const currentTranslation = menuData.translations[currentLanguage];
  const totalPages = menuData.pages?.length || 1;
  
  // Filter sections for current page
  const currentPageSections = currentTranslation.sections.filter(
    section => !section.page || section.page === currentPage
  );

  // Page navigation handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4 w-full">
        {/* Header with restaurant name and language selector */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">{menuData.restaurant}</h1>
          
          {/* Language selector */}
          <div className="mb-4">
            <select 
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
              className="px-4 py-2 border rounded-lg mr-4 bg-white text-gray-900"
            >
              {availableLanguages.map(lang => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* View toggle */}
          <div className="flex flex-wrap gap-4 mb-2">
            <button
              onClick={() => setShowTranslation(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                !showTranslation ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              <ImageIcon size={20} />
              Original Menu
            </button>
            <button
              onClick={() => setShowTranslation(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                showTranslation ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            >
              <Languages size={20} />
              Translated Menu
            </button>
          </div>

          {/* Page navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg ${
                  currentPage === 1 ? 'text-gray-400' : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
              <span className="text-gray-900">
                Page {currentPage} of {totalPages}
                {menuData.pages?.[currentPage - 1]?.description && 
                  ` - ${menuData.pages[currentPage - 1].description}`}
              </span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg ${
                  currentPage === totalPages ? 'text-gray-400' : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Original menu view */}
        {!showTranslation && (
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-[500px] w-full">
            <img
              src={`/data/${restaurantId}/${
                menuData.pages?.[currentPage - 1]?.image || 'menu.jpg'
              }`}
              alt={`Original menu - page ${currentPage}`}
              className="max-w-full h-auto rounded shadow-lg"
            />
          </div>
        )}

        {/* Translated menu view */}
        {showTranslation && currentTranslation && (
          <div className="space-y-8 w-full">
            {currentPageSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">{section.name}</h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex-grow">
                          <h3 className="font-medium text-lg text-gray-900">{item.nameTranslated}</h3>
                          <p className="text-sm text-gray-600 italic">{item.nameOriginal}</p>
                        </div>
                        <div className="text-right">
                          <span className="font-medium text-gray-900">{item.price}</span>
                          {item.weight && (
                            <div className="text-sm text-gray-600">{item.weight}g</div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-800">{item.description}</p>
                      <p className="text-sm text-gray-600 italic">{item.descriptionOriginal}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuViewer;