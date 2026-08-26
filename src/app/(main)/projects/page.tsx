"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Projects } from "@/content/projects";
import Image from "next/image";

// Tailwind's `md` breakpoint — treat anything narrower as "mobile" (click-to-expand)
const MOBILE_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export default function ProjectsList() {
  const isMobile = useIsMobile();
  // All categories collapsed by default — track open state per section index
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {Projects.map((project, index) => {
        const isOpen = openIndex === index;

        // Desktop: hover opens/closes. Mobile: click toggles.
        const hoverHandlers = !isMobile
          ? {
              onMouseEnter: () => setOpenIndex(index),
              onMouseLeave: () =>
                setOpenIndex((curr) => (curr === index ? null : curr)),
            }
          : {};

        const clickHandler = isMobile
          ? {
              onClick: () =>
                setOpenIndex((curr) => (curr === index ? null : index)),
            }
          : {};

        return (
          <section key={index} className="my-8">
            <section
              className="container mx-auto p-4 cursor-pointer select-none flex items-center justify-between"
              {...hoverHandlers}
              {...clickHandler}
            >
              <h1 className="font-bold text-xl text-primary">
                {project.sectionTitle}
              </h1>
              <span
                className={`transition-transform duration-300 text-primary ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </section>

            {/* Category body: hover keeps it open on desktop since the mouse
                is still within this section's bounding box */}
            <div
              {...(!isMobile ? hoverHandlers : {})}
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {project.data.map((val, key) => (
                <Comp key={key} val={val} active={isOpen} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

function Comp(props: {
  val: {
    title: string;
    hoverTitle: string;
    subTitle?: string;
    notBlank?: boolean;
    link: string;
    image?: string;
    demo?: string;
  };
  active: boolean;
}) {
  const compRef = useRef<HTMLAnchorElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    // Only animate in the first time a section becomes active/visible,
    // so re-opening an already-seen category doesn't re-trigger the slide-in.
    if (!props.active || hasAnimatedRef.current || !compRef.current) return;
    hasAnimatedRef.current = true;

    const ctx = gsap.context(() => {
      gsap.from(compRef.current, {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, [props.active]);

  return (
    <a
      ref={compRef}
      href={props.val.link}
      target={props.val.notBlank ? "" : "_blank"}
      className="info-tile px-4 md:px-8 block overflow-hidden group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-pink-700 after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100"
    >
      <div className="container relative mx-auto flex justify-between items-center">
        {/* Left section: Title & Hover Title */}
        <div className="h-full flex-1 relative overflow-hidden">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 transition-transform duration-500 group-hover:-translate-y-full">
            {props.val.title}
          </h1>
          <div className="absolute inset-0 flex flex-col justify-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
            <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              {props.val.title}
            </h1>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70">
              {props.val.hoverTitle}
            </h2>
          </div>
        </div>

        {/* Right section: Image and Subtitle */}
        <div className="flex items-center gap-4">
          {props.val.image && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(props.val.demo, "_blank");
              }}
              className="w-48 h-24 md:h-32 lg:h-28 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer relative"
            >
              <Image
                src={props.val.image}
                alt={props.val.title}
                layout="fill"
                className="object-cover rounded"
              />
            </div>
          )}
          <p className="text-text/70 opacity-0 group-hover:opacity-70 transition-opacity duration-500 text-xs md:text-base max-w-xs lg:max-w-md">
            {props.val.subTitle}
          </p>
        </div>
      </div>
    </a>
  );
}
