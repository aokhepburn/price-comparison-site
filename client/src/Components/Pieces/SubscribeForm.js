import React, { useState } from "react";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your subscribe form submission logic here
        console.log(`Subscribed with email: ${email}`);
        setEmail(""); // Clear the email input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    );
}