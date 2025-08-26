import { action } from "./_generated/server";
import { CurrentWeatherResponse } from "../lib/types/WeatherResponse";
import { ConvexError, v } from "convex/values";

export const getCurrentWeather = action({
  args: { placeName: v.string() },
  async handler(ctx, { placeName }) {
    if (!placeName) return;

    const cityName = placeName?.split(/[,-]/)[0].trim();
    if (!cityName || cityName.length <= 0)
      throw new ConvexError(
        "Not able to construct cistyname for weather, name:" + cityName
      );

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${"0cdea592a5c5a677995c3faa12a987fd"}&units=metric`;
    const response = await fetch(url, { method: "GET", cache: "no-cache" });
    const data = (await response.json()) as CurrentWeatherResponse;

    return data;
  },
});
