import React, { useState } from 'react';
import BarcodeDisplay from './components/BarcodeDisplay';
import Controls from './components/Controls';
import { PrintIcon } from './components/Icons';
import PrintPreviewModal from './components/PrintPreviewModal';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('1234567890');
  const [text, setText] = useState<string>('PRODUCT-SKU-123');
  const [width, setWidth] = useState<number>(2);
  const [height, setHeight] = useState<number>(80);
  const [showText, setShowText] = useState<boolean>(true);
  const [fontFamily, setFontFamily] = useState<string>('monospace');
  const [fontSize, setFontSize] = useState<number>(18);
  const [fontColor, setFontColor] = useState<string>('#000000');
  const [isPrintPreviewOpen, setIsPrintPreviewOpen] = useState<boolean>(false);

  const handleOpenPrintPreview = () => {
    setIsPrintPreviewOpen(true);
  };

  const handleClosePrintPreview = () => {
    setIsPrintPreviewOpen(false);
  };

  const barcodeProps = {
    value, text, width, height, showText, fontFamily, fontSize, fontColor
  };

  return (
    <>
      <main className="min-h-screen font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Controls Panel */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-6 space-y-6 print:hidden">
            <header>
              <h1 className="text-2xl font-bold text-slate-800">Barcode Generator</h1>
              <p className="text-sm text-slate-500 mt-1">Customize and print your label.</p>
            </header>
            <Controls
              value={value}
              setValue={setValue}
              text={text}
              setText={setText}
              width={width}
              setWidth={setWidth}
              height={height}
              setHeight={setHeight}
              showText={showText}
              setShowText={setShowText}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              fontSize={fontSize}
              setFontSize={setFontSize}
              fontColor={fontColor}
              setFontColor={setFontColor}
            />
            <button
              onClick={handleOpenPrintPreview}
              className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <PrintIcon />
              Print Label
            </button>
          </div>

          {/* Barcode Preview */}
          <div className="w-full lg:w-2/3 flex items-center justify-center">
            <div id="printableArea" className="bg-white p-4 sm:p-6 rounded-xl shadow-lg w-full">
              <BarcodeDisplay {...barcodeProps} />
            </div>
          </div>
        </div>
        <footer className="text-center mt-8 text-slate-500 text-sm print:hidden">
          <p>A simple tool for creating labels.</p>
        </footer>
      </main>
      <PrintPreviewModal 
        isOpen={isPrintPreviewOpen}
        onClose={handleClosePrintPreview}
        {...barcodeProps}
      />
    </>
  );
};

export default App;