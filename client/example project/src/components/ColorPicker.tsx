import React, { useState } from 'react';

const PRESET_SWATCHES = [
  '#2563eb', '#1d4ed8', '#f59e42', '#f43f5e', '#10b981', '#fbbf24', '#a21caf', '#eab308', '#0ea5e9', '#64748b',
  '#f87171', '#34d399', '#f472b6', '#facc15', '#6366f1', '#14b8a6', '#f97316', '#3b82f6', '#e11d48', '#22d3ee',
  '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b',
  '#0f172a', '#000000'
];

const ColorSwatch = ({ color, onSelect, isSelected }: { color: string; onSelect: (color: string) => void; isSelected: boolean }) => (
  <button
    className={`w-7 h-7 rounded border-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
      isSelected ? 'border-blue-500 scale-110' : 'border-gray-300 hover:border-gray-400'
    }`}
    style={{ background: color }}
    onClick={() => onSelect(color)}
    aria-label={`Select color ${color}`}
    type="button"
  />
);

const ColorPicker = ({ value, onChange }: { value: string; onChange: (color: string) => void }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-3">
      {/* Preset Swatches */}
      <div className="grid grid-cols-8 gap-2">
        {PRESET_SWATCHES.map((swatch, idx) => (
          <ColorSwatch 
            key={swatch + '-' + idx} 
            color={swatch} 
            onSelect={onChange}
            isSelected={value.toLowerCase() === swatch.toLowerCase()}
          />
        ))}
      </div>
      
      {/* Advanced Controls Toggle */}
      <button
        type="button"
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        {showAdvanced ? '▼ Hide Advanced' : '▶ Show Advanced'}
      </button>
      
      {/* Advanced Controls */}
      {showAdvanced && (
        <div className="space-y-2 p-3 bg-gray-50 rounded-md">
          <div className="flex items-center gap-3">
            <label className="text-sm font-medium text-gray-700 min-w-[60px]">
              Color:
            </label>
            <input
              type="color"
              value={value}
              onChange={e => onChange(e.target.value)}
              className="w-12 h-8 border border-gray-300 rounded cursor-pointer"
              aria-label="Color picker"
            />
            <input
              type="text"
              value={value}
              onChange={e => onChange(e.target.value)}
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm font-mono"
              aria-label="Hex color value"
              placeholder="#2563eb"
              pattern="^#[0-9A-Fa-f]{6}$"
            />
          </div>
          
          {/* Color format info */}
          <div className="text-xs text-gray-500">
            Supports hex colors (e.g., #2563eb) and CSS color names (e.g., blue)
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;