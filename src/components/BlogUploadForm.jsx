import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Snackbar,
  styled,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";

const StyledDropZone = styled(Box)(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const BlogUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    summary: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0] || e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setFormData((prev) => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("desc", formData.description);
      formDataToSend.append("summary", formData.summary);
      formDataToSend.append("image", formData.image);

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/blog/add-new`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setNotification({
          open: true,
          message: "Blog post created successfully!",
          severity: "success",
        });
        setFormData({ title: "", description: "", summary: "", image: null });
        setImagePreview("");
      } else {
        throw new Error(data.message || "Failed to create blog post");
      }
    } catch (error) {
      setNotification({
        open: true,
        message:
          error.message || "Failed to create blog post. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: "90vh", overflow: "scroll" }}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Create New Blog Post
        </Typography>

        <Card>
          <CardContent component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Blog Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={2}
              required
            />

            <TextField
              fullWidth
              label="Summary"
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              margin="normal"
              required
              rows={6}
              multiline
            />

            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              style={{ display: "none" }}
              id="image-upload"
              onChange={handleImageDrop}
            />

            <StyledDropZone
              onDrop={handleImageDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById("image-upload").click()}
              sx={{ mt: 2 }}
            >
              {imagePreview ? (
                <Box
                  component="img"
                  src={imagePreview}
                  alt="Preview"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <FiUpload size={40} />
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    Drag and drop an image here, or click to select
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Supported formats: JPG, JPEG, PNG
                  </Typography>
                </Box>
              )}
            </StyledDropZone>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{ mt: 3 }}
            >
              {loading ? <CircularProgress size={24} /> : "Create Blog Post"}
            </Button>
          </CardContent>
        </Card>

        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={() => setNotification({ ...notification, open: false })}
        >
          <Alert
            onClose={() => setNotification({ ...notification, open: false })}
            severity={notification.severity}
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default BlogUploadForm;
