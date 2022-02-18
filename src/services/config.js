const config = {
    clientId: '9XZ7jKTmjIuVcmSXtaTUTlX0bjKmkmEqDvmTNM6D',
    url: 'http://localhost:8000/',
    // url: 'https://backend.triboapp.com/api/',
    //url: 'http://138.68.90.13:8002/',
    auth: {
        loginUrl: 'c/auth/web/token',
        signUpUrl: 'c/auth/web/register/',
        forgetUrl: 'v2/auth/reset-password',
        resendUrl: 'c/auth/web/resent',
    }
};

export default config;
