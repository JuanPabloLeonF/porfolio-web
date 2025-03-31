export const applyTheme = (theme: string): string => {
    document.documentElement.classList.remove('light-mode', 'dark-mode');
    if (theme === 'light') {
        document.documentElement.classList.add('light-mode');
    }

    if (theme === 'reset') {
        theme = getSystemTheme()
    }
    localStorage.setItem('theme', theme);
    return theme
};

export const getSystemTheme = (): string => {
    return (globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

export interface TypeTheme {
    dark: string;
    light: string;
} 

export const TypeThemeInit: TypeTheme = {
    dark: 'dark',
    light: 'light'
};
