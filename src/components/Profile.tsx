import { useEffect, useState } from 'react';

const Profile = () => {

    const [asciiImage, setAsciiImage] = useState<string>('');
    const [infoText1, setInfoText1] = useState<string>('');
    const [infoText2, setInfoText2] = useState<string>('');
    const [infoText3, setInfoText3] = useState<string>('');
    const [infoText4, setInfoText4] = useState<string>('');
    const [infoText5, setInfoText5] = useState<string>('');

    let age = new Date().getFullYear() - 1999;
    if(new Date().getMonth() <= 8) {
        age -= 1;
    } else {
        age = age;
    }
    const info1 = `
-------------Personal Informations----------------\n
--------------------------------------------------\n
    ~ Name:         Eugen Iofciu Vasile\n
    ~ Age:          ${age} years old\n
    ~ Employment:   Software Developer\n
    ~ Nationality:  Romanian & Italian\n
    ~ Company:      DIGI Italia TERAOKA\n
    ~ Location:     Bologna, Italy\n
    `;

    const info2 = `
---------------Programming Languages--------------\n
--------------------------------------------------\n
    ~ Frontend:\n
        - HTML, CSS, JS, TS\n
        - ReactJS, React Native\n
        - AstroJS, Angular\n
    ~ Backend:\n
        - Python, Java, C++\n
        - NodeJS, Spring Boot\n
        - Golang, Quarkus
    `;

    const info3 = `
--------------------Education--------------------\n
-------------------------------------------------\n
    ~ Diploma:\n
        - ITIS Belluzzi-Fioravanti\n
        - 18/09/2013 - 05/07/2018\n
    ~ Bachelor's Degree Automation Engineering:\n
        - University of Bologna\n
        - 09/10/2018 - CURRENT\n
    `;

    const info4 = `
-------------------Hard Skills-------------------\n
-------------------------------------------------\n
    ~ 3D CAD design and modelling -> Programs:\n
        - SolidWorks\n
        - Creo Parametric\n
        - AutoCAD\n
        - Fusion360\n
    ~ Computer's knowledge:\n
        - Hardware\n
        - Software\n
        - OS -> Linux :: Windows :: macOS\n
    ~ Programming languages:\n
        - Frontend + Backend\n
`;

    const info5 = `
-------------------Soft Skills-------------------\n
-------------------------------------------------\n
    ~ Fast learning ability\n
    ~ Precision\n
    ~ Problem solving\n
    ~ Commitment to work\n
    ~ Languages:\n
        - English   -> B2\n
        - Italian   -> C2\n
        - Romanian  -> B1\n
    `;

    const asciiArt = `
    ..........................................................................................\n
    ..........................................................................................\n
    ..........................................................................................\n
    ..........................................................................................\n
    .........................................:::---:..........................................\n
    ....................................-==*#%%%%%%%##*+=-:...................................\n
    ..................................=#@@%%%#%%%%%%#%%%%##*-.................................\n
    ................................:+@@%%%%%%%%%%%%%%%%%%####:...............................\n
    ...............................:#@@%%%%%######%%%%%%%%##%##:..............................\n
    ..............................:%@%%##******+++*#%%%%##*####+..............................\n
    .............................:#%%#***+++=======++++==----=+#=.............................\n
    .............................=%%%#***+++===--=======--:::::+#:............................\n
    .............................*%%%#***++++===-========-:::::-#=............................\n
    ............................:%%%##****+++==-----=====-:::::-**............................\n
    ............................-%%##*****+++===-----==--:::::::+*............................\n
    ............................-%%############**+======+++++==--+............................\n
    ............................-%##%#%##********###***#****++++++==:.........................\n
    .............................#%#*%+****##***++##**#=+*#*==--==+-..........................\n
    ............................+###*#*****+******##+-#+=*++-:::--+:..........................\n
    ...........................-#*#***#+++++++***##*+-=#----:...-+=:..........................\n
    ...........................:#*********+*****##**+-.-====-::-===:..........................\n
    ............................*#****+++++++++**+**=:-::::::::..::...........................\n
    ............................=#****++++====++*##*=::::::.....::............................\n
    .............................-+*#**+++=++*****+===-::::.....::............................\n
    ................................-**++++++++****++=--:--:...:..............................\n
    .................................#***+++=+****+===-:::::..................................\n
    .................................*#**+++++++++====-:......:...............................\n
    .................................+##*+++++++====--::......................................\n
    .................................+*###****+++==---::....:.................................\n
    .................................*****###***+==-=-----::..................................\n
    ...............................:*#********#**++======-::..................................\n
    .............................:=###**++++++++*+++=---:..:..................................\n
    ........................:==+####***+++==-=======-:........................................\n
    ......................:=#%%%%%%##*+++==-:::------:....:::-==:.............................\n
    ...................:+*%%%%%%%%%%%%*+==--::.:::::::.....:::###*+=-:........................\n
    ...............:=*#########%%#%%##%##+=-:....:::::.......:=%#####*+=:.....................\n
    ............-+#%#######################*+-....::::......::=##########*-...................\n
    ........:-*#%##########*############*#####*-:....:::...::--*#*######*##*=:................\n
    ......:+%%%%#######********##########**####***+=-:::...:::=##**#***#**##**=:..............\n
    ....=#%%%%%%##*#####********######*******#*****##*+++++=-=##*+*********##***:.............\n
    ..:*%%%%%%%%%%%#*##***********####**************##***#*****++*+**+*****#%##**-............\n
    =+%%%%%%%%%##%%%#**************###****************#*******++**+**+******##****-...........\n
    #%%%%%%%%%####%@%#**************##**********************+++***+***+****+*###***...........\n
    %%@@%%%%%%###%##%%#*******#******##**************************+++**++***++*#*#**-..........\n
    @@@%%%%%%#####%%#%%#+******#*********************************+++*******+++#*#**+..........\n
    `;

    useEffect(() => {
        // reset states
        setAsciiImage('');
        setInfoText1('');
        setInfoText2('');
        setInfoText3('');
        setInfoText4('');
        setInfoText5('');

        const typeAnimation = () => {
            const lines = asciiArt.split('\n');
            const linesInfo1 = info1.split('\n');
            const linesInfo2 = info2.split('\n');
            const linesInfo3 = info3.split('\n');
            const linesInfo4 = info4.split('\n');
            const linesInfo5 = info5.split('\n');

            let i = 0;
            const intervalId = setInterval(() => {
                if (i < lines.length - 1) {
                    setAsciiImage((prevAscii) => prevAscii + lines[i] + '\n');
                }
                i++;
                if (i >= asciiArt.length) {
                    clearInterval(intervalId);
                }
            }, 15); // Adjust the delay as needed for line speed
            
            let j = 0
            setTimeout(() => {
                const infoIntervalId = setInterval(() => {
                    if (j < linesInfo1.length - 1) {
                        setInfoText1((prevInfo1) => prevInfo1 + linesInfo1[j] + '\n');
                    }
                    if (j < linesInfo2.length - 1) {
                        setInfoText2((prevInfo2) => prevInfo2 + linesInfo2[j] + '\n');
                    }
                    if (j < linesInfo3.length - 1) {
                        setInfoText3((prevInfo3) => prevInfo3 + linesInfo3[j] + '\n');
                    }
                    if (j < linesInfo4.length - 1) {
                        setInfoText4((prevInfo4) => prevInfo4 + linesInfo4[j] + '\n');
                    }
                    if (j < linesInfo5.length - 1) {
                        setInfoText5((prevInfo5) => prevInfo5 + linesInfo5[j] + '\n');
                    }
                    j++;
                    if (j >= info4.length) {
                        clearInterval(infoIntervalId);
                    }
                }, 50); // Adjust the delay as needed for line speed
            }, lines.length * 15)
        };

        typeAnimation();
    }, []);


    return (
        <div className='md:mx-2 items-center md:items-start justify-center flex flex-1 flex-col md:flex-wrap md:justify-start'>
            <pre className="lg:pl-9 xl:pl-13 mb-5 text-blue-200" style={{ lineHeight: 0.5, fontSize: '0.3rem' }}>
                {asciiImage}
            </pre>
            <div className='flex flex-1 flex-col md:flex-row flex-wrap items-top' style={{ fontFamily: 'monospace', fontWeight: 'bold',fontSize: '0.8rem', color: '#d4d4d4' }}>
                <pre className="lg:pl-9 xl:pl-13 ">
                    {infoText1}
                </pre>
                <pre className="lg:pl-9 xl:pl-13">
                    {infoText2}
                </pre>
                <pre className="lg:pl-9 xl:pl-13">
                    {infoText3}
                </pre>
                <pre className="lg:pl-9 xl:pl-13">
                    {infoText4}
                </pre>
                <pre className="lg:pl-9 xl:pl-13">
                    {infoText5}
                </pre>
            </div>
        </div>
    )
}

export default Profile
