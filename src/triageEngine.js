/*
Bookmark Zero
triageEngine.js

Responsibilities:

- state transitions
- flash expiration
- decay checks
*/

import {

    getBookmarks,

    updateBookmark,

    deleteBookmark

} from './storage.js';



/*
Move bookmark state

Examples:

INBOX -> ACTIVE

INBOX -> FLASH
*/

export async function moveBookmark(

    id,

    newState

) {

    await updateBookmark(

        id,

        {

            state: newState

        }

    );

}



/*
Simple decay rules

FLASH bookmarks expire
after 30 days
*/

export async function runDecayCheck() {

    const bookmarks = await getBookmarks();

    const now = Date.now();

    const FLASH_DAYS = 30;

    const cutoff =

        now -

        FLASH_DAYS *

        24 *

        60 *

        60 *

        1000;



    for (const bookmark of bookmarks) {

        if (

            bookmark.state === "FLASH" &&

            bookmark.createdAt < cutoff

        ) {

            console.log(

                "Removing expired bookmark:",

                bookmark.title

            );

            await deleteBookmark(

                bookmark.id

            );

        }

    }

}
