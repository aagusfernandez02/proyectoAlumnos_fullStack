import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ShowStudent() {

  const [studentsLists, setstudentsLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students').then( (allStudents)=>{
      setstudentsLists(allStudents.data);
    } )
  }, [studentsLists]);

  return (
    <>
    <h2>Estudiantes</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Legajo</TableCell>
            <TableCell align="right">Curso</TableCell>
            <TableCell align="right">División</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsLists.map((student, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}