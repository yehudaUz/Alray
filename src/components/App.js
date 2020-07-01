import '../style/style.css'
import React from 'react'
import { Provider } from 'react-redux'
import Store from '../store/store'
import AppRouter from '../routers/appRouter';

const store = Store();

const App = () => {

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export { App as default }