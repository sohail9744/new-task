import Buttons from "./Buttons.jsx";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

function SideBar() {
  return (
    <>
      <aside className="bg-dashB p-2 h-screen w-2/12 shadow-md">
        <main className="w-full justify-end flex">
          <HiMenu className="h-6 w-6 text-white cursor-pointer" />
        </main>
        <main className="w-full flex items-center flex-col justify-center h-screen">
          <Link className="w-full" href="/contactus">
            <Buttons button="Contact US" />
          </Link>
          <Link className="w-full" href="/charts">
            <Buttons button="Charts" />
          </Link>
        </main>
      </aside>
    </>
  );
}

export default SideBar;
