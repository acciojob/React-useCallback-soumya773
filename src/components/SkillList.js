import React from 'react'

const SkillList = ({ skills, deleteSkill }) => {
  return (
     <ul>
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-number-${index}`}
          style={{ cursor: "pointer" }}
          onClick={() => deleteSkill(skill)}
        >
          {skill}
        </li>
      ))}
    </ul>
  )
}

export default SkillList