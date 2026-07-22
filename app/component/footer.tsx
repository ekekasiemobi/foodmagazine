import Image from "next/image"

function Footer() {
  return (
    <>
        <div>
            <footer className="bg-[#F5F5F5] flex justify-around items-center p-2">
                <Image src="/logo.avif" alt="" width={70} height={50}/>
                <ul className="flex flex-col gap-2">
                    <li><a className="font-bold" href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Recipe</a></li>
                    <li><a href="">Magazine</a></li>
                </ul>

                <ul className="flex flex-col gap-2">
                    <li><a className="font-bold" href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Recipe</a></li>
                    <li><a href="">Magazine</a></li>
                </ul>
            </footer>
        </div>
    </>
  )
}

export default Footer