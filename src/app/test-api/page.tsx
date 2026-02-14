"use client";

import { useEffect, useState } from "react";

export default function TestPage() {
  const [data, setData] = useState<{ items: any[] }>({ items: [] });

  useEffect(() => {
    fetch("http://localhost:5163/api/media", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {data.items.map((item) => (
          <div key={item.id} className="border p-4">
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
