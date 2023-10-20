import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';
import TrendingStoriesRecord from "../../../trending-stories.json";

function TrendingStories() {
  return (
    <section className='section trendingStories'>
        <div className='container'>
            <SectionTitle title="Trending Stories" />

            <div className='grid'>
            {
                TrendingStoriesRecord.map( record => {
                    return(
                        <StoryCard 
                            title={record.title}
                            author={record.author}
                            date={record.date}
                            topic={record.topic}
                            layout="vertical"
                        />
                    )
                })
            }
            </div>
        </div>
    </section>
  );
}

export default TrendingStories;