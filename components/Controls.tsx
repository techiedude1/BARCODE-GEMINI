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
  fontFamily: string;
  setFontFamily: (font: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  fontColor: string;
  setFontColor: (color: string) => void;
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
  fontFamily,
  setFontFamily,
  fontSize,
  setFontSize,
  fontColor,
  setFontColor
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

      <hr className="border-slate-200" />

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-slate-800">Text Style</h3>
        <div>
            <InputLabel htmlFor="font-family">Font Family</InputLabel>
            <select
                id="font-family"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
                <option value="monospace">Monospace</option>
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
            </select>
        </div>
        <div>
            <InputLabel htmlFor="font-size">Font Size ({fontSize}px)</InputLabel>
            <input
                id="font-size"
                type="range"
                min="10"
                max="40"
                step="1"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
        </div>
        <div>
            <InputLabel htmlFor="font-color">Font Color</InputLabel>
            <div className="flex items-center gap-3">
                 <input
                    id="font-color"
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="h-10 w-10 p-1 border border-slate-300 rounded-md cursor-pointer"
                />
                <span className="font-mono text-slate-500">{fontColor}</span>
            </div>
        </div>
      </div>
      
      <hr className="border-slate-200" />

      <div className="space-y-6">
        <h3 className="text-lg font-medium text-slate-800">Barcode Style</h3>
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
    </div>
  );
};

export default Controls;