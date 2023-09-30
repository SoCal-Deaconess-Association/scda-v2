import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

// Components
import { VideoPlayer } from '../components/VideoPlayer';

// Images
import ContinueIcon from '../assets/icons/ContinueIcon';

export const HistoryPage = () => {
    const navigate = useNavigate();

    //useEffect(() => {
    //    navigate('/history');
    //}, []);

    return (
        <div className='content-container shadow'>
            <h1>Part I: History</h1>
            <div className='divider'></div>
            <VideoPlayer />
            <Link to='/greetings' className='button-continue'>Continue to Part II<ContinueIcon /></Link>
        </div>
    );
}