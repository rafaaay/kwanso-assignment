import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';

function TrendingStories() {
  return (
    <section className='section trendingStories'>
        <div className='container'>
            <SectionTitle title="Trending Stories" />

            <div className='grid'>
              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
                  layout="horizontal"
              />

              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
                  layout="horizontal"
              />

              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
                  layout="horizontal"
              />
            </div>
        </div>
    </section>
  );
}

export default TrendingStories;