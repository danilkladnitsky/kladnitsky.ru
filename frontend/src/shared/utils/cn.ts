export const cn = <T extends string | undefined>(...args: T[]) => args.filter(Boolean).join(' ');
