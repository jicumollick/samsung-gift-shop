
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Questions = () => {
    return (
        <div className='mt-5'>
            <Accordion >
  <Accordion.Item eventKey="0">
    <Accordion.Header>How React Works?</Accordion.Header>
    <Accordion.Body>
    React এর কাজ হলো তার মধো থাকা বিভিন্ন component কে website এ দেখানো । প্রশ্ন হলো react এই কাজ কিভাবে করে ? 
যখনই আমরা আমাদের পেজ প্রথমবার লোড করি , তখন react main DOM এর একটি কপি নিজের মধ্য বানিয়ে নেয় । যেটাকে virtual Dom বলে।
এরপর থেকে যখনই পেজ রিলোড হয় অথবা কোন পরিবর্তন হয় , তখনই react, main dom এ না গিয়ে প্রথমে virtual dom এ সেটাকে চেঞ্জ করে । এরপর 
main dom ও virtual dom এর মধ্য compare করে diff algorithm এর সাহায্য। এরপর main dom পুরো render না করে , শুধুমাত্র যে স্থানটি পরিবর্তন হয়েছে , শুধুমাত্র সেই
স্থানটি পরিবর্তন করে । যার ফলে performance অনেক better হয় ।  
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is the difference between  props and state ?</Accordion.Header>
    <Accordion.Body>
    props অপরিবর্তনযোগ্য কিন্তু state পরিবর্তন করা যায় । props এক component থেকে অন্য component এ ডাটা পাঠাতে ব্যবহার করা হয়  কিন্তু 
state ব্যবহার করা হয় , কোন একটি component এর ডাটা ধরে রাখার জন্য। child component props access নিতে পারে কিন্তু state access নিতে পারেনা। 
stateless component এ  props থাকতে পারে , কিন্তু sateless component এ কোন state থাকতে পারেনা । props একটি component কে reuse করতে 
সাহায্য করে , কিন্তু state তা করেনা । 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How useState() works? </Accordion.Header>
    <Accordion.Body>
    usestate মূলত একটি hook. এটা একটা state variable কে hold করে রাখে এবং সেই ভ্যারিয়েবল কে আপডেট করার একটি function আমাদের দেয় ।
usestate একটি state variable এর intial ভ্যালুটিও ধরে রাখে ।  যার ফলে state variable এর মান undefined হয়না ( যদি intial value দিয়ে দেয়)।
মূলত state এর মান ধরে রাখার জন্যই আমরা এই usestate() hook টি ব্যবহার করে থাকি।  
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Questions;