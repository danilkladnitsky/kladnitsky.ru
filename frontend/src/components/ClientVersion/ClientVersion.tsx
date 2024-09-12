'use client';

import {CodeCommit} from '@gravity-ui/icons';
import {Icon, Label} from '@gravity-ui/uikit';
import React from 'react';

interface Props {
    className?: string;
}

export const ClientVersion = ({className}: Props) => {
    return (
        <div className={className}>
            <a href="https://github.com/danilkladnitsky/gravity-ui" target="_blank">
                <Label size="s" icon={<Icon data={CodeCommit} />}>
                    fsf4d0
                </Label>
            </a>
        </div>
    );
};
