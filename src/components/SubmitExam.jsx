"use client";

import { submitExam } from "@/store/actions";
import { useRouter } from "next/navigation";

export default function SubmitExam() {
  const router = useRouter();
  const handleSubmit = () => {
    submitExam(router);
  };
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
