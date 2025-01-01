import React, { useState } from 'react';

export default function DocumentArea() {
  const [content, setContent] = useState('');

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      <div className="max-w-[816px] min-h-[1056px] mx-auto bg-white shadow-lg p-12">
        <textarea
          className="w-full h-full resize-none border-none focus:outline-none"
          placeholder="Start typing..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}