import React from "react";
import './SignupSpotify.css';


interface SignupSpotifyProps {
    className: string;
}
const SignupSpotify: React.FC<SignupSpotifyProps> = ({className}): JSX.Element => {
    return (
        <div className="container">
            <h1 className={className}>Hello</h1>
        </div>
    )
  };

export default SignupSpotify;