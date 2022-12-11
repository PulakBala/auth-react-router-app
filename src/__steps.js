/*
Basic context api setup
--------------------------
1. context API : share auth state with other components (across the application)
2.  Create an UserContext 
3.ContextProvider with passed children
4.set the UserContext in the index.js
5.Now to consume the context: export the AuthContext from UserContext
6.Now at Header or Home () or  anywhere else): use useContext hook to get the in the context 
-------------------------
Auth integration
1. use getAuth by passing the app form firebase config

*/