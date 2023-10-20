import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';
import Button from '../../atoms/button';

import TopStoriesRecord from "../../../top-stories.json";

function TopStories() {
  return (
    <section className='section topStories'>
        <div className='container'>
            <SectionTitle title="Top Stories" />

            {/* Featured Story */}
            <StoryCard 
                title="Here Goes a really long title"
                author="Author Name"
                date="20 August, 2022"
                topic="Technology"
                layout="featured"
            />
            {/* Featured Story */}

            {/* Top Stories */}
            <div className='grid'>
            {
                TopStoriesRecord.map( record => {
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
            {/* Top Stories */}

            <div className='section-btn'>
                <Button text="View More Articles" />
            </div>
        </div>
    </section>
  );
}

export default TopStories;