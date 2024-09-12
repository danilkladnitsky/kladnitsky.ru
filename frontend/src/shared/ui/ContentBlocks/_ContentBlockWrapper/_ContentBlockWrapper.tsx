import React from 'react';

import {cn} from '@/shared/utils/cn';

import {ContentBlockProps} from '../../types';

import styles from './_ContentBlockWrapper.module.scss';

export const ContentBlockWrapper = ({children, className}: ContentBlockProps) => {
    return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
