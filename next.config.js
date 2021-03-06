const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withPlugins([withSass, withMDX], {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
