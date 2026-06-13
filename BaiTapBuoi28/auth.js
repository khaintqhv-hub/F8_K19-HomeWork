const API_URL = "http://localhost:3000/users";

function saveTokens(accessToken, refreshToken) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
}

function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function getRefreshToken() {
    return localStorage.getItem("refreshToken");
}

function clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

async function refreshAccessToken() {
    const refreshToken = getRefreshToken();

    if (!refreshToken) return null;

    try {
        const response = await fetch(`${API_URL}/refreshToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ refreshToken })
        });

        if (!response.ok) return null;

        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);

        return data.accessToken;
    } catch (error) {
        return null;
    }
}

async function login(username, password) {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) throw new Error("Đăng nhập thất bại");

        const data = await response.json();
        saveTokens(data.accessToken, data.refreshToken);

        window.location.href = "/profile.html";
    } catch (error) {
        alert(error.message);
    }
}

async function authFetch(url, options = {}, retry = true) {
    const accessToken = getAccessToken();

    const headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${accessToken}`
    };

    const response = await fetch(`${API_URL}${url}`, {
        ...options,
        headers
    });

    if (response.status === 401 && retry) {
        const newAccessToken = await refreshAccessToken();

        if (newAccessToken) {
            return authFetch(url, options, false);
        }

        clearTokens();
        window.location.href = "/login.html";
        return;
    }

    return response;
}