import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/HomeLayout/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const newsID = parseInt(id)
    const data = useLoaderData();

    useEffect(() => {
        if (newsID === 0) {
            setCategoryNews(data);
            return
        }
        else if (newsID === 1) {
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
            <div className='grid grid-cols-1 gap-5'>
            {
                categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
            }
            </div>
        </div>
    );
};

export default CategoryNews;