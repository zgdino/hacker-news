THINGS LEARNED:
-using useReducer to organize functions taken
-useContext to avoid prop drilling


HOW THIS THING WORKS:

-use context to establish useReducer and its initial state
-in the same component ensure triggering of change through useEffect
-every time useEffect is triggered it triggers fetching
-in reducer component organize what happens when each action is dispatched
-establish stories, buttons and searchForm components as a side components to redcue the complexity of the App.js

LONG STORY SHORT:
component(e.g. searchForm.js) → context.js(its function triggers certain action to be dispatched) → reducer.js defines what that action does(switch/case)