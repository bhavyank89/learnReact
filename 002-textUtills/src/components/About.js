import React from 'react';

export default function About(props) {
    document.title = "TextUtills -About";
    return (
        <>
            <div className="container my-3">
                <div style={{ width: "100%", height: "400px", marginTop: "50px" }} className="clearfix my-5">
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <div>
                            <img style={{ width: "400px", height: "100%", marginRight: "100px", margin: "20px", alignContent: "center" }} src="https://cdni.iconscout.com/illustration/premium/thumb/man-working-on-responsive-web-development-5691624-4759506.png" alt="..." />
                        </div>
                        <div>
                            <p style={{ fontSize: "50px", marginTop: "10px", alignItems: "center" }}>
                                React is a free and open-source front-end JavaScript library for building user interfaces based on components.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
