# Reddit To Teddit

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/decemberthedeveloper)

## Browser Extension Deprecation
Teddit is shutting down August 1, 2023, which will also result in the deprecation of this browser extension. The browser extension will still redirect to the site, but currently most Teddit pages result in a 429 "Too Many Requests" HTTP status code as a result of Reddit's crackdown on third-party applications. You can learn more [here](https://tedd.it/shutdown). 

## Abstract
This browser extension automatically redirects Reddit pages to [Teddit](https://teddit.net/about), an open-source, privacy-conscious Reddit alternative.

## Tech Stack
This project uses vanilla JS, CSS, and HTML. 

## Setup/Installation
You can clone the repo locally using `git clone`. 

[This article](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) offers detailed instructions on loading an unpacked chrome extension. You can navigate to the chrome extensions page via the puzzle piece icon in the toolbar. After enabling developer mode, you can click "load unpacked extension" and choose the folder via the popup. You should then see the recycle icon appear in the toolbar. When you click on it, you can see "Reddit to Teddit." If you navigate to `www.reddit.com`, you should be redirected to the relevant Teddit page. 

## Preview

https://github.com/garnetred/reddit-to-teddit/assets/59572865/97d5aa9d-f684-48db-ba7a-3e76e25be8e0


## Next Steps
Long term, it would be great to add a loading message of some kind while the user waits to be redirected to Teddit. I'd also like to create a custom emoji, the recycle emoji is more of a placeholder. 


