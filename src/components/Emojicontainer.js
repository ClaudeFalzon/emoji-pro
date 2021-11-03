import React from 'react'
import EmojiItem from './EmojiItem'

export default function Emojicontainer(props) {
 console.log(props)
 return (
  <div style={{display:"flex", flexWrap:"wrap", width:"80%", margin:"0 auto"}}>
  {props.emojisList.map((currentValue) => {
   return (<EmojiItem key={currentValue.title} symbol={currentValue.symbol} keywords={currentValue.keywords} title={currentValue.title}/>) 
  })}
  </div>
 )
}
