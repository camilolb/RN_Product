import {Platform} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import di from '../../../../../core/di';

export function useUploadAudio() {
  const queryClient = useQueryClient();
  return useMutation<boolean, Error, string>(
    ['UPLOAD_AUDIO'],
    fileUri => {
      return di.audioUseCase.uploadAudio(
        fileUri,
        Platform.OS === 'ios' ? 'ios' : 'android',
      );
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(['USER_AUDIO_LIST']);
      },
    },
  );
}
