import { FaMapMarkerAlt } from "react-icons/fa";

const ExperienceCenters = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden">

      {/* Background Image */}
      <img
        src="location/center.png"   // ← YOUR BG IMAGE HERE
        alt="Experience Center"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20">
  <div
    className="w-full h-[90vh] bg-cover bg-center rounded-xl overflow-hidden"
    style={{ backgroundImage: `url('/location/center.jpg')` }}
  >
    {/* Address Box Here */}
  </div>
</div>


      {/* Content Box */}
     <div
  className="
    absolute bottom-6 left-1/2 -translate-x-1/2

    w-[92%] sm:w-[84%] md:w-[75%] lg:w-[60%] xl:w-[50%]

    mx-4 sm:mx-6 md:mx-10   /* ✅ EXTRA SIDE MARGIN */
    
    border border-white/40 rounded-2xl

    py-4 sm:py-5 md:py-6
    px-4 sm:px-6 md:px-8

    flex flex-col items-center justify-center
    backdrop-blur-sm bg-white/10 shadow-xl
  "
>
  <FaMapMarkerAlt className="text-white text-3xl sm:text-4xl mb-2" />

  <p
    className="
      text-white text-center 
      text-xs sm:text-sm md:text-base lg:text-lg 
      leading-snug tracking-wide
    "
  >
    REGD. OFFICE: BLOCK NO. 2221, PAIKI 06, SHRI RAM INDUSTRIAL ESTATE,
    SANTEJ KHATRAJ ROAD, OPP. SHAH ALLOY, KALOL, GANDHI NAGAR
  </p>
</div>


    </div>
  );
};

export default ExperienceCenters;
