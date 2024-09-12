import React from 'react';

import {GroupContent} from '@/shared/ui';
import {Text} from '@gravity-ui/uikit';

import styles from './SkillsList.module.scss';

interface Props {
    skills: string[];
}

export const SkillsList = ({skills}: Props) => {
    return (
        <GroupContent className={styles.skillsList}>
            {skills.map((skill, idx) => (
                <Text variant="subheader-3" as="span" color="brand" key={skill}>
                    {skill}
                    {idx < skills.length - 1 ? ',' : ''}
                </Text>
            ))}
        </GroupContent>
    );
};
