"use client";
import { motion } from "framer-motion";
import { Card, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setname] = useState("");
  const [letterCount, setLetterCount] = useState(0);

  const buttonVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  const checkButtonVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, delay: 0.5 } },
  };

  function count() {
    if (!name) {
      console.log("Name is empty");
      return;
    }

    const countedLetters = name.replace(/ /g, "").length;
    console.log("Number of letters:", countedLetters);

    // Update the letter count state
    setLetterCount(countedLetters);
  }

  useEffect(() => {
    // Update the letter count state after the animation is complete
    setLetterCount(letterCount);
  }, [letterCount]);

  return (
    <div className="">
      <motion.div
        className="flex justify-end pt-9 mr-6"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/Number">
          <Button variant="outlined" className="">
            For Number
          </Button>
        </Link>
        <motion.div style={{ marginLeft: "8px" }} variants={buttonVariants}>
          <Button variant="outlined">For Name</Button>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center pt-32"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      > <Typography variant="h4" component="h2">
          Thala For A Reason
        </Typography>
        <Card variant="outlined" className="p-4 h-24">
          <TextField
            id="outlined-basic"
            label="Check Thala for a reason"
            variant="outlined"
            className="w-64 pb-24"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </Card>
      </motion.div>
      <motion.div
        className="flex justify-center pt-9"
        variants={checkButtonVariants}
        initial="hidden"
        animate="visible"
      >
        <Button
          variant="outlined"
          className="flex justify-center content-center"
          onClick={count()}
        >
          Check
        </Button>
      </motion.div>
      <motion.div
        id="letterCountDisplay"
        variants={checkButtonVariants}
        initial="hidden"
        animate="visible"
      >
        Number of letters: {letterCount}
      </motion.div>
    </div>
  );
};

export default Page;
