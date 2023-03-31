import React, {useState} from 'react';
// import {useUploadAudio} from '../application';
// import {useOpenGallery} from '../application/hooks/useOpenGallery';
import DashboardComponent from './DashboardComponent';

export function DashboardPresenter() {
  const {openGalleryAudio} = useOpenGallery();
  const {mutateAsync, isLoading} = useUploadAudio();

  return <DashboardComponent />;
}

export default DashboardPresenter;
