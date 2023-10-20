import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';

function TopStories() {
  return (
    <section className='section topStories'>
        <div className='container'>
            <SectionTitle title="Top Stories" />

            {/* Featured Story */}
            {/* <StoryCard 
                title="Here Goes a really long title"
                author="Author Name"
                date="20 August, 2022"
                topic="Technology"
            /> */}
            {/* Featured Story */}

            {/* Top Stories */}
            <div className='grid'>
              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
              />

              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
              />

              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
              />

              <StoryCard 
                  title="Here Goes a really long title"
                  author="Author Name"
                  date="20 August, 2022"
                  topic="Technology"
              />
            </div>
            
            {/* Top Stories */}
        </div>
    </section>
  );
}

export default TopStories;