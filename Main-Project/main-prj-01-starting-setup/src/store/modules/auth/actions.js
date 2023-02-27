export default {
    login() {},
    signup(context, payload) {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAfXHSy3jEXVGWlx-ewiFfh46SAdgz1kBg', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
    }
}