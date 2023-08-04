import { useEffect } from "react";
import Nav from "../src/components/Nav/Nav";
import { MountedContext, useMountedContext } from "../src/MountedContext";
import Head from "next/head";

export default function Links() {
  const { mounted, setMounted } = useMountedContext();

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Nav mounted={mounted} />
      <Head>
        <title>Yelp Help Links</title>
      </Head>
      <h1 className="font-bold text-5xl text-center pt-5 pb-1">YELP HELP</h1>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        <strong>Your personal dining assistant</strong>
      </p>

      <div
        style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="pt-8 pb-8 mt-8 mb-8">
            Yelp Help is an advanced, AI-powered tool designed to simplify and revolutionize your dining decision-making process. This innovative platform intricately merges Yelp reviews with restaurant menus, creating a unique item-by-item rating system tailored to your individual culinary needs. 
<br/>
<br/>
At the heart of Yelp Help is an intelligent algorithm that employs web scraping techniques. It efficiently compiles and analyzes vast amounts of data from both user reviews and restaurant menus. This comprehensive analysis forms the basis of our dynamic rating system that improves your dining decision-making process, eliminating the guesswork and replacing it with insightful, actionable data.
<br/>
<br/>
One of the key features that sets Yelp Help apart is the Sentiment Intensity Analyzer. It meticulously evaluates the tone of reviews, discerning positive experiences from the negative, and adding this critical layer of detail to the overall rating of each menu item. This integration provides you with a deeper understanding of each dish beyond just the numerical score, helping you make the most informed decision possible.
<br/>
<br/>
Yelp Help also integrates an AI-based scoring system that harmoniously combines the sentiment score and average Yelp rating. The result is a clear, easy-to-understand percentage score that offers an enhanced, comparative approach to understanding a menu item's reputation among previous diners.
<br/>
<br/>
But Yelp Help's commitment to accuracy doesn't stop there. The platform utilizes the 'FuzzyWuzzy' Python library to ensure precise matching of user reviews with corresponding menu items. This means that each rating you see is not just a numerical value but a consolidated experience of multiple diners who have savored the exact dish you're considering.
<br/>
<br/>
Yelp Help is more than just a tool; it's your personal dining advisor. It's designed to provide clarity, reduce uncertainty, and personalize your food ordering process. This intelligent restaurant review aggregator transforms dining from a mere guessing game into a well-informed, enjoyable decision. Dive into the future of dining decisions with Yelp Help, where data-driven insights meet culinary delight.

        </div>

      </div>
    </>
  );
}
