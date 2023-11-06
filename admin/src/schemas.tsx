import { z } from "zod";
const MAX_FILE_SIZE = 1024 * 1024 * 2;
function checkFileType(file: File) { // file type checking
    if (file?.name) {
        const fileType = file.name.split(".").pop();
        if (["gif", "png", "jpg", "jpeg"].includes(fileType)) return true;
    }
    return false;
}

export const RegisterUserSchema = z.object({
    username: z.string().min(2).max(32).regex(new RegExp('^[a-zA-Z0-9_-]+$'), "Nazwa użytkownika musi zawierac tylko litery, cyfry oraz znaki specjalne - _"),
    email: z.coerce.string().email(),
    password: z.string().min(8),
    password2: z.string().min(8)
})
    .refine((data) => data.password === data.password2, {
        message: "Hasła nie sa takie same",
        path: ["password"],
    })

export const LoginUserSchema = z.object({
    username: z.string().min(2).max(32).regex(new RegExp('^[a-zA-Z0-9_-]+$'), "Nazwa użytkownika musi zawierac tylko litery, cyfry oraz znaki specjalne - _"),
    password: z.string().min(8),
})

export const ActivationCodeSchema = z.object({
    code: z.string().min(5).max(5)
})

export const ChangeUsernameSchema = z.object({
    username: z.string().min(2).max(32).regex(new RegExp('^[a-zA-Z0-9_-]+$'), "Nazwa użytkownika musi zawierac tylko litery, cyfry oraz znaki specjalne - _"),
})

export const changeAvatarSchema = z.object({
    avatar: z.any()
})

export const emailSchema = z.object({
    email: z.coerce.string().email(),
})

export const IdSchema = z.object({
    id: z.number().positive()
})

export const CreateRoleSchema = z.object({
    name: z.string().min(3),
    color: z.string(),
    is_staff: z.boolean(),
    scopes: z.array(z.string()).optional(),
    scopesIds: z.array(z.number()).optional()
})


export type RegisterUserSchemaInputs = z.infer<typeof RegisterUserSchema>
export type ActivationCodeSchemaInputs = z.infer<typeof ActivationCodeSchema>
export type LoginUserSchemaInputs = z.infer<typeof LoginUserSchema>
export type ChangeUsernameSchemaInputs = z.infer<typeof ChangeUsernameSchema>
export type ChangeAvatarSchemaInputs = z.infer<typeof changeAvatarSchema>
export type EmailSchemaInputs = z.infer<typeof emailSchema>
export type IdSchemaInputs = z.infer<typeof IdSchema>
export type CreateRoleSchemaInputs = z.infer<typeof CreateRoleSchema>


