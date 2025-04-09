import Chatbot from "@/components/Chatbot";
import { Typography, Container } from "@mui/material";

export default function ChatbotPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Chat with Our AI Assistant
      </Typography>
      <Chatbot />
    </Container>
  );
}
