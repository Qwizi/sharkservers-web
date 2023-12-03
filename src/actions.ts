'use server'
import { z } from "zod"
import { RegisterUserInputs, registerFormSchema } from "@/components/auth/register-form";
import { sharkApi } from "@/lib/server-api";
import { action, authAction } from "@/lib/action";
import { RegisterUserSchema, ActivationCodeSchema, ActivationCodeSchemaInputs, LoginUserSchema, LoginUserSchemaInputs, ChangeUsernameSchema, ChangeUsernameSchemaInputs, changeAvatarSchema, ChangeAvatarSchemaInputs, emailSchema, EmailSchemaInputs, CreateUserSchemaInputs, CreateUserSchema, UserIdSchema, UserIdSchemaInputs, UpdateUserSchema, UpdateUserSchemaInputs } from "@/schemas";
import { revalidatePath } from "next/cache";

const HOME_PATH = "/"
const USERS_PATH = "/users"
const ADMIN_USERS_PATH = "/admin/users"

export const registerUserAction = action(RegisterUserSchema, async (data: RegisterUserInputs) => {
    const api = await sharkApi()
    const responseData = await api.auth.register({
        username: data.username,
        email: data.email,
        password: data.password,
        password2: data.password2,
    })
    revalidatePath(HOME_PATH);
    revalidatePath(USERS_PATH);
    return responseData
})

export const activateUserAction = action(ActivationCodeSchema, async (data: ActivationCodeSchemaInputs) => {
    const api = await sharkApi()
    const responseData = await api.auth.activateUser({
        code: data.code
    })
    return responseData
})

export const changeUsernameAction = authAction(ChangeUsernameSchema, async ({ ...data }: ChangeUsernameSchemaInputs, { session }) => {
    const api = await sharkApi()
    console.log(data)
    const response = await api.users.changeUserUsername({
        username: data.username
    })
    revalidatePath(HOME_PATH);
    revalidatePath(USERS_PATH);
    return response
})

export const changeAvatarAction = authAction(changeAvatarSchema, async ({ ...data }: ChangeAvatarSchemaInputs, { session }) => {
    console.log(data)
    const api = await sharkApi()
    const response = await api.users.uploadUserAvatar({
        avatar: data.avatar
    })
    revalidatePath(HOME_PATH);
    revalidatePath(USERS_PATH);
    return { test: true }
})

export const requestChangeEmailAction = authAction(emailSchema, async ({ ...data }: EmailSchemaInputs, { session, api }) => {
    return await api.users.requestChangeUserEmail({
        email: data.email
    })
})

export const confirmChangeEmailAction = authAction(ActivationCodeSchema, async (data: ActivationCodeSchemaInputs, { session, api }) => {
    return await api.users.confirmChangeUserEmail({
        code: data.code
    })
})

export const adminCreateUserAction = authAction(CreateUserSchema, async (data: CreateUserSchemaInputs, { session, api }) => {
    const response = await api.adminUsers.adminCreateUser({
        username: data.username,
        email: data.email,
        password: data.password,
        is_activated: data.is_activated,
        is_superuser: data.is_superuser,
    })
    revalidatePath(ADMIN_USERS_PATH);
    return response
})

export const adminDeleteUserAction = authAction(UserIdSchema, async (data: UserIdSchemaInputs, { session, api }) => {
    const response = await api.adminUsers.adminDeleteUser(data.id)
    revalidatePath(ADMIN_USERS_PATH);
    return response
})

export const adminUpdateUserAction = authAction(UpdateUserSchema, async (data: UpdateUserSchemaInputs, { session, api }) => {
    let updatedData = {
        username: data.username,
        email: data.email,
        is_activated: data.is_activated,
        is_superuser: data.is_superuser,
        display_role: Number(data.display_role)
    }
    if (data?.roles && data.roles.length >  0) {
        const roles = data.roles?.map((role) => {
            return Number(role)
        })
        updatedData = {...updatedData, roles: roles}
    }
    console.log(updatedData)
    const response = await api.adminUsers.adminUpdateUser(data.id, updatedData)
    revalidatePath(ADMIN_USERS_PATH);
    revalidatePath(USERS_PATH);
    revalidatePath(HOME_PATH);
    return response
})