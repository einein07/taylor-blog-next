import Image from "next/image";
import TodoistImage from "../../public/images/todoist.png";
import DropboxImage from "../../public/images/dropbox.png";

export default function Inventions() {
  return (
    <>
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
            project asset storage system I created in Python. Over 2000 stars on
            github and counting
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
    </>
  );
}
