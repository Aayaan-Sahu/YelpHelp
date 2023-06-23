import fs from "fs";
import path from "path";
import { sync } from "glob";

const RESTAURANT_PATH = path.join(process.cwd(), "restaurant-data");

export interface RestaurantData {
    data: string;
}

export const getRestaurantSlugs = (): string[] => {
    const paths = sync(`${RESTAURANT_PATH}/*.json`);
    return paths.map((path) => {
        const parts = path.split("/");
        const fileName = parts[parts.length - 1];
        return fileName.split(".")[0];
    })
}

export const getAllRestaurants = (): RestaurantData[] => {
    const restaurantData = getRestaurantSlugs()
        .map((slug) => getRestaurantData(slug));
    return restaurantData;
}

export const getRestaurantData = (slug: string): RestaurantData => {
    // read from the json file associated with the slug and store it in the data field of the RestaurantData object
    const restaurantPath = path.join(RESTAURANT_PATH, `${slug}.json`);
    const data = fs.readFileSync(restaurantPath, "utf-8"); 
    return {
        data: data,
    };
}

export const getRestaurantDataFromSlug = (slug: string): RestaurantData => {
    const restaurantPath = path.join(RESTAURANT_PATH, `${slug}.json`);
    const data = fs.readFileSync(restaurantPath, "utf-8");
    return {
        data: data,
    };
}

export const getAllRestaurantData = (): RestaurantData[] => {
    const restaurantData = getRestaurantSlugs()
        .map((slug) => getRestaurantData(slug));
    return restaurantData;
}