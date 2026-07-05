import { initMenu } from "./responsive.js";
document.addEventListener("DOMContentLoaded", async () => {
    const includes = document.querySelectorAll("[data-include]");

    for (const item of includes) {
        const file = item.dataset.include;
        console.log("Loading:", file);

        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`Không tìm thấy: ${file}`);
            }

            item.innerHTML = await response.text();
        } catch (err) {
            console.error(err);
        }
    }
    initMenu();
});