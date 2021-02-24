# Get transaction
If you need to check the data for one single transaction you can do that by using this enpoint. This endpoint will not return a collection of transactions. If you need to get a full collection of transaction check the `Get transactions` part of this documentation.

[[toc]]

## Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
$network_id = '__NETWORK_ID__';
$site_id = '__SITE_ID__';
$affiliate_order_id = '__AFFILIATE_ORDER_ID__';
Http::withToken($token)->get(
    "https://affiliate.ippies.nl/api/transactions/network/$network_id/site/$site_id/transaction/$affiliate_order_id"
);
```

## Response
Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.

```json
{
    "data": [
        {
            "organization_id": 0000,
            "site_id": 0000,
            "network_id": 0000,
            "ordernummer": 1234567890,
            "orderdatum": "2021-02-17T23:00:00.000000Z",
            "producttitel": "Marshmallow Hoodie - 12345",
            "producttype": "Fashion",
            "website": "marshmallow.dev",
            "promotiemiddel": "Tekstlink",
            "naam": null,
            "subid": "12345_1234567890http://partnerprogramma.bol.com/click/click?p=1",
            "aantal_producten": 1,
            "verkoopprijs_incl_btw": 49.95,
            "verkoopprijs_excl_btw": 41.28,
            "commissie": 1.24,
            "commissie_percentage": 3,
            "status": "Open",
            "device": "DESKTOP",
            "created_at": "2021-02-18T08:12:13.000000Z",
            "updated_at": "2021-02-19T07:24:10.000000Z"
        },

        // .....
    ],
}
```

<EditOnGithub edit_url="transactions/get-transaction.md"/>
