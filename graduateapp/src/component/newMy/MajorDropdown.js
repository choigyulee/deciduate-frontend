import React, { useState } from "react";
import styles from "../css/newInput.module.css";



function MajorDropdown() {

  const options = ['방송.영상.뉴미디어 전공', '수학과', '전자공학과', '철학과', '컴퓨터공학부(컴퓨터전자시스템공학부)', '통계학과', 'AI 융합전공', 'Global Business and Technology'];

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("전공명");

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton} onClick={(e) => setIsActive(!isActive)}>{selected}</div>
      {isActive && (
        <div className={styles.dropdownContents}>
          {options.map(option => (
            <div className={styles.dropdownItems} onClick={(e) => {
              setSelected(option)
              setIsActive(false)
            }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div >
  );
}

export default MajorDropdown;