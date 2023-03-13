import React, { useState } from 'react';

export default function profile(props) { 
    const currentUser = props.currentUser;
    const displayName = props.currentUser.userName;
    const userEmail = props.currentUser.userEmail;
    return (
        <h1>
            Welcome {props.currentUser.userName && displayName}!
        </h1>
    )
}