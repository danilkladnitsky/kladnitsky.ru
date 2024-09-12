'use client';

import React from 'react';

import {GroupContent, HeaderContent} from '@/shared/ui';

import styles from './ResumeHeader.module.scss';
import {Button, Icon, Text} from '@gravity-ui/uikit';
import {LogoTelegram} from '@gravity-ui/icons';

export const ResumeHeader = () => {
    return (
        <HeaderContent className={styles.headerWrapper}>
            <GroupContent className={styles.resumeHeader}>
                <Text as="h2" variant="header-1">
                    kladnitsky.ru
                </Text>
                <GroupContent>
                    <Button view="action" href="https://t.me/danilkladnitsky" target="_blank">
                        <Icon data={LogoTelegram} />
                        Telegram
                    </Button>
                </GroupContent>
            </GroupContent>
        </HeaderContent>
    );
};
