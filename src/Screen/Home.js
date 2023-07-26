
import Navbar from '../components/Navbar';
import SearchC from '../components/Search';
import CarouselC from '../components/Carousel';

import { DownloadOutlined, PlusCircleOutlined, PullRequestOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';

import './Home.css'

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <SearchC/>
      <h1>Gifts of Hope</h1>

      <div className='handle_CarouselC'>
      <CarouselC/>

      </div>

        <div className='main_2_btn'>

            <Button type="primary" icon={<PlusCircleOutlined/>} size="large" style={{ width: '250px', height: '50px' }} > Donate Now  </Button>
            
            <Button  icon={<PullRequestOutlined />} size="large" style={{ width: '250px', height: '50px' }} > Request a Donation </Button>
        </div>
      

    </div>
  );
}

export default Home;
