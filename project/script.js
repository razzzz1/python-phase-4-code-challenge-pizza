
function redirectToPage() {
  var selectedOption = document.getElementById("optionSelect").value;
  window.location.href = selectedOption;
}
const optionList = document.getElementById('selectOption');
optionList.addEventListener("click", function(event) {
  const option = event.target.closest('option');
})

const student1 = {
  endTermExam: {
    name: "Andrew john",
    subjects: {
      math: {
        marks: 84,
        grade: calculateGrade(84),
      },
      english: {
        marks: 78,
        grade: calculateGrade(78),
      },
      biology: {
        marks: 56,
        grade: calculateGrade(56),
      },
      chemistry: {
        marks: 67,
        grade: calculateGrade(67),
      },
      physics: {
        marks: 89,
        grade: calculateGrade(89),
      },
      history: {
        marks: 65,
        grade: calculateGrade(65),
      },
      geography: {
        marks: 78,
        grade: calculateGrade(78),
      },
      computerStudies: {
        marks: 78,
        grade: calculateGrade(78),
      },


    }

  },
  cat1: {
    name: "Andrew john",
    subjects: {
      math: {
        marks: 98,
        grade: calculateGrade(98),
      },
      english: {
        marks: 78,
        grade: calculateGrade(78),
      },
      biology: {
        marks: 52,
        grade: calculateGrade(52),
      },
      chemistry: {
        marks: 67,
        grade: calculateGrade(67),
      },
      physics: {
        marks: 78,
        grade: calculateGrade(78),
      },
      history: {
        marks: 65,
        grade: calculateGrade(65),
      },
      geography: {
        marks: 45,
        grade: calculateGrade(45),
      },
      computerStudies: {
        marks: 88,
        grade: calculateGrade(88),
      },


    }

  },
  cat2: {
    name: "Andrew john",
    subjects: {
      math: {
        marks: 84,
        grade: calculateGrade(84),
      },
      english: {
        marks: 52,
        grade: calculateGrade(52),
      },
      biology: {
        marks: 60,
        grade: calculateGrade(60),
      },
      chemistry: {
        marks: 82,
        grade: calculateGrade(82),
      },
      physics: {
        marks: 89,
        grade: calculateGrade(89),
      },
      history: {
        marks: 95,
        grade: calculateGrade(95),
      },
      geography: {
        marks: 52,
        grade: calculateGrade(52),
      },
      computerStudies: {
        marks: 67,
        grade: calculateGrade(67),
      },


    }

  }
}
const student2 = {
  endTermExam: {
    name: "Ryan maiyo",
    subjects: {
      math: {
        marks: 98,
        grade: calculateGrade(98),
      },
      english: {
        marks: 62,
        grade: calculateGrade(62),
      },
      biology: {
        marks: 51,
        grade: calculateGrade(51),
      },
      chemistry: {
        marks: 71,
        grade: calculateGrade(71),
      },
      physics: {
        marks: 65,
        grade: calculateGrade(65),
      },
      history: {
        marks: 74,
        grade: calculateGrade(74),
      },
      geography: {
        marks: 78,
        grade: calculateGrade(78),
      },
      computerStudies: {
        marks: 62,
        grade: calculateGrade(62),
      },


    }

  },
  cat1: {
    name: "Ryan maiyo",
    subjects: {
      math: {
        marks: 86,
        grade: calculateGrade(86),
      },
      english: {
        marks: 64,
        grade: calculateGrade(64),
      },
      biology: {
        marks: 48,
        grade: calculateGrade(48),
      },
      chemistry: {
        marks: 78,
        grade: calculateGrade(78),
      },
      physics: {
        marks: 59,
        grade: calculateGrade(59),
      },
      history: {
        marks: 66,
        grade: calculateGrade(66),
      },
      geography: {
        marks: 72,
        grade: calculateGrade(72),
      },
      computerStudies: {
        marks: 60,
        grade: calculateGrade(60),
      },


    }

  },
  cat2: {
    name: "ryan maiyo",
    subjects: {
      math: {
        marks: 90,
        grade: calculateGrade(90),
      },
      english: {
        marks: 58,
        grade: calculateGrade(58),
      },
      biology: {
        marks: 44,
        grade: calculateGrade(44),
      },
      chemistry: {
        marks: 79,
        grade: calculateGrade(79),
      },
      physics: {
        marks: 62,
        grade: calculateGrade(62),
      },
      history: {
        marks: 78,
        grade: calculateGrade(78),
      },
      geography: {
        marks: 70,
        grade: calculateGrade(70),
      },
      computerStudies: {
        marks: 64,
        grade: calculateGrade(64),
      },


    }

  },
}
const student3 = {
  endTermExam: {
    name: "Ruth kimeli",
    subjects: {
      math: {
        marks: 68,
        grade: calculateGrade(68),
      },
      english: {
        marks: 54,
        grade: calculateGrade(54),
      },
      biology: {
        marks: 72,
        grade: calculateGrade(72),
      },
      chemistry: {
        marks: 42,
        grade: calculateGrade(42),
      },
      physics: {
        marks: 64,
        grade: calculateGrade(64),
      },
      history: {
        marks: 81,
        grade: calculateGrade(81),
      },
      geography: {
        marks: 51,
        grade: calculateGrade(51),
      },
      computerStudies: {
        marks: 78,
        grade: calculateGrade(78),
      },


    }

  },
  cat1: {
    name: "ruth kimeli",
    subjects: {
      math: {
        marks: 70,
        grade: calculateGrade(70),
      },
      english: {
        marks: 71,
        grade: calculateGrade(71),
      },
      biology: {
        marks: 78,
        grade: calculateGrade(78),
      },
      chemistry: {
        marks: 64,
        grade: calculateGrade(64),
      },
      physics: {
        marks: 66,
        grade: calculateGrade(66),
      },
      history: {
        marks: 88,
        grade: calculateGrade(88),
      },
      geography: {
        marks: 76,
        grade: calculateGrade(76),
      },
      computerStudies: {
        marks: 88,
        grade: calculateGrade(88),
      },


    }

  },
  cat2: {
    name: "ruth kimeli",
    subjects: {
      math: {
        marks: 60,
        grade: calculateGrade(60),
      },
      english: {
        marks: 58,
        grade: calculateGrade(58),
      },
      biology: {
        marks: 82,
        grade: calculateGrade(82),
      },
      chemistry: {
        marks: 62,
        grade: calculateGrade(62),
      },
      physics: {
        marks: 86,
        grade: calculateGrade(86),
      },
      history: {
        marks: 64,
        grade: calculateGrade(64),
      },
      geography: {
        marks: 78,
        grade: calculateGrade(78),
      },
      computerStudies: {
        marks: 80,
        grade: calculateGrade(80),
      },


    }

  }
}
const student4 = {
  endTermExam: {
    name: "kennedy kiplagat",
    subjects: {
      math: {
        marks: 84,
        grade: calculateGrade(84),
      },
      english: {
        marks: 78,
        grade: calculateGrade(78),
      },
      biology: {
        marks: 50,
        grade: calculateGrade(50),
      },
      chemistry: {
        marks: 74,
        grade: calculateGrade(74),
      },
      physics: {
        marks: 90,
        grade: calculateGrade(90),
      },
      history: {
        marks: 65,
        grade: calculateGrade(65),
      },
      geography: {
        marks: 92,
        grade: calculateGrade(92),
      },
      computerStudies: {
        marks: 19,
        grade: calculateGrade(19),
      },


    }

  },
  cat1: {
    name: "kennedy kiplagat",
    subjects: {
      math: {
        marks: 96,
        grade: calculateGrade(96),
      },
      english: {
        marks: 64,
        grade: calculateGrade(64),
      },
      biology: {
        marks: 60,
        grade: calculateGrade(60),
      },
      chemistry: {
        marks: 62,
        grade: calculateGrade(62),
      },
      physics: {
        marks: 88,
        grade: calculateGrade(88),
      },
      history: {
        marks: 76,
        grade: calculateGrade(76),
      },
      geography: {
        marks: 78,
        grade: calculateGrade(78),
      },
      computerStudies: {
        marks: 84,
        grade: calculateGrade(84),
      },


    }

  },
  cat2: {
    name: "kennedy kiplagat",
    subjects: {
      math: {
        marks: 90,
        grade: calculateGrade(90),
      },
      english: {
        marks: 80,
        grade: calculateGrade(80),
      },
      biology: {
        marks: 44,
        grade: calculateGrade(44),
      },
      chemistry: {
        marks: 78,
        grade: calculateGrade(78),
      },
      physics: {
        marks: 84,
        grade: calculateGrade(84),
      },
      history: {
        marks: 90,
        grade: calculateGrade(90),
      },
      geography: {
        marks: 92,
        grade: calculateGrade(92),
      },
      computerStudies: {
        marks: 38,
        grade: calculateGrade(38),
      },


    }

  }
}
function calculateGrade(grade) {
  if (grade>=80) {
    return "A"
  }else if (grade>=75) {
    return "A-"
  }else if (grade>=66) {
    return "B+"
  }else if (grade>=59) {
    return "B"
  }else if (grade>=56) {
    return "B-"
  }else if (grade>=54) {
    return "C+"
  }else if (grade>=50) {
    return "C-"
  }else if (grade>=45) {
    return "D+"
  }else if (grade>=40) {
    return "D-"
  }else {
  return "E"
  };
}
function calculateGrade(mark) {
  const mark = Object.values(mark).reduce((sum,mark) => sum + mark, 0 );
  return mark / Object.keys(mark).length;
} 

   
