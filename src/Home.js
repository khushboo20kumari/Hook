import { useLocation } from 'react-router-dom';
const Home = () => {
    let location = useLocation();

    // console.log(location,"puja")

    return <h1>Home{location.pathname}</h1>;
  };
  
  export default Home;