import {PageWrapper} from '@/shared/ui/ContentBlocks/PageWrapper/PageWrapper';
import {ResumeBio, ResumeHeader, UsefulLinks} from '@/widgets';

import AsciiBackground from '@/components/AsciiBackground/AsciiBackground';
import {ContentWrapper} from '@/shared/ui';

import {ClientVersion} from '@/components';

import '@gravity-ui/uikit/styles/styles.css';

import {AppContextProvider} from '@/context/AppContext';
import '../styles/globals.scss';
import styles from './page.module.scss';

export default function Resume() {
    return (
        <AppContextProvider>
            <AsciiBackground />
            <PageWrapper>
                <ResumeHeader />
                <ContentWrapper className={styles.content}>
                    <ResumeBio />
                    <UsefulLinks />
                </ContentWrapper>
                <ClientVersion />
            </PageWrapper>
        </AppContextProvider>
    );
}
