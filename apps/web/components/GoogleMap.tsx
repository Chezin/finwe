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
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC3gVR4zU2XhACLvvUgXVFUpPaite6y_PQ&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.addEventListener("load", initializeMap);
      googleMapScript.addEventListener("error", () => {
        // eslint-disable-next-line no-console
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

  return <div ref={mapContainerRef} style={{ height: "400px" }} />;
}

export default GoogleMap;
