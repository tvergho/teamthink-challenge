/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/media-has-caption */
import type {
  AudioTrackPublication, Participant as ParticipantType, VideoTrackPublication,
} from 'twilio-video';
import {
  VolumeOff, VolumeUp, Videocam, VideocamOff,
} from '@material-ui/icons';
import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

type ParticipantProps = {
  participant: ParticipantType
  width?: string | number,
  height?: string | number
}

const trackpubsToTracks = (trackMap: Map<string, VideoTrackPublication | AudioTrackPublication>) => Array.from(trackMap.values())
  .map((publication) => publication.track)
  .filter((track) => track !== null);

const Participant = ({ participant, width, height }: ParticipantProps): JSX.Element => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const videoRef = useRef();
  const audioRef = useRef();

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === 'video') {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      if (videoTrack.enabled) {
        videoTrack.attach(videoRef.current);
      } else {
        setVideoEnabled(false);
      }

      videoTrack.on('disabled', () => {
        setVideoEnabled(false);
      });

      videoTrack.on('enabled', () => {
        setVideoEnabled(true);
        videoTrack.attach(videoRef.current);
      });

      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      if (audioTrack.enabled) {
        audioTrack.attach(audioRef.current);
      } else {
        setAudioEnabled(false);
      }

      audioTrack.on('disabled', () => {
        setAudioEnabled(false);
      });

      audioTrack.on('enabled', () => {
        console.log('audio enabled');
        setAudioEnabled(true);
        audioTrack.attach(audioRef.current);
      });
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className={styles.participant} style={{ width, height }}>
      <div className={styles.name}>
        <h3>{participant.identity}</h3>
        {audioEnabled ? <VolumeUp /> : <VolumeOff />}
        {videoEnabled ? <Videocam /> : <VideocamOff />}
      </div>
      <video ref={videoRef}
        autoPlay
        style={{
          width, height, objectFit: 'cover', display: videoEnabled ? 'block' : 'none',
        }}
      />
      {!videoEnabled && <div className={styles['camera-off']} style={{ width, height }}>{participant.identity}</div>}
      <audio ref={audioRef} autoPlay />
    </div>
  );
};

export default Participant;
