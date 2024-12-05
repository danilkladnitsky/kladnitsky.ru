'use client';

import {GroupContent} from '@/shared/ui';
import {ArrowShapeDownToLine, LogoTelegram} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import {useAppContext} from '@/context/AppContext';
import {TranslatedText} from '@/i18n/TranslatedText';
import styles from './UsefulLinks.module.scss';

export const UsefulLinks = () => {
    const {translate} = useAppContext();
    const cvDownloadUrl = translate('cvPath');

    return (
        <GroupContent className={styles.usefulLinks}>
            <Button
                size="l"
                type="button"
                view="action"
                href={translate('contactAppLink')}
                target="_blank"
            >
                <Icon data={LogoTelegram} />
                <TranslatedText translateKey="contactApp" />
            </Button>
            <Button
                size="l"
                view="outlined-contrast"
                type="button"
                href={cvDownloadUrl}
                target="_blank"
            >
                <Icon data={ArrowShapeDownToLine} />
                {translate('downloadCvButton')}
            </Button>
        </GroupContent>
    );
};
