import React, { useState, useRef } from 'react';
import RecordRTC from 'recordrtc';
import './chatbot.css';
import logoIcon from '../assets/img/mazebot_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faMicrophone, faFileImage } from '@fortawesome/free-solid-svg-icons';

function Chatbot() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const audioRef = useRef(null);
  const recorderRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new RecordRTC(stream, { type: 'audio' });
        recorder.startRecording();
        recorderRef.current = recorder;
        setIsRecording(true);
      } catch (error) {
        console.error('Error accessing audio stream:', error);
      }
    } else {
      console.error('getUserMedia not supported on this browser.');
    }
  };

  const stopRecording = () => {
    if (recorderRef.current) {
      recorderRef.current.stopRecording(() => {
        const blob = recorderRef.current.getBlob();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.play().catch(error => console.error('Error playing audio:', error));
        }
        setIsRecording(false);
      });
    }
  };

  const handleRecordingClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="sidebar1">
        <div className="sidebar-top1">
          <div className="logo1">
            <img src={logoIcon} alt="Mazebot Logo" className="logo-icon1" />
            Mazebot
          </div>
          <button className="new-chat-btn">+ New Chat</button>
          <div className="history">
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
          </div>
        </div>
        <div className="sidebar-bottom1">
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog} className='fa-cog' /> Settings
          </button>
          <div className="username">
            <FontAwesomeIcon icon={faUser} className='faUser' /> User Name
          </div>
        </div>
      </div>
      <div className="chat-area">
        {imageUrl && (
          <div className="image-preview">
            <img src={imageUrl} alt="Uploaded Preview" />
          </div>
        )}
        {audioUrl && (
          <div className="audio-controls">
            <audio src={audioUrl} controls />
            <a href={audioUrl} download="recorded-audio.wav">
              Download Audio
            </a>
          </div>
        )}
        <div className="input-area">
          <label className="image-upload-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <FontAwesomeIcon icon={faFileImage} />
          </label>
          <input type="text" placeholder="Type your message here..." />
          <button onClick={handleRecordingClick}>
            <FontAwesomeIcon icon={faMicrophone} className='mic' />
            {isRecording ? ' Stop' : ' Start'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;