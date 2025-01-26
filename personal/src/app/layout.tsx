import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./component/theme-provider";
import  LinkButton from "./component/linkButton";
import { FloatingNav } from "./component/ui/floating-navbar";
import { navItems } from "./data/datadata";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Sultan Alzoghaibi | Software Developer Portfolio",
  description: "Discover Sultan Alzoghaibi's portfolio showcasing web development projects, coding expertise, and design skills. Explore and connect with a passionate developer today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={` antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
                <FloatingNav navItems={navItems} />
          
      </body>

      <footer className="text-white pb-6 text-center mb-5 border-t-2 border-primary w-full" >
             <div className="relative flex mt-8  md:flex-row flex-col justify-between mx-5 items-center z-10">
                     <p className="md:text-base text-sm md:font-normal font-light text-white ">
                         Copyright © 2025 Sultan Alzoghaibi
                       </p>
               
                       <div className="flex items-center mt-4 md:gap-3 gap-6">
                         <LinkButton
                           text="LinkedIn"
                           icon="/tech-logos/linkedin.png"
                           link="https://www.linkedin.com/in/sultan-alzoghaibi-3b99a0250/"
                         />
                         <LinkButton
                           text="Github"
                           icon="/tech-logos/github-white-icon.webp"
                           link="https://github.com/SultanAlzoghaibi"
                         />
                         <LinkButton
                           text="Output Online"
                           icon="/tech-logos/output-onlinepngtools.png"
                           link="/THIS-IS-A-PLACEHOLDER.pdf"
                         />
                         
                       </div>
                      
                     </div>
       
           
         </footer>

    </html>
  );
}
