# Organizations
Sit aliquip ut sunt enim culpa eiusmod irure laboris tempor id in adipisicing nulla ex non ea nostrud dolore laborum dolor dolor cillum tempor cupidatat ut officia.

[[toc]]

## Request
Nulla veniam et laborum culpa dolore labore eu duis dolore consectetur occaecat amet voluptate veniam consequat laboris ex nulla ut.
```php
Http::withToken($token)
    ->get('https://affiliate.ippies.nl/api/organizations');
```

## Response
Nulla exercitation aute ut dolor consequat eu ad eiusmod dolor excepteur aute esse ad do anim eu elit aliqua adipisicing sit amet sunt duis laborum occaecat enim culpa voluptate in commodo elit proident amet deserunt quis nulla velit aliquip.

```json
{
    "data":[
        {
            "id": 1,
            "name": "Marshmallow",
            "description": "Solving complex problems using simple solutions. Development agency based in The Netherlands.",
            "address": "Jac. P. Thijsseweg 1A, 2408 ER, Alphen aan den Rijn",
            "domain": "marshmallow.dev"
        }
    ]
}
```

<EditOnGithub edit_url="account/organizations.md"/>
