import Carousel from "@/components/Slick";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-[#fff7f0]">
      <div className="max-w-6xl mx-auto">
        <nav className="flex justify-between items-center mx-5 pt-3 mb-10">
          <Image
            src="/assets/images/icon-large.png"
            alt="logo"
            width={65}
            height={100}
          />
          <button className=" bg-[#000] hover:bg-[#785ede] px-10 py-4 my-6 text-white font-semibold rounded-full">
            Free Consultation
          </button>
        </nav>
        <header className="mx-5">
          <h1 className="font-bold  text-center  mb-5">
            Design solutions made easy
          </h1>
          <p className="text-center m-auto mb-20 text-gray-500">
            With over ten years of experience in various design disciplines,I’m
            your one-stop shop for your design needs.
          </p>
          <div className="grid gap-6  ">
            <div className="col-span-2 md:col-end-2  md:row-span-2   rounded-lg bg-[#785ede] p-6 flex  flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-graphic-design.svg"
                alt="header image2"
                width={120}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">
                Graphic Design
              </h2>
            </div>
            <div className="col-span-1  md:col-start-2  rounded-lg bg-[#f6a660]  p-6 flex flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-ui-ux.svg"
                alt="header image6"
                width={70}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">UI/UX</h2>
            </div>
            <div className="col-span-1  md:col-start-3  rounded-lg bg-[#f49f9f]  p-6 flex flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-apps.svg"
                alt="header image1"
                width={70}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">Apps</h2>
            </div>
            <div className="col-span-2 md:row-span-1 lg:col-start-4 rounded-lg bg-[#5fc4b6] w-full p-6 flex flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-photography.svg"
                alt="header image5"
                width={160}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">Photography</h2>
            </div>
            <div className="col-span-2 md:col-span-2 lg:col-start-2 rounded-lg bg-[#eb7566] w-full p-7 flex flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-illustrations.svg"
                alt="header image3"
                width={140}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">
                Illustrations
              </h2>
            </div>
            <div className="col-span-2  md:col-span-2 lg:col-start-4 rounded-lg bg-[#562049] w-full p-7 flex flex-col justify-between">
              <Image
                className=" self-end"
                src="/assets/svg/pattern-motion-graphics.svg"
                alt="header image4"
                width={130}
                height={100}
              />
              <h2 className="text-white font-semibold text-2xl">
                Motion Graphics
              </h2>
            </div>
          </div>
        </header>
        <article className=" flex flex-col md:flex-row  items-center gap-[4rem] md:gap-[6rem] my-20 mx-5 flow">
          <Image
            className="basis-1/2"
            src="/assets/images/image-amy.webp"
            width={450}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 53vw"
            alt="image amy"
          />
          <div className="text-center md:text-start basis-1/2">
            <h1 className="font-bold text-3xl mb-5">
              I’m Amy, and I’d love to work on your next project
            </h1>
            <p className="text-gray-600 text-lg  text-balance">
              I love working with others to create beautiful design solutions.
              I’ve designed everything from brand illustrations to complete
              mobile apps. I’m also handy with a camera!
            </p>
            <button className=" bg-[#eb7566] hover:bg-[#f6a660] px-10 py-4 my-6 text-white font-semibold rounded-full">
              Free Consultation
            </button>
          </div>
        </article>
      </div>
      <div className="max-w-[90rem] mx-auto ">
        <Carousel />
      </div>

      <div className="max-w-6xl mx-auto">
        <article className="flex flex-col text-center items-center md:flex-row md:text-left md:justify-between gap-5 bg-black px-10 md:px-20 py-20 mx-5 rounded-xl ">
          <div>
            <h2 className="text-white font-bold text-h2">
              Book a call with me
            </h2>
            <p className="text-white text-p ">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>

          <button className=" bg-[#eb7566] hover:bg-[#f6a660] w-max px-10 py-4  text-white font-semibold rounded-full">
            Free Consultation
          </button>
        </article>
      </div>

      <footer className="max-w-6xl m-auto">
        <nav className="flex justify-between items-center mx-5 pt-3 pb-10">
          <Image
            src="/assets/images/icon-large.png"
            alt="logo"
            width={65}
            height={100}
          />
          <button className=" bg-[#000] hover:bg-[#785ede] px-10 py-4 my-6 text-white font-semibold rounded-full">
            Free Consultation
          </button>
        </nav>
      </footer>
    </main>
  );
}
