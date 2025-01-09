type MagicButtonProps = {
  text: string;
  className?: string;
};

const MagicButton = ({ text, className }: MagicButtonProps) => {
  return (
    <button
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
    </button>
  );
};

export default MagicButton;