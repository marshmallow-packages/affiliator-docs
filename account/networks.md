# Networks
List all the networks that are available for your user. You will need the ID of a network in other request like getting the transactions for a network.

[[toc]]

## Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
$organization_id = '__ORGANIZATION_ID__';
Http::withToken($token)
    ->get("https://affiliate.ippies.nl/api/networks");
```

## Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

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
