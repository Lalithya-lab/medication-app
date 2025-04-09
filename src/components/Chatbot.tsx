"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  const sendMessage = async () => {
    const userMessage = message;
    setChat((prev) => [...prev, `🧑 You: ${userMessage}`]);
    setMessage("");

    const res = await fetch("/api/chatbot", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();
    setChat((prev) => [...prev, `🤖 Bot: ${data.reply}`]);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ p: 2, maxHeight: 400, overflowY: "auto" }}>
        {chat.map((line, idx) => (
          <Typography key={idx} sx={{ mb: 1 }}>
            {line}
          </Typography>
        ))}
      </Paper>
      <Box sx={{ display: "flex", mt: 2 }}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          placeholder="Ask me anything..."
        />
        <Button onClick={sendMessage} variant="contained" sx={{ ml: 2 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
