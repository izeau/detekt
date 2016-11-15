# detekt

Detect if a user is logged in to a certain website. Lightweight (no dependency) and easy to use.

## Purpose

You may want to display different social sharing / login options depending on a user's logged in status. Or just do whatever you want, I'm not judging.

## Usage

This script is using an UMD loader, so you can use Require.js, `require` calls if you use a module bundler or a simple `<script>` tag.

```js
detekt('reddit', (err, loggedIn) => {
  if (err) {
    throw err;
  }

  alert('User ' + (loggedIn ? 'is' : 'isn\'t') + ' logged in to reddit');
});
```

## Supported services

  * 500px: `detekt('500px', ...);`
  * Academia: `detekt('academia', ...);`
  * Airbnb: `detekt('airbnb', ...);`
  * Amazon: `detekt('amazon', ...);`
  * Battle.net: `detekt('battlenet', ...);`
  * Bitbucket: `detekt('bitbucket', ...);`
  * Blogger: `detekt('blogger', ...);`
  * Carbonmade: `detekt('carbonmade', ...);`
  * Disqus: `detekt('disqus', ...);`
  * Dropbox: `detekt('dropbox', ...);`
  * edX: `detekt('edx', ...);`
  * Expedia: `detekt('expedia', ...);`
  * Facebook: `detekt('facebook', ...);`
  * Flickr: `detekt('flickr', ...);`
  * Foursquare: `detekt('foursquare', ...);`
  * GitHub: `detekt('github', ...);`
  * Gmail: `detekt('gmail', ...);`
  * Google Plus: `detekt('googleplus', ...);`
  * Hackernews: `detekt('hackernews', ...);`
  * Indeed: `detekt('indeed', ...);`
  * Khan Academy: `detekt('khanacademy', ...);`
  * Medium: `detekt('medium', ...);`
  * Meetup: `detekt('meetup', ...);`
  * PayPal: `detekt('paypal', ...);`
  * Pinterest: `detekt('pinterest', ...);`
  * reddit: `detekt('reddit', ...);`
  * Skype: `detekt('skype', ...);`
  * Slack: `detekt('slack', ...);`
  * Spotify: `detekt('spotify', ...);`
  * Square: `detekt('square', ...);`
  * Steam: `detekt('steam', ...);`
  * Tumblr: `detekt('tumblr', ...);`
  * Twitter: `detekt('twitter', ...);`
  * VK: `detekt('vk', ...);`
  * YouTube: `detekt('youtube', ...);`

## Contributing

Fork this repo, add your contributions & some tests if necessary, and create a pull request.

## Credits

I used the service list from [Robin Linus](https://robinlinus.github.io/socialmedia-leak/).

## License (MIT)

> Copyright (c) 2016 Jean Dupouy
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
