'use client';

import {LocaleConfig} from '@/i18n/locale-config';
import {detectLanguage} from '@/shared/utils/lang';
import {i18n} from 'i18next';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../i18n';

export type UserLocale = 'ru' | 'en' | 'zh';

interface AppContextState {
    i18n: i18n;
    userLocale: UserLocale;
    setUserLocale: (locale: UserLocale) => void;
    translate: (key: keyof LocaleConfig) => string;
}

const AppContext = React.createContext({});

export const useAppContext = () => React.useContext(AppContext) as AppContextState;

export const AppContextProvider = ({children}: {children: React.ReactNode}) => {
    const {t} = useTranslation();
    const [userLocale, setUserLocale] = useState<UserLocale>(detectLanguage() as UserLocale);

    const translate = (key: string) => t(key, {lng: userLocale});

    return (
        <AppContext.Provider value={{setUserLocale, translate, userLocale}}>
            {children}
        </AppContext.Provider>
    );
};
