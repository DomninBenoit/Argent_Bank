const apiUrl = process.env.API_URL;

/**
 * fetch for API data access and error handling
 * @param {object} url
 * @returns {object} data
 */
async function customFetch(url) {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
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
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
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
  const response = await customFetch(
    "http://localhost:3001/api/v1/user/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    }
  );
  return response.json();
}

/**
 * function for access on profile
 * @param {*} token
 * @returns profile data
 */
export async function postProfile(token) {
  const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

/**
 * function for update data on profile
 * @param {*} token
 * @returns data update
 */
export async function putProfile(token, email, password, firstName, lastName) {
  const response = await customFetch(
    `http://localhost:3001/api/v1/user/profile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        body: JSON.stringify({ email, password, firstName, lastName }),
      },
    }
  );
  return response.data.body;
}
