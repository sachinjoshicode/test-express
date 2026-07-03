const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// ----------------------
// Code smells for testing
// ----------------------

// Unused variables
const unusedString = "I am never used";
const unusedNumber = 999;

// Magic numbers
const timeout = 12345;

// Duplicate functions
function printSuccess() {
  console.log("Success");
  console.log("Completed");
}

function printSuccessAgain() {
  console.log("Success");
  console.log("Completed");
}

// Deep nesting
function calculate(a, b, c, d, e, f) {
  if (a) {
    if (b) {
      if (c) {
        if (d) {
          if (e) {
            if (f) {
              return a + b + c + d + e + f;
            }
          }
        }
      }
    }
  }
  return 0;
}

// Empty catch block
try {
  JSON.parse("invalid json");
} catch (err) {
}

// Long function
function longFunction() {
  let sum = 0;
  for (let i = 0; i < 100; i++) sum += i;
  for (let i = 0; i < 100; i++) sum += i;
  for (let i = 0; i < 100; i++) sum += i;
  for (let i = 0; i < 100; i++) sum += i;
  for (let i = 0; i < 100; i++) sum += i;
  return sum;
}

printSuccess();
printSuccessAgain();
calculate(1, 2, 3, 4, 5, 6);
longFunction();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

app.post("/api/data", (req, res) => {
  res.status(201).json({
    message: "Data received",
    data: req.body,
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
