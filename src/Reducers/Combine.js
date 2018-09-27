var redux = require('redux'); // add thư viện redux
var StateApp = require('../Reducers/StateApp.js');

var reducer = redux.combineReducers({
    StateApp: StateApp,
});

module.exports = reducer;