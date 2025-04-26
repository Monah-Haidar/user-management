export interface LoginCredentials {
    email: string;
    password: string;
    status: number;
    result: {
        message: string;
        data: {
            accessToken: string;
            expiresIn: number;
        };
    };
}