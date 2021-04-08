import * as React from "react"
import { Admin, Resource } from "react-admin"
import { RepositoryList } from './repositories'
import authProvider from './authProvider'
import dataProvider from "./dataProvider"

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="repositories" list={RepositoryList} />
  </Admin>
)

export default App
