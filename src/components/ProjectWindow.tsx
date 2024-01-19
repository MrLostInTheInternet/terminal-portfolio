import React, { useState, useEffect } from 'react';

interface ProjectWindowProps {
    title: string;
    repoOwner: string;
    repoName: string;
}

interface RepoInfo {
    description: string;
    html_url: string;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ title, repoOwner, repoName }) => {
    const [focused, setFocused] = useState(false);
    const [repoInfo, setRepoInfo] = useState<RepoInfo | null>(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setFocused(!focused);
    };

    useEffect(() => {
        const fetchRepoInfo = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`);
                if (response.ok) {
                    const data = await response.json();
                    setRepoInfo({
                        description: data.description,
                        html_url: data.html_url,
                    });
                } else {
                    console.error('Failed to fetch repository information');
                }
            } catch (error) {
                console.error('Error fetching repository information:', error);
            }
        };

        if (focused && !repoInfo) {
            fetchRepoInfo();
        }
    }, [focused, repoInfo, repoOwner, repoName]);

    return (
        <div
            onClick={handleClick}
            className={`w-80 md:w-1/5 m-4 p-6 border-2 rounded-md
            ${focused ? 'border-[#efa667] text-[#efa667]' : 'border-gray-800'}
            bg-gray-700 text-white text-lg cursor-pointer transition-colors duration-600 hover:border-[#efa667] hover:text-[#efa667] shadow-md`}
        >
            <div className='text-xl text-center flex-1'>{title}</div>
            {focused && repoInfo && (
                <div className='mt-4'>
                    <p>{repoInfo.description}</p>
                    <p className='text-blue-500 hover:underline'>
                        <a href={repoInfo.html_url} target='_blank' rel='noopener noreferrer'>
                            View on GitHub
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProjectWindow;
