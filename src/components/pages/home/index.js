import React from 'react';
import Header from '../../sections/header';
import TopStories from '../../sections/topStories';
import TrendingStories from '../../sections/trendingStories';

function Home() {
  return (
    <div>
      <Header />

      <main>
        <TopStories />
        <TrendingStories />
      </main>
    </div>
  );
}

export default Home;