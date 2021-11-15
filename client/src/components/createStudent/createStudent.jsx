import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Create() {

  const [student, setStudent] = useState({
    regNo:0,
    studentName:'',
    grade:'',
    section:''
  });

  const createStudent = ()=>{
    axios.post('http://localhost:5000/students', student)
  };

  return (
    <>
    <h2>Crear estudiante</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Legajo" variant="outlined" value={student.regNo} onChange={(event)=>{
        setStudent({...student, regNo: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Nombre" variant="outlined" value={student.studentName} onChange={(event)=>{
        setStudent({...student, studentName: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Curso" variant="outlined" value={student.grade} onChange={(event)=>{
        setStudent({...student, grade: event.target.value})
      }}/>
      <TextField id="outlined-basic" label="División" variant="outlined" value={student.section} onChange={(event)=>{
        setStudent({...student, section: event.target.value})
      }}/>
      <Button variant="contained" onClick={createStudent}>Crear</Button>
    </Box></>
  );
}
