import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
      <h1>With pizza, everything is better.</h1>
      <p>Pizza makes everything better</p>
      </div>
 
      <div className="relative hidden md:block">
        <Image src={'/Pizza.jpeg'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
};

export default Hero;
