import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import StoryCard from '../../atoms/storyCard';

function TrendingStories() {
  return (
    <section className='section topStories'>
        <div className='container'>
            <SectionTitle title="Trending Stories" />
        </div>
    </section>
  );
}

export default TrendingStories;