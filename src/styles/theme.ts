interface Color {
    main: string
    light: string
    dark: string
    text: string
}

interface ColorsMatrix {
    primary: Color
    secondary: Color
}

export const colors: ColorsMatrix = {
    primary: {
        main: '#6667ab',
        light: '#9695dd',
        dark: '#373d7b',
        text: '#ffffff',
    },
    secondary: {
        main: '#00ba96',
        light: '#5bedc7',
        dark: '#008968',
        text: '#000000',
    },
}
