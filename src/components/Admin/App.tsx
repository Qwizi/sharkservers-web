'use client';
import * as React from "react";
import {
    Admin,
    BooleanInput,
    Create,
    Edit,
    ListGuesser,
    PasswordInput,
    required,
    Resource,
    ShowGuesser,
    SimpleForm,
    TextInput,
} from 'react-admin';
import authProvider, {fetchJsonWithAuthJWTToken} from "@/components/Admin/authProvider";
import fastapiProvider from "@/components/Admin/fastapiProvider";
import {SharkServersClient as shark_api} from "sharkservers-sdk";
import {UserCreate} from "@/components/Admin/Users";

const dataProvider = fastapiProvider(shark_api.request.config.BASE + "/v1/admin", fetchJsonWithAuthJWTToken);

const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} requireAuth={true}>
        <Resource name="users" list={ListGuesser} show={ShowGuesser} create={UserCreate}/>
        <Resource name="roles" list={ListGuesser}/>
        <Resource name="scopes" list={ListGuesser}/>
        <Resource name="servers" list={ListGuesser}/>
    </Admin>
);

export default App;