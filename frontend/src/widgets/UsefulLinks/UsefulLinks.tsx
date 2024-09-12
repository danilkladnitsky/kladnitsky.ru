'use client';

import {GroupContent} from '@/shared/ui';
import {ArrowShapeDownToLine, Code} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';
import React from 'react';

export const UsefulLinks = () => {
    return (
        <GroupContent>
            <Button
                size="l"
                view="outlined"
                type="button"
                href="https://t.me/danilkladnitsky"
                target="_blank"
                disabled
            >
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
