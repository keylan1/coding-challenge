import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Nav } from 'react-bootstrap';
import NavBar from './components/nav/navbar.jsx';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

//array to determine currency based on geolocation
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
  const [showCourses, setShowCourses] = useState(false);
  const [location, setLocation] = useState([]);

  //fetch from api

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

  //fetch geolocation from api
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

  const displayCourses = () => {
    return courses.map((course) => (
      // when list has no unique id, use key={index}
      <div className="btn-course" key={course.id}>
        <Button className="btn-course-style">{course.title}</Button>
        {/*   <p>{course.url}</p>
        <p>{course.startDate}</p> */}
      </div>
    ));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Button
          className="btn-style"
          onClick={() => setShowCourses(!showCourses)}>
          Display Available Courses
        </Button>
        <div className="courses">
          <>{showCourses && displayCourses()}</>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
