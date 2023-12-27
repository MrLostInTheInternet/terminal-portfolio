import { useState } from "react";

interface AnsiTextProps {
  message: string;
}

const AnsiText: React.FC<AnsiTextProps> = ({ message }) => {

  const [htmlHeader, setHtmlHeader] = useState<string>('');

  const ansiTextHome = `
  ███████        ██        ██    ██   
  ██             ██        ██    ██   
  █████          ██        ██    ██   
  ██             ██         ██  ██    
  ███████ ██     ██ ██       ████   ██
  `;

  const ansiTextContact = `
  ██████  ██████  ███    ██ ████████  █████   ██████ ████████
  ██      ██    ██ ████   ██    ██    ██   ██ ██         ██  
  ██      ██    ██ ██ ██  ██    ██    ███████ ██         ██  
  ██      ██    ██ ██  ██ ██    ██    ██   ██ ██         ██  
   ██████  ██████  ██   ████    ██    ██   ██  ██████    ██  
  `;

  const ansiTextAbout = `
  █████  ██████   ██████  ██    ██ ████████
  ██   ██ ██   ██ ██    ██ ██    ██    ██
  ███████ ██████  ██    ██ ██    ██    ██
  ██   ██ ██   ██ ██    ██ ██    ██    ██
  ██   ██ ██████   ██████   ██████     ██
  `;

  const ansiTextProjects = `
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██     
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████
  `;


  // Convert ANSI escape codes to HTML
  const htmlTextHome = ansiTextHome.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextContact = ansiTextContact.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextAbout = ansiTextAbout.replace(/\u001b\[(\d+)m/g, '');
  const htmlTextProjects = ansiTextProjects.replace(/\u001b\[(\d+)m/g, '');


  return (
    <div className={`pl-2 md:pl-17 text-left text-xs md:text-sm`}>
      <pre>
        {message === 'about' && ansiTextAbout}
        {message === 'contact' && ansiTextContact}
        {message === 'home' && ansiTextHome}
        {message === 'projects' && ansiTextProjects}
      </pre>
    </div>
  );
};

export default AnsiText;
