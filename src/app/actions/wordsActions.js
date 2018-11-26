import { notification } from 'antd';
// import translate from "../utils/translate.js";

export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_ERROR = "ADD_ERROR"
export const SEARCH_WORD = "SEARCH_WORD"
export const addWord = wordInfo => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    const state = getState()
    console.log(wordInfo)
    debugger
    firestore.collection('words').add({
      ...wordInfo,
      uid: state.firebase.auth.uid,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: ADD_SUCCESS });
    }).catch(error => {
      notification['error']({
        message: '收藏单词错误',
        description: error.message
      });
      dispatch({ type: ADD_ERROR });
    })
  };
};
export const searchWord = word => {
  return async (dispatch, getState, { getFirestore }) => {
    try {
      const firestore = getFirestore()
      firestore.collection('words').get().then(res=>{
        console.log(res)
        // console.log(res.docs())
      })
      // const theWordInFireStore = await firestore.get({ collection: 'words', where: ['word', '==', word] })
      // console.log(theWordInFireStore)
      // let data = null
      // let isFav = false
      // if (theWordInFireStore) {
      //   data = (JSON.parse(theWordInFireStore)).explains
      //   isFav = true
      // } else {
      //   // const res = await translate(word);
      //   // const data = await res.json();
      //   data = {
      //     tSpeakUrl:
      //       "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=4&format=mp3&appKey=4c097bf42fc5dae3",
      //     web: [
      //       {
      //         value: ["字", "单词", "词", "一句话"],
      //         key: "Word"
      //       },
      //       {
      //         value: ["造词法", "构词法", "词性转换", "单词构成"],
      //         key: "word formation"
      //       },
      //       {
      //         value: ["混成词", "紧缩词", "行囊词", "拼合词"],
      //         key: "portmanteau word"
      //       }
      //     ],
      //     query: "word",
      //     translation: ["word"],
      //     errorCode: "0",
      //     dict: {
      //       url: "yddict://m.youdao.com/dict?le=eng&q=word"
      //     },
      //     webdict: {
      //       url: "http://m.youdao.com/dict?le=eng&q=word"
      //     },
      //     basic: {
      //       exam_type: ["高中", "初中"],
      //       "us-phonetic": "wɝd",
      //       phonetic: "wɜːd",
      //       "uk-phonetic": "wɜːd",
      //       "uk-speech":
      //         "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=5&format=mp3&appKey=4c097bf42fc5dae3",
      //       explains: [
      //         "n. [语] 单词；话语；消息；诺言；命令",
      //         "vt. 用言辞表达",
      //         "n. (Word)人名；(英)沃德"
      //       ],
      //       "us-speech":
      //         "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=6&format=mp3&appKey=4c097bf42fc5dae3"
      //     },
      //     l: "EN2en",
      //     speakUrl:
      //       "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=4&format=mp3&appKey=4c097bf42fc5dae3"
      //   };
      // }
      // dispatch({ type: SEARCH_WORD, wordDetail: data, isFav })
    } catch (error) {
      console.log(error)
    }
  }
}