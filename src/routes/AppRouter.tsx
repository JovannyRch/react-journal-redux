import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalPage } from '../pages/journal/JournalPage';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path='/' component={JournalPage} />
            </Switch>
        </Router>
    )
}
