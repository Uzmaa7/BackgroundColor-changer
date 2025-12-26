import React from 'react'

function Card(props){
    // console.log("props", props)
    return(
        <>
        <div className="mt-8 flex justify-center" >
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
    
                <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"
                alt="card"
                />

                <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Card Title
                </h2>

                <p className="mt-2 text-gray-600 text-sm">
                    This is a simple card built using Tailwind CSS in a Vite + React app.
                </p>

                <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
                    Read More
                </button>
                </div>

            </div>
        </div>

        </>
    )
}
export default Card