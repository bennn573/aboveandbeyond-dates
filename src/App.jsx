import React, { useState, useEffect, useRef, useMemo } from 'react';
import { CITIES } from './citiesData'; // Import externalized data

// RESIDENT ADVISOR
/*
2007-2008: Added
Add 2008 Anjunabeats 100 North America tour

2010-2011: Added
Add 2011 Group Therapy North America tour

2019: Added

Songkick: Page 15-19 done
*/

// --- 2. SIDEBAR COMPONENT (NO CHANGES) ---

const Sidebar = ({ 
    yearFilter, setYearFilter, 
    typeFilter, setTypeFilter, 
    countryFilter, setCountryFilter, 
    filteredEventsCount 
}) => {
    // Collect all unique years for the dropdown filter, ensuring they are sorted historically
    const allYears = useMemo(() => {
        const years = new Set();
        CITIES.forEach(city => {
            city.events.forEach(event => {
                const year = event.date.substring(0, 4); 
                years.add(year);
            });
        });
        // Sort years numerically (smallest/oldest first)
        return ['All Years', ...Array.from(years).sort((a, b) => parseInt(a) - parseInt(b))];
    }, []);

    // Collect all unique countries for the dropdown filter
    const allCountries = useMemo(() => {
        const countries = new Set();
        CITIES.forEach(city => {
            countries.add(city.country);
        });
        // Sort countries alphabetically
        return ['All Countries', ...Array.from(countries).sort()];
    }, []);
    
    // Define all possible event types for the filter (Re-adding 'Tour')
    const EVENT_TYPES = ['All Types', 'Milestone', 'Tour', 'Acoustic', 'Other'];

    return (
        <div className="lg:w-1/4 w-full p-4 lg:p-6 bg-white rounded-xl shadow-lg border-2 border-indigo-100 lg:ml-6 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Map Filters
            </h2>
            <hr className="mb-4" />
            
            <div className="p-3 bg-indigo-50 rounded-lg shadow-inner mb-4">
                <p className="text-sm font-medium text-indigo-700">Total Events recorded</p>
                <p className="text-3xl font-extrabold text-indigo-600 mt-1">{filteredEventsCount}</p>
            </div>

            {/* Year Filter */}
            <div className="mt-6">
                <label htmlFor="year-filter" className="block text-sm font-medium text-gray-700 mb-2">Filter by Year:</label>
                <select
                    id="year-filter"
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer bg-white"
                >
                    {allYears.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            {/* Country Filter */}
            <div className="mt-4">
                <label htmlFor="country-filter" className="block text-sm font-medium text-gray-700 mb-2">Filter by Country:</label>
                <select
                    id="country-filter"
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer bg-white"
                >
                    {allCountries.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
            </div>

            {/* Event Type Filter */}
            <div className="mt-4">
                <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">Filter by Type:</label>
                <select
                    id="type-filter"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition cursor-pointer bg-white"
                >
                    {EVENT_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};


// --- 3. LEAFLET MAP COMPONENT (MODIFIED FOR FIXED SORTING) ---

const MapComponent = ({ yearFilter, typeFilter, countryFilter }) => { 
    const mapRef = useRef(null);
    const mapInstance = useRef(null); 
    const markerLayerRef = useRef(null); 
    
    const [isLeafletLoaded, setIsLeafletLoaded] = useState(false);
    
    // Constant for the Resident Advisor logo URL
    const RA_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/ResidentAdvisor_logo.png/1200px-ResidentAdvisor_logo.png';
    const FALLBACK_RA_URL = 'https://placehold.co/20x20/cccccc/000000?text=RA';
    
    // Constant for Songkick logo URL
    const SK_LOGO_URL = 'https://uptime.com/media/website_profiles/songkick.com.png';
    const FALLBACK_SK_URL = 'https://placehold.co/20x20/ef4444/ffffff?text=SK'; 

    // Constant for 1001Tracklists logo URL
    const TL_LOGO_URL = 'https://www.1001tracklists.com/images/static/favicon/apple-touch-icon-180x180.png';
    const FALLBACK_TL_URL = 'https://placehold.co/20x20/10b981/ffffff?text=1001';

    // Constants for dynamic icon sizing
    const MIN_ZOOM = 3; 
    const MAX_ZOOM = 7; 
    const BASE_SIZE = 32;

    const sortEvents = (events) => {
        const parseDate = (dateStr) => {
            const date = new Date(dateStr);
            return isNaN(date.getTime()) ? new Date(0) : date;
        };

        return [...events].sort((a, b) => {
            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);
            return dateA.getTime() - dateB.getTime();
        });
    };

    const getCustomIcon = (cityName, currentZoom) => {
        if (typeof L === 'undefined') return;

        const zoomRatio = Math.max(0, Math.min(1, (currentZoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM)));
        const scaleFactor = 0.8 + zoomRatio * 0.4; 
        const size = Math.round(BASE_SIZE * scaleFactor);
        const markerText = cityName.charAt(0);

        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${BASE_SIZE} ${BASE_SIZE}" width="${size}" height="${size}" class="marker-icon">
                <path fill="#5B48B2" d="M16 0C7.163 0 0 7.163 0 16c0 6.627 4.032 12.28 9.712 14.54l6.288 1.46L22.288 30.54C27.968 28.28 32 22.627 32 16c0-8.837-7.163-16-16-16z"/>
                <circle cx="16" cy="16" r="12" fill="#FFFFFF"/>
                <text x="16" y="20" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#5B48B2" text-anchor="middle">
                    ${markerText}
                </text>
            </svg>
        `;
        
        return new L.DivIcon({
            html: svgContent,
            className: 'transition-all duration-100 ease-out',
            iconSize: [size, size],
            iconAnchor: [size / 2, size], 
            popupAnchor: [0, -size]
        });
    };

    useEffect(() => {
        const loadScript = (url) => new Promise((resolve) => {
            if (document.querySelector(`script[src="${url}"]`)) { resolve(); return; }
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            document.head.appendChild(script);
        });

        const loadCSS = (url) => {
            if (document.querySelector(`link[href="${url}"]`)) { return; }
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            document.head.appendChild(link);
        };
        
        loadCSS('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js').then(() => {
            setIsLeafletLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (isLeafletLoaded && typeof L !== 'undefined' && mapRef.current && !mapInstance.current) {
            const mapCenter = [20, 0]; 
            const map = L.map(mapRef.current).setView(mapCenter, 3); 
            mapInstance.current = map;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            markerLayerRef.current = L.featureGroup().addTo(map);

            const handleMapUpdate = () => {
                const map = mapInstance.current;
                if (!map) return;
                
                map.invalidateSize(true);
                markerLayerRef.current.eachLayer(layer => {
                    const cityName = layer.options.title; 
                    if (cityName) { 
                        layer.setIcon(getCustomIcon(cityName, map.getZoom()));
                    }
                });
            };

            const fixMap = () => {
                map.invalidateSize(true);
                setTimeout(() => map.invalidateSize(true), 50);
            };
            
            fixMap(); 
            window.addEventListener('resize', fixMap);
            map.on('zoomend', handleMapUpdate); 

            return () => {
                if (mapInstance.current) {
                    mapInstance.current.remove();
                    mapInstance.current = null;
                }
                window.removeEventListener('resize', fixMap);
            };
        }
    }, [isLeafletLoaded]); 

    useEffect(() => {
        if (!mapInstance.current || !markerLayerRef.current) return;

        const map = mapInstance.current;
        const markerLayer = markerLayerRef.current;
        
        const openPopups = {};
        markerLayer.eachLayer(layer => {
            if (layer.isPopupOpen()) {
                openPopups[layer.options.title] = layer;
            }
        });
        
        markerLayer.clearLayers();
        const currentZoom = map.getZoom();

        CITIES.forEach(city => {
            const countryMatchCity = countryFilter === 'All Countries' || city.country === countryFilter;
            
            if (!countryMatchCity) return;
            
            const filteredEventsRaw = city.events.filter(event => {
                const year = event.date.substring(0, 4);
                const yearMatch = yearFilter === 'All Years' || year === yearFilter;
                const typeMatch = typeFilter === 'All Types' || event.type === typeFilter;
                
                return yearMatch && typeMatch; 
            });

            const filteredEvents = sortEvents(filteredEventsRaw);

            if (filteredEvents.length > 0) {
                const tableRows = filteredEvents.map(event => {
                    let sourceDisplay = '';
                    let sourceTitle = '';
                    
                    if (event.isResidentAdvisor) {
                        sourceTitle = 'Source: Resident Advisor';
                        sourceDisplay = `<div class="flex items-center justify-center p-0 m-0"> 
                                            <img src="${RA_LOGO_URL}" 
                                                 class="w-5 h-5 object-contain align-middle" 
                                                 alt="Resident Advisor Logo" 
                                                 title="${sourceTitle}"
                                                 onerror="this.onerror=null;this.src='${FALLBACK_RA_URL}';"
                                            />
                                       </div>`;
                    } else if (event.isSongkick) {
                        sourceTitle = 'Source: Songkick';
                        sourceDisplay = `<div class="flex items-center justify-center p-0 m-0"> 
                                            <img src="${SK_LOGO_URL}" 
                                                 class="w-5 h-5 object-contain align-middle" 
                                                 alt="Songkick Logo" 
                                                 title="${sourceTitle}"
                                                 onerror="this.onerror=null;this.src='${FALLBACK_SK_URL}';"
                                            />
                                       </div>`;
                    } else if (event.is1001Tracklists) {
                        sourceTitle = 'Source: 1001Tracklists';
                        sourceDisplay = `<div class="flex items-center justify-center p-0 m-0"> 
                                            <img src="${TL_LOGO_URL}" 
                                                 class="w-5 h-5 object-contain align-middle rounded-full" 
                                                 alt="1001Tracklists Logo" 
                                                 title="${sourceTitle}"
                                                 onerror="this.onerror=null;this.src='${FALLBACK_TL_URL}';"
                                            />
                                       </div>`;
                    }
                    
                    return `
                        <tr class="border-b border-gray-100 last:border-b-0 transition">
                            <td class="px-3 py-1 text-xs text-gray-700 font-mono sm:w-[23%]">${event.date}</td>
                            <td class="px-3 py-1 text-xs text-gray-700 sm:w-[67%]">${event.venue}</td>
                            <td class="px-3 py-1 text-xs text-gray-700 hidden sm:table-cell sm:w-[10%] text-center align-middle h-full">${sourceDisplay}</td>
                        </tr>
                    `;
                }).join('');

                const popupContent = `
                    <div class="p-4 font-inter w-full">
                        <h3 class="text-xl font-bold text-indigo-700 mb-3">${city.name}, ${city.country}</h3>
                        
                        <blockquote class="text-xs italic text-gray-500 border-l-4 border-indigo-400 pl-3 py-1 mb-4 bg-indigo-50 rounded-r-lg min-w-xl">
                            ${city.fact}
                        </blockquote>

                        <div class="max-h-60 overflow-y-auto border border-gray-200 rounded-lg shadow-inner">
                            <table class="w-full text-left table-fixed">
                                <thead class="bg-gray-100 sticky top-0">
                                    <tr>
                                        <th scope="col" 
                                            class="px-3 py-1 text-xs font-bold text-gray-600 sm:w-[23%] select-none"
                                            title="Sorted by Year (Lowest First)">
                                            Date
                                        </th>
                                        <th class="px-3 py-1 text-xs font-bold text-gray-600 sm:w-[67%]">Venue</th>
                                        <th class="px-3 py-1 text-xs font-bold text-gray-600 hidden sm:table-cell sm:w-[10%] text-center"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${tableRows}
                                </tbody>
                            </table>
                        </div>
                        <p class="text-[10px] text-gray-400 mt-2">Icons indicate event sources (Resident Advisor, Songkick, 1001Tracklists).</p>
                    </div>
                `;

                const icon = getCustomIcon(city.name, currentZoom);
                const marker = L.marker(city.position, { icon: icon, title: city.name });
                marker.bindPopup(popupContent, { minWidth: 540, maxWidth: 600 });
                
                markerLayer.addLayer(marker);

                if (openPopups[city.name]) {
                    markerLayer.eachLayer(newMarker => {
                        if (newMarker.options.title === city.name) {
                            newMarker.setPopupContent(popupContent);
                        }
                    });
                }
            }
        });
        
    }, [isLeafletLoaded, yearFilter, typeFilter, countryFilter]); 

    return (
        <div 
            ref={mapRef} 
            id="map" 
            className="h-[60vh] w-full rounded-xl"
        >
            {!isLeafletLoaded && (
                <div className="flex items-center justify-center h-full bg-gray-100 rounded-xl">
                    <p className="text-gray-500 font-semibold text-lg">Loading map data...</p>
                </div>
            )}
        </div>
    );
};

// --- 4. MAIN APP COMPONENT (NO CHANGES) ---

export default function App() {
    const [yearFilter, setYearFilter] = useState('All Years'); 
    const [typeFilter, setTypeFilter] = useState('All Types'); 
    const [countryFilter, setCountryFilter] = useState('All Countries'); 

    // inside App()
    const topCities = useMemo(() => {
    const counts = CITIES.map(city => {
        const matchingEvents = city.events.filter(event => {
        const year = event.date ? event.date.substring(0, 4) : '';
        const yearMatch = yearFilter === 'All Years' || year === yearFilter;
        const typeMatch = typeFilter === 'All Types' || event.type === typeFilter;

        // ✅ Moved into event filtering
        const countryMatch = countryFilter === 'All Countries' || city.country === countryFilter;

        return yearMatch && typeMatch && countryMatch;
        });

        return {
        id: city.id,
        name: city.name,
        country: city.country,
        count: matchingEvents.length
        };
    });

    return counts
        .filter(c => c.count > 0) // ✅ Now truly removes non-matching cities
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
    }, [yearFilter, typeFilter, countryFilter]);

    // Calculate the total count of events based on current filters
    const filteredEventsCount = useMemo(() => {
        return CITIES.reduce((total, city) => {
            // 1. Check country match
            const countryMatch = countryFilter === 'All Countries' || city.country === countryFilter;
            
            if (!countryMatch) {
                return total;
            }

            // 2. Filter events by year and type
            const matchingEvents = city.events.filter(event => {
                const year = event.date.substring(0, 4);
                const yearMatch = yearFilter === 'All Years' || year === yearFilter;
                const typeMatch = typeFilter === 'All Types' || event.type === typeFilter;
                
                return yearMatch && typeMatch;
            });
            return total + matchingEvents.length;
        }, 0);
    }, [yearFilter, typeFilter, countryFilter]);

    useEffect(() => {
    console.log('Filters ->', { yearFilter, typeFilter, countryFilter });
    console.log('TopCities ->', topCities);
    }, [yearFilter, typeFilter, countryFilter, topCities]);
    
    return (
        <>
            <style>
                {`
                    /* Global Styles */
                    body { 
                        font-family: 'Inter', sans-serif; 
                        background-color: #f3f4f6;
                        padding: 1.5rem; 
                        min-height: 100vh; 
                    }
                    
                    /* Leaflet Popup Styling - Ensures proper appearance */
                    .leaflet-popup-content-wrapper {
                        border-radius: 0.75rem;
                        padding: 0;
                        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
                    }
                    .leaflet-popup-content {
                        margin: 0;
                    }
                    /* Custom icon styling to ensure SVG is rendered correctly */
                    .leaflet-marker-icon svg {
                        display: block;
                        transition: all 0.1s ease-out; 
                    }
                    /* Ensure table header sticks within the popup */
                    .max-h-60 table thead {
                        background-color: #f3f4f6;
                    }
                    
                    /* CRITICAL FIX: Enforce absolute height of 30px for all table cells in the popup. */
                    .leaflet-popup table th, 
                    .leaflet-popup table td {
                        height: 30px !important;
                        min-height: 30px !important;
                        vertical-align: middle !important;
                        line-height: 1.25rem; 
                        box-sizing: border-box; 
                    }
                `}
            </style>
            
            <div className="flex flex-col items-center">
                <header className="w-full max-w-5xl text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        Above & Beyond Worldwide Event History Map
                    </h1>
                    <p className="text-lg text-indigo-600">
                        Explore their global tour history, featuring major events from **2004** to **2026**.
                    </p>
                </header>

                {/* Main Content: Map and Sidebar */}
                <div className="w-full max-w-5xl flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-xl bg-white p-4">
                    
                    {/* Map Container (takes 3/4 width on desktop) */}
                    <div className="lg:w-3/4 w-full border-4 border-indigo-200 rounded-xl overflow-hidden">
                        <MapComponent 
                            yearFilter={yearFilter} 
                            typeFilter={typeFilter}
                            countryFilter={countryFilter}
                        />
                    </div>

                    {/* Sidebar (takes 1/4 width on desktop) */}
                    <Sidebar 
                        yearFilter={yearFilter}
                        setYearFilter={setYearFilter}
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}
                        countryFilter={countryFilter}
                        setCountryFilter={setCountryFilter}
                        filteredEventsCount={filteredEventsCount}
                    />
                </div>

                <div className="w-full max-w-5xl bg-white mt-8 p-6 rounded-xl shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Event Cities</h2>
                    <p className="text-sm text-gray-500 mb-4">Cities with the most documented events</p>

                    <table className="w-full table-fixed border-collapse rounded-lg overflow-hidden">
                        <thead className="bg-indigo-100 text-indigo-800 text-sm">
                            <tr>
                                <th className="px-3 py-2 text-left w-1/2">City</th>
                                <th className="px-3 py-2 text-left w-1/3">Country</th>
                                <th className="px-3 py-2 text-right w-1/6">Events</th>
                            </tr>
                        </thead>
                        <tbody>
                        {topCities.length === 0 ? (
                            <tr>
                            <td colSpan="3" className="p-6 text-center text-gray-400">
                                No cities match the current filters.
                            </td>
                            </tr>
                        ) : (
                            topCities.map((city, idx) => (
                            <tr key={city.id} className="border-b last:border-b-0 hover:bg-indigo-50">
                                <td className="px-3 py-2">{city.name}</td>
                                <td className="px-3 py-2">{city.country}</td>
                                <td className="px-3 py-2 text-right font-semibold text-indigo-600">{city.count}</td>
                            </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                <footer className="mt-8 text-sm text-gray-500">
                    <p>Map implementation uses Leaflet, OpenStreetMap, and custom SVG markers. Data is simulated based on known tour history.</p>
                </footer>
            </div>
        </>
    );
}
