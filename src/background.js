chrome.bookmarks.onCreated.addListener(async (id, node) => {

    if (!node.url) return;

    const record = {
        id,
        title: node.title,
        url: node.url,
        createdAt: Date.now(),
        state: "INBOX"
    };

    console.log("Captured:", node.title);

    const existing = await chrome.storage.local.get("bookmarks");

    const bookmarks = existing.bookmarks || [];

    bookmarks.push(record);

    await chrome.storage.local.set({ bookmarks });

});
