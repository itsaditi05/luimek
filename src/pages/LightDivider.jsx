import { motion } from "framer-motion";

export default function LightDivider() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute w-[80%] h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-[2px]"
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Light Beam Animation */}
      <motion.div
        className="absolute w-[50%] h-[80px] bg-yellow-400/30 blur-[100px] rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      ></motion.div>

      {/* Subtle flicker effect */}
      <motion.div
        className="absolute w-[70%] h-[2px] bg-yellow-500/70 blur-[3px]"
        animate={{ opacity: [0.3, 0.8, 0.4, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
