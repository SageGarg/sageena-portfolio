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
    <div className="container mx-auto px-4 py-16">
      {Projects.map((project, index) => {
        const isOpen = openIndex === index;
        const count = project.data.length;

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
          <section
            key={index}
            className="overflow-hidden border-t border-zinc-800/80 first:border-t-0"
          >
            {/* Header — always visible, styled as a real card row so it never looks blank */}
            <div
              className="group/category relative flex cursor-pointer select-none items-center justify-between px-2 py-8 transition-colors duration-300 hover:bg-white/[0.025] md:px-4"
              {...hoverHandlers}
              {...clickHandler}
            >
              <span className="absolute left-0 top-0 h-px w-16 bg-pink-500 transition-all duration-300 group-hover/category:w-28" />
              <div className="flex items-center gap-3">
                <h1 className="text-lg font-bold text-white md:text-2xl">
                  {project.sectionTitle}
                </h1>
                <span className="text-xs font-medium text-pink-400 md:text-sm">
                  /
                </span>
                <span className="text-xs font-medium text-zinc-500 md:text-sm">
                  {count} {count === 1 ? "project" : "projects"}
                </span>
              </div>
              <span
                className={`text-xl text-zinc-500 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
            </div>

            {/* Collapsed preview strip — stack tags peek out so the card never reads as empty */}
            {!isOpen && (
              <div className="flex flex-wrap gap-x-4 gap-y-2 px-2 pb-7 md:px-4">
                {Array.from(new Set(project.data.flatMap((p) => p.stack)))
                  .slice(0, 6)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-zinc-500 before:mr-2 before:text-pink-500 before:content-['•'] md:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            )}

            {/* Expanded body */}
            <div
              {...(!isMobile ? hoverHandlers : {})}
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {project.data.map((val, key) => (
                <Comp key={key} val={val} active={isOpen} isMobile={isMobile} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
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
  isMobile: boolean;
}) {
  const compRef = useRef<HTMLAnchorElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
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
      href={props.val.link || undefined}
      target={props.val.notBlank ? "" : "_blank"}
      className={`info-tile group relative block overflow-hidden border-b border-zinc-800/70 px-2 md:px-4 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:origin-bottom after:scale-y-0 after:bg-pink-700 after:transition-transform after:duration-500 hover:after:origin-top hover:after:scale-y-100 ${
        props.val.link ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div
        className={`relative flex items-start ${
          props.isMobile ? "flex-col gap-2" : "justify-between items-center"
        }`}
      >
        {/* Left section: Title & Hover Title */}
        <div className="relative h-full w-full flex-1 overflow-hidden">
          <h1
            className={`py-10 text-xl font-bold tracking-tighter md:py-12 md:text-4xl lg:py-12 lg:text-5xl ${
              props.isMobile
                ? ""
                : "transition-transform duration-500 group-hover:-translate-y-full"
            }`}
          >
            {props.val.title}
          </h1>
          <div
            className={`absolute inset-0 flex-col justify-center ${
              props.isMobile
                ? "hidden"
                : "flex translate-y-full transition-transform duration-500 group-hover:translate-y-0"
            }`}
          >
            <h1 className="text-xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              {props.val.title}
            </h1>
            <h2 className="text-base font-medium opacity-70 md:text-xl lg:text-2xl">
              {props.val.hoverTitle}
            </h2>
          </div>
        </div>

        {/* Right section: Image and Subtitle */}
        <div
          className={`flex gap-4 ${
            props.isMobile ? "w-full flex-col items-start" : "items-center"
          }`}
        >
          {props.val.image && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (props.val.demo) window.open(props.val.demo, "_blank");
              }}
              className="relative h-20 w-40 cursor-pointer overflow-hidden rounded opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:h-28 lg:h-24"
            >
              <Image
                src={props.val.image}
                alt={props.val.title}
                layout="fill"
                className="object-cover rounded"
              />
            </div>
          )}
          <p
            className={`max-w-xs text-xs transition-opacity duration-500 md:text-sm lg:max-w-md ${
              props.isMobile
                ? "text-zinc-300 opacity-100"
                : "text-zinc-950 opacity-0 group-hover:opacity-80"
            }`}
          >
            {props.val.subTitle}
          </p>
        </div>
      </div>
    </a>
  );
}
