"use client";
import React from "react";
import featuresData from "./EventsData";
import EventDataFunc from "./Events";
import SectionHeader from "../Common/SectionHeader";

const Events = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="events" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Events",
              subtitle: "Our Events",
              description: `Nil`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 items-center gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5	">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <EventDataFunc feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Events;
