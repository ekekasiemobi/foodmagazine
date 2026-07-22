import Image from "next/image";
import axios from "axios";
import { PiKnife } from "react-icons/pi";
import { PiCookingPotLight } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import { Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle, } from "@/components/ui/card";

  import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

async function Home() {

  
  const response = await axios.get(`https://dummyjson.com/recipes`, );
  const recipes = await response.data.recipes


  console.log(recipes)
 

  return (
   <>
      <div className="bg-white pt-10">
        {recipes.slice(5,6).map((recipe:any)=>{
          return(
            <div key={recipe.id}>
              <div className=" mb-20 w-[90vw] mx-auto">
                <div className="flex justify-center items-center gap-15">
                  <div className="w-full max-w-160 aspect-video overflow-hidden rounded-lg">
                    <p className="text-2xl font-bold pb-3"> {recipe.name}</p>
                    <img 
                      className="w-full h-full object-cover" 
                      src={recipe.image} 
                      alt={recipe.title || "Recipe"} 
                    />
                  </div>

                  <div className="flex flex-col gap-5 w-[35%] justify-center items-center">
                    <div className="flex gap-10 justify-center items-center">
                     
                      <div className="flex  flex-col items-center">
                        <PiKnife className="text-red-700 text-2xl"/>
                        <p className="text-center">Preparation Time:</p>
                        <h5>{recipe.prepTimeMinutes}</h5>
                      </div>

                      <div className="flex  flex-col items-center">
                        <PiCookingPotLight className="text-red-700 text-2xl"/>
                        <p className="text-center">Cooking Time:</p>
                        <h5>{recipe.cookTimeMinutes}</h5>
                      </div>
                      
                    </div>

                    <div className="flex gap-21 justify-center items-center"> 

                      <div className="flex  flex-col items-center">
                        <PiBowlFood className="text-red-700 text-2xl"/>
                        <p className="text-center">Servings:</p>
                        <h5 >{recipe.servings}</h5>
                      </div>

                      <div className="flex  flex-col items-center">
                        <IoTimerOutline className="text-red-700 text-2xl"/>
                        <p className="text-center">Defficulty:</p>
                        <h5 >{recipe.difficulty}</h5>
                      </div>
                      
                    </div>

                    <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum omnis nesciunt amet ut quidem labore at neque sed quisquam.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F2E9] p-7">
                <div className="w-[80vw] mx-auto">
                  <p className="flex items-center justify-center text-3xl font-bold pt-5">What you will need and how to make this dish</p>

                  <div className="flex justify-between gap-20 mt-15">
                    
                    <div className="w-[40%]">
                      <p className="border-b border-amber-600 font-bold">Ingredient</p>
                      <ul className="mt-5 flex flex-col gap-2">
                        {recipe.ingredients?.map((ingredient: string, index: number) => {
                          return (
                            <li key={index} className="border-b border-amber-600 pb-1">
                              {ingredient}
                            </li>
                          );
                        })}
                      </ul>
                     
                    </div>

                    <div>
                      <p className="border-b border-amber-600 font-bold">Method</p>
                      <ol className="mt-5 flex flex-col gap-2">
                        {recipe.instructions?.map((instruction: string, index: number) => {
                          return(
                             <li key={index}> <span className="text-red-700 font-bold pr-2">{index}</span>{instruction}</li>
                          )
                        })}
                        
                      </ol>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      
        <div className=" p-5">
          <div>
            <p className="flex items-center justify-center">More recipe</p>
        
            <div className="mt-10 w-[80vw] mx-auto">
              <Carousel>
                <CarouselContent>
                  {recipes.map((recipe:any) =>{
                    return(
                      <CarouselItem key={recipe.id} className="pl-4 md:basis-1/2 lg:basis-1/6">
                        <Card className="max-w-sm">
                          <img className="w-full" src={recipe.image} alt="" width={50}  height={50}/>
                          <CardHeader>
                            <CardTitle>Deficulty:<span className="pl-2">{recipe.difficulty}</span></CardTitle>
                            <CardDescription>
                              {recipe.name}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <a href="">View Recipe</a>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )
                  })}
                  

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

export default Home
