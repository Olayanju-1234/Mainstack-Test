export const ListProductsAggregator = [
    {
        $lookup: {
            from: 'users',
            localField: 'uploaded_by',
            foreignField: '_id',
            as: 'uploaded_by',
        },
    },
    {
        $unwind: '$uploaded_by',
    },
    {
        $project: {
            name: 1,
            description: 1,
            price: 1,
            sku: 1,
            product_image: 1,
            category: 1,
            uploaded_by: {
                email: 1,
            },
        },
    },
];
