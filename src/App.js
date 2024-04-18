import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const euArr = [
  'BE',
  'BG',
  'CZ',
  'DK',
  'DE',
  'EE',
  'IE',
  'EL',
  'ES',
  'FR',
  'HR',
  'IT',
  'CY',
  'LV',
  'LT',
  'LU',
  'HU',
  'MT',
  'NL',
  'AT',
  'PL',
  'PT',
  'RO',
  'SI',
  'SK',
  'FI',
  'SE',
];

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

  const fetchLocation = () => {
    fetch('https://freeipapi.com/api/json')
      .then((res) => res.json())
      .then((data) => {
        return {
          country: data.countryName,
          countryCode: data.countryCode,
        };
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCourses}>Generate cat fact</button>
      <>
        {courses.map((course, index) => (
          // when list has no unique id, use key={index}
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
