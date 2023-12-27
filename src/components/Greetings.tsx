import React, { useEffect, useState } from 'react';

const Greetings: React.FC = () => {
    const [initGreeting, setInitGreeting] = useState<string>('');
    const [help, setHelp] = useState<string>('');
    const [endGreeting, setEndGreeting] = useState<string>('');
    const initGreetingsText = ">>> Welcome to my Portfolio. I'm Eugen Iofciu Vasile, and I'm a programmer enthusiast! Use ";
    const helpText = 'help';
    const endGreetingsText = ' to list all the available commands.'

    useEffect(() => {
        // Use setTimeout to simulate typing animation
        const typeAnimation = () => {
            for (let i = 0; i <= initGreetingsText.length; i++) {
                setTimeout(() => {
                    setInitGreeting(initGreetingsText.slice(0, i));
                }, i * 20); // Adjust the delay as needed
            }
            setTimeout(() => {
                for (let i = 0; i <= helpText.length; i++) {
                    setTimeout(() => {
                        setHelp(helpText.slice(0, i));
                    }, i * 20); // Adjust the delay as needed
                }
            }, initGreetingsText.length * 20)
            setTimeout(() => {
                for (let i = 0; i <= endGreetingsText.length; i++) {
                    setTimeout(() => {
                        setEndGreeting(endGreetingsText.slice(0, i));
                    }, i * 20); // Adjust the delay as needed
                }
            }, (initGreetingsText.length + helpText.length) * 20)
        };

        // Start the typing animation
        typeAnimation();
    }, []);

    return (
        <div className="font-monospace text-md text-yellow-500 py-6 md:text-lg lg:text-xl mx-2 md:mx-0 whitespace-pre-wrap">
            <span>
                {initGreeting}
            </span>
            <span className="text-blue-500">
                {help}
            </span>
            <span>
                {endGreeting}
            </span>
        </div>
    );
};

export default Greetings;
