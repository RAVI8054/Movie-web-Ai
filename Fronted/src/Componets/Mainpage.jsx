import {Link} from 'react-router-dom'

function Mainpage() {
    return (
        <div className="bg-amber-300 w-screen h-screen">
            {/* Main content wrapper */}
            <div className="flex items-center justify-center p-10 h-full">
                {/* Left Section */}
                <section className="flex flex-col w-1/2 bg-amber-200 p-6 h-full">
                    <div className="flex flex-col h-3/4">
                        <div className="h-2/3">
                            <h1 className="w-full text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg pt-[3%] pb-[1%] px-[5%]">
                                Searching for Movies Made Simple
                            </h1>
                        </div>
                        <div className="h-1/3">
                            <h2 className="w-full top-0 text-3xl font-semibold italic text-gray-700 tracking-wide drop-shadow-md">
                                "Your AI Movie Buddy—Ask. Watch. Enjoy."
                            </h2>

                        </div>
                    </div>
                    <div className="h-1/4 flex items-center">
                        <Link to={"/chat"}> <button className=" items-center justify-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
                            Chat with AI
                        </button></Link>
                    </div>
                </section>

                {/* Right Section - Image */}
                <section className="w-1/2 h-full">
                    <img
                        src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Movie"
                        className="w-full h-full object-cover block"
                    />
                </section>
            </div>
        </div>
    );
}

export default Mainpage;
