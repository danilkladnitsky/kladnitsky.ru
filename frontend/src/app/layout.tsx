import type {Metadata} from 'next';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import '../styles/globals.scss';

export const metadata: Metadata = {
    title: 'Kladnitsky Danil | Frontend developer',
    description: 'Making modern web applications with React and Typescript',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
