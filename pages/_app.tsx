import GlobalStyles from "components/GlobalStyles";
import React from "react";
import "tailwindcss/tailwind.css";
import "styles/index.css";

import Header from "components/header";

function VexillaDocsApp({ Component, pageProps }) {
  return (
    <div className="relative pt-32 md:pt-20 bg-white max-w-screen-lg mx-auto">
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default VexillaDocsApp;
