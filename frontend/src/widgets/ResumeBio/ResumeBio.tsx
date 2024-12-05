import {ContentWrapper} from '@/shared/ui';

import {Text} from '@gravity-ui/uikit';

import {TranslatedText} from '@/i18n/TranslatedText';
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
                    <TranslatedText translateKey="greetingShort" />
                </Text>
                <Text className={styles.role} as="h1" variant="header-1">
                    <TranslatedText translateKey="greetingLong" />
                </Text>
                <div className={styles.skills}>
                    <Text as="h3" variant="header-1">
                        <TranslatedText translateKey="aboutFrontend" />
                        <SkillsList skills={FRONTEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        <TranslatedText translateKey="aboutBackend" />
                        <SkillsList skills={BACKEND_SKILLS} />
                    </Text>
                    <Text as="h3" variant="header-1">
                        <TranslatedText translateKey="aboutDevOps" />
                        <SkillsList skills={DEVOPS_SKILLS} />
                    </Text>
                </div>
            </ContentWrapper>
        </section>
    );
};
