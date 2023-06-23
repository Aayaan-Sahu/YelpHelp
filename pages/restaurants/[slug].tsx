import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import {
  getRestaurantSlugs,
  getRestaurantDataFromSlug,
  RestaurantData,
  getRestaurantNameFromSlug,
} from "../../src/restaurant-api/api";
import Nav from "../../src/components/Nav/Nav";
import { MountedContext, useMountedContext } from "../../src/MountedContext";
import { useEffect } from "react";

interface RestaurantPageProps {
  name: string;
  data: RestaurantData;
}

export default function PostPage({ data }: { data: RestaurantPageProps }) {
  const { mounted, setMounted } = useMountedContext();
  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Nav mounted={mounted} />
      <Head>
        <title>{data.name}</title>
      </Head>
      <h1 className="font-bold text-5xl text-center pb-1">{data.name}</h1>
      {Object.entries(JSON.parse(data.data.data)).map(([key, value]) => {
        return (
          <div
            style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
            key={key}
          >
            <div className="pt-8 pb-8 mt-8 mb-8 border-b border-gray-300 dark:border-gray-700">
              <h1 className="font-bold">
                {key
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h1>
              <p>
                {"Yelp rating: " +
                  JSON.parse(data.data.data)
                    [key]["average_rating"].toString()
                    .match(/^-?\d+(?:\.\d{0,2})?/)[0]}
              </p>
              <p>
                {"Our rating: " +
                  JSON.parse(data.data.data)
                    [key]["average_ai_rating"].toString()
                    .match(/^-?\d+(?:\.\d{0,2})?/)[0]}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const restaurantData = getRestaurantDataFromSlug(slug);
  const restaurantName = getRestaurantNameFromSlug(slug);
  return {
    props: {
      data: {
        data: restaurantData,
        name: restaurantName,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getRestaurantSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
