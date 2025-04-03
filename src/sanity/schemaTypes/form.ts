export  const from = {
  name: "student",
  title: "Student",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Student Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "fatherName",
      title: "Father's Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "schoolOrCollege",
      title: "School / College Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "lastResult",
      title: "Last Exam Result",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "email", // Changed to 'email' type for validation
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
