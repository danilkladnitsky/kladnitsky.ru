'use client';

import {GroupContent, HeaderContent} from '@/shared/ui';

import {Code} from '@gravity-ui/icons';
import {Button, Icon, Text} from '@gravity-ui/uikit';
import styles from './ResumeHeader.module.scss';

export const ResumeHeader = () => {
    return (
        <HeaderContent className={styles.headerWrapper}>
            <GroupContent className={styles.resumeHeader}>
                <Text as="h2" variant="header-1">
                    kladnitsky.ru
                </Text>
                <Button
                    size="l"
                    view="flat-contrast"
                    type="button"
                    href="https://github.com/danilkladnitsky"
                    target="_blank"
                >
                    <Icon data={Code} />
                    Github
                </Button>
            </GroupContent>
        </HeaderContent>
    );
};
