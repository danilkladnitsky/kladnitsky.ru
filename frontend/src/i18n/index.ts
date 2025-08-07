import {detectLanguage} from '@/shared/utils/lang';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import localeEn from './en';
import localeRu from './ru';

const detectedLocale = detectLanguage();

const resources = {
    en: {translation: localeEn},
    ru: {translation: localeRu},
    // zh: {translation: localeCn},
};

i18n.use(initReactI18next).init({
    resources,
    lng: detectedLocale,
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
