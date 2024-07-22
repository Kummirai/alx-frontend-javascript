#!/usr/bin/env node

export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments(empList) {
        return Object.keys(empList).length;
      },
    };
  }