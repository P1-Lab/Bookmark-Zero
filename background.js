/*
Bookmark Zero
background.js

Responsibilities:

- boot extension
- initialize listeners
- initialize scheduled jobs
*/

import './bookmarkInterceptor.js';
import { runDecayCheck } from './triageEngine.js';



/*
Runs when extension is installed
*/

chrome.runtime.onInstalled.addListener(() => {

    console.log("Bookmark Zero installed");

});



/*
Runs whenever browser starts
*/

chrome.runtime.onStartup.addListener(() => {

    console.log("Bookmark Zero started");

});



/*
Scheduled jobs

Runs every hour for now.
Can change later.
*/

chrome.alarms.create("bookmark-zero-maintenance", {

    periodInMinutes: 60

});



/*
Alarm handler

Currently:

- decay checks
- resurfacing checks later
*/

chrome.alarms.onAlarm.addListener((alarm) => {

    if (alarm.name !== "bookmark-zero-maintenance") {

        return;

    }

    console.log("Running maintenance");

    runDecayCheck();

});
