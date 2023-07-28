'use client';
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider, {fetchJsonWithAuthJWTToken} from "@/components/Admin/authProvider";
import fastapiProvider from "@/components/Admin/fastapiProvider";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
const dataProvider = fastapiProvider(shark_api.request.config.BASE + "/v1/admin", fetchJsonWithAuthJWTToken);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth={true}>
    <Resource name="users" list={ListGuesser}/>
    <Resource name="roles" list={ListGuesser}/>
    <Resource name="scopes" list={ListGuesser}/>
  </Admin>
);

export default App;