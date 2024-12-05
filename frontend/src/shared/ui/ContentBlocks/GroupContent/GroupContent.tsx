import {ContentBlockProps} from '../../types';

import {cn} from '@/shared/utils/cn';
import styles from './GroupContent.module.scss';

export const GroupContent = ({children, className}: ContentBlockProps) => {
    return <div className={cn(styles.groupContent, className)}>{children}</div>;
};
