'use client';

import {GroupContent} from '@/shared/ui';
import {ArrowShapeDownToLine, Code} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';
import React from 'react';

import styles from './UsefulLinks.module.scss';

export const UsefulLinks = () => {
    return (
        <GroupContent className={styles.usefulLinks}>
            <Button size="l" view="outlined" type="button" href="/resume/ru.pdf" target="_blank">
                <Icon data={ArrowShapeDownToLine} />
                Скачать CV
            </Button>
            <Button
                size="l"
                view="outlined"
                type="button"
                href="https://github.com/danilkladnitsky"
                target="_blank"
            >
                <Icon data={Code} />
                Github
            </Button>
        </GroupContent>
    );
};
