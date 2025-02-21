import PlayButton from "../../atoms/PlayButton";

export default function Hero() {
    return (
        <div className="py-48 bg-black px-12 rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("")` }}>
            <h1 className="text-5xl font-[500] mb-3">Movie Name</h1>
            <div className="lg:w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non animi deserunt quidem porro laudantium doloribus eveniet eaque quae nesciunt exercitationem, aut natus. Temporibus tempore tenetur laborum corrupti placeat asperiores?</p>
                <div className="py-3">
                    <p className="text-sm"><span className="text-wit-600 font-[400] mr-2">Staring</span>: <span>Lorem ipsum dolor sit amet.</span> </p>
                    <p className="text-sm"><span className="text-wit-600 font-[400] mr-2">Genre</span>: <span>Lorem ipsum dolor sit amet.</span> </p>
                    <p className="text-sm"><span className="text-wit-600 font-[400] mr-2">Tags</span>: <span>Lorem ipsum dolor sit amet.</span> </p>
                </div>
                <PlayButton size="base" url="/" />
            </div>
        </div>
    )
}