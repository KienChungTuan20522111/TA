import Image from 'next/image';
import React from 'react';
import Form from '../Components/Form';
function Home() {
  return (
    <div className=" z-10">
      <Image
        alt="bg"
        src="/images/bg.png"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div className=" mx-auto mt-10">
        <Form />
      </div>
    </div>
  );
}

export default Home;
