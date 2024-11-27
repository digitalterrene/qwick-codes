import React from "react";

export default function ServicesCatalogue() {
  return (
    <div className="w-full flex justify-between gap-20 pl-28">
      <div className="w-1/2 space-y-8">
        {" "}
        <p className="text-2xl text-[#3B82F6]">
          Our Services include but not limited to:
        </p>
        <img
          src="/images/catalogue.png"
          className="rounded-3xl z-50 mx-auto relative"
          style={{ position: "relative" }}
        />
      </div>
      <div className=" w-1/2 -mt-10 z-50 p-4 h-[600px] rounded-2xl bg-primary/80">
        <div className="    z-50 p-4  rounded-2xl bg-primary/80">
          <img
            className="w-2/3 rounded-2xl"
            src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=900&t=st=1706483305~exp=1706483905~hmac=7c047d2888dfa32201a0a03ffcbf50a5afe3bbe4c107952b0c7a4ed2ab1fbe50"
          />
        </div>{" "}
        <div className="  z-50 p-4   rounded-2xl bg-primary/80">
          <img
            className="w-2/3 rounded-2xl"
            src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=900&t=st=1706483305~exp=1706483905~hmac=7c047d2888dfa32201a0a03ffcbf50a5afe3bbe4c107952b0c7a4ed2ab1fbe50"
          />
        </div>
      </div>
    </div>
  );
}
