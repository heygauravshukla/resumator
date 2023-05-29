import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";

import UserInfo from "../UserInfo/UserInfo";
import Resume from "../Resume/Resume";

import { Button, IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PaletteIcon from "@mui/icons-material/Palette";
import "./Editor.css";

function Editor() {
  const colors = ["#395b65", "#01b297", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <section id="editor" aria-labelledby="Editor">
      <h2>Resume Editor</h2>
      <div className="toolbar">
        <div className="colors-wrapper">
          {colors.map((item) => (
            <IconButton
              aria-label="color-palette"
              key={item}
              style={{ backgroundColor: item }}
              className={activeColor === item ? `active-color` : ""}
              onClick={() => setActiveColor(item)}
            >
              <PaletteIcon />
            </IconButton>
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <Button
                color="success"
                variant="contained"
                size="medium"
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className="wrapper">
        <UserInfo
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </section>
  );
}

export default Editor;
