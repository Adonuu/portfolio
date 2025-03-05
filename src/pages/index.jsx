import { Link } from "../components/shared/link";

export function Index() {
  return (
    <>
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="mt-4">
        Hello, my name is Adam. I am a software and controls engineer based in{" "}
        <Link label={"Cincinnati, OH"} url={"https://www.google.com/maps/place/Cincinnati,+OH"} />, 
        currently working at{" "}
        <Link label={"Milacron"} url={"https://www.milacron.com"}/ >{" "}
        as a Controls System Architecture Engineer.  
        I&apos;m actively learning web development, as well as deepening my understanding of data structures and algorithms.
      </p>
      <p className="mt-4">
        My fascination with computer software began in childhood, driven by a passion for reverse engineering. I loved taking things apart to understand how they worked from the inside out, 
        which ultimately shaped my career path.
      </p>
      <p className="mt-4">
        This curiosity led me to pursue a degree in Mechanical Engineering, where I developed a strong foundation in problem-solving and system design. 
        While working as a test engineer, I became increasingly fascinated by software and its role in automation and system optimization. 
        This curiosity drove me to deepen my understanding of programming, leading me to explore software engineering more broadly. 
        Now, I am actively expanding my skills in software development, focusing on data structures, algorithms, and modern application development to build scalable and efficient software solutions.
      </p>
      <p className="mt-4">
        I&apos;m always eager to collaborate on interesting projects or explore new challenges—feel free to reach out if there&apos;s something I can contribute to!
      </p>
      <h1 className="text-2xl font-bold mt-5">Technologies</h1>
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
      <div className="p-4">
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
    </>
  );
}
