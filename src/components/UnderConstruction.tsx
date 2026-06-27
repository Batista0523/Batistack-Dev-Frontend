'use client';
import { motion } from "framer-motion";
import Link from "next/link";

function UnderConstruction() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="display-4 fw-bold mb-3 text-primary">
                🚧 This Page is Under Construction
              </h1>
              <p className="fs-5 text-muted mb-4">
                We're working hard to bring you something amazing. Check back soon or explore the rest of our site in the meantime.
              </p>
              <Link href="/" className="btn btn-outline-primary btn-lg rounded-pill">
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderConstruction;
