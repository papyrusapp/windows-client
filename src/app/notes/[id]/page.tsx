"use client";

const Page = ({ params }: { params: { id: string } }) => {
  return <h1>Note {params.id}</h1>;
};

export default Page;
