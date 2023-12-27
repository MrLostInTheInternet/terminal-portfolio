import React, { useEffect, useState } from 'react';

const Greetings: React.FC = () => {
    const [initGreeting, setInitGreeting] = useState<string>('');
    const [help, setHelp] = useState<string>('');
    const [endGreeting, setEndGreeting] = useState<string>('');
    const initGreetingsText = '>>> Welcome to My Portfolio! Use ';
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
        <div style={{ fontFamily: 'monospace', fontSize: 20, color: '#efa667', padding: '30px', whiteSpace: 'nowrap', fontWeight: 'bold',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 127, 0, 0.8)'}}>
            <span>
                {initGreeting}
            </span>
            <span style={{color: '#448ae0', textShadow: '0 0 5px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.8)'}}>
                {help}
            </span>
            <span>
                {endGreeting}
            </span>
        </div>
    );
};

export default Greetings;
