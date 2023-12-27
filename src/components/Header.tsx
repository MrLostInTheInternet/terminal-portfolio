import { useState } from "react";

interface AnsiTextProps {
  message: string;
}

const AnsiText: React.FC<AnsiTextProps> = ({ message }) => {

  const [htmlHeader, setHtmlHeader] = useState<string>('');

  const ansiTextHome = `
  ███████╗██╗   ██╗ ██████╗ ███████╗███╗   ██╗        ██╗  ██╗   ██╗  
  ██╔════╝██║   ██║██╔════╝ ██╔════╝████╗  ██║        ██║  ██║   ██║  
  █████╗  ██║   ██║██║  ███╗█████╗  ██╔██╗ ██║        ██║  ██║   ██║  
  ██╔══╝  ██║   ██║██║   ██║██╔══╝  ██║╚██╗██║        ██║  ╚██╗ ██╔╝  
  ███████╗╚██████╔╝╚██████╔╝███████╗██║ ╚████║        ██║██╗╚████╔╝██╗
  ╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═══╝        ╚═╝╚═╝ ╚═══╝ ╚═╝
  `;

  const ansiTextContact = `
   ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗        ███╗   ███╗███████╗
  ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝        ████╗ ████║██╔════╝
  ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║           ██╔████╔██║█████╗  
  ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║           ██║╚██╔╝██║██╔══╝  
  ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║           ██║ ╚═╝ ██║███████╗
   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝           ╚═╝     ╚═╝╚══════╝
  `;

  const ansiTextAbout = `
   █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗        ███╗   ███╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝        ████╗ ████║██╔════╝
  ███████║██████╔╝██║   ██║██║   ██║   ██║           ██╔████╔██║█████╗  
  ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║           ██║╚██╔╝██║██╔══╝  
  ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║           ██║ ╚═╝ ██║███████╗
  ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝           ╚═╝     ╚═╝╚══════╝
  `;

  const ansiTextProjects = `
  ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
  ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
  ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
  ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
  ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
  `;


  // Convert ANSI escape codes to HTML
  const htmlTextHome = ansiTextHome.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextContact = ansiTextContact.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextAbout = ansiTextAbout.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextProjects = ansiTextProjects.replace(/\u001b\[(\d+)m/g, '');

  switch (message) {
    case 'about':
      return (
        <div style={{ paddingLeft: 30, textAlign: 'left', fontSize: '0.5rem'}}>
          <pre>
            {ansiTextAbout}
          </pre>
        </div>
      )

    case 'contact':
      return (
        <div style={{ paddingLeft: 30, textAlign: 'left', fontSize: '0.5rem' }}>
          <pre>
            {ansiTextContact}
          </pre>
        </div>
      )

    case 'home':
      return (
        <div style={{ paddingLeft: 30, textAlign: 'left', fontSize: '0.5rem' }}>
          <pre>
            {ansiTextHome}
          </pre>
        </div>
      )
    
    case 'projects':
      return (
        <div style={{ paddingLeft: 30, textAlign: 'left', fontSize: '0.5rem' }}>
          <pre>
            {ansiTextProjects}
          </pre>
        </div>
      )

    default:
      return (
        <div style={{ paddingLeft: 30, textAlign: 'left', fontSize: '0.5rem' }}>
          <pre>
          </pre>
        </div>
      )
  }
};

export default AnsiText;
