import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer style={{
                textAlign: "center",
                padding: "10px",
                background: "#1B1A19",
                color: "#fff",
                marginTop: "20px",
                borderTop: "0.5px solid white"
            }}>
                © {new Date().getFullYear()} All Rights Reserved.
            </footer>

        </div>
    )
}

export default Footer
