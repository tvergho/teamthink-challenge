/* eslint-disable @typescript-eslint/ban-types */
import type { Room, Participant as ParticipantType } from 'twilio-video';
import { useState, useEffect } from 'react';
import {
  VolumeOff, VolumeUp, Videocam, VideocamOff,
} from '@material-ui/icons';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap, IconButton } from '@material-ui/core';
import Participant from './Participant';
import styles from './styles.module.scss';

type ControlButtonProps = {
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
  onClick: () => void
}
const ControlButton = ({ icon: Icon, onClick }: ControlButtonProps): JSX.Element => {
  return (
    <IconButton onClick={onClick} size="medium" color="primary"><Icon /></IconButton>
  );
};

type VideoChatProps = {
  participants: ParticipantType[],
  room: Room
}

const VideoChat = ({ room, participants }: VideoChatProps): JSX.Element => {
  const [muted, setMuted] = useState(true);
  const [cameraOff, setCameraOff] = useState(true);

  const disableAudio = () => {
    room.localParticipant.audioTracks.forEach((publication) => {
      publication.track.disable();
    });
    setMuted(true);
  };

  const disableVideo = () => {
    room.localParticipant.videoTracks.forEach((publication) => {
      publication.track.disable();
    });
    setCameraOff(true);
  };

  const enableAudio = () => {
    room.localParticipant.audioTracks.forEach((publication) => {
      publication.track.enable();
    });
    setMuted(false);
  };

  const enableVideo = () => {
    room.localParticipant.videoTracks.forEach((publication) => {
      publication.track.enable();
    });
    setCameraOff(false);
  };

  useEffect(() => {
    disableAudio();
    disableVideo();
  }, []);

  return (
    <div className={styles['video-container']}>
      <div className={styles['video-side']}>
        {participants.map((participant) => (
          <Participant key={participant.sid} participant={participant} width="100%" height={250} />
        ))}
      </div>
      <div className={styles['video-main']}>
        <Participant participant={room.localParticipant} width="100%" height="90vh" />
        <div className={styles.controls}>
          <ControlButton icon={muted ? VolumeOff : VolumeUp} onClick={muted ? enableAudio : disableAudio} />
          <ControlButton icon={cameraOff ? VideocamOff : Videocam} onClick={cameraOff ? enableVideo : disableVideo} />
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
