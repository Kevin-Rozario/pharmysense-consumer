import { Star, X } from "lucide-react";
import { BsSignTurnRightFill } from "react-icons/bs";
import { MdOutlineRadar } from "react-icons/md";
import {
  FaPhone,
  FaLocationDot,
  FaGlobe,
  FaEnvelope,
  FaLock,
  FaPenNib,
} from "react-icons/fa6";

const PharmaDetailCard = ({
  pharmacy,
  onClose,
}: {
  pharmacy: IPharmacy;
  onClose: () => void;
}) => {
  return (
    <div className="absolute right-4 top-0 bottom-0 m-auto h-130 w-90 z-50 bg-white flex flex-col space-y-4 rounded-xl shadow-md border border-slate-100 overflow-hidden">
      {/* Header with close button */}
      <div className="w-full bg-amber-500 h-[20%] flex justify-between items-center px-4 font-semibold text-white relative">
        <span>{pharmacy.pharmacyName}</span>
        <button onClick={onClose} className="absolute top-2 right-2">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col space-y-4 px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-black">
              {pharmacy.pharmacyName}
            </p>
            <p className="text-sm flex items-center gap-2 font-semibold">
              <Star className="w-4 h-4 fill-orange-300" /> {pharmacy.rating}
              <span>(300)</span>
            </p>
          </div>
          <button className="bg-green-600 text-white rounded-full px-4 py-4 flex items-center gap-2">
            <BsSignTurnRightFill className="w-6 h-6" />
          </button>
        </div>

        <hr className="w-full text-slate-300" />

        {!!pharmacy.email && (
          <div className="flex items-center gap-4">
            <FaEnvelope className="w-4 h-4" />
            <p className="text-sm">{pharmacy.email}</p>
          </div>
        )}
        {!!pharmacy.phoneNumber && (
          <div className="flex items-center gap-4">
            <FaPhone className="w-4 h-4" />
            <p className="text-sm">{pharmacy.phoneNumber}</p>
          </div>
        )}
        {!!pharmacy.website && (
          <div className="flex items-center gap-4">
            <FaGlobe className="w-4 h-4" />
            <p className="text-sm">{pharmacy.website}</p>
          </div>
        )}
        <div className="flex items-center gap-4">
          <FaLocationDot className="w-10 h-10" />
          <p className="text-sm text-justify">{pharmacy.address}</p>
        </div>
        <div className="flex items-center gap-4 font-bold">
          <MdOutlineRadar className="w-4 h-4" />
          <p className="text-sm">Within {pharmacy.distance}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between absolute bottom-4 left-4 right-4">
          <button className="bg-amber-500 text-white rounded-full px-4 py-2 flex items-center gap-2">
            <FaPenNib className="w-4 h-4" />
            Subscribe
          </button>
          <button className="bg-green-600 text-white rounded-full px-4 py-2 flex items-center gap-2">
            <FaLock className="w-4 h-4" />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default PharmaDetailCard;
