# User
Sit aliquip ut sunt enim culpa eiusmod irure laboris tempor id in adipisicing nulla ex non ea nostrud dolore laborum dolor dolor cillum tempor cupidatat ut officia.

[[toc]]

## Request
Nulla veniam et laborum culpa dolore labore eu duis dolore consectetur occaecat amet voluptate veniam consequat laboris ex nulla ut.
```php
Http::withToken($token)
    ->get('https://affiliate.ippies.nl/api/user');
```

## Response
Nulla exercitation aute ut dolor consequat eu ad eiusmod dolor excepteur aute esse ad do anim eu elit aliqua adipisicing sit amet sunt duis laborum occaecat enim culpa voluptate in commodo elit proident amet deserunt quis nulla velit aliquip.

```json
{
    "data": {
        "id": "__YOUR_USER_ID__",
        "name": "__YOUR_NAME__",
        "email": "__YOUR_EMAIL__"
    }
}
```

<EditOnGithub edit_url="account/user.md"/>
