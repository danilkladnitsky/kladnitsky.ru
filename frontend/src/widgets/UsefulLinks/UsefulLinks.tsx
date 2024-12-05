'use client';

import {GroupContent} from '@/shared/ui';
import {ArrowShapeDownToLine, Code, LogoTelegram} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import {useAppContext} from '@/context/AppContext';
import {TranslatedText} from '@/i18n/TranslatedText';
import styles from './UsefulLinks.module.scss';

export const UsefulLinks = () => {
    const {translate, userLocale} = useAppContext();
    const cvDownloadUrl = translate('cvPath');

    return (
        <GroupContent className={styles.usefulLinks}>
            <GroupContent>
                <Button
                    size="l"
                    type="button"
                    view="action"
                    href={translate('contactAppLink')}
                    target="_blank"
                    className="btn"
                >
                    <Icon data={userLocale === 'zh' ? ArrowShapeDownToLine : LogoTelegram} />
                    <TranslatedText translateKey="contactApp" />
                </Button>
                <Button
                    size="l"
                    view="outlined-contrast"
                    type="button"
                    href={cvDownloadUrl}
                    target="_blank"
                    className="btn"
                >
                    <Icon data={ArrowShapeDownToLine} />
                    {translate('downloadCvButton')}
                </Button>
            </GroupContent>
            <Button
                size="l"
                view="flat-contrast"
                type="button"
                href="https://github.com/danilkladnitsky"
                className="btn"
                target="_blank"
            >
                <Icon data={Code} />
                Github
            </Button>
        </GroupContent>
    );
};
