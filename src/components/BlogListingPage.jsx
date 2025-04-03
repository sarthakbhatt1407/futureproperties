import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaTrash } from "react-icons/fa";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

const TruncatedTypography = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
});

// Utility function to truncate text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

const BlogListingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/blog/all-blogs`
        );
        const data = await response.json();
        if (response.ok) {
          setBlogs(data);
          setFilteredBlogs(data); // Initialize filteredBlogs with all blogs
        } else {
          console.error("Error fetching blogs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(query) ||
        blog.summary.toLowerCase().includes(query) ||
        blog.desc.toLowerCase().includes(query)
    );

    setFilteredBlogs(filtered);
  };

  const handleDeleteClick = (blog) => {
    setSelectedBlog(blog);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/blog/delete/${selectedBlog._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== selectedBlog._id));
        setFilteredBlogs(
          filteredBlogs.filter((blog) => blog._id !== selectedBlog._id)
        );
        setOpenDialog(false);
        setSelectedBlog(null);
      } else {
        console.error("Error deleting blog:", data.message);
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="60vh"
        >
          <Typography variant="h5" color="textSecondary">
            Loading blogs...
          </Typography>
        </Box>
      </Container>
    );
  }

  // if (filteredBlogs.length === 0) {
  //   return (
  //     <Container maxWidth="lg">
  //       <Box
  //         display="flex"
  //         justifyContent="center"
  //         alignItems="center"
  //         minHeight="60vh"
  //       >
  //         <TextField
  //           fullWidth
  //           label="Search Blogs"
  //           variant="outlined"
  //           value={searchQuery}
  //           onChange={handleSearchChange}
  //           sx={{ mb: 3 }}
  //         />
  //         <Typography variant="h5" color="textSecondary">
  //           No blogs available
  //         </Typography>
  //       </Box>
  //     </Container>
  //   );
  // }

  return (
    <div style={{ height: "88vh", overflow: "scroll" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
          Blog Posts
        </Typography>

        {/* Search Bar */}
        <TextField
          fullWidth
          label="Search Blogs"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ mb: 3 }}
        />
        {filteredBlogs.length == 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="60vh"
          >
            <Typography variant="h5" color="textSecondary">
              No blogs available
            </Typography>
          </Box>
        ) : (
          <StyledTableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Blog Details</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredBlogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell>
                      <Avatar
                        src={`${process.env.REACT_APP_BASE_URL}/${blog.image}`}
                        alt={blog.title}
                        variant={isMobile ? "circular" : "rounded"}
                        sx={{ width: 60, height: 60 }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        {blog.title}
                      </Typography>
                      <TruncatedTypography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                      >
                        {blog.desc}
                      </TruncatedTypography>
                      <Typography variant="caption" color="textSecondary">
                        {truncateText(blog.summary, 50)}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => handleDeleteClick(blog)}
                        color="error"
                        aria-label="delete blog"
                      >
                        <FaTrash />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledTableContainer>
        )}

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete this blog?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button
              onClick={handleConfirmDelete}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default BlogListingPage;
