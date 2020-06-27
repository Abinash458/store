import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import lightTheme from './theme/Light';
import darkTheme from './theme/Dark';
import Container from './theme/components/Container';
import { darkModeAction } from './redux/actions/config_action';

import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Default from './components/Default/Default';

import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.scss';


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
                <React.Fragment>
                    <Navbar themeChange={themeChange} />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route path="/details" component={ProductDetails} />
                        <Route path="/cart" component={Cart} />
                        <Route component={Default} />
                    </Switch>
                </React.Fragment>
            </Container>
        </ThemeProvider>
    );
}

export default App;
