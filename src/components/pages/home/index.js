import React from 'react';
import Header from '../../sections/header';
import TopStories from '../../sections/topStories';
import TrendingStories from '../../sections/trendingStories';
import Destinations from '../../sections/destinations';

function Home() {
  return (
    <div>
      <Header />

      <main>
        <TopStories />
        <TrendingStories />
        <Destinations />
      </main>
    </div>
  );
}

export default Home;