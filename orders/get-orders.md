# Get orders

Use the `Get orders` endpoint to collect all the orders (grouped from transactions) of a network for a specific site. You will find the request and response on this page. We will also show you how you can filter the results.

[[toc]]

## Request

Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.

```php
$network_id = '__NETWORK_ID__';
$site_id = '__SITE_ID__';
Http::withToken($token)->get(
    "https://affiliate.ippies.nl/api/orders/network/$network_id/site/$site_id"
);
```

### Request options

All these parameters can be added to the request url in the `query string`. For example:

```php
$path = "..... /network/$network_id/site/$site_id?limit=20&page4";
```

| Parameter    | Name                                                                | Type    | Default    | Remark                                         |
| ------------ | ------------------------------------------------------------------- | ------- | ---------- | ---------------------------------------------- |
| page         | Pagination page                                                     | integer | 1          | -                                              |
| limit        | Result limit                                                        | integer | 10         | Max 1000 allowed                               |
| from         | From when do you want to get orders                                 | string  | 3 days ago | YYYY-MM-DD                                     |
| till         | Till when do you want to get orders                                 | string  | now        | YYYY-MM-DD                                     |
| updated_only | Only get orders that have been updated since the provided date time | boolean | 0          | This will only work if you provide a from date |

## Response

Below you will find a valid response when the request was successfull. This example was formatted to a JSON format.
The statusses of the orders are;
| Status | Status name | Description |
| ------ | ----------- | ----------- |
| 1 | Approved | All products in order are either approved, or some of them are approved and the rest is denied. |
| 0 | Pending | One (or all) of the products In the order are neither approved nor denied. |
| -1 | Denied | All products in order are denied. |

The commission is calculated as follows per status:
| Status | Status name | Description |
| ------ | ----------- | ----------- |
| 1 | Approved |  Sum commission of all approved transactions |
| 0 | Pending | Sum of commission of all approved and pendring transactions |
| -1 | Denied | Sum commission of all denied transactions |

```json
{
    "data": [
        {
            "ordernumber": 1223937031,
            "organization_id": 2,
            "site_id": 35,
            "network_id": 33,
            "website_name": "Shopkorting.be",
            "order_date": "2021-04-27T22:00:00.000000Z",
            "order_stamp": "2021-04-27T22:00:00.000000Z",
            "order_status": "0",
            "sub_id": "7701275KA47738KL925584",
            "commission": 0.1,
            "price_incl_vat": 4.15,
            "price_excl_vat": 3.43,
            "old_commission": 0.1,
            "old_price_incl_vat": 4.15,
            "old_price_excl_vat": 3.43,
            "approved_commission": 0,
            "pending_commssion": 0.1,
            "denied_commission": 0,
            "count_transactions": 1,
            "count_products": 1,
            "count_products_pending": 1,
            "processed_at": null,
            "first_checked_at": "2021-04-28T08:55:50.000000Z",
            "last_checked_at": "2021-04-28T08:55:50.000000Z",
            "created_at": "2021-04-28T08:55:50.000000Z",
            "updated_at": "2021-04-28T08:55:50.000000Z"
        }

        // .....
    ],
    "links": {
        "first": "https://affiliate.ippies.nl/api/orders/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
        "last": "https://affiliate.ippies.nl/api/orders/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://affiliate.ippies.nl/api/orders/network/__NETWORK_ID__/site/__SITE_ID__?page=1",
                "label": 1,
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "https://affiliate.ippies.nl/api/orders/network/__NETWORK_ID__/site/__SITE_ID__",
        "per_page": 10,
        "to": 1,
        "total": 1
    }
}
```

<EditOnGithub edit_url="orders/get-orders.md"/>
