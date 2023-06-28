import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
  }
}

function GoogleMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    let isScriptLoaded = false;

    const loadGoogleMapsScript = () => {
      if (isScriptLoaded) return;

      const initializeMap = () => {
        if (window.google && window.google.maps) {
          mapRef.current = new window.google.maps.Map(
            mapContainerRef.current as HTMLDivElement,
            {
              center: { lat: 0, lng: 0 },
              zoom: 10,
            }
          );
        }
      };

      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.addEventListener("load", initializeMap);
      googleMapScript.addEventListener("error", () => {
        console.error("Error loading Google Maps API script.");
      });
      document.body.appendChild(googleMapScript);
      isScriptLoaded = true;
    };

    loadGoogleMapsScript();

    return () => {
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapContainerRef} className="h-450px w-full md:w-2/3 max-w-66vw mx-auto" />
  );
}

export default GoogleMap;
