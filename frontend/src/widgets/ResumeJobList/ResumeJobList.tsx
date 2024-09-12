import {ContentWrapper, HeaderContent} from '@/shared/ui';
import {Text} from '@gravity-ui/uikit';
import React from 'react';
import {JobPosition, JobPositionProps as JobPositionType} from './sub/JobPosition';

import styles from './ResumeJobList.module.scss';

const JOBS: JobPositionType[] = [
    {
        companyName: 'Газпромбанк',
        companyLogoUrl: 'https://avatars.githubusercontent.com/u/11322145?v=4',
        date: '2023.10 - 2024',
        description: 'Frontend разработчик',
        position: 'Senior Frontend разработчик',
    },
    {
        companyName: 'Газпромбанк',
        companyLogoUrl: 'https://avatars.githubusercontent.com/u/11322145?v=4',
        date: '2023.10 - 2024',
        description: 'Frontend разработчик',
        position: 'Senior Frontend разработчик',
    },
    {
        companyName: 'Газпромбанк',
        companyLogoUrl: 'https://avatars.githubusercontent.com/u/11322145?v=4',
        date: '2023.10 - 2024',
        description: 'Frontend разработчик',
        position: 'Senior Frontend разработчик',
    },
    {
        companyName: 'Газпромбанк',
        companyLogoUrl: 'https://avatars.githubusercontent.com/u/11322145?v=4',
        date: '2023.10 - 2024',
        description: 'Frontend разработчик',
        position: 'Senior Frontend разработчик',
    },
    {
        companyName: 'Газпромбанк',
        companyLogoUrl: 'https://avatars.githubusercontent.com/u/11322145?v=4',
        date: '2023.10 - 2024',
        description: 'Frontend разработчик',
        position: 'Senior Frontend разработчик',
    },
];

export const ResumeJobList = () => {
    return (
        <section>
            <ContentWrapper>
                <HeaderContent>
                    <Text as="h2" variant="header-2">
                        Места работы
                    </Text>
                </HeaderContent>
                <ContentWrapper className={styles.jobList}>
                    {JOBS.map((job, idx) => (
                        <JobPosition {...job} key={idx} />
                    ))}
                </ContentWrapper>
            </ContentWrapper>
        </section>
    );
};
