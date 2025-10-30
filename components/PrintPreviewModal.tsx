import React from 'react';
import BarcodeDisplay from './BarcodeDisplay';
import { PrintIcon, CloseIcon } from './Icons';

interface PrintPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    value: string;
    text: string;
    width: number;
    height: number;
    showText: boolean;
    fontFamily: string;
    fontSize: number;
    fontColor: string;
}

const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({ isOpen, onClose, ...barcodeProps }) => {
    if (!isOpen) {
        return null;
    }

    const handlePrint = () => {
        window.print();
    };

    return (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" 
          aria-modal="true" 
          role="dialog"
          onClick={onClose}
        >
            <div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all relative"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-slate-800">Print Preview</h2>
                    <button onClick={onClose} className="text-slate-500 hover:text-slate-800" aria-label="Close modal">
                        <CloseIcon />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 sm:p-12">
                    <div className="printable-content bg-white">
                         <BarcodeDisplay {...barcodeProps} />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-slate-50 rounded-b-xl flex justify-end gap-3">
                    <button onClick={onClose} className="bg-slate-200 text-slate-800 font-bold py-2 px-4 rounded-lg hover:bg-slate-300 transition-colors">
                        Cancel
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                        <PrintIcon />
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrintPreviewModal;
