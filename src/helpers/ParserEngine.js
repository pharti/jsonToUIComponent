import htmlParser from 'htmlstr-parser';

export const parseHtml = async (html) => {
    try {
        const json = await htmlParser(html);
        return json;
    } catch (error) {
        console.log('Error: parseHtml', error);
    }
};
