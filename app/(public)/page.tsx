import Image from "next/image";
import axios from "axios";
import { PiKnife, PiCookingPotLight, PiBowlFood } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

async function Home() {
  const response = await axios.get(`https://dummyjson.com/recipes`);
  const recipes = await response.data.recipes;

  return (
    <>
      <div className="bg-white pt-6 md:pt-10">
        {recipes.slice(5, 6).map((recipe: any) => {
          return (
            <div key={recipe.id}>
              {/* Hero Section */}
              <div className="mb-12 md:mb-20 w-[92vw] max-w-7xl mx-auto px-2">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
                  
                  {/* Recipe Image & Title */}
                  <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold pb-3 text-gray-900">
                      {recipe.name}
                    </h1>
                    <div className="w-full aspect-video overflow-hidden rounded-lg shadow-sm">
                      <img
                        className="w-full h-full object-cover"
                        src={recipe.image}
                        alt={recipe.name || "Recipe"}
                      />
                    </div>
                  </div>

                  {/* Recipe Quick Info */}
                  <div className="flex flex-col gap-6 w-full lg:w-1/2 justify-center items-center">
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-lg">
                      <div className="flex flex-col items-center text-center">
                        <PiKnife className="text-red-700 text-2xl mb-1" />
                        <p className="text-xs sm:text-sm text-gray-600">Prep Time</p>
                        <h5 className="font-bold text-sm sm:text-base">{recipe.prepTimeMinutes} mins</h5>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <PiCookingPotLight className="text-red-700 text-2xl mb-1" />
                        <p className="text-xs sm:text-sm text-gray-600">Cook Time</p>
                        <h5 className="font-bold text-sm sm:text-base">{recipe.cookTimeMinutes} mins</h5>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <PiBowlFood className="text-red-700 text-2xl mb-1" />
                        <p className="text-xs sm:text-sm text-gray-600">Servings</p>
                        <h5 className="font-bold text-sm sm:text-base">{recipe.servings}</h5>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <IoTimerOutline className="text-red-700 text-2xl mb-1" />
                        <p className="text-xs sm:text-sm text-gray-600">Difficulty</p>
                        <h5 className="font-bold text-sm sm:text-base">{recipe.difficulty}</h5>
                      </div>
                    </div>

                    <p className="text-center text-sm sm:text-base text-gray-700">
                      Cuisine: <span className="font-semibold">{recipe.cuisine}</span> | Calories:{" "}
                      <span className="font-semibold">{recipe.caloriesPerServing} kcal</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Ingredients & Method Section */}
              <div className="bg-[#F5F2E9] py-10 px-4 sm:px-8">
                <div className="w-[92vw] max-w-6xl mx-auto">
                  <h2 className="text-center text-2xl sm:text-3xl font-bold pt-2">
                    What you will need and how to make this dish
                  </h2>

                  <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 mt-10">
                    
                    {/* Ingredients Column */}
                    <div className="w-full md:w-1/2">
                      <p className="border-b border-amber-600 font-bold text-lg pb-1">Ingredients</p>
                      <ul className="mt-4 flex flex-col gap-2">
                        {recipe.ingredients?.map((ingredient: string, index: number) => (
                          <li key={index} className="border-b border-amber-600/40 pb-1.5 text-sm sm:text-base">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Method Column */}
                    <div className="w-full md:w-1/2">
                      <p className="border-b border-amber-600 font-bold text-lg pb-1">Method</p>
                      <ol className="mt-4 flex flex-col gap-3">
                        {recipe.instructions?.map((instruction: string, index: number) => (
                          <li key={index} className="flex items-start text-sm sm:text-base leading-relaxed">
                            <span className="text-red-700 font-bold pr-3 text-base">{index + 1}.</span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* More Recipes Carousel */}
        <div className="py-12 px-4">
          <div className="w-[90vw] max-w-6xl mx-auto">
            <h3 className="text-center text-xl sm:text-2xl font-bold mb-8">More Recipes</h3>

            <div className="relative px-8 sm:px-12">
              <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                  {recipes.map((recipe: any) => (
                    <CarouselItem
                      key={recipe.id}
                      className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <Card className="h-full flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                          className="w-full h-36 object-cover"
                          src={recipe.image}
                          alt={recipe.name}
                        />
                        <CardHeader className="p-4">
                          <CardTitle className="text-xs text-gray-500 uppercase tracking-wider">
                            Difficulty: <span className="font-semibold text-gray-800">{recipe.difficulty}</span>
                          </CardTitle>
                          <CardDescription className="font-bold text-sm text-gray-900 line-clamp-1 mt-1">
                            {recipe.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Link
                            href={`/${recipe.id}`}
                            className="inline-block text-xs font-semibold text-red-700 hover:underline"
                          >
                            View Recipe →
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;