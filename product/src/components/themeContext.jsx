import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const Lop = React.createContext(
    themes.dark // 默认值
);
// export const Lop = React.createContext('red');