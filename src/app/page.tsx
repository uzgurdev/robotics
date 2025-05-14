"use client";

import { Custom } from "@/components";

export default function Home() {
  return (
    <div>
      <Custom.Navbar />
      <Custom.Banner />
      <Custom.Cards />
      <Custom.About />
      <div
        className="courses_review bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bg_body.png)" }}
      >
        <Custom.Courses />
        <Custom.Review />
      </div>
      <Custom.Form />
      <Custom.Map />
    </div>
  );
}
