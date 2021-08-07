// in src/App.js
import * as React from "react";
import { Admin, Resource } from "react-admin";
import { RepositoryList } from "./repositories";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import LoginPage from "./loginPage";
import Login from "./login";

// Resource will be repositories which will gather repositories as a list
// and `repository` singular which will return a view like RepositoryInfo.
// which contains a single repository view.
// For what it's worth, this will force some common functionality on the API.
const App = () => (
  <Admin loginPage={Login} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="repositories" list={RepositoryList} />
  </Admin>
);

export default App;
