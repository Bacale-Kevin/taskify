"use client";

import Image from "next/image";
import { MagnifyingGlassCircleIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";

const Header = () => {
  const [searchString, setSearchString] = useBoardStore((state) => [state.searchString, state.setSearchString]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        {/* Gradient */}
        <div
          className="
            absolute 
            top-0 
            left-0 
            w-full 
            h-96 
            bg-gradient-to-br 
            from-purple-400
            to-[#0055D1]
            rounded-md
            filter
            blur-3xl
            opacity-50
            -z-50
            "
        />

        {/* <Image
          src="https://pbs.twimg.com/profile_images/1088311120295645184/6sGzOYtb_400x400.jpg"
          alt="Taskify Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb:10 md:pb-0 object-contain"
        /> */}
        <h3 className="font-bold text-3xl">
          Taskify<span className="font-bold text-teal-500 text-4xl">.</span>
        </h3>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Kevin Bacale" round size="50" color="#0055D1" />
        </div>
      </div>

      {/* Suggestions */}
      <div className="flex items-center justify-center py-2 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] p-5">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarising your taks for the day...
        </p>
      </div>
    </header>
  );
};

export default Header;
