import type {Metadata} from 'next';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import '../styles/globals.scss';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Danil Kladnitsky | Frontend Developer',
    description:
        'Danil Kladnitsky, frontend developer specializing in React/TypeScript with a foundation in Node.js backend and DevOps.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ru">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body>{children}</body>
        </html>
    );
}
