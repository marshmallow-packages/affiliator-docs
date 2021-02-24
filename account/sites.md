# Sites
List all the sites that are connected to an organization. You will need the ID of a network in other request like getting the transactions for a site.

[[toc]]

## List your sites
### Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
$organization_id = '__ORGANIZATION_ID__';
Http::withToken($token)
    ->get("https://affiliate.ippies.nl/api/organization/$organization_id/sites");
```

### Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

```json
{
    "data": [
        {
            "id": 0000,
            "name": "Marshmallow Affiliate Website",
            "description":"Solving complex problems using simple solutions. Development agency based in The Netherlands.",
            "organization_id": 0000,
            "publisher_id": "__PUBLISHER_ID__",
            "media_id": "__MEDIA_ID__",
            "datetime_format": "Y-m-d",
            "timezone": "Europe/Amsterdam",
            "notes": "Y-m-d",
            "network_name": "Bol.com",
            "organization_name": "marshmallow.dev"
        },{
            //
        }
    ]
}
```

## Update your site credentials
### Request
If you need to update your credentials for you site connection, use the endpoint below. We will we then collect your transactions with the newly provided credentials. Below you can find how to make the request for this endpoint. Please note that this is a `PUT` request and it requires an `access token`.
```php
$organization_id = '__ORGANIZATION_ID__';
$site_id = '__SITE_ID__';
Http::withToken($token)
    ->put("https://affiliate.ippies.nl/api/organization/$organization_id/site/$site_id", [
        /**
         * Provide the information you want to update here. Please
         * reference the table below to see which fields can be updated.
         */
    ]);
```

### Updateable columns
| Key     | Description          | Type  |
| ------------- | ------------- | ----- |
| name | The name of your site | string |
| description | Description of your site | string |
| publisher_id | Publisher ID of the network | string |
| media_id | Media ID of the network | string |
| auth_1 | First authentication for the network | string |
| auth_2 | Second authentication for the network | string |

### Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

```json
{
    "data": {
        "success": true,
        "message": "Updated successfully"
    }
}
```

<EditOnGithub edit_url="account/sites.md"/>
