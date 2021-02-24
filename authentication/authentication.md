# Authentication
To call any of the endpoints in this API, you will need to get a access token first. Below you will find the request and response to do so. If you don't have credentials yet, please contact [stef@marshmallow.dev](mailto:stef@marshmallow.dev).

[[toc]]

## Get an access token
Below you can find how to make the request for this endpoint. Please note that this is a `POST` request and it requires the data to be submitted as a form.
```php
$response = Http::asForm()->post('https://affiliate.ippies.nl/oauth/token', [
    'grant_type' => 'password',
    'client_id' => '__YOUR_CLIENT_ID__',
    'client_secret' => '__YOUR_CLIENT_SECRET__',
    'username' => '__YOUR_USERNAME__',
    'password' => '__YOUR_PASSWORD__',
    'scope' => '',
]);

$tokens = $response->json();
```

## Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

```json
{
    "token_type": "Bearer",
    "expires_in": 31536000,
    "access_token": "__YOUR_ACCESS_TOKEN__",
    "refresh_token": "__YOUR_REFRESH_TOKEN__"
}
```

<EditOnGithub edit_url="authentication/authentication.md"/>
