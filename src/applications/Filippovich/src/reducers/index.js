import {combineReducers} from 'redux';

import games from './gamesReducer';
import Stats from "../components/stats";
import Panel from "../components/panel";
import React from "react";

export default combineReducers({games});

