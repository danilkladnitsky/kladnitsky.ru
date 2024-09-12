import React from 'react';

import {ContentBlockProps} from '../../types';

import styles from './GroupContent.module.scss';
import {cn} from '@/shared/utils/cn';

export const GroupContent = ({children, className}: ContentBlockProps) => {
    return <div className={cn(styles.groupContent, className)}>{children}</div>;
};
