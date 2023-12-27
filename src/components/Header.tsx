import { useState } from "react";

interface AnsiTextProps {
  message: string;
}

const AnsiText: React.FC<AnsiTextProps> = ({ message }) => {

  const [htmlHeader, setHtmlHeader] = useState<string>('');

  const ansiTextHome = `
  //   _____         ____          
  //  |   __|_ _ ___|    \ ___ _ _ 
  //  |   __| | |- _|  |  | -_| | |
  //  |_____|___|___|____/|___|\_/ 
  //                               
  `;

  const ansiTextContact = `
  //   _____         _           _   
  //  |     |___ ___| |_ ___ ___| |_ 
  //  |   --| . |   |  _| .'|  _|  _|
  //  |_____|___|_|_|_| |__,|___|_|  
  //                                 
  `;

  const ansiTextAbout = `
  //   _____ _           _                
  //  |  _  | |_ ___ _ _| |_    _____ ___ 
  //  |     | . | . | | |  _|  |     | -_|
  //  |__|__|___|___|___|_|    |_|_|_|___|
  //                                      
  `;

  const ansiTextProjects = `
  //   _____           _         _       
  //  |  _  |___ ___  |_|___ ___| |_ ___ 
  //  |   __|  _| . | | | -_|  _|  _|_ -|
  //  |__|  |_| |___|_| |___|___|_| |___|
  //                |___|                
`;

  return (
    <div className={`pl-2 md:pl-17 text-left text-sm md:text-md`}>
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
