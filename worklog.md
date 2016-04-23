react-native init
cd sudoku
atom .
modify entry points and register RootView -> index.ios.js / index.android.js
new folder: app, which contains
- actions
- reducers
- components
- containers
- styles
- images

EDIT (not): Buuuut because this is so simple app, we are going to hold all the files in same basket. Reducers should have index.js which exports all the reducers and so on.

EDIT BASIC FILES

npm i --save redux react-redux redux-thunk redux-logger

cmd + d -> debug in chrome AND enable Live Reload
