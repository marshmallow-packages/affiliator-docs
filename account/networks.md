# Networks
Sit aliquip ut sunt enim culpa eiusmod irure laboris tempor id in adipisicing nulla ex non ea nostrud dolore laborum dolor dolor cillum tempor cupidatat ut officia.

[[toc]]

## Request
Nulla veniam et laborum culpa dolore labore eu duis dolore consectetur occaecat amet voluptate veniam consequat laboris ex nulla ut.
```php
$organization_id = '__ORGANIZATION_ID__';
Http::withToken($token)
    ->get("https://affiliate.ippies.nl/api/networks");
```

## Response
Nulla exercitation aute ut dolor consequat eu ad eiusmod dolor excepteur aute esse ad do anim eu elit aliqua adipisicing sit amet sunt duis laborum occaecat enim culpa voluptate in commodo elit proident amet deserunt quis nulla velit aliquip.

```json
{
    "data": [
        {
            "id": 11,
            "name": "BolCom",
            "description": "http://partnerprogramma.bol.com",
            "denied_tag": "AFGEKEURD",
            "pending_tag": "INBEHANDELING",
            "confirmed_tag": "GOEDGEKEURD",
            "base_url": "https://partner.bol.com/partner/resources/api/1",
            "api_type": "JSON",
            "authentication_type": "Key",
            "tracking_parameter": null,
            "documentation_url": null,
            "datetime_format": null
        },{
            //
        }
    ]
}
```

<EditOnGithub edit_url="account/networks.md"/>
