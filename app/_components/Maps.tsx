"use client";
import React from "react";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

// import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZGFydGhjb2RlciIsImEiOiJjbHZ4ZWtpcTUxeGk2Mmlud2NjdDlhNzZtIn0.E8le2WKpLYoYBByGVrUXpQ";

interface MapProps {
  containerId: string;
}

const Maps: React.FC<MapProps> = ({ containerId }) => {
  useEffect(() => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: containerId,
      style:
        "mapbox://styles/darthcoder/clw5af2py017q01pf6fwl1cn8",
      center: [21.842984855770126, 76.3504098261338],
      zoom: 5,
      minZoom: 3,
      maxZoom: 22,
    });

    //geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: "search for a location",
    });
    map.addControl(geocoder);

    map.addControl(
      new mapboxgl.NavigationControl(),
      "top-right"
    );

    geocoder.on("result", (e: any) => {
      map.flyTo({ center: e.result.center, zoom: 10 });
    });

    return () => map.remove();
  }, [containerId]);
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        id={containerId}
        style={{
          width: "80vw",
          height: "80vh",
          position: "relative",
        }}
      />
    </div>
  );
};

export default Maps;
