import Message from "@/components/chat/Message.component";

const Chat = () => {
    return (
        <div className="row">
            <div className="col">
                <div className="bg-slate-900 rounded-lg shadow-lg p-4 mt-10">
                    <div className="flex flex-col h-full">
                        <div className="row">
                            <div className="col">
                                <span className="text-slate-400 text-lg font-medium">Chat</span>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col p-4">
                                <div className="mt-2 ">
                                    <div
                                        className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Widadomość"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1 overflow-auto h-72 relative w-full mx-auto bg-slate-900 highlight-white/5 shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col divide-y divide-slate-200/5">
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat