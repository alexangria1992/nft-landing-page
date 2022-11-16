import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <a
      href=""
      className="text-base px-4 py-2 bg-primary text-tertiary hover:bg-transparent hover:text-primary border-primary border-2 rounded-full transition-all"
    >
      {text}
    </a>
  );
}
