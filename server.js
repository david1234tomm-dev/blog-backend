// // server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// /* ========= CORS ========= */
// // Allow requests only from your frontend Render URL
// const corsOptions = {
//   origin: "https://blog-frontend-1vqa.onrender.com", // Replace with your frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
// };
// app.use(cors(corsOptions));

// app.use(express.json());

// /* ========= MongoDB ========= */
// const mongoURI = process.env.MONGO_URI;

// mongoose
//   .connect(mongoURI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// /* ========= Schema ========= */
// const blogSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Blog = mongoose.model("Blog", blogSchema);

// /* ========= Routes ========= */
// // Health check
// app.get("/", (req, res) => {
//   res.send("Blog backend is running 🚀");
// });

// // Get all blogs
// app.get("/api/blogs", async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch blogs" });
//   }
// });

// // Create blog
// app.post("/api/blogs", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     if (!title || !description)
//       return res.status(400).json({ message: "Title and description required" });

//     const blog = new Blog({ title, description });
//     await blog.save();
//     res.status(201).json(blog);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to create blog" });
//   }
// });

// // Update blog
// app.put("/api/blogs/:id", async (req, res) => {
//   try {
//     const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updated) return res.status(404).json({ message: "Blog not found" });
//     res.json(updated);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to update blog" });
//   }
// });

// // Delete blog
// app.delete("/api/blogs/:id", async (req, res) => {
//   try {
//     const deleted = await Blog.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: "Blog not found" });
//     res.json({ message: "Blog deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to delete blog" });
//   }
// });

// /* ========= Start Server ========= */
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



// server.js
// server.jsconst express = require("express");

// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ========= CORS ========= */
// Allow only your frontend URL
const corsOptions = {
  origin: "https://blog-frontend-1vqa.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("/api/*", cors(corsOptions)); // preflight only for API routes

app.use(express.json());

/* ========= MongoDB ========= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ========= Schema ========= */
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

/* ========= Routes ========= */
// Health check
app.get("/", (req, res) => res.send("Blog backend is running 🚀"));

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
});

// Create blog
app.post("/api/blogs", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      return res.status(400).json({ message: "Title and description required" });

    const blog = new Blog({ title, description });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create blog" });
  }
});

// Update blog
app.put("/api/blogs/:id", async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Blog not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update blog" });
  }
});

// Delete blog
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
});

/* ========= Start Server ========= */
// IMPORTANT: Use Render-provided port
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
