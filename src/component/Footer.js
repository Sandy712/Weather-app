import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {RiTwitterFill} from 'react-icons/ri';
import {RiGoogleFill} from 'react-icons/ri';
import {RiInstagramFill} from 'react-icons/ri';
import {RiGithubFill} from 'react-icons/ri';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1 l-1' href='#!' role='button'>
            <RiLinkedinBoxFill/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 l-1' href='#!' role='button'>
            <RiTwitterFill />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 l-1' href='#!' role='button'>
            <RiGoogleFill/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 l-1' href='#!' role='button'>
            <RiInstagramFill/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 l-1' href='#!' role='button'>
            <RiGithubFill/>
          </MDBBtn>
          
        </section>

         

        <section className='mb-3 descript'>
          <p>
           <p>Mausam.UI: Revolutionizing Weather Information Delivery
            </p>  

            In the digital age, weather forecasting has become an essential part of our daily lives. Whether we're planning a weekend getaway,deciding on our daily commute, or simply curious about the weather conditions, having accurate and up-to-date weather information at our fingertips is crucial. That's where Mausam.UI comes in – a groundbreaking web application that aims to revolutionize the way we access and interact with weather data.
          </p>
        </section>

         
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
        Mausam.UI.com
        </a>
      </div>
    </MDBFooter>
  );
}