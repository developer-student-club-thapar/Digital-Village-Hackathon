import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import "./timeline.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import QuizIcon from "@mui/icons-material/Quiz";
import CampaignIcon from "@mui/icons-material/Campaign";

const TimelineDiv = () => {
  return (
    <div className="timeline-div" id="timeline">
      <h2 className="main-heading" data-content="Timeline">
        Timeline
      </h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            1:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
              <CelebrationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Opening
            </Typography>
            <Typography>Opening ceremony for the hack</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            2:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Hack begins
            </Typography>
            <Typography>Coding...Coding...Coding...</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            5:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Snacks
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            7:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning" variant="outlined">
              <QuizIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Checkpoint 1
            </Typography>
            <Typography>Let the evaluation begin</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            10:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Dinner
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            3:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Midnight snacks
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            8:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success" variant="outlined">
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Breakfast
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="warning" variant="outlined">
              <QuizIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Checkpoint 2
            </Typography>
            <Typography>Another Evaluation</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            2:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Hack Ends
            </Typography>
            <Typography>Coding....Alt+F4</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            2:30 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error" variant="outlined">
              <CampaignIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Pitching
            </Typography>
            <Typography>The pitching round begins</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="rgba(8, 189, 4, 1)"
          >
            4:00 pm
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" variant="outlined">
              <CelebrationIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Closing
            </Typography>
            <Typography>Closing ceremony for the hack</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineDiv;
