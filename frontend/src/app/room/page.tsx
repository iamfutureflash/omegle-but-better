"use client"
import { useSearchParams } from "next/navigation";

const Room = () => {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    console.log("name ", name);
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-tl from-gray-900 to-blue-900">
            <p className="text-white rounded-lg px-4 py-[2px] text-center text-2xl font-semibold ">Room page</p>
            <p className="text-white rounded-lg px-4 py-[2px] text-center text-2xl font-semibold ">name: {name}</p>
        </div>
    )
}

export default Room;