import React, { memo } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { icons } from 'utils/icons';

const Micro = ({ className, setValueSearch }) => {
    const { FaMicrophone } = icons
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    transcript && setValueSearch(transcript)


    return (
        <div>
            {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            <button className={className} onClick={SpeechRecognition.startListening}>
                <FaMicrophone />
            </button>
            {/* <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button> */}
            {/* <p>{transcript}</p> */}
        </div>
    );
};
export default memo(Micro)