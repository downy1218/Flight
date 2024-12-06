import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect 실행: count =', count);

    // 클린업 함수 정의
    return () => {
      console.log('클린업 실행: count =', count);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
};

export default App;
