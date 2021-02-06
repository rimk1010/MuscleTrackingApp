export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

//Action Crater
export const loginAction = (user) => {
    return {
        type:LOGIN,
        payload:{
            displayName: user.displayName
        }
    }
}
export const logoutAction = () => {
    return {
        type:LOGOUT,
    }
}