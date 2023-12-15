const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/components"),
      // "@Styles/*": ["./src/styles/*"],
      // "@Constants/*": ["./src/constants/*"],
      // "@Images/*": ["./public/images/*"],
      // "@Public/*": ["./public/*"],
      // "@Utils/*": ["./src/utils/*"],
      // "@Icons/*": ["./src/icons/*"]
    },
  },
};
