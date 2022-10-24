const apiUrl = process.env.REACT_APP_API_URL;

/**
 * fetch for API data access and error handling
 * @param {object} url
 * @returns {object} data
 */
async function customFetch(url, options) {
  console.log(url);
  try {
    const response = await fetch(`${apiUrl}/api/v1${url}`, options);
    if (response.status < 200 && response.status >= 300) {
      return new Error("Problème d'accès aux données de l'API");
    }
    return response.json();
  } catch {
    throw new Error("Problème d'accès aux données de l'API");
  }
}

/**
 * Function for the connexion in API
 * @param {*} email
 * @param {*} password
 * @returns token
 */
export async function postLogin(email, password) {
  const response = await customFetch(`/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response;
}

/**
 * function for inscription in API
 * @param {*} email
 * @param {*} password
 * @param {*} firstName
 * @param {*} lastName
 * @returns id and email
 */
export async function postSignup(email, password, firstName, lastName) {
  const response = await customFetch("/user/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, firstName, lastName }),
  });
  return response;
}

/**
 * function for access on profile
 * @param {*} token
 * @returns profile data
 */
export async function postProfile(token) {
  const response = await customFetch(`/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}

/**
 * function for update data on profile
 * @param {*} token
 * @returns data update
 */
export async function putProfile(token, payload) {
  const response = await customFetch(`/user/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return response;
}
