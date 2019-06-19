<h1> Wordy.js - A javascript library for words/charactrs/frequncy counter</h1>

<h2>Usage</h2>

<ol>
<li> Download wordy.js from /build</li>
<li> include it inside your project. (make sure you are attaching it after the content you want to parse)</li>

<li> call global function "wordy" 
   <code> wordy("id of element");  </code>
</li>
<li><b> wordy(id)</b> will return an object so you must store it in some variable 
<code> let counter = wordy("sample"); </code>
</li>

<li> from returned object we can call functions:
     <ul>
      <li> words() <br/> will return how many words present (Number type)</li> 
      <li> characters() <br/> will return how many characters present (Number type) </li>
      <li>frequency([is_sort[optional - return sorted frequency of words by name]]) <br/> will return a JSON {keys: [as words] :  values:[count] }</li>
  
   </ul>
  
 </li>

 </ol>