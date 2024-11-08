import { useState, useEffect } from 'react';
import { Languages, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';

const MenuViewer = () => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [availableLanguages, setAvailableLanguages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { id } = useParams();
  const restaurantId = id || 'default';

  useEffect(() => {
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
        if (languages.length > 0 && !currentLanguage) {
          setCurrentLanguage(languages[0]);
        }
      })
      .catch(error => {
        console.error('Error loading menu:', error);
        setError(`Failed to load menu: ${error.message}`);
      });
  }, [restaurantId, currentLanguage]);

  if (error) {
    return (
      <div className="min-h-screen w-screen overflow-x-hidden bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-4 text-red-600 shadow-sm">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!menuData || !currentLanguage) {
    return (
      <div className="min-h-screen w-screen overflow-x-hidden bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            Loading menu...
          </div>
        </div>
      </div>
    );
  }

  const currentTranslation = menuData.translations[currentLanguage];
  const totalPages = menuData.pages?.length || 1;
  
  const currentPageSections = currentTranslation.sections.filter(
    section => !section.page || section.page === currentPage
  );

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
    <div className="min-h-screen w-screen overflow-x-hidden bg-white">
      <div className="container mx-auto p-4 sm:py-8">
        {/* Header with restaurant name and controls */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">{menuData.restaurant}</h1>
          
          <div className="space-y-4">
            {/* Language selector */}
            <div className="flex items-center gap-3">
              <label className="font-medium text-gray-700 text-sm sm:text-base">Select Language:</label>
              <select 
                value={currentLanguage}
                onChange={(e) => setCurrentLanguage(e.target.value)}
                className="flex-1 sm:flex-none px-3 py-1.5 sm:px-4 sm:py-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              >
                {availableLanguages.map(lang => (
                  <option key={lang} value={lang}>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* View toggle */}
            <div className="flex gap-2 sm:gap-4">
              <button
                onClick={() => setShowTranslation(false)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                  !showTranslation ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Menu size={18} className="flex-shrink-0" />
                Original Menu
              </button>
              <button
                onClick={() => setShowTranslation(true)}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors ${
                  showTranslation ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <Languages size={18} className="flex-shrink-0" />
                Translated Menu
              </button>
            </div>

            {/* Page navigation */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100 mt-4">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className={`p-1.5 rounded-lg transition-colors ${
                    currentPage === 1 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-gray-900 font-medium text-sm sm:text-base">
                  Page {currentPage} of {totalPages}
                  {menuData.pages?.[currentPage - 1]?.description && 
                    ` - ${menuData.pages[currentPage - 1].description}`}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-1.5 rounded-lg transition-colors ${
                    currentPage === totalPages 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Menu content remains the same */}
        <div className="max-w-3xl mx-auto">
          {/* Original menu view */}
          {!showTranslation && (
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center">
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
            <div className="space-y-6">
              {currentPageSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-6 text-gray-900">{section.name}</h2>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                          <div className="flex-grow min-w-[200px]">
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
                        {(item.description || item.descriptionOriginal) && (
                          <div className="mt-2">
                            {item.description && (
                              <p className="text-gray-800">{item.description}</p>
                            )}
                            {item.descriptionOriginal && (
                              <p className="text-sm text-gray-600 italic mt-1">{item.descriptionOriginal}</p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
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

export default MenuViewer;