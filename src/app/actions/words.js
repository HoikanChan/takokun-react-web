export const addWord = word => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('words').add({
      ...word
    }).then() =>{
      
    }
  };
};
