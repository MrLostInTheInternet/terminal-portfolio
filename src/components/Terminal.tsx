import React, { useEffect, useRef, useState } from 'react';

const FancyTerminal: React.FC = () => {
    const [currentInput, setCurrentInput] = useState<string>('');
    const [output, setOutput] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [ipAddress, setIpAddress] = useState('');

    const [isHelp, setIsHelp] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const completionWords = ['home', 'contact', 'projects', 'about', '/home', '/about', '/contact', '/projects'];
    const availablePages = ['/home', '/about', '/contact', '/projects'];
    const availableCommands = [
        {
            cmd: 'help',
            descr: '\t\t\t- List of available commands;'
        },
        {
            cmd: 'whoami',
            descr: '\t\t\t- Shows your IP address;'
        },
        {
            cmd: 'ls',
            descr: '\t\t\t\t- List of available pages on the website;'
        },
        {
            cmd: 'cd [page]',
            descr: '\t\t- Move to another page. Example: cd /home (moves to Homepage);'
        },
        {
            cmd: 'clear',
            descr: '\t\t\t- Clear the terminal;'
        },
        {
            cmd: 'cls',
            descr: '\t\t\t\t- Clear the terminal;'
        },
        {
            cmd: 'hello',
            descr: '\t\t\t- I say hello back;'
        },
        {
            cmd: 'exit',
            descr: '\t\t\t- Close the webpage;'
        },
        {
            cmd: 'pwd',
            descr: '\t\t\t\t- Shows the current location on the website;'
        }
    ];

    const scrollToMiddle = () => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    useEffect(() => {
        // Scroll to the bottom when output changes
        scrollToMiddle();
    }, [output]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                // Assuming the data contains an 'ip' property
                const fetchedIpAddress = data.ip;

                // Update the state with the fetched IP address
                setIpAddress(fetchedIpAddress);
            })
            .catch(error => {
                console.error('Error fetching IP address:', error);
            });
    }, []);

    const handleTabCompletion = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Tab') {
            event.preventDefault();

            const inputValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

            // Check if the input starts with "cd " before tab completion
            if (inputValue.startsWith('cd ')) {
                const partialInput = inputValue.slice(3); // Remove "cd " from the input
                const matchingWords = completionWords.filter(word => word.startsWith(partialInput));

                if (matchingWords.length > 0) {
                    const completion = matchingWords[0].slice(partialInput.length);
                    (event.target as HTMLInputElement).value = 'cd ' + partialInput + completion;
                    setInput('cd ' + partialInput + completion);
                }
            }
        } else {
            setCurrentInput((event.target as HTMLInputElement).value.toLowerCase());
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Handle the command and generate a response
        const response = handleCommand(input);

        // Update the output with the command and response
        if(input.toLowerCase() === 'cls' || input.toLowerCase() === 'clear') {
            null
        } else setOutput((prevOutput) => [...prevOutput, `visitor@eugen-portfolio:~$ ${input}`, response]);

        // Clear the input
        setInput('');

        // Scroll to the bottom when output changes
        scrollToMiddle();
    };

    const handleCommand = (command: string): string => {

        if (command.toLowerCase().includes('cd')) {
            const navCommand: string = command.substring(3);
            switch (navCommand.trim()) {
                case '/home':
                    window.location.href = '/';
                    return '';
                case '/about':
                    window.location.href = `/about`;
                    return '';
                case '/projects':
                    window.location.href = '/projects';
                    return '';
                case '/contact':
                    window.location.href = '/contact';
                    return '';
                case 'home':
                    window.location.href = '/';
                    return '';
                case 'about':
                    window.location.href = `/about`;
                    return '';
                case 'projects':
                    window.location.href = '/projects';
                    return '';
                case 'contact':
                    window.location.href = '/contact';
                    return '';
                case '':
                    window.location.href = '/';
                    return '';
                default:
                    return `Command "${command}" not found`;
            }
        } else {
            // Implement logic to handle different commands
            switch (command.toLowerCase()) {
                case 'help':
                    setIsHelp(true);
                    return '';

                case 'hello':
                    setIsHelp(false);
                    return 'Hi there!'

                case 'clear':
                    setIsHelp(false);
                    setOutput([]); // Clear all previous text
                    return '';

                case 'cls':
                    setIsHelp(false);
                    setOutput([]); // Clear all previous text
                    return '';

                case 'ls':
                    setIsHelp(false);
                    return 'Available pages:\n' + availablePages.join('\n');

                case 'whoami':
                    setIsHelp(false);
                    return `You are IP: ${ipAddress}, maybe I'm wrong or ... maybe I'm not`;

                case 'pwd':
                    setIsHelp(false);
                    return `/${window.location.href.split('/')[window.location.href.split('/').length - 1]}`;

                case 'exit':
                    window.close();
                    return '';

                case 'id':
                    setIsHelp(false)
                    return 'uid=1000(www-data) gid=1000(www-data) groups=1000(www-data)';

                default:
                    setIsHelp(false);
                    return `Command "${command}" not found`;
            }
        }

    };

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div onClick={handleTerminalClick} className="font-mono text-lg overflow-hidden whitespace-pre-line flex-1 h-full md:pl-17 text-gray-300 w-full">
            <div className="pt-2 md:pb-1 md:pt-4 md:pl-17 overflow-y-auto">
                {output.map((line, index) => {
                    const commandPrompt = 'visitor@eugen-portfolio:~$';
                    const commandLength = commandPrompt.length;

                    // Check if the line starts with the command prompt
                    if (line.startsWith(commandPrompt)) {
                        const commandPart = line.slice(0, commandLength);
                        const responsePart = line.slice(commandLength);

                        return (
                            <div key={index} className="mb-2 md:mb-4 text-sm md:text-lg">
                                <pre>
                                    <span className='text-yellow-500 font-bold'>visitor</span><span className='font-bold'>@</span><span className='text-green-500 font-bold'>eugen-portfolio</span><span className='text-red-500 font-bold'>:~</span>
                                    <span className='font-bold'>$</span>{responsePart}
                                </pre>
                            </div>
                        );
                    }

                    // If the line doesn't start with the command prompt, render it as is
                    return (
                        <div key={index} className="mb-2 md:mb-4 text-gray-300 text-sm md:text-lg">
                            {line}
                        </div>
                    );
                })}
                <div ref={inputRef}></div>
                {isHelp && (
                    <div className='mb-2 md:mb-4 flex flex-wrap flex-col flex-1 font-bold'>
                        {availableCommands.map(({ cmd, descr }) => (
                            <div key={cmd} className="md:ml-17">
                                <pre>
                                    <span className="font-bold text-sm md:text-lg text-yellow-500">{cmd}</span>
                                    <span className="pl-17 md:pl-17 text-sm md:text-lg whitespace-pre-wrap">{descr}</span>
                                </pre>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <form
                onSubmit={handleInputSubmit}
                className="flex-1 items-center md:pl-17 mb-40 md:flex-row"
            >
                <div className='flex flex-col md:flex-row'>
                    <pre className=" text-[#d4d4d4] font-bold text-sm md:text-lg pr-2">
                        <span className='text-yellow-500'>visitor</span>@<span className='text-green-500'>eugen-portfolio</span><span className='text-red-500'>:~</span>$</pre>
                    <div className='flex-row'>
                        <span className="md:hidden text-[#d4d4d4] font-bold text-sm md:text-lg pr-2">&gt;</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyDown={handleTabCompletion}
                            className="flex-1 text-sm md:text-lg bg-transparent text-gray-300 outline-none caret-yellow-500 border-none"
                        />
                        {/* Hide the submit button */}
                        <button type="submit" className="hidden"></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FancyTerminal;
