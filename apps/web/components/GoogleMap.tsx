import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

function GoogleMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [center, setCenter] = useState<google.maps.LatLngLiteral | null>(null);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      });
    }
  };

  const initializeMap = () => {
    if (window.google && window.google.maps && mapContainerRef.current) {
      mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 10,
      });
    }
  };

  useEffect(() => {
    let isScriptLoaded = false;

    const loadGoogleMapsScript = () => {
      if (isScriptLoaded) return;
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC3gVR4zU2XhACLvvUgXVFUpPaite6y_PQ&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      googleMapScript.addEventListener("load", () => {
        isScriptLoaded = true;
        initializeMap();
      });

      document.body.appendChild(googleMapScript);
    };

    loadGoogleMapsScript();

    return () => {
      if (mapRef.current) {
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (center) {
      mapRef.current?.setCenter(center);
    }
  }, [center]);

  useEffect(() => {
    getGeolocation();
  }, []);

  return <div ref={mapContainerRef} style={{ height: "400px" }} />;
}

export default GoogleMap;
