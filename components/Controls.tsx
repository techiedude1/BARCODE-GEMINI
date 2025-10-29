
import React from 'react';

interface ControlsProps {
  value: string;
  setValue: (value: string) => void;
  text: string;
  setText: (text: string) => void;
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
  showText: boolean;
  setShowText: (show: boolean) => void;
}

const InputLabel: React.FC<{ htmlFor: string; children: React.ReactNode; }> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700 mb-2">
        {children}
    </label>
);

const Controls: React.FC<ControlsProps> = ({
  value,
  setValue,
  text,
  setText,
  width,
  setWidth,
  height,
  setHeight,
  showText,
  setShowText,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <InputLabel htmlFor="barcode-value">Barcode Value</InputLabel>
        <input
          id="barcode-value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value to encode"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <InputLabel htmlFor="display-text">Display Text</InputLabel>
        <input
          id="display-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Text below barcode"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div className="flex items-center justify-between pt-2">
        <span className="text-sm font-medium text-slate-700">Show Display Text</span>
        <button
          onClick={() => setShowText(!showText)}
          className={`${
            showText ? 'bg-indigo-600' : 'bg-slate-300'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              showText ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </button>
      </div>

      <div>
        <InputLabel htmlFor="bar-width">Bar Width ({width.toFixed(1)}px)</InputLabel>
        <input
          id="bar-width"
          type="range"
          min="1"
          max="4"
          step="0.1"
          value={width}
          onChange={(e) => setWidth(parseFloat(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>

      <div>
        <InputLabel htmlFor="bar-height">Bar Height ({height}px)</InputLabel>
        <input
          id="bar-height"
          type="range"
          min="20"
          max="150"
          step="1"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>
    </div>
  );
};

export default Controls;
