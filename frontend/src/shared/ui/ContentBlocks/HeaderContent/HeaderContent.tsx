import {ReactNode} from 'react';

import {cn} from '@/shared/utils/cn';

import {ContentBlockWrapper} from '../_ContentBlockWrapper/_ContentBlockWrapper';
import styles from './HeaderContent.module.scss';

interface Props {
    children: ReactNode;
    className?: string;
}

export const HeaderContent = ({children, className}: Props) => {
    return (
        <header className={cn(styles.headerContent, className)}>
            <ContentBlockWrapper>{children}</ContentBlockWrapper>
        </header>
    );
};
