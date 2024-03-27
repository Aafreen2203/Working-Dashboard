import React, { useState, useEffect } from "react";
import "./Attendance.css";
import { auth, db } from "../../Firebase";

function Attendance() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Fetch employee details for the logged-in user
        const userEmail = user.email;
        db.collection("Employees")
          .where("email", "==", userEmail)
          .get()
          .then((querySnapshot) => {
            const employeeData = [];
            querySnapshot.forEach((doc) => {
              employeeData.push({ id: doc.id, ...doc.data() });
            });
            setEmployees(employeeData);
          })
          .catch((error) =>
            console.error("Error fetching employee details:", error)
          );
      }
    });

    return () => unsubscribe();
  }, []);

  const markAttendance = async (id, present) => {
    const timestamp = new Date().toISOString();

    try {
      await db.collection("ClockInOutTasks").add({
        username: name,
        clockInTime: timestamp,
        clockOutTime: timestamp,
        task: present ? "Clock Out" : "Clock In",
      });
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="App">
      <h1>Attendance Tracker</h1>
      <div className="employees">
        {employees.map((employee) => (
          <div key={employee.id} className="employee">
            <span>{employee.name}</span>
            <button
              className="btn"
              onClick={() => markAttendance(employee.id, employee.present)}
            >
              Mark {employee.present ? "Absent" : "Present"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
