module.exports = {
   extends: [
      "next/core-web-vitals",

      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:tailwindcss/recommended",
   ],
   rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "react/prop-types": "off",
      "tailwindcss/no-custom-classname": "off",
   },
};
