'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import ProductData from "../../../shared/ProductData";


const Page = () => {
    const params = useParams<{ productId: string }>();

    return (
        <div>
            <div className={'mt-10'} />
            <ProductData params={params?.productId}/>
        </div>
    );
};

export default Page;