<h2> প্রশ্নগুলোর উত্তর
</h2>

<p>Q1 :  What is the difference between null and undefined?</p>
<p>Ans. যখন কোনো variable ডিকলার করা হয় কিন্তু তার মান দেওয়া হয় না তখন javascript অটোমেটিক undefined দেয়।
আর ডেভলপাররা ইচ্ছাকৃত null ব্যবহার কোনো variable এর মান নেই বোঝানোর জন্য। 
ইচ্ছাকৃত ভাবে undefined ও ব্যবহার করা যায়, তবে এটি ভালো নয়। 
undefined javascript থেকে অটোমেটিক আসে। আর null ডেভেলপাররা দেয়।
undefined এর type হলো undefined 
আর null এর type হলো object

আর দুনোটাই false value
</p>





<p>Q2 :  What is the use of the map() function in JavaScript? How is it different from forEach()?
</p>
<p>Ans. map() হলো javascript এর inbuilt function যা একটি array নেয় এবং array এর প্রত্যেকি element নিয়ে একক ভাবে কাজ করে অতঃপর নতুন একটি array return করে। 
একইভাবে forEach()	 একটি array নেয় এবং প্রতিটি element নিয়ে কাজ করে, কিন্তু কোনো কিছু return করে না।

map() আর forEach()	এর মধ্যে একটাই পার্থক্য, map() একটি নতুন array return করে কিন্তু forEach() কোনো কিছু return করে না।
</p>





<p>Q3 : What is the difference between == and ===?
</p>
<p>Ans. === কোনো ধরনের পরিবর্তন করে না value এবং  type দুটোই সেইম কিনা চেক করে। কিন্তু == শুধু  value চেক করে এবং value মিলানোর জন্য type পরিবর্তন করে ফেলে। 

== এবং === এর মাঝে আসল পার্থক্য হলো == type conversion করে কিন্তু === কোনো type conversion করে না।
</p>




<p>Q : What is the significance of async/await in fetching API data?
</p>
<p>Ans. Api থেকে data আসলতে সময় লাগে যার কারনে fetch এর পরবর্তী কাজগুলো আটকে থাকে। তাই পরবর্তী কোডগুলো যেন আটকে না থাকে সেই জন্য async/await function ব্যবহার করা হয়।এতে api থেকে fetch হওয়া function টি asynchronously কাজ করে।
</p>




<p>Q : Explain the concept of Scope in JavaScript (Global, Function, Block).
</p>
<p>Ans. Scope বলতে বোঝয় একটি variable কতটুকু জায়গা থেকে access করা যায়।

global scope : যখন কোনো variable function এবং {}সেকেন্ড ব্রেকেড এর বাহিরে  ডিকলার করা হয় তখন তাকে global scope  বলে। অর্থাৎ ডিকলার করার পরবর্তী যকোনো লাইন থেকে access কার যাবে।

function scope : যখন কোনো variable  function এর ভিতর ডিকলার করা হয় তখন ঐ variable শুধু function এর ভিতরেই access  করা যাবে, function এর বাহিরে access করা যাবে না। এই function scope কে ver, let, const তিনটাই মানে। 

block scope : যখন কোনো variable  {} সেকেন্ড ব্রেকেডের ভিতরে ডিকলার করা হয়, যেমনটা if অথবা for loop এর বডি আকারে থাকে তখন ঐ variable  কে এর বাহিরে ব্যবহার করা যাবে না। এটাকে block scope বলে। block scope শুধু let এবং const মানে কিন্তু ver মানে না।
</p>