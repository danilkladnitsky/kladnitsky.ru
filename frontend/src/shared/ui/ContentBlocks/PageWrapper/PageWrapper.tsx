'use client';

import React from 'react';

import {ThemeProvider} from '@gravity-ui/uikit';

import styles from './PageWrapper.module.scss';

import {ContentBlockProps} from '../../types';

export const PageWrapper = ({children}: ContentBlockProps) => {
    return (
        <ThemeProvider theme="dark">
            <main className={styles.pageWrapper}>
                <div className={styles.pageContent}>{children}</div>
            </main>
        </ThemeProvider>
    );
};
