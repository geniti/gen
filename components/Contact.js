import React from "react";
import Header from "./Header"
function Contact() {
    return (
        <>
        <Header />
            <div>
               
                <div className="mx-auto pb-16 lg:pb-32 f-f-p container lg:mt-24 mt-12 px-4 xl:px-0">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                            <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">Name</span>
                            </label>
                            <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Your Name" />
                        </div>
                        <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                            <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">Email</span>
                            </label>
                            <input id="city" className="focus:outline-none focus:border text-gray-700 focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="example@email.com" />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 gap-8">
                        <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                            <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">Phone</span>
                            </label>
                            <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="+92-12-3456789" />
                        </div>
                        <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                            <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">Address</span>
                            </label>
                            <input id="city" className="focus:outline-none focus:border text-gray-700 focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Enter your address (optional)" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col my-8 lg:my-0 xl:my-0">
                            <label htmlFor="city" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
                                <span className="tracking-wide text-gray-900 text-2xl font-semibold leading-10">Comments</span>
                            </label>
                            <input id="city" className="focus:outline-none text-gray-700 focus:border focus:border-indigo-900 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2" placeholder="Leave your comments here..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
