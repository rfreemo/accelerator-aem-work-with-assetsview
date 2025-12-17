"use strict";

module.exports = {
  names: ["custom-ol-blank-line-after"],
  description: "Ordered list items must have a blank line before any continuation content",
  tags: ["lists", "spacing"],
  function: function rule(params, onError) {
    let inOlItem = false;

    params.lines.forEach((line, i) => {
      const lineNumber = i + 1;

      // Detect ordered list item start: "1. text"
      if (/^\s*\d+\.\s+/.test(line)) {
        inOlItem = true;
        return;
      }

      if (inOlItem && line.trim().length > 0) {
        // If the previous line wasn't blank, enforce a blank line
        const prevLine = params.lines[i - 1] || "";
        if (prevLine.trim() !== "") {
          onError({
            lineNumber,
            detail: "Content after an ordered list item must be preceded by a blank line",
            context: line,
            fixInfo: {
              insertText: "\n" // insert a newline before this line
            }
          });
        }
      }

      // Reset when we hit a blank line or leave the list
      if (line.trim() === "") {
        inOlItem = false;
      }
    });
  }
};
