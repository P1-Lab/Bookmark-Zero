chrome.bookmarks.onCreated.addListener(async (bookmarkId, bookmarkNode) => {

    if (!bookmarkNode.url) return;

    const record = {
        id: bookmarkId,
        title: bookmarkNode.title,
        url: bookmarkNode.url,
        createdAt: Date.now(),
        state: "INBOX"
    };

    console.log("Captured:", bookmarkNode.title);

    const existing = await chrome.storage.local.get("bookmarks");

    const bookmarks = existing.bookmarks || [];

    bookmarks.push(record);

    await chrome.storage.local.set({ bookmarks });

});
