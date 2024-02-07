import React from 'react';

export default function DateNow() {
    const now = new Date();
    const jour = now.toLocaleString('default', { weekday: 'long' });
    const firstLetterCapitallized = jour.charAt(0).toUpperCase()+jour.slice(1);
    const date = now.getDate();

    return (
        <div>
            <div className='flex mt-10'>
                <p className="max-w-md font-['Open_Sans'] color-[#0E2A23]">
                    <span style={{ fontSize: '30px'}}>{firstLetterCapitallized}</span>
                    <br />
                    <span className='flex font-serif text-6xl content-center'>{date}</span>
                </p>
            </div>
            <div>

            </div>
        </div>
    );
}
