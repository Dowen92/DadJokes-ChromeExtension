const jokeDiv = document.getElementById("joke");
const newJokeBtn = document.getElementById("newJokeBtn");

async function fetchJoke() {
  jokeDiv.classList.remove("show");
  jokeDiv.textContent = "Loading...";

  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Small delay so fade-out completes before showing new joke
    setTimeout(() => {
      jokeDiv.textContent = data.joke;
      jokeDiv.classList.add("show");
    }, 200);

  } catch (err) {
    console.error(err);
    jokeDiv.textContent = "Failed to fetch joke :(";
    jokeDiv.classList.add("show");
  }
}

//Get joke when popup first opens
fetchJoke();

newJokeBtn.addEventListener("click", fetchJoke);
