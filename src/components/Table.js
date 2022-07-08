import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Counter from "./Counter";

function BasicExample(props) {
  const [data, setData] = useState([]);
  const [counter1, setCounter] = useState(false);
  const handleclick = () => {
    props.passMarkAttendance(false);
    setCounter(true);
  };

  useEffect(() => {
    //getting list of present student
    const getData = async () => {
      const response = await fetch(
        "https://sql-project-a7526-default-rtdb.firebaseio.com/attendance.json"
      );
      const a = await response.json();

      const users = Object.values(a);
      console.log(users);
      setData(users);
    };
    getData();
    console.log(data);
  }, []);

  //creating table to display the list
  const component = data?.map((el, i) => (
    <tr>
      <td>{i}</td>
      <td>{el.name}</td>
      <td>{el.date}</td>
    </tr>
  ));
  return (
    <>
      {counter1 && <Counter value={60} />}
      <Container style={{ position: "relative", top: "10rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <h4>Attendance of {data[0].date}</h4> */}
          <Button variant="primary" size="lg" onClick={handleclick}>
            Take Today's Attendance
          </Button>
        </div>
        <Table striped bordered hover style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Attendance Date</th>
            </tr>
          </thead>
          <tbody>{component}</tbody>
        </Table>
      </Container>
    </>
  );
}

export default BasicExample;
