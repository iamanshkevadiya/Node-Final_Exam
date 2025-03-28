import { createUser } from "../../components/api_user.js";

const signupData = async (e) => {
  e.preventDefault();
  console.log("Signup form submitted!"); // Debugging

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { name, email, password };
  console.log("User data:", user); // Debugging

  try {
    const result = await createUser(user);
    console.log("Signup success:", result);
    
    // Clear input fields
    document.getElementById("signupForm").reset();
  } catch (error) {
    console.error("Signup error:", error);
  }
};

document.getElementById("signupForm").addEventListener("submit", signupData);
