"use strict";

module.exports = {
  names: ["custom-h4-only-under-h1-h2"],
  description: "H4 headings are only allowed under H1 or H2",
  tags: ["headings"],
  function: function rule(params, onError) {
    let lastHigherLevel = null;

    params.tokens.forEach((token) => {
      if (token.type === "heading_open") {
        const level = parseInt(token.tag.substr(1), 10);

        if (level < 4) {
          lastHigherLevel = level;
        }

        if (level === 4) {
          if (!(lastHigherLevel === 1 || lastHigherLevel === 2)) {
            onError({
              lineNumber: token.lineNumber,
              detail: "H4 heading must follow an H1 or H2",
              context: token.line
            });
          }
        }
      }
    });
  }
};
