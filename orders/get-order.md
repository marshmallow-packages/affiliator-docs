# Get order

If you need to check the data for one single order you can do that by using this enpoint. This endpoint will not return a collection of orders. If you need to get a full collection of order check the `Get orders` part of this documentation.

[[toc]]

## Request

Below you can find how to make the request for this endpoint. Please note that this is a `GET` request and it requires an `access token`.

```php
$network_id = '__NETWORK_ID__';
$site_id = '__SITE_ID__';
$affiliate_order_id = '__AFFILIATE_ORDER_ID__';
Http::withToken($token)->get(
    "https://affiliate.ippies.nl/api/orders/network/$network_id/site/$site_id/order/$affiliate_order_id"
);
```

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
            "ordernumber": 1223911887,
            "organization_id": 2,
            "site_id": 35,
            "network_id": 33,
            "website_name": "Shopkorting.be",
            "order_date": "2021-04-26T22:00:00.000000Z",
            "order_stamp": "2021-04-26T22:00:00.000000Z",
            "order_status": "0",
            "sub_id": "7453712KA47738KL25",
            "commission": 1.07,
            "price_incl_vat": 42.83,
            "price_excl_vat": 39.35,
            "old_commission": 1.07,
            "old_price_incl_vat": 42.83,
            "old_price_excl_vat": 39.35,
            "approved_commission": 0,
            "pending_commssion": 1.07,
            "denied_commission": 0,
            "count_transactions": 2,
            "count_products": 5,
            "count_products_pending": 5,
            "processed_at": null,
            "first_checked_at": "2021-04-28T08:55:50.000000Z",
            "last_checked_at": "2021-04-28T08:55:50.000000Z",
            "created_at": "2021-04-28T08:55:50.000000Z",
            "updated_at": "2021-04-28T08:55:50.000000Z",
            "transactions": [
                {
                    "organization_id": 2,
                    "site_id": 35,
                    "network_id": 33,
                    "ordernummer": 1223911887,
                    "orderdatum": "2021-04-26T22:00:00.000000Z",
                    "producttitel": "Omron Premium Flex Temp - Lichaamsthermometer - Smart",
                    "producttype": "PERCA",
                    "website": "Shopkorting.be",
                    "promotiemiddel": "Tekstlink",
                    "naam": "Homepagelink",
                    "subid": "7453712KA47738KL25",
                    "aantal_producten": 1,
                    "verkoopprijs_incl_btw": 8.99,
                    "verkoopprijs_excl_btw": 7.43,
                    "commissie": 0.11,
                    "commissie_percentage": 1.5,
                    "status": "Open",
                    "device": "DESKTOP",
                    "created_at": "2021-04-27T21:05:06.000000Z",
                    "updated_at": "2021-04-28T08:55:50.000000Z"
                },
                {
                    "organization_id": 2,
                    "site_id": 35,
                    "network_id": 33,
                    "ordernummer": 1223911887,
                    "orderdatum": "2021-04-26T22:00:00.000000Z",
                    "producttitel": "BYD CARE Wegwerp mondmaskers – 3 laags – 50 stuks – Niet medisch",
                    "producttype": "PGT",
                    "website": "Shopkorting.be",
                    "promotiemiddel": "Tekstlink",
                    "naam": "Homepagelink",
                    "subid": "7453712KA47738KL25",
                    "aantal_producten": 4,
                    "verkoopprijs_incl_btw": 33.84,
                    "verkoopprijs_excl_btw": 31.92,
                    "commissie": 0.96,
                    "commissie_percentage": 3,
                    "status": "Open",
                    "device": "DESKTOP",
                    "created_at": "2021-04-27T21:05:06.000000Z",
                    "updated_at": "2021-04-28T08:55:50.000000Z"
                }
            ]
        }

        // .....
    ]
}
```

<EditOnGithub edit_url="orders/get-order.md"/>
