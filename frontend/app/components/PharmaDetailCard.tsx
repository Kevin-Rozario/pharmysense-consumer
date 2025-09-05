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
      {/* Header */}
      <div
        className="bg-gradient-to-r from-amber-500 to-orange-400 h-20 
        flex items-center justify-between px-5 text-white font-semibold relative"
      >
        <span className="text-lg truncate">{pharmacy.pharmacyName}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-full bg-white/20 hover:bg-white/30"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold text-gray-900">
              {pharmacy.pharmacyName}
            </p>
            <p className="text-sm flex items-center gap-1 text-gray-700">
              <Star className="w-4 h-4 fill-orange-300 text-orange-300" />
              {pharmacy.rating} <span className="text-gray-500">(300)</span>
            </p>
          </div>
          <button className="bg-green-600 text-white rounded-full p-3 hover:bg-green-700 transition">
            <BsSignTurnRightFill className="w-6 h-6" />
          </button>
        </div>

        <hr className="border-gray-200" />

        {/* Contact info */}
        {!!pharmacy.email && (
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="w-4 h-4 text-amber-500" />
            <p className="text-sm break-words">{pharmacy.email}</p>
          </div>
        )}
        {!!pharmacy.phoneNumber && (
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="w-4 h-4 text-amber-500" />
            <p className="text-sm">{pharmacy.phoneNumber}</p>
          </div>
        )}
        {!!pharmacy.website && (
          <div className="flex items-center gap-3 text-gray-700">
            <FaGlobe className="w-4 h-4 text-amber-500" />
            <a
              href={pharmacy.website}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {pharmacy.website}
            </a>
          </div>
        )}

        {/* Address */}
        <div className="flex items-start gap-3 text-gray-700">
          <FaLocationDot className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <p className="text-sm text-justify">{pharmacy.address}</p>
        </div>

        {/* Distance */}
        <div className="flex items-center gap-3 font-medium text-gray-800">
          <MdOutlineRadar className="w-5 h-5 text-green-600" />
          <p className="text-sm">Within {pharmacy.distance}</p>
        </div>
      </div>

      {/* Sticky Footer Buttons */}
      <div className="flex justify-between items-center px-5 py-3 border-t border-gray-200 bg-white">
        <button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-5 py-2 flex items-center gap-2 transition">
          <FaPenNib className="w-4 h-4" />
          Subscribe
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 flex items-center gap-2 transition">
          <FaLock className="w-4 h-4" />
          Buy
        </button>
      </div>
    </div>
  );
};

export default PharmaDetailCard;
