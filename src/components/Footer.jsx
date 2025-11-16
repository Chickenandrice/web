export default function Footer({
    bg = "bg-[#393D3F]",      
    text = "text-white",       
    border = "border-white"       
  }) {
    return (
      <footer className={`${bg} ${text} border-t ${border} m-10`}>
        <div className="mt-5 text-sm z-1">
          <div className="flex justify-between px-7 text-lg">
            <div>Relentlessly Curious</div>
            <div>© 2025 Joey Chen — All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    );
  }
  