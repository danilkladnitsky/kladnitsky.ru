import React, {ReactNode} from 'react';

import {ContentBlockWrapper} from '../_ContentBlockWrapper/_ContentBlockWrapper';

interface Props {
    children: ReactNode;
    className?: string;
}

export const TextContent = ({children, className}: Props) => {
    return <ContentBlockWrapper className={className}>{children}</ContentBlockWrapper>;
};
