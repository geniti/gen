import React from 'react'

function Stories() {
    return (
        <div>
            <ul className="flex space-x-6">
                <li className="flex flex-col items-center space-y-1">
                    <div className="relative bg-gradient-to-tr from-yellow-400 to-gray-800 p-1 rounded-full transform transition hover:-rotate-6">
                    <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
                        <img className="h-8 w-8 rounded-full" src="React-icon.svg" />
                    </a>
                    <button className="absolute bottom-0 right-1 bg-blue-500 h-4 w-4 rounded-full text-white text-2xl font-semibold border-4 border-white flex jusitfy-center items-center font-mono hover:bg-blue-700"></button>
                </div>
                    
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-gray-800 p-1 rounded-full transform transition hover:-rotate-6">
                    <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
                        <img className="h-8 w-8 rounded-full" src="geniti.png" />
                    </a>
                </div>
                    
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-gray-800 p-1 rounded-full transform transition hover:-rotate-6">
                    <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
                        <img className="h-8 w-8 rounded-full" src="geniti.png" />
                    </a>
                </div>
                    
                </li>
                <li className="flex flex-col items-center space-y-1">
                    <div className="bg-gradient-to-tr from-yellow-400 to-gray-800 p-1 rounded-full transform transition hover:-rotate-6">
                    <a className="block bg-white p-1 rounded-full transform transition hover:-rotate-6" href="#">
                        <img className="h-8 w-8 rounded-full" src="geniti.png" />
                    </a>
                </div>
                    
                </li>
                
            </ul>
        </div>
    )
}

export default Stories
