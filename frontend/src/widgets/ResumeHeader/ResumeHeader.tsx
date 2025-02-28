'use client';

import {GroupContent, HeaderContent} from '@/shared/ui';

import {UserLocale, useAppContext} from '@/context/AppContext';
import {RadioButton, RadioButtonOption, Text} from '@gravity-ui/uikit';
import styles from './ResumeHeader.module.scss';

const LANGUAGES_OPTIONS: RadioButtonOption[] = [
    {
        value: 'ru',
        content: 'Ru',
    },
    {
        value: 'en',
        content: 'En',
    },
    {
        value: 'zh',
        content: '中文',
    },
];

export const ResumeHeader = () => {
    const {userLocale, setUserLocale} = useAppContext();
    return (
        <HeaderContent className={styles.headerWrapper}>
            <GroupContent className={styles.resumeHeader}>
                <Text as="h2" variant="header-1">
                    kladnitsky.ru | develop
                </Text>
                <RadioButton
                    width="max"
                    className={styles.languagePicker}
                    defaultValue={userLocale}
                    options={LANGUAGES_OPTIONS}
                    onChange={(e) => setUserLocale(e.target.value as UserLocale)}
                />
            </GroupContent>
        </HeaderContent>
    );
};
