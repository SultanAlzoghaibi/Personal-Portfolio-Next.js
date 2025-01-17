"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    section: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const currentPath = usePathname();
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Default to visible when mounted
  const [idleTimeout, setIdleTimeout] = useState<NodeJS.Timeout | null>(null);
  const idleDelay = 4000; // Time in milliseconds (4 seconds of inactivity to hide)

  // Handle scroll visibility logic
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      // Hide navbar when scrolling down and show when scrolling up
      setVisible(direction < 0 || scrollYProgress.get() < 0.05);
    }
  });

  // Reset the idle timer when user is active
  useEffect(() => {
    const handleUserActivity = () => {
      if (idleTimeout) {
        clearTimeout(idleTimeout); // Clear previous timeout
      }
      setVisible(true); // Show the navbar on activity
      setIdleTimeout(setTimeout(() => setVisible(false), idleDelay)); // Hide after inactivity
    };

    window.addEventListener("scroll", handleUserActivity);
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleUserActivity);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      if (idleTimeout) {
        clearTimeout(idleTimeout);
      }
    };
  }, [idleTimeout]);

  const handleNavClick = (link: string, section: string) => {
    if (link === "/") {
      // If on the homepage, scroll to the section
      if (currentPath === "/") {
        const targetSection = document.getElementById(section);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        // Navigate to the homepage and scroll to the section
        router.push(link).then(() => {
          const targetSection = document.getElementById(section);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      }
    } else {
      // For any other pages, navigate first, then scroll to the section
      router.push(link).then(() => {
        setTimeout(() => {
          const targetSection = document.getElementById(section);
          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex fixed top-5 inset-x-0 mx-auto max-w-fit z-50 bg-black rounded-lg shadow-lg px-4 py-2 items-center space-x-4 border border-white/[0.4]",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link-${idx}`}
            onClick={() => handleNavClick(navItem.link, navItem.section)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-black border rounded-full px-4 py-1 text-sm border-white/[0.1] hover:bg-white hover:text-black transition-all"
            )}
          >
            {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
            {navItem.name}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};