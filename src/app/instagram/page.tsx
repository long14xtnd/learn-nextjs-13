"use client";
import { useRouter } from "next/navigation";
const Instagram = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      Instagram
      <div>
        <button onClick={() => handleClick()}>Back home</button>
      </div>
    </div>
  );
};
export default Instagram;
