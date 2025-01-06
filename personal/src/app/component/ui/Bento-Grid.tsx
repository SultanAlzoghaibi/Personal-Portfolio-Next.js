import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-[19.55px] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4",
        "bg-[linear-gradient(91deg,#1B1C1E_17.23%,#000_96.46%)] border-[0.85px] border-[rgba(54,55,73,0.43)]",
        "justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-300 text-xs">
          {description}
        </div>
      </div>
    </div>
  );
};
