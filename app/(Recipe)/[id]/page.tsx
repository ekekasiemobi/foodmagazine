"use client";

import { PiKnife, PiCookingPotLight, PiBowlFood } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
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

export default function RecipeDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [recipe, setRecipe] = useState<any>(null);
  const [moreRecipes, setMoreRecipes] = useState<any[]>([]); 

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));

  
    fetch(`https://dummyjson.com/recipes`)
      .then((res) => res.json())
      .then((data) => setMoreRecipes(data.recipes));
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  if (!recipe) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-bold">
        Loading recipe details...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white pt-10">
        <div>
          <div className="mb-20 w-[90vw] mx-auto">
            <div className="flex justify-center items-center gap-15">
              <div className="w-full max-w-160 aspect-video overflow-hidden rounded-lg gap-3 flex flex-col">
                <Button onClick={handleBack} className="w-fit" variant="outline" >Go Back</Button>
                <p className="text-2xl font-bold pb-3">{recipe.name}</p>
                <img className="w-full h-full object-cover"src={recipe.image}alt={recipe.name || "Recipe"}/>
              </div>

              <div className="flex flex-col gap-5 w-[35%] justify-center items-center">
                <div className="flex gap-10 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <PiKnife className="text-red-700 text-2xl" />
                    <p className="text-center">Preparation Time:</p>
                    <h5>{recipe.prepTimeMinutes} mins</h5>
                  </div>

                  <div className="flex flex-col items-center">
                    <PiCookingPotLight className="text-red-700 text-2xl" />
                    <p className="text-center">Cooking Time:</p>
                    <h5>{recipe.cookTimeMinutes} mins</h5>
                  </div>
                </div>

                <div className="flex gap-21 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <PiBowlFood className="text-red-700 text-2xl" />
                    <p className="text-center">Servings:</p>
                    <h5>{recipe.servings}</h5>
                  </div>

                  <div className="flex flex-col items-center">
                    <IoTimerOutline className="text-red-700 text-2xl" />
                    <p className="text-center">Difficulty:</p>
                    <h5>{recipe.difficulty}</h5>
                  </div>
                </div>

                <p className="text-center">
                  Cuisine: <span className="font-semibold">{recipe.cuisine}</span> | Calories:{" "}
                  <span className="font-semibold">{recipe.caloriesPerServing} kcal</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F5F2E9] p-7">
            <div className="w-[80vw] mx-auto">
              <p className="flex items-center justify-center text-3xl font-bold pt-5">
                What you will need and how to make this dish
              </p>

              <div className="flex justify-between gap-20 mt-15">
           
                <div className="w-[40%]">
                  <p className="border-b border-amber-600 font-bold">Ingredients</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {recipe.ingredients?.map((ingredient: string, index: number) => (
                      <li key={index} className="border-b border-amber-600 pb-1">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

               
                <div className="w-[50%]">
                  <p className="border-b border-amber-600 font-bold">Method</p>
                  <ol className="mt-5 flex flex-col gap-3">
                    {recipe.instructions?.map((instruction: string, index: number) => (
                      <li key={index} className="flex gap-2">
                      
                        <span className="text-red-700 font-bold">{index + 1}.</span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div>
            <p className="flex items-center justify-center text-xl font-bold">More recipes</p>

            <div className="mt-10 w-[80vw] mx-auto px-10">
              <Carousel>
                <CarouselContent>
                  {/* FIX 2: Mapping over 'moreRecipes' array instead of single 'recipe' object */}
                  {moreRecipes.map((item: any) => (
                    <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/5">
                      <Card className="max-w-sm">
                        <img className="w-full h-32 object-cover" src={item.image} alt={item.name} />
                        <CardHeader className="p-3">
                          <CardTitle className="text-sm">
                            Difficulty: <span className="font-normal">{item.difficulty}</span>
                          </CardTitle>
                          <CardDescription className="font-semibold text-gray-900 line-clamp-1">
                            {item.name}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-3 pt-0">
                          <a href={`/${item.id}`} className="text-xs text-amber-700 hover:underline">
                            View Recipe
                          </a>
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