import Link from "next/link";
import React from "react";

interface props {
  children: React.ReactNode;
  student: React.ReactNode;
}

interface User {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}

export default async function layout({ children, student }: props) {
  const response = await fetch("https://fakestoreapi.com/users");
  const students: User[] = await response.json();
  return (
    <div className="layout">
      <h2>Students layout</h2>
      <ol>
        {students.map((student: User) => (
          <li key={student.id}>
            <Link href={`/users/students/${student.id}`}>
              {student.name.firstname}
            </Link>
          </li>
        ))}
      </ol>
      {children}
    </div>
  );
}
