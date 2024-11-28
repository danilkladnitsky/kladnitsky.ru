import {ContentWrapper} from '@/shared/ui';
import {Text} from '@gravity-ui/uikit';

import styles from './ResumeBio.module.scss';
import {SkillsList} from './sub/SkillsList';

const FRONTEND_SKILLS = ['react', 'typescript', 'react-query'];
const BACKEND_SKILLS = ['node.js', 'nest.js', 'python', 'fastapi'];
const DEVOPS_SKILLS = ['docker', 'minikube', 'github actions'];

export const ResumeBio = () => {
    return (
        <section>
            <ContentWrapper className={styles.bio}>
                <Text className={styles.greetings} as="h2" variant="header-2">
                    Добрый деньs.
                </Text>
                <Text className={styles.role} as="h1" variant="header-1">
                    Меня зовут Данил Кладницкий,
                    <br /> я разрабатываю веб-интерфейсы в Газпромбанке.
                </Text>
                <div className={styles.skills}>
                    <Text as="h3" variant="header-1">
                        Создаю frontend-приложения с помощью
                        <SkillsList skills={FRONTEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        Проектирую backend на технологиях
                        <SkillsList skills={BACKEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        Для деплоя приложений использую
                        <SkillsList skills={DEVOPS_SKILLS} />
                    </Text>
                </div>
            </ContentWrapper>
        </section>
    );
};
