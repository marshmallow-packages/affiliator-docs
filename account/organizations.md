# Organizations
List all the organizations that are connected to your user. You will need the ID of an organization in other request like getting the sites for a organization.

[[toc]]

## Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
Http::withToken($token)
    ->get('https://affiliate.ippies.nl/api/organizations');
```

## Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

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
