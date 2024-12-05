'use client';

import {useAppContext} from '@/context/AppContext';
import {LocaleConfig} from './locale-config';

interface Props {
    translateKey: keyof LocaleConfig;
}

export const TranslatedText = ({translateKey}: Props) => {
    const {translate} = useAppContext();

    return <span style={{whiteSpace: 'pre-line'}}>{translate(translateKey)}</span>;
};
