import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TodoistImage from "../../public/images/todoist.png";
import DropboxImage from "../../public/images/dropbox.png";
import DarkmodeToggle from "./DarkmodeToggle";
import Greeting from "./Greeting";
import NavBar from "./NavBar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-start justify-center bg-amber-100 font-mono text-zinc-900 dark:bg-[#282828] dark:text-[#b8bb26]">
        <div className="container flex w-full flex-col items-center justify-center gap-6 px-4 py-8 ">
          <Greeting />
          <div className="flex w-full flex-row items-center justify-center gap-32 p-2 dark:bg-[#8ec07c] dark:text-[#282828] sm:gap-64 ">
            <NavBar />
            <DarkmodeToggle />
          </div>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu
            erat, laoreet eget fermentum congue, accumsan at metus. Pellentesque
            lacinia, lectus et vehicula pulvinar, lacus tellus sagittis sapien,
            at tincidunt neque nisi id leo. Etiam sit amet mi lobortis,
            facilisis leo vehicula, fermentum ante. Donec tristique purus a mi
            pretium lobortis. Nam leo lectus, sagittis eu felis a, faucibus
            ultricies est. Aliquam sed justo faucibus, lacinia risus sed,
            ullamcorper libero. Fusce quis imperdiet risus.
          </p>

          <p className="leading-relaxed">
            Nulla tempus nisi ligula, vitae condimentum augue tempus eget. Sed
            eget urna luctus, eleifend mauris ac, euismod eros. Praesent a
            auctor nunc. Nullam dui odio, tempus at ipsum porta, tincidunt
            auctor lorem. Aenean laoreet laoreet nisl, non convallis risus.
            Etiam eget diam ut nisi aliquet tempus. Ut viverra congue elementum.
            In eu maximus ipsum. Pellentesque vehicula erat non nisl pharetra,
            sed posuere ipsum iaculis.
          </p>
          <h2 className="text-4xl font-bold">Inventions</h2>
          <div className="flex flex-col gap-16 sm:flex-row">
            <div className="flex w-[256px] flex-col gap-2">
              <Image
                className="drop-shadow-lg"
                src={DropboxImage}
                width={256}
                alt="image of dropbox"
              ></Image>
              <p>
                <span className="text-lg font-bold">Dropbox</span> is a personal
                project asset storage system I created in Python. Over 2000
                stars on github and counting
              </p>
            </div>
            <div className="flex w-[256px] flex-col gap-1">
              <Image
                className="drop-shadow-lg"
                src={TodoistImage}
                width={256}
                alt="image of todoist"
              ></Image>
              <p>
                <span className="text-lg font-bold">Todoist</span> is a personal
                project management app that innovates on the way we pretend{" "}
                {`we're going to get things done.`}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
