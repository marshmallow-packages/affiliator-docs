module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: [
            'introduction',
        ],
    }, {
        title: "Authentication",
        collapsable: false,
        children: prefix('authentication', [
            'authentication',
        ]),
    }, {
        title: "Transactions",
        collapsable: false,
        children: prefix('transactions', [
            'get-transactions',
            'get-transaction',
            'date-scoping',
            'updated-only',
        ]),
    }
]

function prefix(prefix, children) {
    return children.map(child => `${prefix}/${child}`)
}
