// const express = require("express");
// console.log("blogRoutes file loaded");
// const router = express.Router();
// const Blog = require("../models/Blog");

// // GET all blogs
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch blogs" });
//   }
// });

// // POST new blog
// router.post("/", async (req, res) => {
//   try {
//     const { title, description } = req.body;

//     if (!title || !description) {
//       return res.status(400).json({ message: "Missing title or description" });
//     }

//     const blog = new Blog({ title, description });
//     const savedBlog = await blog.save();
//     res.status(201).json(savedBlog);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to create blog" });
//   }
// });

// // DELETE a blog
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }
//     res.json({ message: "Blog deleted" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to delete blog" });
//   }
// });

// // PUT update a blog
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!updatedBlog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     res.json(updatedBlog);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to update blog" });
//   }
// });

// module.exports = router;
















// const express = require("express");
// const router = express.Router();
// const Blog = require("../models/Blog"); // Make sure this path is correct

// // GET all blogs
// router.get("/", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch blogs" });
//   }
// });

// // POST a new blog
// router.post("/", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const blog = new Blog({ title, description });
//     await blog.save();
//     res.status(201).json(blog);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to create blog" });
//   }
// });

// // DELETE a blog by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
//     res.json({ message: "Blog deleted" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete blog" });
//   }
// });

// // UPDATE a blog by ID
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
//     res.json(updatedBlog);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to update blog" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Test route for GET /api/blogs
router.get("/", (req, res) => {
  res.json({ ok: true, message: "Blogs route working" });
});

module.exports = router;

