import Image from "next/image"

export default function ActivityCard ({name, image, minAge, maxAge}) {
    return (
        <article className="overflow-hidden rounded-3xl rounded-br-none">
            <div className="relative w-full h-[30vh]">
                <Image
                src={image}
                alt={name}
                height={300}
                width={500}
                className="w-full h-auto object-center object-"
                />
                <div className="bg-[#E1A1E9] bg-opacity-80 w-full absolute bottom-0 p-3">
                <h2 className="font-bold text-md text-black">{name}</h2>
                <p className="text-sm text-black">{minAge}-{maxAge} år</p>
                </div>
            </div>
        </article>
    )
}
