module.exports = [{
        title: "Getting Started",
        collapsable: false,
        children: ["introduction"],
    },
    {
        title: "Authentication",
        collapsable: false,
        children: prefix("authentication", ["authentication"]),
    },
    {
        title: "Account",
        collapsable: false,
        children: prefix("account", [
            "user",
            "networks",
            "organizations",
            "sites",
        ]),
    },
    {
        title: "Transactions",
        collapsable: false,
        children: prefix("transactions", [
            "get-transactions",
            "get-transaction",
        ]),
    },
    {
        title: "Orders",
        collapsable: false,
        children: prefix("orders", ["get-orders", "get-order"]),
    },
];

function prefix(prefix, children) {
    return children.map((child) => `${prefix}/${child}`);
}