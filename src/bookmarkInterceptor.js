/*
Bookmark Zero
bookmarkInterceptor.js

Responsibilities:

- listen for bookmark creation
- capture bookmark metadata
- place bookmarks into Inbox
*/

import {

    saveBookmarkRecord

} from './storage.js';



/*
When user creates bookmark
*/

chrome.bookmarks.onCreated.addListener(

    async (bookmarkId, bookmarkNode) => {

        /*
        Ignore folders
        */

        if (!bookmarkNode.url) {

            return;

        }

        const record = {

            id: bookmarkId,

            title: bookmarkNode.title || "",

            url: bookmarkNode.url,

            createdAt: Date.now(),

            lastOpened: null,

            state: "INBOX",

            visitCount: 0,

            tags: []

        };

        console.log(

            "Bookmark captured:",

            record.title

        );

        await saveBookmarkRecord(record);

    }

);
