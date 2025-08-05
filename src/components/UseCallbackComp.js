import React, { useState, useCallback } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
     const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [newSkill, setNewSkill] = useState("");

  // Add Skill
  const addSkill = useCallback(() => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill)) {
      setSkills((prevSkills) => [...prevSkills, trimmedSkill]);
    }
    setNewSkill("");
  }, [newSkill, skills]);

  // Delete Skill
  const deleteSkill = useCallback((skillToDelete) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill !== skillToDelete));
  }, []);

  return (
    <div> 
        <h1 id="heading">Manage Your Skills</h1>
      <input
        id="skill-input"
        type="text"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />
      <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
      <SkillList skills={skills} deleteSkill={deleteSkill} />
      </div>
  )
}

export default UseCallbackComp