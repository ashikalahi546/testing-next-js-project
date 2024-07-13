"use client"
import React, { useEffect, useState } from 'react';

const DataFetchLoading = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemsShow, setItemsShow] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                const result = await response.json();
                setData(result.slice(0, itemsShow));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [itemsShow]);

    const handleLoadMore = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const result = await response.json();
            setData(prevData => [...prevData, ...result.slice(itemsShow, itemsShow + 10)]);
            setItemsShow(prevItems => prevItems + 10); 
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && data.length === 0 && <div className='flex h-screen justify-center items-center'>Loading...</div>}
            <div className='grid grid-cols-4 gap-5 m-10'>
                {data.map((item) => (
                    <div key={item?.id} className='border p-5 border-orange-500 rounded-xl space-y-2.5'>
                        <p>{item?.name}</p>
                        <p>{item?.email}</p>
                        <p>{item?.body}</p>
                    </div>
                ))}
            </div>
            <div className='w-36 mx-auto mb-10'>
                <button onClick={handleLoadMore} className='bg-orange-500 px-5 py-2.5 rounded-lg text-white'>
                    {loading ? 'hellow...' : 'See More'}
                </button>
            </div>
        </div>
    );
};

export default DataFetchLoading;
