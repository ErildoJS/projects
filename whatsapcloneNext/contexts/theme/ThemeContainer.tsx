import React from 'react'
import {ThemeProvider as ChackraThemeProvider, ColorModeProvider, CSSReset} from '@chakra-ui/core'
//1 arq
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'

import theme from '../../styles/theme'
const ThemeContainer: React.FC = ({children}) => {
    return (
        <ChackraThemeProvider theme={theme}>
            <ColorModeProvider value="dark">
                <EmotionThemeProvider theme={theme}>
                    <CSSReset />{/** da um reset padrao no browser */}
                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChackraThemeProvider>
    )
}

export default ThemeContainer