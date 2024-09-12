/* eslint-disable no-console */
'use client';

export const ClientVersion = () => {
    const commitHash = process.env.APP_VERSION;

    console.info(
        'Версия клиента: ',
        commitHash,
        `https://github.com/danilkladnitsky/kladnitsky.ru/commit/${commitHash}`,
    );
    return null;
};
