import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`position-relative w-100 max-w-md ${isFocused ? 'shadow-sm' : ''}`}>
      <div className="position-relative">
        <Search
          className={`position-absolute start-3 top-50 translate-middle-y ${
            isFocused ? 'text-primary' : 'text-secondary'
          }`}
          style={{ width: '20px', height: '20px' }}
        />
        <input
          type="text"
          placeholder="Search..."
          className="form-control ps-5 border rounded-3"
          style={{ transition: 'all 0.2s ease' }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBox;