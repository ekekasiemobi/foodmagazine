import Image from "next/image"

function Nav() {
  return (
    <>
        <div>
            <nav className="bg-[#F5F5F5] flex justify-around items-center p-2">
                <Image src="/logo.avif" alt="" width={70} height={50}/>
                <ul className="flex gap-5">
                    <li><a className="font-bold" href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="/recipe">Recipe</a></li>
                    <li><a href="">Magazine</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Nav