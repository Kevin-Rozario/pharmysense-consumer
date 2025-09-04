import { ControlPosition, MapControl } from "@vis.gl/react-google-maps";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

type CustomZoomControlProps = {
  controlPosition: ControlPosition;
  zoom: number;
  onZoomChange: (zoom: number) => void;
};

const CustomZoomControl = ({
  controlPosition,
  zoom,
  onZoomChange,
}: CustomZoomControlProps) => {
  const handleZoomIn = () => onZoomChange(Math.min(zoom + 1, 18));
  const handleZoomOut = () => onZoomChange(Math.max(zoom - 1, 1));

  return (
    <MapControl position={controlPosition}>
      <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden mr-4 mb-4">
        <button
          onClick={handleZoomIn}
          className="p-2 hover:bg-gray-100 border-b flex justify-center items-center"
        >
          <AiOutlinePlus className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 hover:bg-gray-100 flex justify-center items-center"
        >
          <AiOutlineMinus className="w-5 h-5" />
        </button>
      </div>
    </MapControl>
  );
};

export default CustomZoomControl;
