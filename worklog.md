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

END OF PART 1? https://github.com/pitkane/sudoku/commit/87ee107c3337ceaa787736627ad5a875e8cbb25c

What need to be done?

- Sketch
- App logic
- Redux actions:

#00aca6
#ff8068
#3d454c
#dbdcdd
#7d7c7c // numerot


npm i react-native-router-flux --save

npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint eslint-plugin-promise
