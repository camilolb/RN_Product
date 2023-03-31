import DocumentPicker from 'react-native-document-picker';

export function useOpenGallery() {
  const openGalleryAudio = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
        presentationStyle: 'fullScreen',
      });
      return response;
    } catch (err) {
      console.warn(err);
    }
  };
  return {openGalleryAudio};
}
