# User
The is a simple endpoint to collect your user data. This was added so you can easaly test if your implemenation of the access token is correct. There is no use to use this endpoint in production.

[[toc]]

## Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
Http::withToken($token)
    ->get('https://affiliate.ippies.nl/api/user');
```

## Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

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
