import React from 'react';

import {ContentWrapper} from '@/shared/ui';
import {Text} from '@gravity-ui/uikit';

import styles from './ResumeBio.module.scss';
import {SkillsList} from './sub/SkillsList';

const FRONTEND_SKILLS = ['react', 'typescript', 'react-query'];
const BACKEND_SKILLS = ['node.js', 'nest.js', 'keystone.js'];
const DEVOPS_SKILLS = ['docker', 'minikube', 'github actions'];

export const ResumeBio = () => {
    return (
        <section>
            <ContentWrapper className={styles.bio}>
                <Text className={styles.greetings} as="h2" variant="header-2">
                    Добрый день.
                </Text>
                <Text as="h1" variant="header-1">
                    Меня зовут Данил Кладницкий,
                    <br /> я разрабатываю веб-интерфейсы в Газпромбанке.
                </Text>
                <div className={styles.skills}>
                    <Text as="h3" variant="header-1">
                        Создаю frontend-приложения с помощью
                        <SkillsList skills={FRONTEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        Проектирую backend-часть на
                        <SkillsList skills={BACKEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        Деплою проекты вместе с
                        <SkillsList skills={DEVOPS_SKILLS} />
                    </Text>
                </div>
            </ContentWrapper>
        </section>
    );
};
