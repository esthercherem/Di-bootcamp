import React from "react";
import "./App.css";
import {Card} from './components/Card'
import {Header} from './components/Header'
import {ContactContainer} from './components/ContactContainer'


export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                icon='fa fa-building'
                img='./C.png'
                title='About the Company' 
                description='nos encargamos de dar soluciones a nuestros clientes para que el recliclado de productos sea facil y efectivo.'
            />

            <Card 
                className='section bg-grey'
                icon='fas fa-globe-africa'
                img='./V.png'
                title='Our Values'
                description='recycle, reuse, reduce'
            />

            <Card 
                className='section'
                icon='fas fa-landmark'
                img='./M.png'
                title='Our Mission' 
                description='hacer del nuestro mundo, un mundo mejor'
            />
            <ContactContainer/>
        </div>
    );
}


