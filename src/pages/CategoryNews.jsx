import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const newsID = parseInt(id)
    const data = useLoaderData();

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data);
            return
        }
        else if (id == 1) {
            const filterNews = data.filter((news) => news.others.is_today_pick ===  true)
            setCategoryNews(filterNews)
        }
        else {
            const filterNews = data.filter((news) => news.category_id === newsID)
            console.log(filterNews);
            setCategoryNews(filterNews)
        }

    }, [data, id])
    return (
        <div>
            <h2>total news {categoryNews.length} found</h2>

        </div>
    );
};

export default CategoryNews;