#!/usr/bin/env node
import {begin} from "./bin/brain-games.js";
import promptly from "promptly";

begin();

(async () => {
    const name = await promptly.prompt('Please tell me your name: ');
    console.log(`Welcome, ${name}!`);
})();

