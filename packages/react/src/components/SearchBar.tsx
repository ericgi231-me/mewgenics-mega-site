import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search..."
    className="border border-rule rounded-lg px-3 py-1.5 text-base w-full bg-surface text-body placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-lg"
  />
);

export default SearchBar;
