export function Work() {
    return (
      <>
        <h1>Work</h1>
        <h2>Milacron (2019-Present)</h2>
        <h3>Product Validation Engineer (2019-2021)</h3>
        <p>
          I started my career at Milacron right after college (university) in the product validation department.
          This involved getting a deep understanding of the mechanical, electrical, and software systems of the machine to understand how it functioned.
          In this role, I would ensure machines were tuned to meet engineering specifications and write documentation for testing new products. 
          This involved PID (proportional, integral, derivative loop common in controls theory) tuning on servo motor controllers and the loops used to control hydraulic proportional valves.
          To complete all this tuning, I ended up delving more into controls theory and how the software worked to apply this principles.
          This got me interested in how I could improve the software to make the machines perform better.
          I also was interested in how we could improve the human machine interface (HMI) to make our customer&apos;s experience easier.
          This lead me to apply and transfer into our software development group.
        </p>
        <h3>Controls Software Engineer (2021-2023)</h3>
        <p>
          In this role, I worked on development of features for the current control offerings as well as control offerings in development.
          These features involved added customer requested machine sequencing and porting current control features to the new controls platform.
          I gained an understanding of the core architecture of the machine software used.
          This included the custom libraries we used for controlling the machine.
          This understanding allowed me to work on a project to improve the machine performance, specifically the injection process.
          This project led to the hydraulic machine injection performance to be close to an all electric machine counterpart (from 3% load sensitivity to less than 1% load sensitivity).
          This lead me to go into a new department in software called the Control Systems Architecture.
        </p>
        <h3>Control Systems Architecture Engineer (2023-Present)</h3>
        <p>
          This is my current role, and in it I am working on the next generation controls platform.
          I have been working on the new human machine interface (HMI) platform.
          This leverages .NET core and Blazor for the interface and OPC-UA for the communication to the PLC.
          I have developed the core backend for how we utilize an OPC-UA client to read/write values from the PLC.
          This also can record information to an SQLite database.
          I have worked on implementing features to improve user experience such as drag and drop.
          In this role, I can apply my passion for software engineering to help improve the products.
        </p>
        <h1>Side Projects/Learning</h1>
        <h3>
          The Odin Project
        </h3>
        <p>
          I have been working on completing The Odin Project&apos;s course on full stack development using Node.js.
          I have gained a better understanding of how web technologies work such as react, express, and node.
          This has lead to improvements in the .NET/Blazor codebase.
        </p>
      </>
    );
  }
  