module.exports = function(eleventyConfig) {
    // Define your Handlebars helper
    eleventyConfig.addHandlebarsHelper('eq', function(a, b) {
        return (a === b);
    });
};