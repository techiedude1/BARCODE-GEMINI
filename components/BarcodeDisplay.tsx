import React, { useEffect, useRef } from 'react';

// TypeScript declaration for JsBarcode loaded from CDN
declare var JsBarcode: (
    element: SVGElement, 
    data: string, 
    options?: any
) => void;

interface BarcodeDisplayProps {
  value: string;
  text: string;
  width: number;
  height: number;
  showText: boolean;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
}

const BarcodeDisplay: React.FC<BarcodeDisplayProps> = ({ value, text, width, height, showText, fontFamily, fontSize, fontColor }) => {
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (barcodeRef.current) {
      // Clear previous content
      barcodeRef.current.innerHTML = '';

      if (value) {
        try {
          JsBarcode(barcodeRef.current, value, {
            format: "CODE128",
            lineColor: "#000000",
            width: width,
            height: height,
            displayValue: false, // We render our own text for better styling
            margin: 0,
          });
        } catch (e) {
          // If JsBarcode throws an error, display an invalid message inside the SVG
          const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
          textElement.setAttribute("x", "50%");
          textElement.setAttribute("y", "50%");
          textElement.setAttribute("dominant-baseline", "middle");
          textElement.setAttribute("text-anchor", "middle");
          textElement.setAttribute("fill", "#ef4444"); // Red-500
          textElement.textContent = "Invalid Barcode Value";
          barcodeRef.current.appendChild(textElement);
          console.error("JsBarcode error:", e);
        }
      }
    }
  }, [value, width, height]);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg ref={barcodeRef} className="w-full"></svg>
      {showText && text && (
         <p 
            className="mt-2 text-center tracking-widest"
            style={{ 
              letterSpacing: '0.2em', // Wider letter spacing for clarity
              fontFamily: fontFamily,
              fontSize: `${fontSize}px`,
              color: fontColor,
            }}
        >
            {text}
        </p>
      )}
      {!value && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p className="text-slate-500 text-center p-4">Enter a value to generate a barcode.</p>
        </div>
      )}
    </div>
  );
};

export default BarcodeDisplay;