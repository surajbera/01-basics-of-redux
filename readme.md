- Reducer is a pure function which means how to do
  
- Deprecated means this feature is supported but not recommended
  
- Root reducer is a combination of all reducers
  
- store.subscribe runs when something changes in the redux store
  
- There's no need to import extra package for enabling 'Redux Devtools' while using 'Redux Toolkit'
  
- configureStore also allow us to dispatch asynchronous actions
  
- Actions can be created using redux toolkit using createAction
  
- Reducers can be created using redux toolkit using createReducer

- Code inside createReducer looks mutable, but under the hood, immer library is responsible for transforming that mutable code into immutable format