// @ts-ignore
import ThreadComponent from "@/components/forum/Thread.component";
import {HomeIcon} from '@heroicons/react/24/outline'
import { Button } from "../ui/button";

const ForumContainer = () => {
    return (
        <div className="lg:flex lg:flex-row flex flex-col w-full h-full mt-32">
            <div className="w-8/12 order-2 sm:order-1">
                <div className="border border-red-500 mt-10 mr-3.5">
                    <ThreadComponent/>
                </div>
            </div>
            <div className="sm:w-4/12 w-full order-1 sm:order-1">
                <Button>Utwórz nowy wątek</Button>
                <div className="flex-col bg-slate-900 rounded-lg shadow-lg p-5 mt-10 text-slate-200 w-full">
                    <span className="flex text-2xl">Kategorie</span>
                    <div className="flex-col w-full text-center">
                        <button className="bg-slate-800 rounded-lg shadow-lg p-5 mt-5 text-slate-200 w-full hover:bg-blue-700">
                            <div className="grid grid-cols-2 gap-2 text-left">
                                <div className="flex mx-auto">
                                    <div className="flex">
                                        <HomeIcon className="h-8 mr-5"/>
                                        <span className="text-xl">Ogólne</span>
                                    </div>
                                </div>
                                <div className="">
                                    (0)
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForumContainer