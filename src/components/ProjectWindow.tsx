// src/components/ProjectWindow.tsx
import React, { useState } from 'react';

interface ProjectWindowProps {
    title: string;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ title }) => {
    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        setFocused(!focused);
    };

    return (
        <div
            onClick={handleClick}
            className={`w-64 md:w-1/5 h-48 m-4 p-6 border-2 rounded-md
            ${focused ? 'border-[#efa667] text-[#efa667]' : 'border-gray-800'}
            bg-gray-700 text-white text-lg cursor-pointer transition duration-300 hover:border-[#efa667] hover:text-[#efa667] shadow-md`}
        >
            <div className='text-xl text-center'>{title}</div>
            <p></p>
        </div>
    );
};

export default ProjectWindow;
