"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name: string = searchParams.get('name')?.toString() ?? "";
  const setName = (name: string) => {
    push(`/${pathname}?name=${name}`, { scroll: false });
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-gray-900 to-blue-900">
      <div className="">
        <p className="text-white rounded-lg px-4 py-[2px] text-2xl font-semibold ">Landing page</p>
        <div className="flex flex-row justify-between items-end gap-4 my-4 ">
          <div className="">
            <p className="text-white text-xs capitalize mb-1">name</p>
            <input
              // value={name}
              placeholder="enter name"
              type="text"
              onChange={(e) => { setName(e.target.value) }}
              className="border-2 border-solid border-slate-200 hover:border-slate-300 focus:border-slate-500 active:border-slate-300 rounded-lg px-4 focus:outline-none"
            />
          </div>
          <div className="mb-1">
            <Link
              href={`/room?name=${name}`}
              className="bg-blue-400 capitalize text-white px-4 py-1 rounded-lg">
              join
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
