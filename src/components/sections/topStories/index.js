import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';

function TopStories() {
  return (
    <section className='topStories'>
        <div className='container'>
            <SectionTitle title="Top Stories" />

            {/* Featured Story */}
            <StoryCard 
                title="Here Goes a really long title"
                author="Author Name"
                date="20 August, 2022"
                topic="technology"
            />
            {/* Featured Story */}
        </div>
    </section>
  );
}

export default TopStories;