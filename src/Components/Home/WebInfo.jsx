"use client";
import { useRef } from "react";

export default function WebInfo() {
  const marqueeRef = useRef(null);

  return (
    <div className="bg-[#ffa500] text-white font-bold text-center">
      <marquee
        ref={marqueeRef}
        direction="left"
        scrollamount="10"
        onMouseEnter={() => marqueeRef.current.stop()}
        onMouseLeave={() => marqueeRef.current.start()}
      >
        <div className="flex items-center gap-4 p-3">
          <div className="bg-[#c04c00] p-3 text-center">
            <h3>
              The portal is easy to access & highly user <br />
              friendly for the students & study centres.
            </h3>
          </div>

          <div className="bg-[#c04c00] p-3">
            <h3>
              The portal is fully secured and accessible <br />
              24 x 7 to its authorised users.
            </h3>
          </div>

          <div className="bg-[#c04c00] p-3">
            <h3>
              The portal is easy to access & highly user <br />
              friendly for the students & study centres.
            </h3>
          </div>
        </div>
      </marquee>
    </div>
  );
}
