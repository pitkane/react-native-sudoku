# React-Native flavored Sudoku

![React-Native flavored Sudoku](https://drie.google.com/uc?export=download&id=0BwWdduICTQArdmswdWh0LXVuWXM)

https://trello.com/b/87OHkL33/react-native-sudoku

- Rendering way too much stuff on state change. Either isolate changing object further down the tree, or just make more things with images ;) Now everything is drawn with css, so everything should also be pixel perfect, but to cost of processing all that is not worth it, I guess... And Sudokuboard.js if-hell looks awful...

- "Slow" redux actions. Selecting board field takes 140ms, clearing field 130ms. At least user should see updates much faster, cos it affects user experience so much.

Work in progress, check worklog.md. Creating blog post from this: "Getting started with React-Native by building simple Sudoku app for iOS and Android."


## Tech stack
* React-Native
* React
* Redux

### Notes

#00aca6
#ff8068
#3d454c
#dbdcdd
#7d7c7c // numerot

End of part 1: https://github.com/pitkane/sudoku/commit/87ee107c3337ceaa787736627ad5a875e8cbb25c
