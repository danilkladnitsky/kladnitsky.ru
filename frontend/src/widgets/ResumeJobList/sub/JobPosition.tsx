'use client';

import {GroupContent, HeaderContent} from '@/shared/ui';
import {Text, UserAvatar} from '@gravity-ui/uikit';
import React, {ReactNode} from 'react';

import styles from './JobPosition.module.scss';

export interface JobPositionProps {
    companyName: string;
    companyLogoUrl: string;
    position: string;
    description: ReactNode;
    date: string;
}

export const JobPosition = ({
    companyName,
    date,
    description,
    position,
    companyLogoUrl,
}: JobPositionProps) => {
    return (
        <p className={styles.jobPosition}>
            <GroupContent className={styles.company}>
                <HeaderContent>
                    <Text as="h3" variant="header-1">
                        {companyName}
                    </Text>
                    <Text as="h3" variant="subheader-2" color="complementary">
                        {position}
                    </Text>
                </HeaderContent>
                <div className={styles.companyLogo}>
                    <UserAvatar imgUrl={companyLogoUrl} size="m" />
                </div>
            </GroupContent>
            <div className={styles.description}>
                <Text as="span" variant="body-3">
                    {description}
                </Text>
                <Text color="secondary" variant="subheader-1">
                    {date}
                </Text>
            </div>
        </p>
    );
};
