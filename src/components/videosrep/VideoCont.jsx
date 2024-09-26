import VideoRep from "./VideoRep"
import { getRick } from "../llamadas/llamadas"

const VideoCont = async () => {
    const rickys = await getRick()
    return (
        <div className=" flex flex-col items-center gap-4">
            {rickys.map((ricky, index) => (
                <div key={index} className="flex flex-col items-center w-[50%]">
                    <h2>{ricky.title} </h2>
                    <VideoRep
                    className=""
                    src={ricky.src}
                    />
                </div>
            ))}

        </div>
    )
}

export default VideoCont