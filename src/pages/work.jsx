import { Link } from "../components/shared/link";

export function Work() {
  return (
    <>
      <h1 className="text-2xl font-bold">Work</h1>
      <div className="p-4">
        <h2 className="text-xl font-bold">Milacron (2019-Present)</h2>
        <div className="p-4">
          <h3 className="text-lg font-bold">Product Validation Engineer (2019-2021)</h3>
          <p className="mt-4">
            I began my career at Milacron right after university in the product validation department, where I developed a deep understanding of the mechanical, electrical, and software systems of our machines.
            My role involved tuning machines to meet engineering specifications and documenting test procedures for new products.
            I worked extensively with PID (proportional-integral-derivative) control loops for servo motor controllers and hydraulic proportional valves.
            To optimize these systems, I delved into control theory and software applications, sparking my interest in improving machine performance through software.
            Additionally, I explored ways to enhance the human-machine interface (HMI) to improve user experience, ultimately leading me to transition into the software development group.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">Controls Software Engineer (2021-2023)</h3>
          <p className="mt-4">
            In this role, I developed features for both existing and in-development control systems, implementing customer-requested machine sequencing and porting control features to a new platform.
            I gained a comprehensive understanding of the machine software architecture, including the custom libraries used for machine control.
            Leveraging this knowledge, I led a project to enhance injection process performance in hydraulic machines, reducing load sensitivity from 3% to less than 1%, making it comparable to all-electric counterparts.
            This work led me to join the Control Systems Architecture department.
          </p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold">Control Systems Architecture Engineer (2023-Present)</h3>
          <p className="mt-4">
            In my current role, I am focused on developing the next-generation controls platform, particularly the new human-machine interface (HMI).
            This platform utilizes .NET Core and Blazor for the interface, with OPC-UA facilitating communication with the PLC.
            I developed the core backend for managing OPC-UA client interactions, enabling efficient PLC read/write operations and data logging to an SQLite database.
            Additionally, I have implemented user experience enhancements such as drag-and-drop functionality.
            This role allows me to apply my passion for software engineering to drive product improvements.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-bold -mt-2">Technologies</h1>
      <div className="p-4">
        <h2 className="text-xl font-bold">Web</h2>
        <ul className="p-4">
          <li>
            <Link 
              label={"ASP.NET Core"} 
              url={"https://dotnet.microsoft.com/en-us/apps/aspnet"} 
            />
          </li>
          <li>
            <Link 
              label={"Blazor"} 
              url={"https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"} 
            />
          </li>
          <li>
            <Link 
              label={"Node.js"} 
              url={"https://nodejs.org/en"} 
            />
          </li>
          <li>
            <Link 
              label={"React"} 
              url={"https://react.dev/"} 
            />
          </li>
          <li>
            Vanilla HTML, CSS, and Javascript
          </li>
        </ul>
      </div>
      <div className="p-4 -mt-6">
        <h2 className="text-xl font-bold">Automation & Controls</h2>
        <ul className="p-4 list-disc">
          <li>
            <Link 
              label={"Beckhoff Automation"} 
              url={"https://www.beckhoff.com/en-us/"} 
            />
            <ul className="pl-8 list-disc">
              <li>
                <Link 
                  label={"Programmable Logic Controller (PLC) using Structured Text"} 
                  url={"https://www.beckhoff.com/en-us/products/automation/twincat/"} 
                />
              </li>
              <li>
                <Link 
                  label={"Human Machine Interface (HMI)"} 
                  url={"https://www.beckhoff.com/en-us/products/automation/twincat/texxxx-twincat-3-engineering/te2000.html"} 
                />
              </li>
            </ul>
          </li>
          <li>
            <Link 
              label={"B&R Automation"} 
              url={"https://www.br-automation.com/en-us/"} 
            />
            <ul className="pl-8 list-disc">
              <li>
                <Link 
                  label={"Programmable Logic Controller (PLC) using C and Structured Text"} 
                  url={"https://www.br-automation.com/en-us/products/software/automation-software/automation-studio/"} 
                />
              </li>
              <li>
                <Link 
                  label={"mapp View"}
                  url={"https://www.br-automation.com/en-us/products/software/mapp-technology/mapp-view/"}
                />
              </li>
              <li>
                <Link 
                  label={"mapp Motion"}
                  url={"https://www.br-automation.com/en-us/products/software/mapp-technology/mapp-motion/"}
                />
              </li>
            </ul>
          </li>
          <li className="text-lg">
            Communication Protocols
            <ul className="pl-8 list-disc">
              <li>
                <Link 
                  label={"EtherCAT"}
                  url={"https://www.ethercat.org/en/technology.html"}
                />
              </li>
              <li>
                <Link 
                  label={"Powerlink"}
                  url={"https://www.br-automation.com/en/technologies/powerlink/"}
                />
              </li>
              <li>
                <Link 
                  label={"OPC-UA"}
                  url={"https://opcfoundation.org/about/what-is-opc/"}
                />
              </li>
              <li>
                <Link 
                  label={"Profinet"}
                  url={"https://us.profinet.com/technology/profinet/"}
                />
              </li>
              <li>
                <Link 
                  label={"Modbus"}
                  url={"https://www.modbus.org/"}
                />
              </li>
              <li>
                <Link 
                  label={"ADS"}
                  url={"https://infosys.beckhoff.com/english.php?content=../content/1033/tcinfosys3/11291871243.html&id="}
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h1 className="text-2xl font-bold -mt-2">Side Projects/Learning</h1>
      <div className="p-4">
        <h3 className="text-lg font-bold">
          The Odin Project
        </h3>
        <p className="mt-4">
          I am currently working through The Odin Project&apos;s full-stack development course using Node.js.
          Through this, I have gained a deeper understanding of web technologies, including React, Express, and Node.js,
          which has contributed to improvements in our .NET/Blazor codebase.
        </p>
      </div>
    </>
  );
}
