import * as React from "react"
import { Admin, Resource } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { UserList } from './users'
import { PostList } from './posts'
import authProvider from './authProvider'

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App
