import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Nav } from 'react-bootstrap';
import NavBar from './components/nav/navbar.jsx';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

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
  const [location, setLocation] = useState([]);

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
        const ipData = {
          country: data.countryName,
          countryCode: data.countryCode,
        };
        setLocation(ipData);
        console.log(ipData);
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
      <BrowserRouter>
        <NavBar />
        <Button className="btn-style" onClick={fetchCourses}>
          Display Available Courses
        </Button>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
