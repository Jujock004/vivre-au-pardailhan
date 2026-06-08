"use client";

import { useEffect, useState } from "react";

type Weather = {
  temperature: number;
  weathercode: number;
  windspeed: number;
};

const weatherInfo: Record<number, { label: string; icon: string }> = {
  0: { label: "Ciel dégagé", icon: "☀️" },
  1: { label: "Peu nuageux", icon: "🌤️" },
  2: { label: "Partiellement nuageux", icon: "⛅" },
  3: { label: "Couvert", icon: "☁️" },
  45: { label: "Brouillard", icon: "🌫️" },
  48: { label: "Brouillard", icon: "🌫️" },
  51: { label: "Bruine", icon: "🌦️" },
  53: { label: "Bruine", icon: "🌦️" },
  55: { label: "Bruine dense", icon: "🌧️" },
  61: { label: "Pluie légère", icon: "🌧️" },
  63: { label: "Pluie", icon: "🌧️" },
  65: { label: "Pluie forte", icon: "🌧️" },
  71: { label: "Neige légère", icon: "🌨️" },
  73: { label: "Neige", icon: "❄️" },
  75: { label: "Neige forte", icon: "❄️" },
  80: { label: "Averses", icon: "🌦️" },
  81: { label: "Averses", icon: "🌧️" },
  82: { label: "Averses fortes", icon: "⛈️" },
  95: { label: "Orage", icon: "⛈️" },
  96: { label: "Orage avec grêle", icon: "⛈️" },
  99: { label: "Orage avec grêle", icon: "⛈️" },
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=43.41&longitude=2.89&current=temperature_2m,weathercode,windspeed_10m&wind_speed_unit=kmh",
    )
      .then((r) => r.json())
      .then((data) =>
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weathercode: data.current.weathercode,
          windspeed: Math.round(data.current.windspeed_10m),
        }),
      )
      .catch(() => {});
  }, []);

  if (!weather) return null;

  const { label, icon } = weatherInfo[weather.weathercode] ?? {
    label: "Variable",
    icon: "🌡️",
  };

  return (
    <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white px-4 py-3 flex items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <div className="text-left">
        <p className="text-2xl font-serif leading-none">
          {weather.temperature}°C
        </p>
        <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">
          {label}
        </p>
        <p className="text-[10px] text-white/60">
          Vent {weather.windspeed} km/h
        </p>
      </div>
    </div>
  );
}
