import htmlParser from 'htmlstr-parser';
import normalizeWhitespace from 'normalize-html-whitespace'

export const parseHtml = async (html) => {
    try {
        //... Remove any extra spaces from the string.
        const decoded = normalizeWhitespace(html);
        const json = await htmlParser(decoded);

        return json;
    } catch (error) {
        console.log('Error: parseHtml', error);
    }
};
