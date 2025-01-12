type MagicButtonProps = {
  text: string;
  className?: string;
  link: string; // The link to navigate to
};

const MagicButton = ({ text, className, link }: MagicButtonProps) => {
  return (
    <a
      href={link} // Dynamically sets the href using the `link` prop
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security for external links
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md 
                 border border-primary bg-black 
                 bg-[linear-gradient(110deg,#000103,65%,#FF6347,66%,#000103)]
                 bg-[length:200%_100%] px-6 
                 font-medium text-primary 
                 transition-colors focus:outline-none focus:ring-2 
                 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black
                 hover:bg-[#BE4A4A] hover:text-black
                 hover:bg-[linear-gradient(110deg,#BE4A4A,65%,#FF6347,66%,#BE4A4A)] 
                 hover:animate-shimmer ${className}`}
    >
      {text}
    </a>
  );
};

export default MagicButton;