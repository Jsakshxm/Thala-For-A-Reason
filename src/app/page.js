"use client";
import { motion } from "framer-motion";
import { Card, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState, useEffect } from "react";


const Page = () => {
  const [name, setname] = useState("");
  const [animateWin, setAnimateWin] = useState(false);

  useEffect(() => {
    // Use useEffect to play the audio when animateWin becomes true
    if (animateWin) {
      const audio = new Audio('/Users/saksham/thala/public/song.mp3'); // Adjust the path accordingly
      audio.play();
    }
  }, [animateWin]);

  const thala = () => {
    // Your thala function logic goes here
    if (name.length === 7) {
      setAnimateWin(true);
      setTimeout(() => {
        setAnimateWin(false);
      }, 2000); // Adjust the time as needed (3 seconds in this example)
    } else {
      setAnimateWin(false);
    }
  };

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
    win: { scale: [1, 1.5, 1], transition: { duration: 0.5 } }, // Animation for win
  };

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
      <div className="flex justify-center pt-32">
        <Typography variant="h4" component="h2">
          Thala For A Reason
        </Typography>
      </div>
      <motion.div
        className="flex justify-center pt-7"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <Card variant="outlined" className="p-4 h-24">
          <TextField
            id="outlined-basic"
            label="Check Thala for a reason"
            variant="outlined"
            className="w-64 pb-24"
            onClick={thala}
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />
        </Card>
      </motion.div>
      {animateWin && (
        <motion.div
          className="flex justify-center pt-9"
          variants={checkButtonVariants}
          initial="hidden"
          animate="win"
        >
          <Typography variant="h4" component="h2" className=" text-green-500">
            Thala For A Reason
          </Typography> 

        </motion.div>
      )}
      <motion.div
        className="flex justify-center pt-9"
        variants={checkButtonVariants}
        initial="hidden"
        animate={animateWin ? "win" : "visible"} // Apply the win animation dynamically
      >
        <Button
          variant="outlined"
          className="flex justify-center content-center"
          onClick={thala}
        >
          Check
        </Button>
      </motion.div>
      
    </div>
  );
};

export default Page;
