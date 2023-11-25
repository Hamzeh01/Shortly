// Assuming you have a function to handle form submission like this
document.getElementById("shorten-form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission
    
    // Get the input value
    const originalUrl = document.getElementById("shorten-input").value;
    
    // Validate URL using a regular expression
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(originalUrl)) {
        document.getElementById("error").innerText = "Please enter a valid URL";
        return;
    }

    // Call your URL shortening function here and update the UI with the shortened URL
    const shortenedUrl = shortenUrl(originalUrl);

    // Assuming you have a function to add a new link item to the UI
    addLinkItem(originalUrl, shortenedUrl);

    // Clear the input field
    document.getElementById("shorten-input").value = "";
});

function shortenUrl(originalUrl) {
    // Implement your URL shortening logic here (using a library or a custom algorithm)
    // ...

    // For demonstration purposes, let's just append a random string for simplicity
    const randomString = Math.random().toString(36).substring(7);
    return `https://rel.ink/${randomString}`;
}

function addLinkItem(originalUrl, shortenedUrl) {
    const linkItemContainer = document.querySelector(".max-w-4xl"); // Adjust this selector based on your HTML structure

    const linkItem = document.createElement("div");
    linkItem.classList.add("flex", "flex-col", "items-center", "justify-between", "w-full", "p-6", "rounded-lg", "bg-text-main", "md:flex-row");

    linkItem.innerHTML = `
        <p class="font-bold text-center text-secondary-dark md:text-left">${originalUrl}</p>
        <div class="flex flex-col items-center justify-end flex-1 space-x-3 space-y-3 md:flex-row md:space-y-0">
            <div class="font-bold text-primary-main">${shortenedUrl}</div>
            <button class="px-10 py-5 rounded-lg text-text-main bg-primary-light hover:opacity-70 focus:outline-none" onclick="copyToClipboard('${shortenedUrl}')">Copy</button>
        </div>
    `;

    linkItemContainer.insertBefore(linkItem, linkItemContainer.lastElementChild); // Insert the new link item before the last link item
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
