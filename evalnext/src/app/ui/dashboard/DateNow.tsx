import React from 'react';

export default function DateNow() {
    const today = new Date();
    const dateString = `${today.toLocaleString('default', { weekday: 'long' })} ${today.getDate()}`;

    return (
        <p className="max-w-md">{dateString}</p>
    );
}