const yearElement = document.querySelector("#year");
const copyDiscordButton = document.querySelector("#copy-discord");

yearElement.textContent = new Date().getFullYear();

copyDiscordButton.addEventListener("click", async () => {
    const username = copyDiscordButton.dataset.discord;

    try {
        await navigator.clipboard.writeText(username);
        copyDiscordButton.textContent = "Copied: gghalos";
    } catch {
        copyDiscordButton.textContent = username;
    }

    setTimeout(() => {
        copyDiscordButton.textContent = "Copy Discord username";
    }, 1800);
});
