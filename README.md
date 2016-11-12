This is the Redux TodoList example, found on their website. A lot of the stuff like links/addtodo is obviously not related, but we can use it as a reference. 

1. Fork, clone, npm install
2. Develop
3. Run "npm run dev" and navigate to localhost 8080 to see the dev server.

How Redux works: 

"Actions" happen: they're just objects located in the actions folder of src.

They get reduced by Reducers in the reducers folder.

Components are *presentational* and *container* components:

Presentational components do not handle data, they just accept it from container components, which 
pass down data as props (properties) to their child element...which is the presentational component. 

