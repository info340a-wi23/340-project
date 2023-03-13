import React, { useState } from 'react';

export default function profile(props) { 
    const currentUser = props.currentUser;
    const displayName = props.currentUser.userName;

    return (
        <h1>
            Welcome {props.currentUser.userName && displayName}!
        </h1>
    )
}