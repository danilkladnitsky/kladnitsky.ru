'use client';

import {GroupContent} from '@/shared/ui';
import {ArrowShapeDownToLine, LogoTelegram} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';

import styles from './UsefulLinks.module.scss';

export const UsefulLinks = () => {
    return (
        <GroupContent className={styles.usefulLinks}>
            <Button
                size="l"
                type="button"
                view="action"
                href="https://t.me/danilkladnitsky"
                target="_blank"
            >
                <Icon data={LogoTelegram} />
                Telegram
            </Button>
            <Button
                size="l"
                view="outlined-contrast"
                type="button"
                href="/resume/ru.pdf"
                target="_blank"
            >
                <Icon data={ArrowShapeDownToLine} />
                Скачать CV
            </Button>
        </GroupContent>
    );
};
