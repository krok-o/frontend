import * as React from "react";
import { List, Datagrid, TextField, UrlField } from "react-admin";

export const RepositoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <UrlField source="url" />
    </Datagrid>
  </List>
);
