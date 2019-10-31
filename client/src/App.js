import React from 'react';
// import axios-hooks
import useAxios from 'axios-hooks';

function App() {
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    '/modules'
  );

  if (getLoading) return <p>Loading...</p>
  if (getError) return <p>Error!</p>

  return (
    <div>
      <h1>{JSON.stringify(getData[2].createdAt)}</h1>
    </div>
  );
}

export default App;
