import {Card} from '@gravity-ui/uikit';

import styles from './WeixinQR.module.scss';

export const WeixinQR = () => {
    return (
        <Card className={styles.qr}>
            <img className={styles.qrImg} src="weixin/qrcode.jpg" />
        </Card>
    );
};
