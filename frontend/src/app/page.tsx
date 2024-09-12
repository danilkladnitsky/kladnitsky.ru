import {PageWrapper} from '@/shared/ui/ContentBlocks/PageWrapper/PageWrapper';
import {ResumeBio, ResumeHeader, UsefulLinks} from '@/widgets';

import AsciiBackground from '@/components/AsciiBackground/AsciiBackground';
import {ContentWrapper} from '@/shared/ui';

import styles from './page.module.scss';
import {ClientVersion} from '@/components';

export default function Resume() {
    return (
        <>
            <AsciiBackground />
            <PageWrapper>
                <ResumeHeader />
                <ContentWrapper className={styles.content}>
                    <ResumeBio />
                    <UsefulLinks />
                </ContentWrapper>
                <ClientVersion className={styles.footer} />
            </PageWrapper>
        </>
    );
}
