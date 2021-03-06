# Get transactions
Use the `Get transactions` endpoint to collect all the transactions of a network for a specific site. You will find the request and response on this page. We will also show you how you can filter the results.

[[toc]]

## Request
Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.
```php
$network_id = '__NETWORK_ID__';
$site_id = '__SITE_ID__';
Http::withToken($token)->get(
    "https://affiliate.ippies.nl/api/transactions/network/$network_id/site/$site_id"
);
```

### Request options
All these parameters can be added to the request url in the `query string`. For example:
```php
$path = "..... /network/$network_id/site/$site_id?limit=20&page4";
```

| Parameter     | Name          | Type  | Default | Remark |
| ------------- | ------------- | ----- | ------- | ------ |
| page | Pagination page | integer | 1 | - |
| limit | Result limit | integer | 10 | Max 1000 allowed |
| from | From when do you want to get transactions | string | 3 days ago | YYYY-MM-DD |
| till | Till when do you want to get transactions | string | now | YYYY-MM-DD |
| updated_only | Only get transactions that have been updated since the provided date time | boolean | 0 | This will only work if you provide a from date |

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
    "links": {
        "first": "https://affiliate.ippies.nl/api/transactions/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
        "last": "https://affiliate.ippies.nl/api/transactions/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [{
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        }, {
            "url": "https://affiliate.ippies.nl/api/transactions/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
            "label": 1,
            "active": true
        }, {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }],
        "path": "https://affiliate.ippies.nl/api/transactions/network/__NETWORK_ID__/site/__SITE_ID__",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
```

<EditOnGithub edit_url="transactions/get-transactions.md"/>
