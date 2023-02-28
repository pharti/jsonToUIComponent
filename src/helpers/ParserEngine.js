import htmlParser from 'htmlstr-parser';


export const parseHtml = async (html) => {
    try {
        const decoded = html.replace(/&nbsp;/g, ' ');
        const json = await htmlParser(decoded);
        return json;
    } catch (error) {
        console.log('Error: parseHtml', error);
    }
};
