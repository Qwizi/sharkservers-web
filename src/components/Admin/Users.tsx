import {BooleanInput, Create, Edit, PasswordInput, required, SimpleForm, TextInput} from "react-admin";
import * as React from "react";

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="username" validate={[required()]} fullWidth name={"username"}/>
            <PasswordInput source="password" validate={[required()]} fullWidth name={"password"}/>
            <TextInput source="email" validate={[required()]} fullWidth name={"email"}/>
            <BooleanInput source="is_activated" validate={[required()]} defaultValue={true}/>
            <BooleanInput source="is_superuser" validate={[required()]} defaultValue={false}/>
        </SimpleForm>
    </Create>
);