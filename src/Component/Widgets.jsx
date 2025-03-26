import React from "react";
import { PhoneCall, ShoppingCart, Tag } from "lucide-react";

const widgets = [
  {
    icon: <PhoneCall size={20} className="text-gray-600" />,
    title: "CALL TO ORDER",
    description: "0700-600-0000, 020-188-88..",
  },
  {
    icon: <ShoppingCart size={20} className="text-gray-600" />,
    title: "Sell on Jumia",
  },
  {
    icon: <Tag size={20} className="text-gray-600" />,
    title: "Best Deals",
  },
];

function Widgets() {
  return (
    <div className="absolute top-26 right-5 w-60 bg-white rounded-md shadow-lg border border-gray-200 p-3">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className={`flex items-center gap-6 py-4 ${
            index !== widgets.length - 1 ? "border-b border-white" : ""
          }`}
        >
          {widget.icon}
          <div>
            <h3 className=" text-gray-800 text-sm">{widget.title}</h3>
            {widget.description && (
              <p className="text-xs text-gray-500">{widget.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Widgets;
