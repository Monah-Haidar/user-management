export interface AuthStore {
    expiresIn: number | null,
    accessToken: string | null,
    login: (data: { accessToken: string; expiresIn: number}) => void,
    logout: () => void,
}
