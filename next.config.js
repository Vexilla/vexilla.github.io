const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  rehypePlugins: [rehypePrism],
});

module.exports = withMDX({
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" };
    }

    return config;
  },
});
