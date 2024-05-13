"use client";

import React from "react";
import { useState, useEffect } from "react";
import mapboxgl, { accessToken } from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZGFydGhjb2RlciIsImEiOiJjbHZ4ZWtpcTUxeGk2Mmlud2NjdDlhNzZtIn0.E8le2WKpLYoYBByGVrUXpQ";

interface MapProps {
  containerId: string;
}

const Maps: React.FC<MapProps> = ({ containerId }) => {
  const [placingMarker, setPlacingMarker] =
    useState<boolean>(false);

  const [originMarker, setOriginMarker] =
    useState<mapboxgl.Marker | null>(null);
  const [destinationMarker, setDestinationMarker] =
    useState<mapboxgl.Marker | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: containerId,
      style: "mapbox://styles/mapbox/streets-v11",
      //center: [0, 0],
      zoom: 9,
    });

    //geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
    map.addControl(geocoder);

    geocoder.on("result", (e: any) => {
      map.flyTo({ center: e.result.center });
    });

    map.on("click", (e: any) => {
      if (placingMarker) {
        console.log("toggleon");
        if (!originMarker) {
          const marker = new mapboxgl.Marker({
            color: "green",
          })
            .setLngLat(e.lngLat)
            .addTo(map);
          setOriginMarker(marker);
        } else if (!destinationMarker) {
          const marker = new mapboxgl.Marker({
            color: "red",
          })
            .setLngLat(e.lngLat)
            .addTo(map);
          setDestinationMarker(marker);
        } else {
          originMarker.remove();
          destinationMarker.remove();
          setOriginMarker(null);
          setDestinationMarker(null);
        }
      }
    });

    return () => map.remove();
  }, [containerId, originMarker, destinationMarker]);
  return (
    <div className="">
      <div
        id={containerId}
        className="h-2/3 w-2/3 absolute right-4 left-4 mt-14"
      ></div>

      <button
        className="bg-blue-700 text-white rounded-md p-3 "
        onClick={() => setPlacingMarker(!placingMarker)}
      >
        Toggle marker
      </button>
    </div>
  );
};

export default Maps;
