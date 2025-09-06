import React from 'react';

const fetchData = async ({ route,
    query = "",
    revalidate = 3600,
    defaultLimit,
    tags,
    shopID = "", }: {
        route: string
        query?: string;
        revalidate?: number;
        defaultLimit?: number;
        tags?: string;
        shopID?: string;
    }) => {


};

export default fetchData;