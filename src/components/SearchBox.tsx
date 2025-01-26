import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative w-full max-w-md ${
        isFocused ? "animate-search-focus" : ""
      }`}
    >
      <div className="relative">
        <Search
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isFocused ? "text-primary" : "text-secondary"
          } transition-colors`}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 
                   focus:outline-none focus:border-primary focus:ring-0
                   text-secondary-foreground placeholder:text-secondary
                   transition-all"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBox;