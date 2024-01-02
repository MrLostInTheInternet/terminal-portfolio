import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const ContactInfo = () => {

    const [asciiImage, setAsciiImage] = useState<string>('');
    const [link1, setLink1] = useState<string>('');
    const [link2, setLink2] = useState<string>('');
    const [link3, setLink3] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const age = new Date().getFullYear() - 1999;

    const l1 = 'Linkedin';
    const l2 = 'GitHub';
    const l3 = 'Instagram';
    const recipientEmail = 'eugen.iofciuvasile@hotmail.com';
    const subject = '[PORTFOLIO] Hello Eugen';
    const body = 'I would like to get in touch with you. My name is ';

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        const typeAnimation = () => {
            for (let i = 0; i <= l1.length; i++) {
                setTimeout(() => {
                    setLink1(l1.slice(0, i));
                }, i * 50); // Adjust the delay as needed
            };
            for (let i = 0; i <= l2.length; i++) {
                setTimeout(() => {
                    setLink2(l2.slice(0, i));
                }, i * 50); // Adjust the delay as needed
            };
            for (let i = 0; i <= l3.length; i++) {
                setTimeout(() => {
                    setLink3(l3.slice(0, i));
                }, i * 50); // Adjust the delay as needed
            };
            for (let i = 0; i <= recipientEmail.length; i++) {
                setTimeout(() => {
                    setEmail(recipientEmail.slice(0, i));
                }, i * 50); // Adjust the delay as needed
            };
        }
        typeAnimation();
    }, []);


    return (
        <div className='flex flex-1 flex-col md:flex-row flex-wrap items-top' style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#d4d4d4' }}>
            <div className="pl-6 lg:pl-12 xl:pl-17 text-left">
                <pre>Click the links below to contact me    </pre>
                <br />
                <div className='flex items-center justify-center'>
                    <FontAwesomeIcon icon={faArrowDown} className='w-5' />
                </div>
                <br />
                <div className='flex-row'>
                    <pre>
                        <li className='cursor-pointer transition duration-300 hover:text-[#efa667]'>
                            <FontAwesomeIcon icon={faLinkedin} className='mr-5 w-5' />
                            <a href="https://www.linkedin.com/in/eugen-iofciu-vasile-17a899196">{link1}</a>
                        </li>
                    </pre>
                    <pre>
                        <li className='cursor-pointer transition duration-300 hover:text-[#efa667]'>
                            <FontAwesomeIcon icon={faGithub} className='mr-5 w-5' />
                            <a href="https://www.github.com/MrLostInTheInternet/">{link2}</a>
                        </li>
                    </pre>
                    <pre>
                        <li className='cursor-pointer transition duration-300 hover:text-[#efa667]'>
                            <FontAwesomeIcon icon={faInstagram} className='mr-5 w-5' />
                            <a href="https://www.instagram.com/mr_euz">{link3}</a>
                        </li>
                    </pre>
                    <pre>
                        <li className='cursor-pointer transition duration-300 hover:text-[#efa667]'>
                            <FontAwesomeIcon icon={faMailForward} className='mr-5 w-5' />
                            <a href={mailtoLink}>{email}</a>
                        </li>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo