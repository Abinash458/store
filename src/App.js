import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import lightTheme from './theme/Light';
import darkTheme from './theme/Dark';
import Container from './theme/components/Container';
import {darkModeAction} from './redux/actions/config_action';

import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const config = useSelector(state => state.config);
    const themeMode = config.darkMode
    useEffect(() => {
        if(!config.darkMode) {
            dispatch(darkModeAction(window.localStorage.getItem('theme')))
        }
    }, [config.darkMode, dispatch])

    const themeChange = (value) => {
        window.localStorage.setItem('theme', value)
        dispatch(darkModeAction(value))
    }

    return (
        <ThemeProvider theme={config.darkMode === "dark" ? darkTheme : lightTheme}>
            <Container>
                <Navbar themeChange={themeChange} />
                <h1 className={styles.AppHeader}>SareGama</h1>
            </Container>
        </ThemeProvider>
    );
}

export default App;
