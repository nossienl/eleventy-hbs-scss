const sass = require("sass");
const path = require("node:path");
const eq = require('./src/_helpers/eq.js');

module.exports = function(eleventyConfig) {
    // Process .hbs (Handlebars) files
    eleventyConfig.setTemplateFormats("hbs");

    // Process .scss files
    eleventyConfig.addTemplateFormats("scss");

    // Add Handlebars helpers
    eq(eleventyConfig);

    // Creates the SCSS Extension for use
    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css", // optional, default: "html"

        // `compile` is called once per .scss file in the input directory
        compile: async function(inputContent, inputPath){

            let parsed = path.parse(inputPath);

            if(parsed.name.startsWith("_")) {
                return;
            }

            let result = sass.compileString(inputContent,{
                loadPaths: [
                parsed.dir || ".",
                this.config.dir.includes
            ]
        });

            this.addDependencies(inputPath, result.loadedUrls);

            // This is the render function, `data` is the full data cascade
            return async (data) => {
                return result.css;
            };
        }
    });

    // copy js folder to _site
    eleventyConfig.addPassthroughCopy("src/assets/js");

    // Add Global Data
    eleventyConfig.addGlobalData("siteTitle", "Eleventy HBS & SCSS Starter");

    // Add Global Data - Current Year
    eleventyConfig.addGlobalData("currentYear", new Date().getFullYear() );

    return {
        dir: {
            input: "src",
            output: "dist",
            templateFormats: ["hbs"]
        }
    }
};
