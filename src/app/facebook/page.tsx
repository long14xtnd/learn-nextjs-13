"use client";
import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";
const Facebook = () => {
  const router = useRouter();
  const handleBtnClick = () => {
    router.push("/");
  };
  return (
    <div>
      Facebook
      <div>
        <Button variant="danger">Primary</Button>{" "}
        <button onClick={() => handleBtnClick()}>Back home</button>
      </div>
    </div>
  );
};
export default Facebook;
