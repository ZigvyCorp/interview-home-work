export const getSummaryContent = (text) => {
    if (!text) return "";
    if (text.length <= 100) return text;
    const summary = text.substring(0, 100);
    const lastIndexSpace = summary.lastIndexOf(" ");
    return summary.substring(0, lastIndexSpace) + " ...";
}