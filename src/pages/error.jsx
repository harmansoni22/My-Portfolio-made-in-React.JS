import React from "react";
import ErrorContent from "../components/ErrorContent";
import { Link } from "react-router-dom";

const ErrorPage = () => (
    <>
        <div 
            style={{ 
                backgroundColor: '#2e2e2eff', 
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                margin: 0,
                padding: 0 
            }}
        >
            <ErrorContent
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
                style={{
                    backgroundColor: '#000000ff',
                    textAlign: 'center',
                    margin: '20px',
                    padding: '20px'
                }}
            >
                Error 404:
            </ErrorContent>

            <ErrorContent
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover={true}
            >
                Page Not Found
            </ErrorContent>
{/* 
                <Link to="/" key='home'>
                    Go to Home Page
                </Link> */}
        </div>
    </>
);

export default ErrorPage;