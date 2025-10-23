const API_ENDPOINT = "https://dummyjson.com/users";

document.addEventListener("DOMContentLoaded", () => {
  fetchTeamMembers();
});

async function fetchTeamMembers() {
  const loader = document.getElementById("loader");
  const teamContainer = document.getElementById("teamContainer");
  const errorBox = document.getElementById("error");

  try {
    loader.style.display = "block";
    errorBox.style.display = "none";

    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Server Error: ${response.status}`);
    }

    const data = await response.json();
    renderTeamMembers(data.users);
  } catch (error) {
    console.error("Error fetching team data:", error);
    errorBox.textContent = "Failed to load team members. Please try again later.";
    errorBox.style.display = "block";
  } finally {
    loader.style.display = "none";
  }
}

function renderTeamMembers(users = []) {
  const teamContainer = document.getElementById("teamContainer");
  teamContainer.innerHTML = "";

  if (users.length === 0) {
    teamContainer.innerHTML = `<p>No team members found.</p>`;
    return;
  }

  users.forEach((user) => {
    const { firstName, lastName, image, company } = user;

    const card = document.createElement("div");
    card.classList.add("userCard");
    card.innerHTML = `
      <img src="${image}" alt="${firstName}" />
      <h3>${firstName} ${lastName}</h3>
      <p><strong>Role:</strong> ${company?.title || "Not Available"}</p>
      <p><strong>Company:</strong> ${company?.name || "Unknown"}</p>
    `;

    teamContainer.appendChild(card);
  });
}
