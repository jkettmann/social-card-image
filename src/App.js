import React from 'react';
import queryString from 'query-string';
import SocialCard from './SocialCard';

function App() {
  const location = typeof window !== undefined ? window.location : {};
  const data = queryString.parse(location.search);

  return (
    <div className="App">
      <SocialCard {...data} />
    </div>
  );
}
export default App;