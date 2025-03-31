export interface TypeTheme {
    dark: string;
    light: string;
    reset: string;
} 

export const TypeThemeInit: TypeTheme = {
    dark: 'dark',
    light: 'light',
    reset: 'reset'
};

export const applyTheme = (theme: string): string => {
    document.documentElement.classList.remove('light-mode', 'dark-mode');

    if (theme === TypeThemeInit.light) {
        document.documentElement.classList.add('light-mode');
    }

    if (theme === TypeThemeInit.dark) {
        document.documentElement.classList.add('dark-mode');
    }

    if (theme === TypeThemeInit.reset) {
        theme = getSystemTheme()
        if (theme === TypeThemeInit.dark) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.add('light-mode');
        }
    }

    localStorage.setItem('theme', theme);
    return theme
};

export const getSystemTheme = (): string => {
    return (globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export const getSystemLocalStorage = (): string => {
    return localStorage.getItem('theme')!;
};
