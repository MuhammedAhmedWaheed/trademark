"use client";

import Image from "next/image";
import { useState } from "react";

const PURPLE = "#6c4cb1";

type Item = { title: string; image: string; text: string };

const GOODS: Item[] = [
  { title: "Product Labels / Tags", image: "/statement2.jpeg", text: "Labels or tags attached to the product showing the trademark prominently displayed." },
  { title: "Product Packaging", image: "/statement3.jpeg", text: "Your product boxes, wrappers, or containers with the trademark prominently displayed." },
  { title: "Product Images", image: "/statement4.png", text: "Photos of the product itself with the trademark visible." },
  { title: "Advertising Materials", image: "/statement5.png", text: "Flyers, brochures, or other promotional materials featuring the trademark." },
  { title: "Online & Digital Materials", image: "/statement6.png", text: "Screenshots of Websites, e-commerce listings, mobile apps, social media profiles, digital advertisements, email campaigns, online videos, web-based presentations." },
  { title: "Shipping Documents", image: "/statement7.png", text: "Shipping invoices, packing slips, or other documents related to the sale of the product, with the trademark visible." },
  { title: "Invoices / Sales Receipts", image: "/statement8.png", text: "Proof of sales transactions (invoices or receipts) that display the trademark." },
  { title: "General Evidence", image: "/statement9.png", text: "Includes business cards, advertisements, brochures, trade show displays, social media posts, email signatures, press releases, news mentions, signage, branded stationery, contracts." },
];

const SERVICES: Item[] = [
  { title: "Marketing Materials", image: "/serviceuse1.png", text: "The trademark should be visible in ads, brochures, flyers, videos, and press releases, either in the headline, logo, or product/service description." },
  { title: "Online Presence", image: "/serviceuse2.png", text: "The trademark must appear on websites, social media posts, email campaigns, or digital platforms, preferably in headers, banners, or alongside service descriptions." },
  { title: "Physical Displays", image: "/serviceuse3.png", text: "Signage, event materials, and trade show exhibits should clearly feature the trademark, such as on banners, posters, or booth setups." },
  { title: "Service Documentation", image: "/serviceuse4.png", text: "Contracts, invoices, and reports must include the trademark, either in the header, footer, or branding." },
  { title: "Client Feedback", image: "/serviceuse5.png", text: "Testimonials and reviews must mention or include the trademark when referring to the service." },
  { title: "Business Identification", image: "/serviceuse6.png", text: "Business cards, letterheads, or stationery must display the trademark in a visible position." },
  { title: "Promotional Events", image: "/serviceuse7.png", text: "Event programs, banners, posters, tickets, booth signage, and branded merchandise must prominently display the trademark to clearly associate it with the services." },
  { title: "General Evidence", image: "/serviceuse8.png", text: "News articles, online features, interviews, press mentions, and media reviews must explicitly display the trademark in connection with the services." },
];

export default function Use() {
  const [tab, setTab] = useState<"goods" | "services">("goods");
  const [activeIdx, setActiveIdx] = useState(0);
  const items = tab === "goods" ? GOODS : SERVICES;

  return (
    <section className="bg-white px-6 md:px-20 py-16">
      {/* Heading */}
      <h2 className="text-center font-[var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight mb-8">
        <span className="text-black">What Can You </span>
        <span style={{ color: PURPLE }}>Provide for Evidence of Use?</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            tab === "goods" ? "bg-[#6c4cb1] text-white shadow-md" : "bg-gray-100 text-[#212121]"
          }`}
          onClick={() => {
            setTab("goods");
            setActiveIdx(0);
          }}
        >
          For Goods
        </button>
        <button
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            tab === "services" ? "bg-[#6c4cb1] text-white shadow-md" : "bg-gray-100 text-[#212121]"
          }`}
          onClick={() => {
            setTab("services");
            setActiveIdx(0);
          }}
        >
          For Services
        </button>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Sidebar */}
        <div className="md:w-[320px]">
          <ul className="flex md:block gap-2 md:gap-3 overflow-auto no-scrollbar">
            {items.map((item, i) => {
              const active = i === activeIdx;
              return (
                <li key={item.title} className="shrink-0 md:shrink">
                  <button
                    onClick={() => setActiveIdx(i)}
                    className={`whitespace-nowrap md:whitespace-normal px-4 py-2 rounded-lg font-medium text-sm md:text-base transition-all ${
                      active ? "bg-[#6c4cb1]/10 text-[#6c4cb1]" : "text-[#333333] hover:bg-gray-100"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Image + Text */}
        <div className="flex-1 text-center">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={items[activeIdx].image}
              alt={items[activeIdx].title}
              width={800}
              height={350} // shorter height
              className="mx-auto object-cover rounded-none"
            />
          </div>
          <p className="mt-4 text-sm md:text-base text-[#212121] leading-relaxed max-w-2xl mx-auto">
            {items[activeIdx].text}
          </p>
        </div>
      </div>
    </section>
  );
}
