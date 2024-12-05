export const detectLanguage = (): string => {
    // eslint-disable-next-line new-cap
    const userLang = Intl.NumberFormat().resolvedOptions().locale;

    const parsedLang = userLang.split('-')[0];

    return parsedLang;
};
