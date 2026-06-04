/*
Bookmark Zero
storage.js

Responsibilities:

- save records
- load records
- update records
- delete records

Uses:

chrome.storage.local
*/


const STORAGE_KEY = "bookmark-zero-records";



/*
Load all bookmarks
*/

export async function getBookmarks() {

    const result = await chrome.storage.local.get(

        STORAGE_KEY

    );

    return result[STORAGE_KEY] || [];

}



/*
Save entire collection
*/

async function saveCollection(records) {

    await chrome.storage.local.set({

        [STORAGE_KEY]: records

    });

}



/*
Add new bookmark
*/

export async function saveBookmarkRecord(record) {

    const records = await getBookmarks();

    records.push(record);

    await saveCollection(records);

}



/*
Update bookmark
*/

export async function updateBookmark(

    id,

    updates

) {

    const records = await getBookmarks();

    const updated = records.map(record => {

        if (record.id !== id) {

            return record;

        }

        return {

            ...record,

            ...updates

        };

    });

    await saveCollection(updated);

}



/*
Delete bookmark
*/

export async function deleteBookmark(id) {

    const records = await getBookmarks();

    const filtered = records.filter(

        record => record.id !== id

    );

    await saveCollection(filtered);

}
