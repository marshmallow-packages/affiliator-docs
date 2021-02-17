# Authentication
Sit aliquip ut sunt enim culpa eiusmod irure laboris tempor id in adipisicing nulla ex non ea nostrud dolore laborum dolor dolor cillum tempor cupidatat ut officia.

[[toc]]

## Get an access token
Nulla veniam et laborum culpa dolore labore eu duis dolore consectetur occaecat amet voluptate veniam consequat laboris ex nulla ut.
```php
Http::->asForm()->post('https://affiliate.ippies.nl/oauth/token', [
    'grant_type' => 'password',
    'client_id' => '__YOUR_CLIENT_ID__',
    'client_secret' => '__YOUR_CLIENT_SECRET__',
    'username' => '__YOUR_USERNAME__',
    'password' => '__YOUR_PASSWORD__',
    'scope' => '',
]);
```

## Response
Nulla exercitation aute ut dolor consequat eu ad eiusmod dolor excepteur aute esse ad do anim eu elit aliqua adipisicing sit amet sunt duis laborum occaecat enim culpa voluptate in commodo elit proident amet deserunt quis nulla velit aliquip.

```json
{
    "token_type": "Bearer",
    "expires_in": 31536000,
    "access_token": "__YOUR_ACCESS_TOKEN__",
    "refresh_token": "__YOUR_REFRESH_TOKEN__"
}
```

<EditOnGithub repo_name="affiliate-docs" edit_url="nova/live-update.md"/>
