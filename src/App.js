import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    fetch('https://private-e05942-courses22.apiary-mock.com/courses')
      .then((res) => res.json())
      .then((data) => {
        const resData = data.map((item) => {
          return {
            title: item.title,
            url: item.url,
            startDate: item.next_start_formatted,
          };
        });
        setCourses(resData);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCourses}>Generate cat fact</button>
      <>
        {courses.map((course, index) => (
          <div key={index}>
            <p>{course.title}</p>
            <p>{course.url}</p>
            <p>{course.startDate}</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
