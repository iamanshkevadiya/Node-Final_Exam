const getUserData = () => {
  return fetch("http://localhost:8095/users").then((response) =>
    response.json()
  );
};

const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:8095/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("User created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

const Loginuser = async (data) => {
  try {
    const response = await fetch("http://localhost:8095/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Login failed! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Login response:", result);
    return result; // Ensure login.js gets the response
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};


export { createUser, getUserData, Loginuser };
