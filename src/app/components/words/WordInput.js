import React, { useState } from "react";
import "./WordInput.css";
import { debounce } from "loadsh";
import translate from "../../utils/translate.js";
import WordExplanation from "./WordExplanation";
export default function WordInput(props) {
  const handleChange = debounce(async word => {
    // const res = await translate(word);
    // const data = await res.json();
    const data = {
      "tSpeakUrl": "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=4&format=mp3&appKey=4c097bf42fc5dae3",
      "web": [
          {
              "value": [
                  "字",
                  "单词",
                  "词",
                  "一句话"
              ],
              "key": "Word"
          },
          {
              "value": [
                  "造词法",
                  "构词法",
                  "词性转换",
                  "单词构成"
              ],
              "key": "word formation"
          },
          {
              "value": [
                  "混成词",
                  "紧缩词",
                  "行囊词",
                  "拼合词"
              ],
              "key": "portmanteau word"
          }
      ],
      "query": "word",
      "translation": [
          "word"
      ],
      "errorCode": "0",
      "dict": {
          "url": "yddict://m.youdao.com/dict?le=eng&q=word"
      },
      "webdict": {
          "url": "http://m.youdao.com/dict?le=eng&q=word"
      },
      "basic": {
          "exam_type": [
              "高中",
              "初中"
          ],
          "us-phonetic": "wɝd",
          "phonetic": "wɜːd",
          "uk-phonetic": "wɜːd",
          "uk-speech": "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=5&format=mp3&appKey=4c097bf42fc5dae3",
          "explains": [
              "n. [语] 单词；话语；消息；诺言；命令",
              "vt. 用言辞表达",
              "n. (Word)人名；(英)沃德"
          ],
          "us-speech": "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=6&format=mp3&appKey=4c097bf42fc5dae3"
      },
      "l": "EN2en",
      "speakUrl": "http://openapi.youdao.com/ttsapi?q=word&langType=en&sign=9EB104E3BFE7279881B8974AD600B183&salt=1542705011080&voice=4&format=mp3&appKey=4c097bf42fc5dae3"
  };
    setShowDetail(true);
    setWordDetail(data);
    console.log(data);
  }, 500);
  const [wordDetail, setWordDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  // return <input className="new" onChange={_.debounce(handleChange, 500)} />;

  return (
    <div>
      <input className="new" onChange={e => handleChange(e.target.value)} />
      {showDetail ? <WordExplanation detail={wordDetail} /> : <div />}
    </div>
  );
}
