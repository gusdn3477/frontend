import React, { Component, useState } from 'react';

function Content() {
  let [textTest, setTextTest] = useState(["HTML", "React"]);
  return (
    <article>
      <h2>textTest</h2>
      <p>HTML이 제일 쉬웠어요. 리액트 써보면 좋아요.</p>
    </article>
  )

}

export default Content;